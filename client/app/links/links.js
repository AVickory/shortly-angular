angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.getLinks = function () {
    Links.getLinks(function (links) {
    $scope.links = links;
    });
  };

  // Your code here
});
