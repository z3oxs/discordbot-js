<<<<<<< HEAD
const Discord = require('discord.js');
const { red } = require('../../assets/colors.json');
const { prefix } = require('../../assets/config.json');

module.exports = {
    name: 'ban',
    aliases: ['banir'],
    async execute(bot, msg, args) {
        const member = msg.mentions.members.first();
        args.shift();
        const reason = args[0] === undefined ? `(${msg.author.tag}) Motivo não especificado.` : args.reduce((a, r) => `(${msg.author.tag}) ${a} ${r}`);

        if (member === undefined) {
            const embed = new Discord.MessageEmbed()
                .setColor(red)
                .setDescription(`\`Você deve definir o usuário a ser punido ou esse usuário não existe. (Exemplo: ${prefix}ban **@user**)\``)
                .setTimestamp()
                .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))
            
            msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));
            
        } else if (!member.bannable) {
            const embed = new Discord.MessageEmbed()
                .setColor(red)
                .setDescription(`\`Você não pode punir esse usuário.\``)
                .setTimestamp()
                .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

            msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));

        } else if (msg.member.hasPermission('BAN_MEMBERS')) {
            const punishChannel = msg.guild.channels.cache.find(channel => channel.name === 'punição');
            let memberName = `${member.user.username}#${member.user.discriminator}`;
            
            const embed = new Discord.MessageEmbed()
                .setTitle('🚨 Punição')
                .setDescription(`\`Tem certeza que deseja **banir**\` <@${member.id}>?`)
                .setColor(red)
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
                            .setColor(red)
                            .setTitle('🚨 Banido')
                            .setDescription(`\`O usuário ${memberName} foi banido.\``)
                            .setTimestamp()
                            .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))
                        
                        await punishChannel.send(embed);
                        member.ban({ reason: reason });
                    
                    } else if (e.emoji.name === '🔴') {
                        m.delete();
                    }
                });

                m.delete({ timeout: 30000 })
            });
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
const { red } = require('../../assets/colors.json');
const { prefix } = require('../../assets/config.json');

module.exports = {
    name: 'ban',
    aliases: ['banir'],
    async execute(bot, msg, args) {
        const member = msg.mentions.members.first();
        args.shift();
        const reason = args[0] === undefined ? `(${msg.author.tag}) Motivo não especificado.` : args.reduce((a, r) => `(${msg.author.tag}) ${a} ${r}`);

        if (member === undefined) {
            const embed = new Discord.MessageEmbed()
                .setColor(red)
                .setDescription(`\`Você deve definir o usuário a ser punido ou esse usuário não existe. (Exemplo: ${prefix}ban **@user**)\``)
                .setTimestamp()
                .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))
            
            msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));
            
        } else if (!member.bannable) {
            const embed = new Discord.MessageEmbed()
                .setColor(red)
                .setDescription(`\`Você não pode punir esse usuário.\``)
                .setTimestamp()
                .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

            msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));

        } else if (msg.member.hasPermission('BAN_MEMBERS')) {
            const punishChannel = msg.guild.channels.cache.find(channel => channel.name === 'punição');
            let memberName = `${member.user.username}#${member.user.discriminator}`;
            
            const embed = new Discord.MessageEmbed()
                .setTitle('🚨 Punição')
                .setDescription(`\`Tem certeza que deseja **banir**\` <@${member.id}>?`)
                .setColor(red)
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
                            .setColor(red)
                            .setTitle('🚨 Banido')
                            .setDescription(`\`O usuário ${memberName} foi banido.\``)
                            .setTimestamp()
                            .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))
                        
                        await punishChannel.send(embed);
                        member.ban({ reason: reason });
                    
                    } else if (e.emoji.name === '🔴') {
                        m.delete();
                    }
                });

                m.delete({ timeout: 30000 })
            });
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