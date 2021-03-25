var myControllers = angular.module("myControllers", []);

myControllers.controller(
  "SearchController",
  function MyController($scope, $http) {
    // fetch data from file
    $http.get("./js/data.json").then(function (res) {
      // scope the response to the data
      $scope.artists = res.data;
      // set default value for the artistOrder model
      $scope.artistOrder = "name";
    });
  }
);

myControllers.controller(
  "DetailsController",
  function MyController($scope, $http, $routeParams) {
    // fetch data from file
    $http.get("./js/data.json").then(function (res) {
      // scope the response to the data
      $scope.artists = res.data;
      // get itemId via $routeParams
      $scope.whichItem = $routeParams.itemId;
      // prevItem
      $routeParams.itemId > 0
        ? ($scope.prevItem = Number($routeParams.itemId) - 1)
        : ($scope.prevItem = $scope.artists.length - 1);
      // nextItem
      $routeParams.itemId < $scope.artists.length - 1
        ? ($scope.nextItem = Number($routeParams.itemId) + 1)
        : ($scope.nextItem = 0);
    });
  }
);
