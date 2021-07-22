const Discord = require('discord.js');
const { yellow } = require('../assets/colors.json');

module.exports = async (bot, member, msg) => {
    if (!msg.guild) return;
    if (msg.author.bot) return;

    const logChannel = msg.guild.channels.cache.find(channel => channel.name === 'logs');
    const embed = new Discord.MessageEmbed()
        .setColor(yellow)
        .setTitle('⚠️ Mensagem deletada')
        .setDescription(`\`${msg.content}\``)
        .setTimestamp()
        .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

    logChannel.send(embed);
}