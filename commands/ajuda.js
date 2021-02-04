const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
    enviarHelp();
    function enviarHelp() {
        const sucesso = new Discord.MessageEmbed()
            .setTitle(`Ajuda: `)
            .setThumbnail(`https://img.icons8.com/nolan/64/help--v1.png`)
            .setDescription(`Comandos: \n /info Informações sobre o discord; \n /status Informações sobre o servidor;`)
            .setFooter(`${message.author.tag}`, message.author.avatarURL())
            .setColor("RANDOM").setTimestamp()
        message.channel.send(sucesso)
    }
}