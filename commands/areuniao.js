const Discord = require('discord.js');
module.exports.run = async (client, message, args) =>{
    let membros = message.guild.roles.cache.get('803269734329221170').members;
    /*function removercargo(membro){
        message.guild.cache.members.get(membro).roles.remove('803269734329221170')
    }*/
    var membrosmapeados = membros.map(function removercargo(membro){
        return membro;
    })
    console.log(`Encontrei: ${membros.size} membros com o cargo.`);
}