/*
 * Example TLS Client
 * Connects to port 6000 and sends the word "ping" to servers
 * 
 */

// Dependencies
var tls = require('tls');
var fs = require('fs');
var path = require('path');


// Server options
var options = {
    'ca': fs.readFileSync(path.join(__dirname,'/../https/cert.pe')) // Only required because w're using a self-signed certificate 
};


// Define the message to send
var outboundMessage = 'ping';

// Create the client
var client = tls.connect(6000, options, function(){
    // Send the message
    client.write(outboundMessage);
});

// When the server writes back, log what it says then kill the client
client.on('data', function(inboundMessage) {
    var messageString = inboundMessage.toString();
    console.log("I wrote "+outboundMessage+" and they said "+messageString);
    client.end();
});