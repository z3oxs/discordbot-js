const Discord = require('discord.js');
const { Util } = require('discord.js');
const { magenta, red } = require('../../assets/colors.json');
const { prefix } = require('../../assets/config.json');

module.exports = {
    name: 'emojiinfo',
    aliases: ['einfo', 'emoji'],
    async execute(bot, msg, args) {
        let emoji = args[0] !== undefined ? Util.parseEmoji(args[0]) : 'error';

        if (emoji !== 'error') {
            emoji = msg.guild.emojis.cache.find(e => e.name === emoji.name);

            const embed = new Discord.MessageEmbed()
                .setColor(magenta)
                .setTitle(`${emoji} ${emoji.name}`)
                .addFields([
                    {
                        name: '💳 ID',
                        value: `\`${emoji.id}\``,
                        inline: true
                    },
                    {
                        name: '❣️ Menção',
                        value: `\`${emoji.identifier}\``,
                        inline: true
                    },
                    {
                        name: '👑 Autor',
                        value: `\`${emoji.author}\``,
                        inline: true
                    },
                    {
                        name: '⚙️ Animado',
                        value: `\`${emoji.animated ? 'Sim' : 'Não'}\``,
                        inline: true
                    },
                    {
                        name: '⛓️ URL',
                        value: `**[Clique aqui](${emoji.url})**`,
                        inline: true
                    },
                    {
                        name: '📆 Criação',
                        value: `\`${emoji.createdAt.toLocaleString('PT-BR')}\``,
                        inline: true
                    }
                ])
                .setThumbnail(emoji.url)
                .setTimestamp()
                .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

            msg.channel.send(embed);

        } else {
            const embed = new Discord.MessageEmbed()
                .setColor(red)
                .setDescription(`\`Especifique um emoji válido. (Exemplo: ${prefix}emojiinfo **Emoji**)\``)
                .setTimestamp()
                .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

            msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));
        }
    }
}