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
## Usage
In your index.html.erb add
```
<script type="text/javascript" src = "../../assets/froala_editor.pkgd.min.js"></script>
```
To use third-party plugins  add
```
<script type="text/javascript" src = "../../assets/third_party/font_awesome.min.js"></script>
<script type="text/javascript" src = "../../assets/third_party/embedly.min.js"></script>
<script type="text/javascript" src = "../../assets/third_party/image_tui.min.js"></script>
<script type="text/javascript" src = "../../assets/third_party/spell_checker.min.js"</script>
```
Add font-awesome depencdency 
```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
```
Initialize editor by adding below in body of index.html.erb
```
 new FroalaEditor('#edit', {
   
  })
```
## Options
You can pass options to editor by including these in index.html.erb
```
new FroalaEditor('#editor', {
options :  value
});
```

## Include in assets

In your `application.css.scss`, include the css file:

```css
/*
 @import "froala_editor.min";
 @import "froala_style.min";
 */
```

If you want to use the dark theme, then you have to include `themes/dark.min.css` file too.

In your `application.js.coffee`, include the JS file:

```coffeescript
#= require froala_editor.min.js

new FroalaEditor('selector',{
  
});
```

If you want to use language translation you have to include the translation file.

```coffeescript
# Include Language if needed
#= require languages/ro.js
```

Then restart your web server if it was previously running.

## Initialize Editor

Details about initializing the editor can be found in the [Froala WYSIWYG Editor official documentation](https://www.froala.com/wysiwyg-editor/docs).

## License

The `wysiwyg-rails` project is under MIT license. However, in order to use Froala WYSIWYG HTML Editor plugin you should purchase a license for it.

Froala Editor has [3 different licenses](https://froala.com/wysiwyg-editor/pricing).
For details please see [License Agreement](https://froala.com/wysiwyg-editor/terms).
