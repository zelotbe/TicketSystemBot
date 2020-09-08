const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {
if(message.author.id !== "502161813413036034") {
message.channel.send(`You don't have access to this command!`)
}else{
  message.channel.send(`Removing all channels!`)
       .then(message.guild.channels.cache.forEach(channel => channel.delete()));
       console.log("All channels are removed.");
}
};

   exports.help = {
     name: 'delchan',
     description: 'Delete\'s all channels',
     usage: 'delchan'
   };
