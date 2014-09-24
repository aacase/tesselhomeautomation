angular.module('MakerHome')
  .controller('ItemsController', ['$scope', '$firebase', function ($scope, $firebase) {

    var ref = new Firebase("https://makerhome.firebaseio.com/items");
    childRef= ref.child('test');

    var sync = $firebase(ref);
  
    $scope.items = sync.$asArray();
    // $scope.items.$add({name:'LightBulb', location: 'kitchen', title: 'Over Oven'});

    $scope.addItem = function(text, text2, text3) {
      
      $scope.items.$add({name: text, location: text2, title: text3, state: "off"});
    }


   
    $scope.saveChange = function(item) {
       $scope.items.$save(item);
       getJson('https://makerhome.firebaseio.com/items/-JXFIVFWdMiIkkjV0ft4/state.json');
       getJson2('https://makerhome.firebaseio.com/items/-JXclkfZ_3qlbPz5Bygw/state.json'); 
       console.log ('switch 1: ' + itemState);
       console.log('switch 2 ' +itemState2);
   }
        
  }]);
