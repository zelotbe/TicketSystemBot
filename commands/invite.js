const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {
  if(message.author.id !== "502161813413036034") {
  message.channel.send(`You don't have access to this command!`)
  }else{
    message.channel.send(`https://discord.com/oauth2/authorize?client_id=750775633403052223&scope=bot&permissions=8`);
  }


};

   exports.help = {
     name: 'invite',
     description: 'Invite the bot to your server.',
     usage: 'invite'
   };
