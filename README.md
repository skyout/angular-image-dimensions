<a href="https://github.com/skyout/angular-image-dimensions"><img src="https://raw.githubusercontent.com/skyout/angular-image-dimensions/master/angular_image_dimensions_logo.png" alt="angular-image-dimensions" title="angular-image-dimensions" with="485" height="273" /></a>

Description
-----------

[![npm](https://img.shields.io/npm/l/express.svg)](https://opensource.org/licenses/MIT)

Angular directive for getting and displaying image dimensions in the view.

Demo
----

A demo of the functionality and implementation can be found [here]

Installation
------------

Install via npm:

```
npm install angular-image-dimensions
```

Install via bower:

```
bower install angular-image-dimensions
```

Or download the [zip].

Getting Started
---------------

If using CommonJS:

```js
var ngImageDimensions = require('ngImageDimensions');
```

If using AMD:

```js
require(['ngImageDimensions'], function () {});
```

If using normal browser or bower include:

```html
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular.min.js"></script>
<script src="angular-image-dimensions.js"></script>
```

Usage
-----

Once the module has been included into your project, just add it to your angular application.

```js
angular.module('myApp', ['ngImageDimensions'])
```

Include the directive onto an element that contains an image.

```html
<div image-dimensions>
    <img src="image.jpg" alt="image" title="image" />
    <p>Image Dimensions: {{ dimensions }}</p>
</div>
```

The directive will query the browser for both the rendered image dimensions as well as the true image dimensions. The directive will then bind the following variables to the directive `scope` for you to use:

```js
width               // image width
height              // image height
dimensions          // image dimensions
naturalHeight       // natural image height
naturalWidth        // natural image width
naturalDimensions   // natural image dimensions
```

This logic can also be used within an `ng-repeat`:

```html
<div ng-repeat="image in images" image-dimensions>
    <img ng-src="image.src" alt="image.alt" title="image.title">
    <p>Image Dimensions: {{ dimensions }}</p>
</div>
```

Examples
--------

Display an image's width and height:

```html
<div ng-repeat="image in images" image-dimensions>
    <img ng-src="image.src" alt="image.alt" title="image.title">
    <p>Image Width: {{ width }}</p>
    <p>Image Height: {{ height }}</p>
</div>
```

Display an image's naturalWidth and naturalHeight in an `ng-repeat`:

```html
<div ng-repeat="image in images" image-dimensions>
    <img ng-src="image.src" alt="image.alt" title="image.title">
    <p>Natural Width: {{ naturalWidth }}</p>
    <p>Natural Height: {{ naturalHeight }}</p>
</div>
```

Display an image's natural dimensions:

```html
<div image-dimensions>
    <img src="image.jpg" alt="image" title="image" />
    <p>Natural Dimensions: {{ naturalDimensions }}</p>
</div>
```


Compatibility
-------------

This plugin utilizes the HTML5 spec of `naturalWidth` and `naturalHeight`, therefore is only supported in browsers that support HTML5.


Contributing and Updates
------
I would definitely appreciate any feedback. Future updates include:

1. Unit Tests

Please fork and send pull requests, or create an <a href="https://github.com/skyout/angular-image-dimensions/issues">issue</a>.


License (MIT)
-------------

angular-image-dimensions is distributed under the MIT License:

```
Copyright (c) 2016 Scott Lanning

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

[MIT License]: http://en.wikipedia.org/wiki/MIT_License
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg
[here]:http://scott-lanning.com/angular-image-dimensions/
[zip]:https://github.com/skyout/angular-image-dimensions/archive/master.zip
