var cassandra = require('cassandra-driver');
var async = require('async');
const fs = require('fs');
var client = new cassandra.Client({contactPoints: ['127.0.0.1'], keyspace: 'rideHistory'});



var writeStreamSanFrancisco = fs.createWriteStream('rideHistSanFrancisco.csv');

for(var i = 0; i < 2000000; i++) {
  var start = [(Math.random() * (37.83 - 37.73) + 37.73).toFixed(2) * 1, (Math.random() * (122.47 - 122.37) + 122.37).toFixed(2) * 1];
  var end = [(Math.random() * (37.83 - 37.73) + 37.73).toFixed(2) * 1, (Math.random() * (122.47 - 122.37) + 122.37).toFixed(2) * 1];
  var time1 = Math.floor(Math.random() * (1517356800 - 1514764800)) + 1514764800;
  var time2 = Math.floor(Math.random() * ((time1 + 30000) - time1)) + time1;
  var accept = [Math.random() >= 0.5];
  var time3 = [Math.floor(Math.random() * ((time2 + 30000) - time2)) + time2];
  var surgeMultiplier = [parseInt((((Math.random()*100))/100 * 3 + 1).toFixed(2))];
  writeStreamSanFrancisco.write(i + ';' + JSON.stringify(accept) + ';' + JSON.stringify(end) + ';' + JSON.stringify(start) + ';' + JSON.stringify(surgeMultiplier) + ';' + JSON.stringify(time3) + '\n');
}
writeStreamSanFrancisco.end();


var writeStreamSeattle = fs.createWriteStream('rideHistSeattle.csv');

for(var i = 2000000; i < 4000000; i++) {
  var start = [(Math.random() * (47.66 - 47.56) + 47.66).toFixed(2) * 1, (Math.random() * (122.38 - 122.28) + 122.28).toFixed(2) * 1];
  var end = [(Math.random() * (47.66 - 47.56) + 47.66).toFixed(2) * 1, (Math.random() * (122.38 - 122.28) + 122.28).toFixed(2) * 1];
  var time1 = Math.floor(Math.random() * (1517356800 - 1514764800)) + 1514764800;
  var time2 = Math.floor(Math.random() * ((time1 + 30000) - time1)) + time1;
  var accept = [Math.random() >= 0.5];
  var time3 = [Math.floor(Math.random() * ((time2 + 30000) - time2)) + time2];
  var surgeMultiplier = [parseInt((((Math.random()*100))/100 * 3 + 1).toFixed(2))];
  writeStreamSeattle.write(i + ';' + JSON.stringify(accept) + ';' + JSON.stringify(end) + ';' + JSON.stringify(start) + ';' + JSON.stringify(surgeMultiplier) + ';' + JSON.stringify(time3) + '\n');
}
writeStreamSeattle.end();



var writeStreamLosAngeles = fs.createWriteStream('rideHistLosAngeles.csv');

for(var i = 4000000; i < 6000000; i++) {
  var start = [(Math.random() * (35 - 34) + 34).toFixed(2) * 1, (Math.random() * (122.47 - 122.37) + 122.37).toFixed(2) * 1];
  var end = [(Math.random() * (35 - 34) + 34).toFixed(2) * 1, (Math.random() * (122.47 - 122.37) + 122.37).toFixed(2) * 1];
  var time1 = Math.floor(Math.random() * (1517356800 - 1514764800)) + 1514764800;
  var time2 = Math.floor(Math.random() * ((time1 + 30000) - time1)) + time1;
  var accept = [Math.random() >= 0.5];
  var time3 = [Math.floor(Math.random() * ((time2 + 30000) - time2)) + time2];
  var surgeMultiplier = [parseInt((((Math.random()*100))/100 * 3 + 1).toFixed(2))];
  writeStreamLosAngeles.write(i + ';' + JSON.stringify(accept) + ';' + JSON.stringify(end) + ';' + JSON.stringify(start) + ';' + JSON.stringify(surgeMultiplier) + ';' + JSON.stringify(time3) + '\n');
}
writeStreamLosAngeles.end();




var writeStreamMiami = fs.createWriteStream('rideHistMiami.csv');

for(var i = 6000000; i < 8000000; i++) {
  var start = [(Math.random() * (25.81 - 25.71) + 25.71).toFixed(2) * 1, (Math.random() * (80.24 - 80.14) + 80.14).toFixed(2) * 1];
  var end = [(Math.random() * (25.81 - 25.71) + 25.71).toFixed(2) * 1, (Math.random() * (80.24 - 80.14) + 80.14).toFixed(2) * 1];
  var time1 = Math.floor(Math.random() * (1517356800 - 1514764800)) + 1514764800;
  var time2 = Math.floor(Math.random() * ((time1 + 30000) - time1)) + time1;
  var accept = [Math.random() >= 0.5];
  var time3 = [Math.floor(Math.random() * ((time2 + 30000) - time2)) + time2];
  var surgeMultiplier = [parseInt((((Math.random()*100))/100 * 3 + 1).toFixed(2))];
  writeStreamMiami.write(i + ';' + JSON.stringify(accept) + ';' + JSON.stringify(end) + ';' + JSON.stringify(start) + ';' + JSON.stringify(surgeMultiplier) + ';' + JSON.stringify(time3) + '\n');
}
writeStreamMiami.end();



var writeStreamNewYork = fs.createWriteStream('rideHistNewYork.csv');

for(var i = 8000000; i < 10000000; i++) {
  var start = [(Math.random() * (40.76 - 40.66) + 40.66).toFixed(2) * 1, (Math.random() * (74.04 - 73.96) + 73.96).toFixed(2) * 1];
  var end = [(Math.random() * (40.76 - 40.66) + 40.66).toFixed(2) * 1, (Math.random() * (74.04 - 73.96) + 73.96).toFixed(2) * 1];
  var time1 = Math.floor(Math.random() * (1517356800 - 1514764800)) + 1514764800;
  var time2 = Math.floor(Math.random() * ((time1 + 30000) - time1)) + time1;
  var accept = [Math.random() >= 0.5];
  var time3 = [(Math.floor(Math.random() * ((time2 + 30000) - time2))) + time2];
  var surgeMultiplier = [parseInt((((Math.random()*100))/100 * 3 + 1).toFixed(2))];
  writeStreamNewYork.write(i + ';' + JSON.stringify(accept) + ';' + JSON.stringify(end) + ';' + JSON.stringify(start) + ';' + JSON.stringify(surgeMultiplier) + ';' + JSON.stringify(time3) + '\n');
}
writeStreamNewYork.end();


















