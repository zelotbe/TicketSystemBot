const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{
  let arg = message.content.split(' ').slice(1);
  	var result = arg.join(' ');
    if(message.author.id !== "502161813413036034") {
    message.channel.send(`You don't have access to this command!`)
    }else{
      let messagecount = parseInt(result);
      message.channel.messages.fetch({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
      let msg = await message.channel.send(`Successfully deleted ${result} messages.`);
    }

  };

  exports.help = {
    name: 'purge',
    description: 'Removes the amount of messages given.',
    usage: 'purge [amount]'
  };
