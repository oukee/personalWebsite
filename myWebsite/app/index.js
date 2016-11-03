
var myApp = angular.module('myApp', [
    'ui.router',
    'uiRouterStyles'
  ]);

myApp
  .controller('mainController', main);


main.$inject = ['$scope', '$state'];

function main($scope, $state) {
  $scope.about = function() {
    console.log("about");
  };

  $scope.project = function() {
    console.log("project");
  };

  $scope.contact = function() {
    console.log("contact");
  };
}