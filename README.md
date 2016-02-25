angular-image-dimensions
------------------

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

```
var ngImageDimensions = require('angular-image-dimensions');
```

If using AMD:

```
require(['angular-image-dimensions'], function () {});
```

If using normal browser include:

```
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular.min.js", type="text/javascript"></script>
<script src="angular-image-dimensions.js" type="text/javascript"></script>
```

Usage
-----

Include the directive onto an element that contains an image.

```
<div image-dimensions>
    <img src="image.jpg" alt="image" title="image" />
    <span>{{ dimensions }}</span>
</div>
```

The directive will query the browser for the image dimensions and then will output them into the view on a scope variable named dimensions.

Compatibility
-------------

This plugin utilizes the HTML5 spec of `naturalWidth` and `naturalHeight`, therefore is only supported in browsers that support HTML5.