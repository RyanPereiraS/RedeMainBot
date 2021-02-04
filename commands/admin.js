const AdminRole = "803000274863521812"
const TestRole = "803270874865729577"
const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
    if(!message.member.roles.cache.has(TestRole)) return message.channel.send('Você não tem permissão bobinho.');
    enviarHelp()
    function enviarHelp() {
        const sucesso = new Discord.MessageEmbed()
            .setTitle(`Ajuda Admin: `)
            .setThumbnail(`https://static.wixstatic.com/media/c7c1c2_2b2bbdf0e4df4d2f9a3462aff17207fa~mv2.gif`)
            .setDescription(`Comandos: \n /anuncio Envia um anúncio; \n /ban Bane um usuário`)
            .setFooter(`${message.author.tag}`, message.author.avatarURL())
            .setColor("RANDOM").setTimestamp()
        message.channel.send(sucesso)
    }
}