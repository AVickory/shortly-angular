angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.links = [];
  $scope.sendNewLink = function () {
    if ($scope.newLink.slice(0, 7) === "http://") {
    Links.postLink($scope.newLink, function (resp) {
      $scope.links.push(resp.data);
      $scope.newLink = '';
    });
    } else {
      console.log("An invalid link!");
    }
  };
  $scope.goToIndex = function () {
    $location.url('');
  };
});
