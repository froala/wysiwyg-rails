# -*- encoding: utf-8 -*-
require File.expand_path('../lib/wysiwyg-rails/version', __FILE__)

Gem::Specification.new do |gem|
  gem.authors       = ["Froala Labs"]
  gem.email         = ["stefan@froala.com"]
  gem.description   = "A beautiful WYSIWYG HTML text editor. High performance and modern design make it easy to use for developers and loved by users."
  gem.summary       = "an asset gemification of the Froala WYSIWYG Editor library"
  gem.homepage      = "https://github.com/froala/wysiwyg-rails"
  gem.licenses      = ["MIT"]

  gem.files         = Dir["{app,lib}/**/*"] + ["LICENSE" ,"Rakefile", "README.md"]
  gem.name          = "wysiwyg-rails"
  gem.require_paths = ["lib"]
  gem.version       = WYSIWYG::Rails::VERSION

  gem.add_dependency "railties", ">= 3.2.7", "< 7.1"
end
