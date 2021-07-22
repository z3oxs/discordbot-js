<<<<<<< HEAD
const Discord = require('discord.js');
const { magenta, red } = require('../../assets/colors.json');
const { prefix } = require('../../assets/config.json');

module.exports = {
    name: 'roll',
    aliases: ['dice', 'rolar', 'dado', 'dados'],
    async execute(bot, msg, args) {
        const sides = typeof(args[0]) === 'string' ? parseInt(args[0]) : 6;

        if (!isNaN(sides)) {
            let embed = new Discord.MessageEmbed()
                .setColor(magenta)
                .setDescription(`${msg.author} \`rolou um dado de ${sides} lados e tirou ${Math.floor(Math.random() * (sides - 1))}\``)
                .setTimestamp()
                .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

            msg.channel.send(embed);

        } else {
            const embed = new Discord.MessageEmbed()
                .setColor(red)
                .setDescription(`\`Você deve especificar a quantidade de lados. (Exemplo: ${prefix}roll **20**)\``)
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
    name: 'roll',
    aliases: ['dice', 'rolar', 'dado', 'dados'],
    async execute(bot, msg, args) {
        const sides = typeof(args[0]) === 'string' ? parseInt(args[0]) : 6;

        if (!isNaN(sides)) {
            let embed = new Discord.MessageEmbed()
                .setColor(magenta)
                .setDescription(`${msg.author} \`rolou um dado de ${sides} lados e tirou ${Math.floor(Math.random() * (sides - 1))}\``)
                .setTimestamp()
                .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

            msg.channel.send(embed);

        } else {
            const embed = new Discord.MessageEmbed()
                .setColor(red)
                .setDescription(`\`Você deve especificar a quantidade de lados. (Exemplo: ${prefix}roll **20**)\``)
                .setTimestamp()
                .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

            msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));          
        }
    }
>>>>>>> 062f6d30c15a44857f4fff07e56cc18cbc7f5e74
}