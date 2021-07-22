const Discord = require('discord.js');
const { red } = require('../assets/colors.json');

module.exports = async (msg, bot, member) => {
    if (member.bot) return;

    const enterChannel = member.guild.channels.cache.find(channel => channel.name === 'entradas-saidas');

    const embed = new Discord.MessageEmbed()
        .setColor(red)
        .setTitle('😭 Meteu o pé!')
        .setDescription(`${member} infelizmente deixou o servidor.`)
        .setImage('https://media1.tenor.com/images/19f5a154ced12befd978540687caa45c/tenor.gif?itemid=19625607')
        .setThumbnail(member.user.avatarURL({ dynamic: true }))
        .setTimestamp()
        .setFooter(member.user.tag, member.user.avatarURL({ dynamic: true }))

    enterChannel.send(embed);
}