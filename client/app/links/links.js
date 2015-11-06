angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
    Links.getLinks(function (links) {
    $scope.links = links;
  });
 });

  // Your code here
