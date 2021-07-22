const Discord = require('discord.js');
const { Util } = require('discord.js');
const { green, red } = require('../../assets/colors.json');
const { prefix } = require('../../assets/config.json');

module.exports = {
    name: 'addemoji',
    aliases: ['adicionaremoji'],
    async execute(bot, msg, args) {
        if (msg.member.hasPermission('ADMINISTRATOR')) {
            if (!args.length) {
                const embed = new Discord.MessageEmbed()
                    .setColor(red)
                    .setDescription(`\`Você deve especificar o emoji para adicionar. (Exemplo: ${prefix}addemoji **Emoji**)\``)
                    .setTimestamp()
                    .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

                msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));
            }

            try {
                const parsedEmoji = Util.parseEmoji(args[0]);
                const emojiName = !args[1] ? parsedEmoji.name : args[1];
                const ext = parsedEmoji.animated ? '.gif' : '.png';
                const url = `https://cdn.discordapp.com/emojis/${parsedEmoji.id}${ext}`;

                msg.guild.emojis
                    .create(url, emojiName)
                    .then(emoji => {
                        const embed = new Discord.MessageEmbed()
                            .setColor(green)
                            .setTitle(`${emoji} Emoji adicionado`)
                            .setDescription('\`Emoji adicionado ao servidor.\`')
                            .setThumbnail(emoji.url)
                            .setTimestamp()
                            .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

                        msg.channel.send(embed);
                    });
                
            } catch(e) {
                const embed = new Discord.MessageEmbed()
                    .setColor(red)
                    .setDescription(`\`Especifique um emoji válido.\``)
                    .setTimestamp()
                    .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

                msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));
            }
        } else {
            const embed = new Discord.MessageEmbed()
                .setColor(red)
                .setDescription(`\`Você não tem permissão para isso.\``)
                .setTimestamp()
                .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

            msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));
        }
    }
}
