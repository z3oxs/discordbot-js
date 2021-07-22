<<<<<<< HEAD
const Discord = require('discord.js');
const { magenta, red } = require('../assets/colors.json')
const { prefix, owner } = require('../assets/config.json')
const cooldown = new Set();

module.exports = async (bot, member, msg) => {
    if (msg.content === `<@!${bot.user.id}>`) {
        const embed = new Discord.MessageEmbed()
            .setColor(magenta)
            .setDescription(`\`Para usar meus comandos, use o prefixo ${prefix}\``)
            .setTimestamp()
            .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))
        
        msg.channel.send(embed).then(m => m.delete({ timeout: 10000 }));
    }

    if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.guild || msg.content === prefix) return;

    if (!cooldown.has(msg.author.id)) {
        const args = msg.content.slice(prefix.length).trim().split(' ');
        const command = args.shift().toLowerCase();
        const cmd = bot.commands.get(command) || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));
        
        if (!cmd && command !== '') {
            const embed = new Discord.MessageEmbed()
                .setColor(red)
                .setDescription(`\`Este comando não existe.\``)
                .setTimestamp()
                .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

            msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));
        
        } else {
            try {
                cmd.execute(bot, msg, args);
            
            } catch (err) {
                console.error(err);
            }
        }

        if (msg.author.id !== owner.id) {
            cooldown.add(msg.author.id);
            setTimeout(() => {
                cooldown.delete(msg.author.id);
            }, 3000);
        }

    } else {
        const embed = new Discord.MessageEmbed()
            .setColor(red)
            .setDescription(`\`Você deve esperar 3 segundos para enviar outro comando.\``)
            .setTimestamp()
            .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

        msg.channel.send(embed).then(m => m.delete({ timeout: 3000 }));
    }
=======
const Discord = require('discord.js');
const { magenta, red } = require('../assets/colors.json')
const { prefix, owner } = require('../assets/config.json')
const cooldown = new Set();

module.exports = async (bot, member, msg) => {
    if (msg.content === `<@!${bot.user.id}>`) {
        const embed = new Discord.MessageEmbed()
            .setColor(magenta)
            .setDescription(`\`Para usar meus comandos, use o prefixo ${prefix}\``)
            .setTimestamp()
            .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))
        
        msg.channel.send(embed).then(m => m.delete({ timeout: 10000 }));
    }

    if (!msg.content.startsWith(prefix) || msg.author.bot || !msg.guild || msg.content === prefix) return;

    if (!cooldown.has(msg.author.id)) {
        const args = msg.content.slice(prefix.length).trim().split(' ');
        const command = args.shift().toLowerCase();
        const cmd = bot.commands.get(command) || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));
        
        if (!cmd && command !== '') {
            const embed = new Discord.MessageEmbed()
                .setColor(red)
                .setDescription(`\`Este comando não existe.\``)
                .setTimestamp()
                .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

            msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));
        
        } else {
            try {
                cmd.execute(bot, msg, args);
            
            } catch (err) {
                console.error(err);
            }
        }

        if (msg.author.id !== owner.id) {
            cooldown.add(msg.author.id);
            setTimeout(() => {
                cooldown.delete(msg.author.id);
            }, 3000);
        }

    } else {
        const embed = new Discord.MessageEmbed()
            .setColor(red)
            .setDescription(`\`Você deve esperar 3 segundos para enviar outro comando.\``)
            .setTimestamp()
            .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

        msg.channel.send(embed).then(m => m.delete({ timeout: 3000 }));
    }
>>>>>>> 062f6d30c15a44857f4fff07e56cc18cbc7f5e74
}