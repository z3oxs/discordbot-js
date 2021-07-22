<<<<<<< HEAD
const Discord = require('discord.js');
const colors = require('../../assets/colors.json')

module.exports = {
    name: 'unlock',
    aliases: ['destrancar'],
    async execute(bot, msg, args) {
        if (msg.member.hasPermission('MANAGE_CHANNELS')) {
            const embed = new Discord.MessageEmbed()
                .setColor(colors.green)
                .setTitle('🚨 Canal destrancado')
                .setDescription(`\`Esse canal foi destrancado por\` ${msg.author}.`)
                .setTimestamp()
                .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

            msg.channel.overwritePermissions([
                {
                    id: msg.guild.roles.everyone,
                    allow: ['SEND_MESSAGES'],
                },
            ]);

            msg.channel.send(embed);
        
        } else {
            const embed = new Discord.MessageEmbed()
                .setColor(colors.red)
                .setDescription(`\`Você não tem permissão para isso.\``)
                .setTimestamp()
                .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

            msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));
        }
    }
=======
const Discord = require('discord.js');
const colors = require('../../assets/colors.json')

module.exports = {
    name: 'unlock',
    aliases: ['destrancar'],
    async execute(bot, msg, args) {
        if (msg.member.hasPermission('MANAGE_CHANNELS')) {
            const embed = new Discord.MessageEmbed()
                .setColor(colors.green)
                .setTitle('🚨 Canal destrancado')
                .setDescription(`\`Esse canal foi destrancado por\` ${msg.author}.`)
                .setTimestamp()
                .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

            msg.channel.overwritePermissions([
                {
                    id: msg.guild.roles.everyone,
                    allow: ['SEND_MESSAGES'],
                },
            ]);

            msg.channel.send(embed);
        
        } else {
            const embed = new Discord.MessageEmbed()
                .setColor(colors.red)
                .setDescription(`\`Você não tem permissão para isso.\``)
                .setTimestamp()
                .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

            msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));
        }
    }
>>>>>>> 062f6d30c15a44857f4fff07e56cc18cbc7f5e74
}