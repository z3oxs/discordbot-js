const Discord = require('discord.js');
const { yellow } = require('../assets/colors.json');

module.exports = async (bot, member, newMsg, oldMsg) => {
    if (!oldMsg.guild) return;
    if (oldMsg.author.bot) return;

    const logChannel = newMsg.guild.channels.cache.find(channel => channel.name === 'logs');
    const embed = new Discord.MessageEmbed()
        .setColor(yellow)
        .setTitle('⚠️ Mensagem modificada')
        .addFields([
            {
                name: '◀️ Antes',
                value: `\`${oldMsg.content}\``
            },
            {
                name: '▶️ Depois',
                value: `\`${newMsg.content}\``
            }
        ])
        .setTimestamp()
        .setFooter(newMsg.author.tag, newMsg.author.avatarURL({ dynamic: true }))

    logChannel.send(embed);
}