# -*- encoding: utf-8 -*-
require File.expand_path('../lib/wysiwyg-rails/version', __FILE__)

Gem::Specification.new do |gem|
  gem.authors       = ["Froala"]
  gem.email         = ["stefan@froala.com"]
  gem.description   = "A nice flat designed jQuery WYSIWYG editor based on HTML5."
  gem.summary       = "an asset gemification of the Froala WYSIWYG Editor library"
  gem.homepage      = "https://github.com/froala/wysiwyg-rails"
  gem.licenses      = ["MIT"]

  gem.files         = Dir["{app,lib}/**/*"] + ["LICENSE" ,"Rakefile", "README.md"]
  gem.name          = "wysiwyg-rails"
  gem.require_paths = ["lib"]
  gem.version       = WYSIWYG::Rails::VERSION

  gem.add_dependency "railties", ">= 3.2", "< 5.0"
  gem.add_dependency "font-awesome-rails", "= 4.2.0.0"
end
