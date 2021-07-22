<<<<<<< HEAD
const Discord = require('discord.js');
const colors = require('../../assets/colors.json');
const { prefix } = require('../../assets/config.json');

module.exports = {
    name: 'unban',
    aliases: ['desbanir'],
    async execute(bot, msg, args) {
        const punishChannel = msg.guild.channels.cache.find(channel => channel.name === 'punição');

        if (msg.member.hasPermission('BAN_MEMBERS')) {
            try {
                const member = msg.mentions.members.first() || await bot.users.fetch(args[0]);
                args.shift();
                const reason = args[0] === undefined ? `(${msg.author.tag}) Motivo não especificado.` : args.reduce((a, r) => `(${msg.author.tag}) ${a} ${r}`);
                
                const embed = new Discord.MessageEmbed()
                    .setColor(green)
                    .setTitle('🚨 Desbanido')
                    .setDescription(`\`O membro ${member} foi desbanido.\``)
                    .setTimestamp()
                    .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

                msg.guild.members.unban(member, reason).then(() => punishChannel.send(embed)).catch(e => {
                    if (e.toString().includes('Unknown Ban')) {
                        const embed = new Discord.MessageEmbed()
                            .setColor(red)
                            .setDescription(`\`O usuário não está banido.\``)
                            .setTimestamp()
                            .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

                        msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));
                    }
                });
            
            } catch (e) {
                if (e.toString().includes('404: Not Found') || e.toString().includes('Invalid Form Body')) {
                    const embed = new Discord.MessageEmbed()
                        .setColor(red)
                        .setDescription(`\`Você deve especificar um usuário válido. (Exemplo: ${prefix}unban **829859333206442035**)\``)
                        .setTimestamp()
                        .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

                    msg.channel.send(embed).then(m => m.delete({ timeout: 10000 }));
                
                } else if (e.toString().includes('Unknown User')) {
                    const embed = new Discord.MessageEmbed()
                        .setColor(red)
                        .setDescription(`\`O usuário não está banido.\``)
                        .setTimestamp()
                        .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

                    msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));
                }
            }
        }
    }
=======
const Discord = require('discord.js');
const colors = require('../../assets/colors.json');
const { prefix } = require('../../assets/config.json');

module.exports = {
    name: 'unban',
    aliases: ['desbanir'],
    async execute(bot, msg, args) {
        const punishChannel = msg.guild.channels.cache.find(channel => channel.name === 'punição');

        if (msg.member.hasPermission('BAN_MEMBERS')) {
            try {
                const member = msg.mentions.members.first() || await bot.users.fetch(args[0]);
                args.shift();
                const reason = args[0] === undefined ? `(${msg.author.tag}) Motivo não especificado.` : args.reduce((a, r) => `(${msg.author.tag}) ${a} ${r}`);
                
                const embed = new Discord.MessageEmbed()
                    .setColor(green)
                    .setTitle('🚨 Desbanido')
                    .setDescription(`\`O membro ${member} foi desbanido.\``)
                    .setTimestamp()
                    .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

                msg.guild.members.unban(member, reason).then(() => punishChannel.send(embed)).catch(e => {
                    if (e.toString().includes('Unknown Ban')) {
                        const embed = new Discord.MessageEmbed()
                            .setColor(red)
                            .setDescription(`\`O usuário não está banido.\``)
                            .setTimestamp()
                            .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

                        msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));
                    }
                });
            
            } catch (e) {
                if (e.toString().includes('404: Not Found') || e.toString().includes('Invalid Form Body')) {
                    const embed = new Discord.MessageEmbed()
                        .setColor(red)
                        .setDescription(`\`Você deve especificar um usuário válido. (Exemplo: ${prefix}unban **829859333206442035**)\``)
                        .setTimestamp()
                        .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

                    msg.channel.send(embed).then(m => m.delete({ timeout: 10000 }));
                
                } else if (e.toString().includes('Unknown User')) {
                    const embed = new Discord.MessageEmbed()
                        .setColor(red)
                        .setDescription(`\`O usuário não está banido.\``)
                        .setTimestamp()
                        .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

                    msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));
                }
            }
        }
    }
>>>>>>> 062f6d30c15a44857f4fff07e56cc18cbc7f5e74
}