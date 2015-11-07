angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.links = [];
  $scope.sendNewLink = function () {
    Links.postLink($scope.newLink, function (resp) {
      $scope.links.push(resp.data);
      $scope.newLink = '';
    });
  };
  $scope.goToIndex = function () {
    $location.url('');
  };
});
