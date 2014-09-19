var tessel = require('tessel');
var relaylib = require('../'); 

var relay = relaylib.use(tessel.port['A']); 

var stuffs=true

$(".onoffswitch-checkbox").click(function(){
 	relay.toggle(1, function toggleOneResult(err) {
      if (err) console.log("Err toggling 1", err);
    });
    // Toggle relay channel 2
    // relay.toggle(2, function toggleTwoResult(err) {
    //   if (err) console.log("Err toggling 2", err);
    // });  
});

var changeIt = function(){
	$( "#myonoffswitch" ).prop( "checked", true );
}

var changeItBack = function(){
	$( "#myonoffswitch" ).prop( "checked", false );
}



//Current State Code
// if (relay.getState(1) && relay.getState(2))

// if (stuffs){
// 	$("checkbox").prop('checked', true)
// }
// else {$("checkbox").prop('checked', false)}

if (stuffs){
	changeIt();
}
else {changeItBack();}



