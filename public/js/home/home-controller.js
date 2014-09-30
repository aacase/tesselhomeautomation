angular.module('MakerHome')
  .controller('HomeController', ['$scope', function ($scope) {
  	$scope.buttonText = "off";
  	$scope.save = function() {
    $scope.buttonText = 'Saving...';
  	};
  }]);
