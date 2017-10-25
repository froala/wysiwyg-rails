require "font-awesome-sass"

module WYSIWYG
  module Rails
    class Engine < ::Rails::Engine
      initializer 'froala.assets.precompile', group: :all do |app|
        app.config.assets.precompile += %W(
          froala/froala_editor.min.js
          froala/plugins/*.js
          froala/languages/*.js
          froala/froala_editor.min.css
          froala/froala_style.min.css
          froala/plugins/*.css
          froala/themes/*.css
        )
      end
    end
  end
end
