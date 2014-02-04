# wysiwyg-rails [![Gem Version](https://badge.fury.io/rb/wysiwyg-rails.png)](http://badge.fury.io/rb/wysiwyg-rails) [![Build Status](https://secure.travis-ci.org/stefanneculai/wysiwyg-rails.png)](http://travis-ci.org/stefanneculai/wysiwyg-rails)

wysiwyg-rails provides the [Froala WYWIWYG Editor](http://editor.froala.com) javascript and stylesheets as a Rails engine for use with the asset pipeline.

## Installation

Add this to your Gemfile:

```ruby
gem "wysiwyg-rails"
```

and run `bundle install`.

## Usage

In your `application.css`, include the css file:

```css
/*
 *= require froala_editor.min.js
 */
```

In your `application.js`, include the js file:

```javascript
//
//= require froala_editor.min.js
//
```
Then restart your webserver if it was previously running.

Congrats all is done!

## License

The `wysiwyg-rails` project is MIT-LICENSE.

You may use `Froala Editor` for non-commercial websites for free.

Froala Editor has [3 different licenses](http://editor.froala.com/download/) for commercial use.
For details please see [License Agreement](http://editor.froala.com/license).
