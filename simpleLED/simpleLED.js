var request = require('request'),
    requestInterval = 500,
    serviceUrl = "http://beaconmeetup.azurewebsites.net/beacon.aspx",
    Gpio = require('onoff').Gpio,
    led = new Gpio(17, 'out');
    
var beaconId1 = "n7b6-62cs1" ;
    beacondId2 = "5vt4-m2eyb";
    beaconId3 = "3x39-tyt2c";
    
var myBeaconId = beaconId1;

var requestUrl = serviceUrl + "?id=" + myBeaconId;
    
  function turnOn(){
    if(led.readSync() == 0) led.writeSync(1);
  }
  
  function turnOff(){
    if(led.readSync() == 1) led.writeSync(0);
  }
  
  var query = setInterval(function(){
    request(requestUrl, function(error, response, body){
      console.log(body);
      if(body == 0) turnOff();
      else if (body == 1) turnOn();
    });
  });
