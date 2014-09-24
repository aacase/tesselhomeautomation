var tessel= require('tessel')
var relaylib = require ('../');
var jquery = require ('jquery')

var relay= relaylib.use(tessel.port['A']); 