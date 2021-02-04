require('dotenv').config()
const discord = require('discord.js');
const client = new discord.Client();
client.on('ready', () => {
    console.log("Tudo certo!")
    console.log("Nome: "+ client.user.username)
    console.log("ID: "+ client.user.id)
    client.user.setPresence({ activity: { name: `/ajuda`, type: 'STREAMING', url: 'https://www.twitch.tv/RedeMain'}, status: 'online'});
})
client.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return message.send("Sinto muito mas eu não aceito mensagens enviadas no meu privado!")
    if(!message.content.startsWith(process.env.PREFIX)) return;
    var args = message.content.split(" ").slice(1);
    var command = message.content.split(" ")[0];
    command = command.slice(process.env.PREFIX.length);
    let user = message.mentions.users.first() || message.author;
    try {
        commandFile = require(`./commands/${command}.js`);
        delete require.cache[require.resolve(`./commands/${command}.js`)];
        console.log(`O usuário: ${message.author.id}, executou o comando: ${command}`);
        return commandFile.run(client, message, args);
    } catch (err) {
        console.error("Erro: " + err);
        message.channel.send(`O comando ${command}, possui algum problema ou não existe!`);
    }
})
client.login(process.env.TOKEN)