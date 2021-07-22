const Discord = require('discord.js');
const { magenta } = require('../../assets/colors.json');

module.exports = {
    name: 'serverinfo',
    aliases: ['server', 'sinfo'],
    async execute(bot, msg, args) {
        const embed = new Discord.MessageEmbed()
            .setColor(magenta)
            .setTitle(`🏷️ ${msg.guild.name}`)
            .addFields([
                {
                    name: '💳 ID',
                    value: `\`${msg.guild.id}\``,
                    inline: true
                },
                {
                    name: '🌎 Região',
                    value: `\`${msg.guild.region.replace(/^\w/, l => l.toUpperCase())}\``,
                    inline: true
                },
                {
                    name: '👥 Membros',
                    value: `\`${msg.guild.memberCount}\``,
                    inline: true
                },
                {
                    name: '📅 Criação',
                    value: `\`${msg.guild.createdAt.toLocaleString('PT-BR')}\``,
                    inline: true
                },
                {
                    name: '⛓️ Ícone',
                    value: `**[Clique aqui](${msg.guild.iconURL({ size: 1024 })})**`,
                    inline: true
                }
            ])
            .setThumbnail(msg.guild.iconURL({ dynamic: true }))

        msg.channel.send(embed);
    }
}