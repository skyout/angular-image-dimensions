var demoApp = angular.module("demoApp", ["ngImageDimensions"]);
var imageController = demoApp.controller("imageController", ["$scope", function ($scope) {
    // set images in scope
    $scope.images = [
        {
            "alt": "angular",
            "source": "img/angular.jpg",
            "title": "angular"
        },
        {
            "alt": "github",
            "source": "img/github.png",
            "title": "github"
        }
    ];
}]);