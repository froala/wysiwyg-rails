# Rails Froala WYSIWYG HTML Editor

[![Travis](https://img.shields.io/travis/froala/wysiwyg-rails.svg)](http://travis-ci.org/froala/wysiwyg-rails)
[![Gem](https://img.shields.io/gem/v/wysiwyg-rails.svg)](https://rubygems.org/gems/wysiwyg-rails/versions/2.1.0)
[![Gem](https://img.shields.io/gem/dt/wysiwyg-rails.svg)](https://rubygems.org/gems/wysiwyg-rails/versions/2.1.0)
[![license](https://img.shields.io/github/license/froala/wysiwyg-rails.svg)](https://rubygems.org/gems/wysiwyg-rails/versions/2.1.0)

>wysiwyg-rails provides the [Froala WYSIWYG HTML Editor](https://froala.com/wysiwyg-editor) javascript and stylesheets as a Rails engine for use with the asset pipeline.

## Installation

Add this to your Gemfile:

```ruby
gem "wysiwyg-rails"
```

and run `bundle install`.

## Include in assets

In your `application.css.scss`, include the css file:

```css
/*
 @import "froala/froala_editor.min";
 @import "froala/froala_style.min";
 @import "font-awesome-sprockets";
 @import "font-awesome";
 */
```

If you want to use the dark theme, then you have to include `froala/themes/dark.min.css` file too.

In your `application.js.coffee`, include the JS file:

```coffeescript
#= require froala/froala_editor.min.js

$('selector').froalaEditor();
```

If you need to use any of the [Available Plugins](https://froala.com/wysiwyg-editor/docs/plugins), then you should include those too in your `application.js.coffee` and `application.css.scss`.

```coffeescript
# Include other plugins.
#= require froala/plugins/align.min.js
#= require froala/plugins/char_counter.min.js
#= require froala/plugins/code_beautifier.min.js
#= require froala/plugins/code_view.min.js
#= require froala/plugins/colors.min.js
#= require froala/plugins/emoticons.min.js
#= require froala/plugins/entities.min.js
#= require froala/plugins/file.min.js
#= require froala/plugins/font_family.min.js
#= require froala/plugins/font_size.min.js
#= require froala/plugins/fullscreen.min.js
#= require froala/plugins/help.min.js
#= require froala/plugins/image.min.js
#= require froala/plugins/image_manager.min.js
#= require froala/plugins/inline_style.min.js
#= require froala/plugins/line_breaker.min.js
#= require froala/plugins/link.min.js
#= require froala/plugins/lists.min.js
#= require froala/plugins/paragraph_format.min.js
#= require froala/plugins/paragraph_style.min.js
#= require froala/plugins/print.min.js
#= require froala/plugins/quick_insert.min.js
#= require froala/plugins/quote.min.js
#= require froala/plugins/save.min.js
#= require froala/plugins/table.min.js
#= require froala/plugins/special_characters.min.js
#= require froala/plugins/url.min.js
#= require froala/plugins/video.min.js

#= require froala/third_party/embedly.min.js
#= require froala/third_party/image_aviary.min.js
#= require froala/third_party/spell_checker.min.js
```

```css
@import 'froala/plugins/char_counter.min.css';
@import 'froala/plugins/code_view.min.css';
@import 'froala/plugins/colors.min.css';
@import 'froala/plugins/emoticons.min.css';
@import 'froala/plugins/file.min.css';
@import 'froala/plugins/fullscreen.min.css';
@import 'froala/plugins/help.min.css';
@import 'froala/plugins/image_manager.min.css';
@import 'froala/plugins/image.min.css';
@import 'froala/plugins/line_breaker.min.css';
@import 'froala/plugins/quick_insert.min.css';
@import 'froala/plugins/special_characters.min.css';
@import 'froala/plugins/table.min.css';
@import 'froala/plugins/video.min.css';

@import 'froala/third_party/embedly.min.css';
@import 'froala/third_party/spell_checker.min.css';
```

Similar, if you want to use language translation you have to include the translation file.

```coffeescript
# Include Language if needed
#= require froala/languages/ro.js
```

Then restart your web server if it was previously running.

## Initialize Editor

Details about initializing the editor can be found in the [Froala WYSIWYG Editor official documentation](https://www.froala.com/wysiwyg-editor/docs).

## License

The `wysiwyg-rails` project is under MIT license. However, in order to use Froala WYSIWYG HTML Editor plugin you should purchase a license for it.

Froala Editor has [3 different licenses](https://froala.com/wysiwyg-editor/pricing).
For details please see [License Agreement](https://froala.com/wysiwyg-editor/terms).
