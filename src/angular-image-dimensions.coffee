# angular-image-dimensions
# (c) 2016 Scott Lanning
# Licensed MIT

'use strict'

# Directive for displaying image dimensions
((root, factory) ->

    # Node / CommonJS
    if typeof module is 'object' and module.exports

        module.exports = factory require 'angular'

    # AMD. Register as an anonymous module.
    else if typeof define is 'function' and define.amd

        define ['angular'], factory

    # Browser globals
    else

        factory angular

) this, (angular) ->

    # expose module
    'ngImageDimensions': angular.module('ngImageDimensions', []).directive 'imageDimensions', ->

        # limit to attribute
        restrict: 'A'

        # isolate scope
        scope: true

        # controller for logic
        controller: ['$scope', '$element', '$attrs', ($scope, element, attribute) ->

            # get image element
            image = element.find 'img'

            # on load
            image.bind 'load', ->

                # image
                img = image[0]

                # set dimensions
                $scope.dimensions = "#{img.naturalWidth} x #{img.naturalHeight}"

                # digest
                $scope.$apply()

        ]