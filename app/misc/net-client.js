/*
 * Example TCP (Net) SClient
 * Connects to port 6000 and sends the word "ping" to server
 * 
 */

// Dependencies
var net = require('net');

// Define the message to send
var outboundMessage = 'ping';

// Create the client
var client = net.createConnection({'port' : 6000}, function(){
    // Send the message
    client.write(outboundMessage);
});

// When the server writes back, log what it says then kill the client
client.on('data', function(inboundMessage) {
    var messageString = inboundMessage.toString();
    console.log("I wrote "+outboundMessage+" and they said "+messageString);
    client.end();
});