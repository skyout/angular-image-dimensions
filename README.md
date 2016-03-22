Angular Image Dimensions
------------------

[![npm](https://img.shields.io/npm/l/express.svg)](https://opensource.org/licenses/MIT)

Angular directive for getting and display displaying image dimensions in the view.

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

The directive will query the browser for the image dimensions and then will output them into the view on a scope variable named dimensions.

This logic can also be used within an `ng-repeat`:

```html
<div ng-repeat="image in images" image-dimensions>
    <img ng-src="image.src" alt="image.alt" title="image.title">
    <p>Image Dimensions: {{ dimensions }}</p>
</div>
```


Compatibility
-------------

This plugin utilizes the HTML5 spec of `naturalWidth` and `naturalHeight`, therefore is only supported in browsers that support HTML5.


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
