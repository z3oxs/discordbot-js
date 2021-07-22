const Discord = require('discord.js');
const { magenta } = require('../assets/colors.json');
const { prefix } = require('../assets/config.json');

module.exports = async (msg, bot, member) => {
    if (member.bot) return;

    if (member.partial) await member.fetch();

    const autoRole = member.guild.roles.cache.find(role => role.name === '$');
    const enterChannel = member.guild.channels.cache.find(channel => channel.name === 'entradas-saidas');

    const embed = new Discord.MessageEmbed()
        .setColor(magenta)
        .setTitle('🎉 Bem-vindo!')
        .setDescription(`${member}, seja muito bem-vindo ao \`${member.guild.name}\`, se divirta em nosso servidor, caso precise de ajuda, digite \`${prefix}help\`.`)
        .setImage('https://media1.tenor.com/images/b0db8fd7ecaf4a39dbe8366c6c77d965/tenor.gif?itemid=16887494')
        .setThumbnail(member.user.avatarURL({ dynamic: true }))
        .setTimestamp()
        .setFooter(member.user.tag, member.user.avatarURL({ dynamic: true }))

    member.roles.add(autoRole);
    enterChannel.send(embed);
}
