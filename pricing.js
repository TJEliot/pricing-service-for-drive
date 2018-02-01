var express = require('express');
// var rider = require('./rider.js');
var bp = require('body-parser');
// include redis (be sure to add to package.json)
// include cassandra (be sure to add to package.json)
// include the cassandra database, as below
// var rideHistorydb = require('./rideHistory');
const app = express();
app.use(bp.json());
app.use(bp.urlencoded({xtended: true}));


/////////////////////////////////////
// everything between this and the next //// runs on initial startup and then never again
var priceMultiplierObject = {};
var recentRides = [];
activeDrivers = {}

var startup = function() {
  var returner = {};
  for (var i = 0; i < 100; i++) {
    priceMultiplierObject[`zone${i}`] = 1;
    activeDrivers[`zone${i}`] = 10;
  }
}

startup();
// now we have a starting priceMultiplierObject with 100 zones, none of which are surging
// and an empty recentRides array, ready to receive rides
///////////////////////////////////////

app.post('/ridehistory', function(req, res) {
  // POST request from Rider passes along a ride object which
  //we hold in redis 
  //send a 200 response if no error, or a 400 response if error
});

app.post('/driverupdate', function(req, res) {
  // POST request from Driver passes along an activeDrivers object which
  //we hold in redis
  //send a 200 response if no error, or a 400 response if error
});

const saveRideHistories = function(recentRides) {
  //this is the function we do once a minute
  //it calls the updatePriceMultiplier
  //then sends the updated priceMultiplierObject to the rider
  //then resets the recentRides to be empty
  updatePriceMultiplier(recentRides, activeDrivers);
  sendUpdatedPriceMultiplierObject(priceMultiplierObject);
  recentRides = [];
  //a rideHistoryEvent looks like this: 
}

const updatePriceMultiplier = function(recentRides, activeDrivers) {
  var ridesPerZone = {};
  for (var i = 0; i < recentRides.length; i++) {
    var thisZone = locationToZone([recentRides[i].start, recentRides[i].end]);
    if (ridesPerZone.hasOwnProperty(`zone${thisZone}`)) {
      ridesPerZone[`zone${thisZone}`] += 1; 
    } else {
      ridesPerZone[`zone${thisZone}`] = 1;
    }
  }
  for (var key in priceMultiplierObject) {
    if (ridesPerZone.hasOwnProperty(key)) {
      var thisPrice = (1 + ridesPerZone(key)) / (1 + activeDrivers(key));
      if (thisPrice >= 1) {
        priceMultiplierObject(key) = thisPrice;
      } else {
        priceMultiplierObject(key) = 1;
      }
    } else {
      var thisPrice = 1;
    }
  }
}

const locationToZone = function(locationArray) {
  //take in a location: [number, number] and output a zone: number
}

const sendUpdatedPriceMultiplierObject = function() {
  //calculate a priceMultiplierObject
  //send a POST request to Riders with the pMO as a param
}

setInterval(saveRideHistories(), 60000);


app.listen(3000, () => console.log('listening on port 3000'));
// gonna have to change that