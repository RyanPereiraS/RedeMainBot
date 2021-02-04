const Discord = require('discord.js');
const moment = require('moment');
moment.locale('pt-BR');
module.exports.run = async (client, message, args) => {
    let gAvatar = message.guild.iconURL
    let ownerID = message.guild.ownerID;
    const embed = new Discord.MessageEmbed()
    
    .setTimestamp()
    .setTitle(`${message.guild.name}`)
    .setThumbnail(gAvatar)
    .setColor("RANDOM")
    .setDescription(`Algumas informações de ${message.guild.name}`)
    .addField(`ID do servidor`, message.guild.id, true)
    .addField(`Fundador do servidor`, `<@${ownerID}>`, true)
    .addField(`Região do servidor`, message.guild.region, true)
    .addField(`Total de canais`, message.guild.channels.cache.size, true)
    .addField(`Criada em`, moment(message.guild.createAt).format('LL'), true)
    .addField(`Total de membros`, message.guild.memberCount, true);

    message.channel.send(embed);
}