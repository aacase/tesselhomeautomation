angular.module('MakerHome')
  .controller('ItemsController', ['$scope', '$firebase', function ($scope, $firebase) {

    var ref = new Firebase("https://makerhome.firebaseio.com/items");
    var sync = $firebase(ref);
  
    $scope.items = sync.$asArray();
    // $scope.items.$add({name:'LightBulb', location: 'kitchen', title: 'Over Oven'});

    $scope.addItem = function(text, text2, text3) {
      $scope.items.$add({name: text, location: text2, title: text3, state: "off"});
    }
   
    $scope.saveChange = function(item) {
       $scope.items.$save(item);
   }
        
  }]);
