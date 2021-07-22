<<<<<<< HEAD
const Discord = require('discord.js');
const { Util } = require('discord.js');
const { red } = require('../../assets/colors.json');
const { prefix } = require('../../assets/config.json');

module.exports = {
    name: 'removeemoji',
    aliases: ['removeremoji', 'rememoji'],
    async execute(bot, msg, args) {
        if (msg.member.hasPermission('ADMINISTRATOR')) {
            if (!args.length) {
                const embed = new Discord.MessageEmbed()
                    .setColor(red)
                    .setDescription(`\`Você deve especificar o emoji para remover. (Exemplo: ${prefix}removeemoji **Emoji**)\``)
                    .setTimestamp()
                    .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

                msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));
            }

            try {
                const parsedEmoji = Util.parseEmoji(args[0]);

                msg.guild.emojis.cache.find(emoji => emoji.name === parsedEmoji.name)
                    .delete(parsedEmoji)
                    .then(emoji => {
                        const embed = new Discord.MessageEmbed()
                            .setColor(red)
                            .setTitle('🗑️ Emoji removido')
                            .setDescription('\`Emoji removido do servidor.\`')
                            .setThumbnail(emoji.url)
                            .setTimestamp()
                            .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

                        msg.channel.send(embed);
                    });

            } catch(e) {
                console.log(e)
                const embed = new Discord.MessageEmbed()
                    .setColor(red)
                    .setDescription(`\`Especifique um emoji válido.\``)
                    .setTimestamp()
                    .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

                msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }))
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
=======
const Discord = require('discord.js');
const { Util } = require('discord.js');
const { red } = require('../../assets/colors.json');
const { prefix } = require('../../assets/config.json');

module.exports = {
    name: 'removeemoji',
    aliases: ['removeremoji', 'rememoji'],
    async execute(bot, msg, args) {
        if (msg.member.hasPermission('ADMINISTRATOR')) {
            if (!args.length) {
                const embed = new Discord.MessageEmbed()
                    .setColor(red)
                    .setDescription(`\`Você deve especificar o emoji para remover. (Exemplo: ${prefix}removeemoji **Emoji**)\``)
                    .setTimestamp()
                    .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

                msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));
            }

            try {
                const parsedEmoji = Util.parseEmoji(args[0]);

                msg.guild.emojis.cache.find(emoji => emoji.name === parsedEmoji.name)
                    .delete(parsedEmoji)
                    .then(emoji => {
                        const embed = new Discord.MessageEmbed()
                            .setColor(red)
                            .setTitle('🗑️ Emoji removido')
                            .setDescription('\`Emoji removido do servidor.\`')
                            .setThumbnail(emoji.url)
                            .setTimestamp()
                            .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

                        msg.channel.send(embed);
                    });

            } catch(e) {
                console.log(e)
                const embed = new Discord.MessageEmbed()
                    .setColor(red)
                    .setDescription(`\`Especifique um emoji válido.\``)
                    .setTimestamp()
                    .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

                msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }))
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
>>>>>>> 062f6d30c15a44857f4fff07e56cc18cbc7f5e74
}