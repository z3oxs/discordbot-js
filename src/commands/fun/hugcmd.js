<<<<<<< HEAD
const Discord = require('discord.js');
const { magenta, red } = require('../../assets/colors.json');
const { prefix } = require('../../assets/config.json');

module.exports = {
    name: 'hug',
    aliases: ['abraço', 'abraçar', 'abraco', 'abracar'],
    async execute(bot, msg, args) {
        const member = msg.mentions.members.first();

        if (member !== undefined) {
            const images = [
                'https://gifimage.net/wp-content/uploads/2017/06/anime-hug-gif.gif',
                'https://78.media.tumblr.com/18fdf4adcb5ad89f5469a91e860f80ba/tumblr_oltayyHynP1sy5k7wo1_500.gif',
                'https://gifimage.net/wp-content/uploads/2017/01/Anime-hug-GIF-Image-Download-3.gif',
                'https://gifimage.net/wp-content/uploads/2017/09/anime-comfort-hug-gif-14.gif',
                'https://gifimage.net/wp-content/uploads/2017/06/anime-hug-gif-11.gif'
            ]
            
            let embed = new Discord.MessageEmbed()
                .setColor(magenta)
                .setDescription(`${msg.author} \`abraçou\` ${member}`)
                .setImage(images[Math.floor(Math.random() * (images.length - 1))])
                .setTimestamp()
                .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

            await msg.channel.send(embed).then(m => {
                m.react('🔄');
                let turn = false;

                const filter = (reaction, user) => reaction.emoji.name === '🔄' && user.id === member.id;
                const collector = m.createReactionCollector(filter, { time: 1800000 });

                collector.on('collect', async e => {
                    if (turn === false) {
                        if (e.emoji.name === '🔄') {
                            const embed = new Discord.MessageEmbed()
                                .setColor(magenta)
                                .setDescription(`${member} \`abraçou\` ${msg.author} \`de volta!\``)
                                .setImage(images[Math.floor(Math.random() * (images.length - 1))])
                                .setTimestamp()
                                .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

                            turn = true;
                            msg.channel.send(embed);
                        }
                    }
                });
            });

        } else {
            const embed = new Discord.MessageEmbed()
                .setColor(red)
                .setDescription(`\`Você deve especificar o outro usuário. (Exemplo: ${prefix}hug **usuário**)\``)
                .setTimestamp()
                .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

            msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));
        }
    }
=======
const Discord = require('discord.js');
const { magenta, red } = require('../../assets/colors.json');
const { prefix } = require('../../assets/config.json');

module.exports = {
    name: 'hug',
    aliases: ['abraço', 'abraçar', 'abraco', 'abracar'],
    async execute(bot, msg, args) {
        const member = msg.mentions.members.first();

        if (member !== undefined) {
            const images = [
                'https://gifimage.net/wp-content/uploads/2017/06/anime-hug-gif.gif',
                'https://78.media.tumblr.com/18fdf4adcb5ad89f5469a91e860f80ba/tumblr_oltayyHynP1sy5k7wo1_500.gif',
                'https://gifimage.net/wp-content/uploads/2017/01/Anime-hug-GIF-Image-Download-3.gif',
                'https://gifimage.net/wp-content/uploads/2017/09/anime-comfort-hug-gif-14.gif',
                'https://gifimage.net/wp-content/uploads/2017/06/anime-hug-gif-11.gif'
            ]
            
            let embed = new Discord.MessageEmbed()
                .setColor(magenta)
                .setDescription(`${msg.author} \`abraçou\` ${member}`)
                .setImage(images[Math.floor(Math.random() * (images.length - 1))])
                .setTimestamp()
                .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

            await msg.channel.send(embed).then(m => {
                m.react('🔄');
                let turn = false;

                const filter = (reaction, user) => reaction.emoji.name === '🔄' && user.id === member.id;
                const collector = m.createReactionCollector(filter, { time: 1800000 });

                collector.on('collect', async e => {
                    if (turn === false) {
                        if (e.emoji.name === '🔄') {
                            const embed = new Discord.MessageEmbed()
                                .setColor(magenta)
                                .setDescription(`${member} \`abraçou\` ${msg.author} \`de volta!\``)
                                .setImage(images[Math.floor(Math.random() * (images.length - 1))])
                                .setTimestamp()
                                .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

                            turn = true;
                            msg.channel.send(embed);
                        }
                    }
                });
            });

        } else {
            const embed = new Discord.MessageEmbed()
                .setColor(red)
                .setDescription(`\`Você deve especificar o outro usuário. (Exemplo: ${prefix}hug **usuário**)\``)
                .setTimestamp()
                .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

            msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));
        }
    }
>>>>>>> 062f6d30c15a44857f4fff07e56cc18cbc7f5e74
}