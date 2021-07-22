<<<<<<< HEAD
const Discord = require('discord.js');
const { green, red } = require('../../assets/colors.json');
const { prefix } = require('../../assets/config.json');

module.exports = {
    name: 'slowmode',
    aliases: ['slow', 'smode'],
    async execute(bot, msg, args) {
        const time = args[0] !== undefined ? parseInt(args[0]) : 0;

        if (msg.member.hasPermission('MANAGE_CHANNELS')) {
            if (time === 0) {
                const embed = new Discord.MessageEmbed()
                    .setColor(green)
                    .setDescription('\`O slowmode foi desativado neste canal.\`')
                    .setTimestamp()
                    .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))
                
                msg.channel.setRateLimitPerUser(0);
                msg.channel.send(embed).then(m => m.delete({ timeout: 10000 }));

            } else if (isNaN(time)) {
                const embed = new Discord.MessageEmbed()
                    .setColor(red)
                    .setDescription(`\`Você deve definir o tempo em segundos. (Exemplo: ${prefix}slowmode **5**)\``)
                    .setTimestamp()
                    .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))
                
                msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));

            } else if (typeof(time) === 'number') {
                const embed = new Discord.MessageEmbed()
                    .setColor(green)
                    .setDescription(`\`O tempo de slowmode para o canal foi definido para ${time} segundos.\``)
                    .setTimestamp()
                    .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))
                
                msg.channel.setRateLimitPerUser(time);
                msg.channel.send(embed).then(m => m.delete({ timeout: 10000 }));
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
const { green, red } = require('../../assets/colors.json');
const { prefix } = require('../../assets/config.json');

module.exports = {
    name: 'slowmode',
    aliases: ['slow', 'smode'],
    async execute(bot, msg, args) {
        const time = args[0] !== undefined ? parseInt(args[0]) : 0;

        if (msg.member.hasPermission('MANAGE_CHANNELS')) {
            if (time === 0) {
                const embed = new Discord.MessageEmbed()
                    .setColor(green)
                    .setDescription('\`O slowmode foi desativado neste canal.\`')
                    .setTimestamp()
                    .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))
                
                msg.channel.setRateLimitPerUser(0);
                msg.channel.send(embed).then(m => m.delete({ timeout: 10000 }));

            } else if (isNaN(time)) {
                const embed = new Discord.MessageEmbed()
                    .setColor(red)
                    .setDescription(`\`Você deve definir o tempo em segundos. (Exemplo: ${prefix}slowmode **5**)\``)
                    .setTimestamp()
                    .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))
                
                msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));

            } else if (typeof(time) === 'number') {
                const embed = new Discord.MessageEmbed()
                    .setColor(green)
                    .setDescription(`\`O tempo de slowmode para o canal foi definido para ${time} segundos.\``)
                    .setTimestamp()
                    .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))
                
                msg.channel.setRateLimitPerUser(time);
                msg.channel.send(embed).then(m => m.delete({ timeout: 10000 }));
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