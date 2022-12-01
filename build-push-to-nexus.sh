#!/bin/bash

if [ ${TRAVIS_PULL_REQUEST} != "false" ];  then echo "Not publishing a pull request !!!" && exit 0; fi
export BRANCH_NAME=`echo "${TRAVIS_BRANCH}" | tr '[:upper:]' '[:lower:]'`
case "${BRANCH_NAME}" in
        dev*) echo "Branch ${TRAVIS_BRANCH} is eligible for CI/CD" ;;
	       ao-dev*)echo "Branch ${TRAVIS_BRANCH} is eligible for CI/CD"  ;;
        qa*) echo "Branch ${TRAVIS_BRANCH} is eligible for CI/CD"  ;;
	       qe*) echo "Branch ${TRAVIS_BRANCH} is eligible for CI/CD"  ;;
	       rc*) echo "Branch ${TRAVIS_BRANCH} is eligible for CI/CD"  ;;
	       release-master*) echo "Branch ${TRAVIS_BRANCH} is eligible for CI/CD"  ;;
        ft*) echo "Branch ${TRAVIS_BRANCH} is eligible for CI" ;;
        bf*) echo "Branch ${TRAVIS_BRANCH} is eligible for CI" ;;
        *) echo "Not a valid branch name for CI/CD" && exit -1;;
esac

echo $TRAVIS_BRANCH
echo ${DEPLOYMENT_SERVER}
export SHORT_COMMIT=`git rev-parse --short=7 ${TRAVIS_COMMIT}`
echo "short commit $SHORT_COMMIT"
sudo apt-get update && sudo apt-get install -y jq gem 
DEPENDENCIES=`cat wysiwyg-rails.gemspec | grep "gem.add_dependency"`
sed -i -e "/.*end/d" wysiwyg-rails.gemspec
echo ${DEPENDENCIES} >> wysiwyg-rails.gemspec
echo "gem.metadata['allowed_push_host'] = 'https://nexus.tools.froala-infra.com/repository/Froala-rubygems-repo'"  >> wysiwyg-rails.gemspec
echo "end" >> wysiwyg-rails.gemspec
echo "checking gemspecs file: "
cat wysiwyg-rails.gemspec
PACKAGE_NAME=`jq '.name' version.json | tr -d '"'` 
PACKAGE_VERSION=`jq '.version' version.json | tr -d '"'`
wget --timeout=10 --no-check-certificate --user ${NEXUS_USER}  --password ${NEXUS_USER_PWD} https://nexus.tools.froala-infra.com/repository/Froala-npm/${PACKAGE_NAME}/-/${PACKAGE_NAME}-${PACKAGE_VERSION}.tgz
if [ $? -ne 0 ]; then 
	echo "Error pulling core library from nexus"
	exit -1
fi
tar -xvf ${PACKAGE_NAME}-${PACKAGE_VERSION}.tgz
echo "Copying core library css & js to app/assets/stylesheets/ & app/assets/javascripts/ ......"
 /bin/cp -fr package/css/*  app/assets/stylesheets/
 /bin/cp -fr package/js/*   app/assets/javascripts/
echo "Done ..."
rm -rf package/ ${PACKAGE_NAME}-${PACKAGE_VERSION}.tgz
gem install nexus
gem build wysiwyg-rails.gemspec
GEM_NAME=`ls -A wysiwyg-rails*.gem `
echo "Rails SDK gem filename $GEM_NAME"
GEM_NAME2=""
GEM_NAME2=`echo ${GEM_NAME} | awk -F'-' '{print $1}'`
GEM_NAME2="${GEM_NAME2}-`echo ${GEM_NAME} | awk -F'-' '{print $2}'`"
GEM_NAME2="${GEM_NAME2}-${TRAVIS_BRANCH}"
GEM_NAME2="${GEM_NAME2}-`echo ${GEM_NAME} | awk -F'-' '{print $3}'`"
echo "gem name : ${GEM_NAME2}"
mv ${GEM_NAME} ${GEM_NAME2}
NXS_PASS=`echo ${NEXUS_USER_PWD}`
curl -k --user "${NEXUS_USER}:${NXS_PASS}"  --upload-file ./${GEM_NAME2}  https://nexus.tools.froala-infra.com/repository/Froala-raw-repo/rails/${GEM_NAME2}
exit $?
