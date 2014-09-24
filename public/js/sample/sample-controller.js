angular.module('MakerHome')

.controller("SampleCtrl", function($scope, $firebase, $firebaseSimpleLogin) {
  var ref = new Firebase("https://makerhome.firebaseio.com/data");
  $scope.auth = $firebaseSimpleLogin(ref);
  var sync = $firebase(ref);

  $scope.signIn = function() {
    $scope.auth.$login('password', {
      email: $scope.email,
      password: $scope.password
    }).then(function(user) {
      console.log('user', user);
    }, function(error) {
      console.log('error', error);
    });
  };sub

  $scope.signUp = function() {
    $scope.auth.$createUser($scope.email, $scope.password
    ).then(function(user) {
      console.log('user', user);
    }, function(error) {
      console.log('error', error);
    });
  };

  // create a synchronized array for use in our HTML code
  var sync = $firebase(ref);
    $scope.messages = sync.$asArray();
    $scope.addMessage = function(text) {
      $scope.messages.$add({text: text});
    }
});