const Discord = require('discord.js');
const { magenta } = require('../../assets/colors');
const { prefix } = require('../../assets/config');

module.exports = {
    name: 'help',
    aliases: ['ajuda'],
    async execute(bot, msg, args) {
        const embed = new Discord.MessageEmbed()
            .setColor(magenta)
            .setTitle('💟 Ajuda')
            .addFields([
                {
                    name: '❔ Informação',
                    value: `\`${prefix}avatar\` \`${prefix}covid\` \`${prefix}currency\` \`${prefix}emojiinfo\` \`${prefix}servericon\` \`${prefix}serverinfo\` \`${prefix}userinfo\` \`${prefix}weather\` \`${prefix}wikipedia\``
                },
                {
                    name: '🎮 Diversão',
                    value: `\`${prefix}ascii\` \`${prefix}hug\` \`${prefix}kiss\` \`${prefix}retarded\` \`${prefix}roll\` \`${prefix}ship\``
                },
                {
                    name: '👑 Moderação',
                    value: `\`${prefix}addemoji\` \`${prefix}ban\` \`${prefix}clear\` \`${prefix}kick\` \`${prefix}lock\` \`${prefix}removeemoji\` \`${prefix}slowmode\` \`${prefix}unban\` \`${prefix}unlock\``
                },
                {
                    name: '📎 Utilidade',
                    value: `\`${prefix}calc\` \`${prefix}help\` \`${prefix}ping\` \`${prefix}status\``
                }
            ])
            .setTimestamp()
            .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

        msg.channel.send(embed);
    }
}
