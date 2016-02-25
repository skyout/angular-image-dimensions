angular-image-size
------------------

Angular Directive for getting and display displaying image dimensions in the view.

Installation
------------

Install via npm:

```
npm install angular-image-directive
```

Install via bower:

```
bower install angular-image-directive
```

Getting Started
---------------

If using CommonJS:

```
var tips = require('angular-image-directive');
```

If using AMD:

```
require(['angular-image-directive'], function () {});
```

If using normal browser include:

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js" type="text/javascipt"></script>
<script src="js/angular-image-directive.js" type="text/javascript"></script>
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