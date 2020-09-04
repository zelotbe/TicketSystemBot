const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let msg = await message.channel.send("**I'm shutting down.**");
      process.exit();
     };


exports.help = {
  name: 'stop',
  description: 'Stops the bot.',
  usage: 'stop'
};
