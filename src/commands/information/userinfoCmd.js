const Discord = require('discord.js');
const { magenta } = require('../../assets/colors.json');

module.exports = {
    name: 'userinfo',
    aliases: ['uinfo', 'info', 'user'],
    async execute(bot, msg, args) {
        const user = msg.mentions.users.first() || await bot.users.fetch(args[0] || msg.author.id);
        
        const embed = new Discord.MessageEmbed()
            .setColor(magenta)
            .setTitle(`👤 ${user.username}`)
            .addFields([
                {
                    name: '📄 Tag',
                    value: `\`${user.tag}\``,
                    inline: true
                },
                {
                    name: '💳 ID',
                    value: `\`${user.id}\``,
                    inline: true
                },
                {
                    name: '🤖 Bot',
                    value: `\`${user.bot ? 'Sim' : 'Não'}\``,
                    inline: true
                },
                {
                    name: '📆 Criação',
                    value: `\`${user.createdAt.toLocaleString('PT-BR')}\``,
                    inline: true
                },
                {
                    name: '🖼️ Avatar',
                    value: `**[Clique aqui](${user.avatarURL({ size: 1024 })})**`,
                    inline: true
                }
            ])
            .setThumbnail(user.avatarURL({ dynamic: true }))
            .setTimestamp()
            .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

        msg.channel.send(embed);
    }
}