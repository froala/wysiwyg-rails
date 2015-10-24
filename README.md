# wysiwyg-rails [![Gem Version](https://badge.fury.io/rb/wysiwyg-rails.png)](http://badge.fury.io/rb/wysiwyg-rails) [![Build Status](https://secure.travis-ci.org/froala/wysiwyg-rails.png)](http://travis-ci.org/froala/wysiwyg-rails)

wysiwyg-rails provides the [Froala WYSIWYG HTML Editor](https://froala.com/wysiwyg-editor/v2.0) javascript and stylesheets as a Rails engine for use with the asset pipeline.

## Installation

Add this to your Gemfile:

```ruby
gem "wysiwyg-rails", "2.0.0.pre.rc.3"
```

and run `bundle install`.

## Usage

In your `application.css`, include the css file:

```css
/*
 *= require froala_editor.min.css
 *= require froala_style.min.css
 *= require font-awesome
 */
```

If you want to use the dark theme, then you have to include `themes/dark.min.css` file too.

In your `application.js`, include the JS file:

```javascript
//
//= require froala_editor.min.js
//
```

If you need to use any of the [Available Plugins](https://froala.com/wysiwyg-editor/v2.0/docs/plugins), then you should include those too in your `application.js` and `application.css`.
```javascript
// Include other plugins.
//= require plugins/align.min.js
//= require plugins/char_counter.min.js
//= require plugins/code_view.min.js
//= require plugins/colors.min.js
//= require plugins/emoticons.min.js
//= require plugins/entities.min.js
//= require plugins/file.min.js
//= require plugins/font_family.min.js
//= require plugins/font_size.min.js
//= require plugins/fullscreen.min.js
//= require plugins/image.min.js
//= require plugins/image_manager.min.js
//= require plugins/inline_style.min.js
//= require plugins/line_breaker.min.js
//= require plugins/link.min.js
//= require plugins/lists.min.js
//= require plugins/paragraph_format.min.js
//= require plugins/paragraph_style.min.js
//= require plugins/quote.min.js
//= require plugins/save.min.js
//= require plugins/table.min.js
//= require plugins/url.min.js
//= require plugins/video.min.js
```

```css
/*
 *= require plugins/char_counter.min.css
 *= require plugins/code_view.min.css
 *= require plugins/colors.min.css
 *= require plugins/emoticons.min.css
 *= require plugins/file.min.css
 *= require plugins/fullscreen.min.css
 *= require plugins/image_manager.min.css
 *= require plugins/image.min.css
 *= require plugins/line_breaker.min.css
 *= require plugins/table.min.css
 *= require plugins/video.min.css
 */
```

Similar, if you want to use language translation you have to include the translation file.
```javascript
// Include Language if needed
//= require languages/ro.js
```

Then restart your web server if it was previously running.

Congrats all is done!

## Getting Started
Gem version "2.0.0-rc.3" is up to date with [Froala Editor (version 2)](https://github.com/froala/wysiwyg-editor) - read the updated documentation for [how to initialize the editor](https://www.froala.com/wysiwyg-editor/v2.0/docs/migrate-from-v1#initialization) and other changes.

## License

The `wysiwyg-rails` project is under MIT license.

Froala Editor has [3 different licenses](https://froala.com/wysiwyg-editor/v2.0/pricing).
For details please see [License Agreement](https://froala.com/wysiwyg-editor/v2.0/terms).
