const Discord = require('discord.js');
const { green, red, yellow } = require('../../assets/colors.json');
const { prefix } = require('../../assets/config.json');

module.exports = {
    name: 'mute',
    aliases: ['mutar'],
    async execute(bot, msg, args) {
        const member = msg.mentions.members.first();
        const timeN = parseInt(args[1]);
        const timeF = args[2];

        if (msg.member.hasPermission('MUTE_MEMBERS')) {
            const muteRole = msg.guild.roles.cache.find(role => role.name === 'Mutado');
            const memberRole = msg.guild.roles.cache.find(role => role.name === '$');
            const punishChannel = msg.guild.channels.cache.find(channel => channel.name === 'punição');

            if (!member.roles.cache.has(muteRole.id)) {
                if (member === undefined) {
                    const embed = new Discord.MessageEmbed()
                        .setColor(red)
                        .setDescription(`\`Você deve definir o usuário a ser punido. (Exemplo: ${prefix}mute **@user** 1 hora)\``)
                        .setTimestamp()
                        .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))
                    
                    msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));

                } else {
                    const embed = new Discord.MessageEmbed()
                        .setTitle('🚨 Punição')
                        .setDescription(`\`Tem certeza que deseja **mutar**\` <@${member.id}>?`)
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
                                    .setTitle('🚨 Mutado')
                                    .setDescription(`\`O usuário\` ${member} \`foi mutado.\``)
                                    .setTimestamp()
                                    .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

                                if (timeN !== undefined && timeF !== undefined) {
                                    if (typeof(timeN) === 'number' && !isNaN(timeN)) {
                                        if (timeF === 'segundo' || timeF === 'segundos') {
                                            embed
                                                .setDescription(`\`O usuário\` ${member} \`foi mutado por ${timeN} ${timeN === 1 ? 'segundo' : 'segundos'}.\``)
                                            
                                            setTimeout(async () => {
                                                const embed = new Discord.MessageEmbed()
                                                    .setColor(green)
                                                    .setTitle('🚨 Desmutado')
                                                    .setDescription(`\`O usuário\` ${member} \`foi desmutado.\``)
                                                    .setTimestamp()
                                                    .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

                                                member.roles.remove(muteRole);
                                                member.roles.add(memberRole);

                                                punishChannel.send(embed);
                                            }, 1000 * timeN);
                                            
                                        } else if (timeF === 'minuto' || timeF === 'minutos') {
                                            embed
                                                .setDescription(`\`O usuário\` ${member} \`foi mutado por ${timeN} ${timeN === 1 ? 'minuto' : 'minutos'}.\``)

                                            setTimeout(() => {
                                                const embed = new Discord.MessageEmbed()
                                                    .setColor(colors.green)
                                                    .setTitle('🚨 Desmutado')
                                                    .setDescription(`\`O usuário\` ${member} \`foi desmutado.\``)
                                                    .setTimestamp()
                                                    .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

                                                member.roles.remove(muteRole);
                                                member.roles.add(memberRole);

                                                punishChannel.send(embed);
                                            }, 60000 * timeN);

                                        } else if (timeF === 'hora' || timeF === 'horas') {
                                            embed
                                                .setDescription(`\`O usuário\` ${member} \`foi mutado por ${timeN} ${timeN === 1 ? 'hora' : 'horas'}.\``)

                                            setTimeout(() => {
                                                const embed = new Discord.MessageEmbed()
                                                    .setColor(green)
                                                    .setTitle('🚨 Desmutado')
                                                    .setDescription(`\`O usuário\` ${member} \`foi desmutado.\``)
                                                    .setTimestamp()
                                                    .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

                                                member.roles.remove(muteRole);
                                                member.roles.add(memberRole);

                                                punishChannel.send(embed);
                                            }, 3600000 * timeN);

                                        } else if (timeF === 'dia' || timeF === 'dias') {
                                            embed
                                                .setDescription(`\`O usuário\` ${member} \`foi mutado por ${timeN} ${timeN === 1 ? 'dia' : 'dias'}.\``)

                                            setTimeout(() => {
                                                const embed = new Discord.MessageEmbed()
                                                    .setColor(green)
                                                    .setTitle('🚨 Desmutado')
                                                    .setDescription(`\`O usuário\` ${member} \`foi desmutado.\``)
                                                    .setTimestamp()
                                                    .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

                                                member.roles.remove(muteRole);
                                                member.roles.add(memberRole);

                                                punishChannel.send(embed);
                                            }, 86400000 * timeN);
                                        }
                                    } else {
                                        const embed = new Discord.MessageEmbed()
                                        .setColor(red)
                                        .setDescription(`\`O formato do tempo deve ser, por exemplo **'2 horas'**.\``)
                                        .setTimestamp()
                                        .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

                                        msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));
                                    }
                                }

                                member.roles.add(muteRole);
                                member.roles.remove(memberRole);
                                punishChannel.send(embed);
                            
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
                            .setDescription(`\`O usuário\` ${member} \`já está mutado.\``)
                            .setTimestamp()
                            .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

                        msg.channel.send(embed).then(msg => msg.delete({ timeout: 5000 }));
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