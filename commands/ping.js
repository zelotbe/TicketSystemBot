const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

message.channel.send(`Pong!`)
     .then(newMessage => {newMessage.edit(`My ping is: ${newMessage.createdTimestamp - message.createdTimestamp} ms.`)});
   }

   exports.help = {
     name: 'ping',
     description: 'Shows how fast I\'m running in milliseconds',
     usage: 'ping'
   };
