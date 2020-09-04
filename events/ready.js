module.exports = client => {
  console.log(`${client.user.username} is online! Op ${client.guilds.cache.size} server(s)`);
  client.user.setActivity("Tickets, please!", {type:"PLAYING"});
}
