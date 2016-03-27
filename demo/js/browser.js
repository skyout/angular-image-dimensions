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

    $scope.gallery = [
        {
            "alt": "angular",
            "source": "img/angular.jpg",
            "title": "angular"
        },
        {
            "alt": "github",
            "source": "img/github.png",
            "title": "github"
        },
        {
            "alt": "bower",
            "source": "img/bower.jpg",
            "title": "bower"
        },
        {
            "alt": "nodejs",
            "source": "img/nodejs.png",
            "title": "nodejs"
        },
        {
            "alt": "npm",
            "source": "img/npm.png",
            "title": "npm"
        },
        {
            "alt": "gulp",
            "source": "img/gulp.jpg",
            "title": "gulp"
        }
    ];

}]);