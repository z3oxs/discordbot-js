<<<<<<< HEAD
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
=======
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
>>>>>>> 062f6d30c15a44857f4fff07e56cc18cbc7f5e74
}