var Epipahy = function(){
	itemState="off"
	function getJson(url) {
 	return JSON.parse($.ajax({
     type: 'GET',
     url: url,
     dataType: 'json',
     global: false,
     async:false,
     success: function(data) {
        itemState= data
         return itemState;

     }
 }).responseText);
}
	if(itemState=="on" || itemState=="off"){
		relay.toggle(1, function toggleOneResult(err) {
      if (err) console.log("Err toggling 1", err);
    });
	}
	
}

//potential HTTP Code

//set the http get request to get the firebase json object every second.
// then fire the function upon every successful get request. 