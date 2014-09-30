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







