const Discord = require('discord.js');
const KickChannel = "806699440756228169"
module.exports.run = async (client, message, args) => {
    let error;

    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('Você não tem permissão bobinho.');
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!user) return falha("Nenhum usuário foi marcado");
    let motivo = args.slice(1).join(" ");
    if(!motivo){
        motivo = "Não especificado!"
    }
    kick()
    function kick() {
        user.kick().then(() => {
            sucesso()
        }).catch(err => {
            error = err;
            falha(err)
        })
    }
    function falha(falhas) {
        const erro = new Discord.MessageEmbed()
            .setTitle(`Falha!`)
            .setThumbnail(`https://cdn.discordapp.com/attachments/803274140899082280/806275529241526282/4e04f5f2-fa93-48df-a7ce-e89d1c256ba6.gif`)
            .setDescription(`Houve uma falha no meio do caminho! \n Erro: ${falhas}`)
            .setFooter(`${message.author.tag}`, message.author.avatarURL())
            .setColor("RANDOM").setTimestamp()
        message.channel.send(erro)
    }
    function sucesso() {
        const sucesso = new Discord.MessageEmbed()
            .setTitle(`Sucesso!`)
            .setThumbnail(`https://www.exintercambio.com.br/img/sucesso.gif`)
            .setDescription(`O Usuário foi expulso com sucesso!`)
            .setFooter(`${message.author.tag}`, message.author.avatarURL())
            .setColor("RANDOM").setTimestamp()
        message.channel.send(sucesso)
        KickChannelMessage()
    }
    function KickChannelMessage() {
        const KickMessage = new Discord.MessageEmbed()
            .setTitle(`<:624603272958705664:806677999058550845> Expulso <:624603272958705664:806677999058550845>`)
            .setThumbnail(`https://emoji.gg/assets/emoji/2283_BongoCatBanHammer.gif`)
            .setDescription(`Olha o Martelo Chegando!`)
            .addField("<:643177539958865920:806677999205613589> Usuário: ", user)
            .addField("<:626179020060622851:806677744820682772> Motivo: ", motivo)
            .addField("<:767835965028565002:806677999122120714> Expulso Por: ", message.author)
            .setFooter(`${message.author.tag}`, message.author.avatarURL())
            .setColor("RANDOM").setTimestamp()
        client.channels.cache.get(KickChannel).send(KickMessage).catch(err => {
            error = err;
            falha(err)
        })
    }
}