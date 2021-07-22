<<<<<<< HEAD
const Discord = require('discord.js');
const { red, yellow } = require('../../assets/colors.json');
const { prefix } = require('../../assets/config.json');

module.exports = {
    name: 'kick',
    aliases: ['kickar'],
    async execute(bot, msg, args) {
        const punishChannel = msg.guild.channels.cache.find(channel => channel.name === 'punição');
        const member = msg.mentions.members.first();

        if (msg.member.hasPermission('KICK_MEMBERS')) {
            args.shift();
            const reason = args[0] === undefined ? `(${msg.author.tag}) Motivo não especificado.` : args.reduce((a, r) => `(${msg.author.tag}) ${a} ${r}`);
            
            if (member === undefined) {
                const embed = new Discord.MessageEmbed()
                    .setColor(red)
                    .setDescription(`\`Você deve definir o usuário a ser punido. (Exemplo: ${prefix}kick **@user**)\``)
                    .setTimestamp()
                    .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))
                
                msg.channel.send(embed).then(m => m.delete({ timeout: 30000 }));

            } else {
                const memberName = `${member.user.username}#${member.user.discriminator}`;

                const embed = new Discord.MessageEmbed()
                    .setTitle('🚨 Punição')
                    .setDescription(`\`Tem certeza que deseja **kickar**\` <@${member.id}>?`)
                    .setColor(yellow)
                    .setTimestamp()
                    .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

                msg.channel.send(embed).then(m => {
                    m.react('🟢');
                    m.react('🔴');

                    const filter = (reaction, punisher) => ['🟢', '🔴'].includes(reaction.emoji.name) && punisher.id === msg.author.id;
                    const collector = m.createReactionCollector(filter, { max: 1, time: 30000 });

                    collector.on('collect', async e => {
                        if (e.emoji.name === '🟢') {
                            m.delete();
                            const embed = new Discord.MessageEmbed()
                                .setColor(yellow)
                                .setTitle('🚨 Kickado')
                                .setDescription(`\`O usuário ${memberName} foi kickado.\``)
                                .setTimestamp()
                                .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))
                            
                            await punishChannel.send(embed);
                            member.kick(reason);
                        
                        } else if (e.emoji.name === '🔴') {
                            m.delete();
                        }
                    });

                    m.delete({ timeout: 30000 });
                });
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
const { red, yellow } = require('../../assets/colors.json');
const { prefix } = require('../../assets/config.json');

module.exports = {
    name: 'kick',
    aliases: ['kickar'],
    async execute(bot, msg, args) {
        const punishChannel = msg.guild.channels.cache.find(channel => channel.name === 'punição');
        const member = msg.mentions.members.first();

        if (msg.member.hasPermission('KICK_MEMBERS')) {
            args.shift();
            const reason = args[0] === undefined ? `(${msg.author.tag}) Motivo não especificado.` : args.reduce((a, r) => `(${msg.author.tag}) ${a} ${r}`);
            
            if (member === undefined) {
                const embed = new Discord.MessageEmbed()
                    .setColor(red)
                    .setDescription(`\`Você deve definir o usuário a ser punido. (Exemplo: ${prefix}kick **@user**)\``)
                    .setTimestamp()
                    .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))
                
                msg.channel.send(embed).then(m => m.delete({ timeout: 30000 }));

            } else {
                const memberName = `${member.user.username}#${member.user.discriminator}`;

                const embed = new Discord.MessageEmbed()
                    .setTitle('🚨 Punição')
                    .setDescription(`\`Tem certeza que deseja **kickar**\` <@${member.id}>?`)
                    .setColor(yellow)
                    .setTimestamp()
                    .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

                msg.channel.send(embed).then(m => {
                    m.react('🟢');
                    m.react('🔴');

                    const filter = (reaction, punisher) => ['🟢', '🔴'].includes(reaction.emoji.name) && punisher.id === msg.author.id;
                    const collector = m.createReactionCollector(filter, { max: 1, time: 30000 });

                    collector.on('collect', async e => {
                        if (e.emoji.name === '🟢') {
                            m.delete();
                            const embed = new Discord.MessageEmbed()
                                .setColor(yellow)
                                .setTitle('🚨 Kickado')
                                .setDescription(`\`O usuário ${memberName} foi kickado.\``)
                                .setTimestamp()
                                .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))
                            
                            await punishChannel.send(embed);
                            member.kick(reason);
                        
                        } else if (e.emoji.name === '🔴') {
                            m.delete();
                        }
                    });

                    m.delete({ timeout: 30000 });
                });
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