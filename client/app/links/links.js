angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $location, Links) {
  Links.getLinks(function (links) {
    $scope.links = links.data;
  });
  $scope.goToCreate = function () {
    $location.url('/create');
  };
});

  // Your code here
