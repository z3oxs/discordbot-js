<<<<<<< HEAD
const Discord = require('discord.js');
const { magenta, red } = require('../../assets/colors.json');
const { prefix } = require('../../assets/config.json');

module.exports = {
    name: 'kiss',
    aliases: ['beijo', 'beijar'],
    async execute(bot, msg, args) {
        const member = msg.mentions.members.first();

        if (member !== undefined) {
            const images = [
                'https://media1.tenor.com/images/4de96654f07c5845f6a739966de4c602/tenor.gif?itemid=7351281',
                'https://media1.tenor.com/images/cb5957119e2731604cfbda799c6a9b58/tenor.gif?itemid=15384222',
                'https://i.pinimg.com/originals/e5/eb/4d/e5eb4d30d233cbefd96619559b8daf8a.gif',
                'https://gifimage.net/wp-content/uploads/2018/04/kissing-anime-gif-4.gif',
                'https://media1.tenor.com/images/3c6de122d74075566392f63f13f47325/tenor.gif?itemid=3976694'
            ]
            
            let embed = new Discord.MessageEmbed()
                .setColor(magenta)
                .setDescription(`${msg.author} \`beijou\` ${member}`)
                .setImage(images[Math.floor(Math.random() * (images.length - 1))])
                .setTimestamp()
                .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

            msg.channel.send(embed).then(m => {
                m.react('🔄');
                let turn = false;

                const filter = (reaction, user) => reaction.emoji.name === '🔄' && user.id === member.id;
                const collector = m.createReactionCollector(filter, { time: 1800000 });

                collector.on('collect', async e => {
                    if (turn === false) {
                        if (e.emoji.name === '🔄') {
                            const embed = new Discord.MessageEmbed()
                                .setColor(magenta)
                                .setDescription(`${member} \`beijou\` ${msg.author} \`de volta!\``)
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
                .setDescription(`\`Você deve especificar o outro usuário. (Exemplo: ${prefix}kiss **@user**)\``)
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
    name: 'kiss',
    aliases: ['beijo', 'beijar'],
    async execute(bot, msg, args) {
        const member = msg.mentions.members.first();

        if (member !== undefined) {
            const images = [
                'https://media1.tenor.com/images/4de96654f07c5845f6a739966de4c602/tenor.gif?itemid=7351281',
                'https://media1.tenor.com/images/cb5957119e2731604cfbda799c6a9b58/tenor.gif?itemid=15384222',
                'https://i.pinimg.com/originals/e5/eb/4d/e5eb4d30d233cbefd96619559b8daf8a.gif',
                'https://gifimage.net/wp-content/uploads/2018/04/kissing-anime-gif-4.gif',
                'https://media1.tenor.com/images/3c6de122d74075566392f63f13f47325/tenor.gif?itemid=3976694'
            ]
            
            let embed = new Discord.MessageEmbed()
                .setColor(magenta)
                .setDescription(`${msg.author} \`beijou\` ${member}`)
                .setImage(images[Math.floor(Math.random() * (images.length - 1))])
                .setTimestamp()
                .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

            msg.channel.send(embed).then(m => {
                m.react('🔄');
                let turn = false;

                const filter = (reaction, user) => reaction.emoji.name === '🔄' && user.id === member.id;
                const collector = m.createReactionCollector(filter, { time: 1800000 });

                collector.on('collect', async e => {
                    if (turn === false) {
                        if (e.emoji.name === '🔄') {
                            const embed = new Discord.MessageEmbed()
                                .setColor(magenta)
                                .setDescription(`${member} \`beijou\` ${msg.author} \`de volta!\``)
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
                .setDescription(`\`Você deve especificar o outro usuário. (Exemplo: ${prefix}kiss **@user**)\``)
                .setTimestamp()
                .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

            msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));
        }
    }
>>>>>>> 062f6d30c15a44857f4fff07e56cc18cbc7f5e74
}