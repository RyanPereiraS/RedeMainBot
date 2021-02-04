const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
    let botping = new Date() - message.createdAt;
    const embed = new Discord.MessageEmbed()
        .setDescription(`🏓\`${Date.now() - message.createdTimestamp}\`ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    message.channel.send(embed);
}