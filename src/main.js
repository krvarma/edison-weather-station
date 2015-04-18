var Cylon = require("cylon");

var pubnub = require("pubnub")({
    ssl           : true,  // <- enable TLS Tunneling over TCP 
    publish_key   : "<<replace it with your publish key>>",
    subscribe_key : "<<replace it with your subscribe key>>"
});

Cylon.robot({
    connections: {
        edison: { adaptor: "intel-iot"}
    },

    devices: {
        bmp180: {driver: "bmp180"}
    },

    work: function(my){
        every((10).second(), function(){
            my.bmp180.getAltitude(1, null, function(err, val){
                if(err){
                    console.log(err);
                    return;
                }

                console.log("Temperature: " + val.temp + " C");
                
                var msg = { "temperature" : val.temp,
                            "pressure" : val.press,
                            "altitude" : val.alt
                          };
                var msgPressure = { "pressure" : val.press };
                var msgAltitude = { "altitude" : val.alt };
                
                pubnub.publish({ 
                    channel   : 'edison-weather',
                    message   : msg,
                    callback  : function(e) { console.log( "SUCCESS!", e ); },
                    error     : function(e) { console.log( "FAILED! RETRY PUBLISH!", e ); }
                });
            });
        });
    }
}).start();