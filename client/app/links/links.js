angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $location, Links) {
  Links.getLinks(function (links) {
    $scope.links = links.data;
  });
  $scope.linkRedirect = function () {
    $location.path(this.link.url);
    console.log(this.link.visits);
    };
  $scope.goToCreate = function () {
    $location.url;
  };
});

  // Your code here
