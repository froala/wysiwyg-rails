# -*- encoding: utf-8 -*-
require File.expand_path('../lib/wysiwyg-rails/version', __FILE__)

Gem::Specification.new do |gem|
  gem.authors       = ["stefan"]
  gem.email         = ["stefan.neculai@gmail.com"]
  gem.description   = "Integrate Froala WYSIWYG Editor into the Rails assets pipeline."
  gem.summary       = ""
  gem.homepage      = "https://github.com/stefanneculai/wysiwyg-rails"
  gem.licenses      = ["MIT"]

  gem.files         = Dir["{app,lib}/**/*"] + ["LICENSE" ,"Rakefile", "README.md"]
  gem.name          = "wysiwyg-rails"
  gem.require_paths = ["lib"]
  gem.version       = WYSIWYG::Rails::VERSION

  gem.add_dependency "railties", ">= 3.2", "< 5.0"
  gem.add_dependency "font-awesome-rails", "= 4.0.3.1"
end