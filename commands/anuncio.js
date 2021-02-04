const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Você não tem permissão bobinho.');
    let filter = m => m.author.id === message.author.id;
    var titulo, conteudo, channelID;
    var guild = message.guild;
    var guildName = guild.name.toUpperCase();
    let img = message.channel.guild.iconURL();
    let user = message.author;
    let avatar = user.avatarURL();
    coletarCanal()
        function coletarCanal() {
            message.channel.send(`Qual o canal?`).then(() => {
                message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 30000,
                    errors: ['time']
                }).then(message => {
                    message = message.first()
                    channelID = message.mentions.channels.first().id;
                    console.log(channelID)
                    DadosOk1();
                    coletarTitulo();
                    
                }).catch(collected => {
                    falha1()
                });
            });
        }
        function coletarTitulo() {
            message.channel.send(`Qual o titulo?`).then(() => {
                message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 30000,
                    errors: ['time']
                }).then(message => {
                    message = message.first()
                    titulo = message.content;
                    console.log(titulo)
                    DadosOk1();
                    coletarConteudo();
                    
                }).catch(collected => {
                    falha1()
                });
            });
        }
        function coletarConteudo() {
            message.channel.send(`Qual conteudo?`).then(() => {
                message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 30000,
                    errors: ['time']
                }).then(message => {
                    message = message.first()
                    conteudo = message.content;
                    console.log(conteudo);
                    DadosOk1();
                    enviarAnuncio()
                }).catch(collected => {
                    falha1()
                });    
            });
        }
        function enviarAnuncio() {
            const embed = new Discord.MessageEmbed()
                .setAuthor(`${guildName}`)
                .setTitle(`${titulo}`)
                .setThumbnail(img)
                .setDescription(`${conteudo}`)
                .setFooter(`${message.author.tag}`, avatar)
                .setColor("RANDOM").setTimestamp()
            client.channels.cache.get(channelID).send(embed)
            sucesso()
        }
        function DadosOk1() {
            const dadosOK = new Discord.MessageEmbed()
                .setTitle(`Sucesso!`)
                .setThumbnail(`https://www.exintercambio.com.br/img/sucesso-2.gif`)
                .setDescription(`Dado armazenado com sucesso!`)
                .setFooter(`${message.author.tag}`, avatar)
                .setColor("RANDOM").setTimestamp()
            message.channel.send(dadosOK)
        }
        function sucesso() {
            const sucesso = new Discord.MessageEmbed()
                .setTitle(`Sucesso!`)
                .setThumbnail(`https://www.exintercambio.com.br/img/sucesso.gif`)
                .setDescription(`O Anuncio foi enviado com sucesso!`)
                .setFooter(`${message.author.tag}`, avatar)
                .setColor("RANDOM").setTimestamp()
            message.channel.send(sucesso)
        }
        function falha1() {
            const erro = new Discord.MessageEmbed()
                .setTitle(`Falha!`)
                .setThumbnail(`https://cdn.discordapp.com/attachments/803274140899082280/806275529241526282/4e04f5f2-fa93-48df-a7ce-e89d1c256ba6.gif`)
                .setDescription(`Houve uma falha no meio do caminho!`)
                .setFooter(`${message.author.tag}`, avatar)
                .setColor("RANDOM").setTimestamp()
            message.channel.send(erro)
        }
}