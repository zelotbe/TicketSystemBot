const Discord = require("discord.js");
const color = require('../colors.json');
module.exports.run = async (bot, message, args) => {

    let msg = await message.channel.send("Robots are handling your request...");

    let ticketembed = new Discord.MessageEmbed()
    .setColor(color.geel)
    .setTitle("Ticket creation")
    .addField('Hi there!', 'In order to get support, react with the following emoji :tickets:.', true)
    .setTimestamp()
    .setFooter("Ticket System", bot.user.displayAvatarURL());
    message.channel.send({embed: ticketembed}).then(ticketembed => {ticketembed.react("🎟️");this.messageId = message.id;});
    msg.delete();
    bot.on("messageReactionAdd", async(reaction, user) => {
      if(user.bot) return;
        if(reaction.emoji.name === "🎟️"){
          let category = message.guild.channels.cache.find(c => c.name == "Open-Tickets" && c.type == "category")
          if(!category){
          message.guild.channels.create('Open-Tickets', {
          type: 'category',
          permissionsOverwrites: [{
            id: message.guild.id,
            deny: ['MANAGE_MESSAGES'],
            allow: ['SEND_MESSAGES']
          }]
        }).then(console.log("Category created"));
      }
          let name = `ticket-numberherelater`;
            message.guild.channels.create(name, {
            type: "text",
            topic: `Thank you for contacting support ${user.username}`,
            permissionOverwrites: [{
           id: message.guild.id,
           deny: ['VIEW_CHANNEL'],
         },
         {
           id: user.id,
           allow: ['VIEW_CHANNEL'],
         }
       ]
     }).then(
            (chan) => {
              console.log("Channel creation");
              channel = message.guild.channels.cache.find(c => c.name == "ticket-numberherelater" && c.type == "text");
              if (category && channel) channel.setParent(category.id);
else console.error(`One of the channels is missing:\nCategory: ${!!category}\nChannel: ${!!channel}`);
          });

        }

    });
};

exports.help = {
  name: 'ticket',
  description: 'Create a support-ticket.',
  usage: 'ticket'
};
