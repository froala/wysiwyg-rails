# Rails Froala WYSIWYG HTML Editor [![Gem Version](https://badge.fury.io/rb/wysiwyg-rails.png)](http://badge.fury.io/rb/wysiwyg-rails) [![Build Status](https://secure.travis-ci.org/froala/wysiwyg-rails.png)](http://travis-ci.org/froala/wysiwyg-rails)

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
 @import "froala_editor.min.css";
 @import "froala_style.min.css";
 @import "font-awesome-sprockets";
 @import "font-awesome";
 */
```

If you want to use the dark theme, then you have to include `themes/dark.min.css` file too.

In your `application.js.coffee`, include the JS file:

```coffeescript
#= require froala_editor.min.js

$('selector').froalaEditor();
```

If you need to use any of the [Available Plugins](https://froala.com/wysiwyg-editor/docs/plugins), then you should include those too in your `application.js.coffee` and `application.css.scss`.

```coffeescript
# Include other plugins.
#= require plugins/align.min.js
#= require plugins/char_counter.min.js
#= require plugins/code_beautifier.min.js
#= require plugins/code_view.min.js
#= require plugins/colors.min.js
#= require plugins/emoticons.min.js
#= require plugins/entities.min.js
#= require plugins/file.min.js
#= require plugins/font_family.min.js
#= require plugins/font_size.min.js
#= require plugins/fullscreen.min.js
#= require plugins/help.min.js
#= require plugins/image.min.js
#= require plugins/image_manager.min.js
#= require plugins/inline_style.min.js
#= require plugins/line_breaker.min.js
#= require plugins/link.min.js
#= require plugins/lists.min.js
#= require plugins/paragraph_format.min.js
#= require plugins/paragraph_style.min.js
#= require plugins/print.min.js
#= require plugins/quick_insert.min.js
#= require plugins/quote.min.js
#= require plugins/save.min.js
#= require plugins/table.min.js
#= require plugins/special_characters.min.js
#= require plugins/url.min.js
#= require plugins/video.min.js
```

```css
@import 'plugins/char_counter.min.css';
@import 'plugins/code_view.min.css';
@import 'plugins/colors.min.css';
@import 'plugins/emoticons.min.css';
@import 'plugins/file.min.css';
@import 'plugins/fullscreen.min.css';
@import 'plugins/help.min.css';
@import 'plugins/image_manager.min.css';
@import 'plugins/image.min.css';
@import 'plugins/line_breaker.min.css';
@import 'plugins/quick_insert.min.css';
@import 'plugins/special_characters.min.css';
@import 'plugins/table.min.css';
@import 'plugins/video.min.css';
```

Similar, if you want to use language translation you have to include the translation file.

```coffeescript
# Include Language if needed
#= require languages/ro.js
```

Then restart your web server if it was previously running.

## Initialize Editor

Details about initializing the editor can be found in the [Froala WYSIWYG Editor official documentation](https://www.froala.com/wysiwyg-editor/docs).

## Getting Started
Gem version "2.0.0-rc.3" is up to date with [Froala Editor (version 2)](https://github.com/froala/wysiwyg-editor) - read the updated documentation for [how to initialize the editor](https://www.froala.com/wysiwyg-editor/v2.0/docs/migrate-from-v1#initialization) and other changes.

## License

The `wysiwyg-rails` project is under MIT license. However, in order to use Froala WYSIWYG HTML Editor plugin you should purchase a license for it.

Froala Editor has [3 different licenses](https://froala.com/wysiwyg-editor/pricing).
For details please see [License Agreement](https://froala.com/wysiwyg-editor/terms).
