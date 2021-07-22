const Discord = require('discord.js');
const { red, yellow } = require('../../assets/colors.json');
const { prefix } = require('../../assets/config.json');

module.exports = {
    name: 'unmute',
    aliases: ['demute', 'desmutar'],
    async execute(bot, msg, args) {
        const member = msg.mentions.members.first();

        if (msg.member.hasPermission('MUTE_MEMBERS')) {
            const muteRole = msg.guild.roles.cache.find(role => role.name === 'Mutado');
            const memberRole = msg.guild.roles.cache.find(role => role.name === 'Membro');
            const punishChannel = msg.guild.channels.cache.find(channel => channel.name === 'punição');
        
            if (!member.roles.cache.has(memberRole.id)) {
                if (member === undefined) {
                    const embed = new Discord.MessageEmbed()
                        .setColor(red)
                        .setDescription(`\`Você deve definir o usuário a ser desmutado. (Exemplo: ${prefix}unmute **@user**)\``)
                        .setTimestamp()
                        .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))
                    
                    msg.channel.send(embed).then(m => m.delete({ timeout: 30000 }));

                } else {
                    const embed = new Discord.MessageEmbed()
                        .setTitle('🚨 Punição')
                        .setDescription(`\`Tem certeza que deseja **desmutar**\` <@${member.id}>\`?\``)
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
                                    .setTitle('🚨 Desmutado')
                                    .setDescription(`\`O usuário\` ${member} \`foi desmutado.\``)
                                    .setTimestamp()
                                    .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))
                                
                                punishChannel.send(embed);
                                member.roles.add(memberRole);
                                member.roles.remove(muteRole);
                            
                            } else if (e.emoji.name === '🔴') {
                                m.delete();
                            }
                        });

                        m.delete({ timeout: 30000 })
                    });
                }
            } else {
                const embed = new Discord.MessageEmbed()
                    .setColor(red)
                    .setDescription(`\`O usuário\` ${member} \`não está mutado.\``)
                    .setTimestamp()
                    .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

                msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));
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
}