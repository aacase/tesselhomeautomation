
var itemState;
var itemState2;


function getJson(url) {
 return JSON.parse($.ajax({
     type: 'GET',
     url: url,
     dataType: 'json',
     global: false,
     async:false,
     success: function(data) {
        itemState= data
         return data;

     }
 }).responseText);
}
function getJson2(url) {
 return JSON.parse($.ajax({
     type: 'GET',
     url: url,
     dataType: 'json',
     global: false,
     async:false,
     success: function(data) {
        itemState2= data
         return data;

     }
 }).responseText);
}



$(".onoffswitch-checkbox").click(function(){
    getJson('https://makerhome.firebaseio.com/items/-JXFIVFWdMiIkkjV0ft4/state.json')


    // relay.toggle(1, function toggleOneResult(err) {
  //     if (err) console.log("Err toggling 1", err);
  //   });
    // Toggle relay channel 2
    // relay.toggle(2, function toggleTwoResult(err) {
    //   if (err) console.log("Err toggling 2", err);
    // });  
});


// this is the JSON Call to determine what the state of the object is for the controller



//Current State Code
// if (relay.getState(1) && relay.getState(2))

// if (stuffs){
// 	$("checkbox").prop('checked', true)
// }
// else {$("checkbox").prop('checked', false)}




