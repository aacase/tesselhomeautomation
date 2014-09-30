var tessel = require('tessel');
var relaylib = require('relay-mono')
var http=require('https')
var url = 'https://makerhome.firebaseio.com/items/-JXFIVFWdMiIkkjV0ft4/state.json?auth=y36SXxKt6qInLDEW0rTRPrHlKqzYKa8odD2JMZML';
 
// var request= require('request');
var relay=relaylib.use(tessel.port['A']);
 
 
setImmediate(function loop(){
 
    http.get(url, function(res) {
        var body = '';
     
        res.on('data', function(chunk) {
            body += chunk;
        });
     
        res.on('end', function() {
            var itemState = JSON.parse(body)
            console.log("Got response: ", itemState);
            if (itemState == "on"){
            	relay.turnOn(1);
            	console.log("it's on");
            	console.log(process.memoryUsage())
            }
            else if (itemState=="off"){
            	relay.turnOff(1);
            	console.log('it is off');
            	console.log(process.memoryUsage())
     
            }
 
            setTimeout(loop, 5000);
        });
    }).on('error', function(e) {
        console.log("Got error: ", e);
        setTimeout(loop, 5000);
    });
});