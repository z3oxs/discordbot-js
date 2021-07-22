<<<<<<< HEAD
const Discord = require('discord.js');
const fetch = require('node-fetch');
const { magenta, red} = require('../../assets/colors.json');
const { prefix } = require('../../assets/config.json');

module.exports = {
    name: 'covid',
    aliases: ['covid19'],
    async execute(bot, msg, args) {
        const query = args[0] === undefined ? 'https://api.covid19api.com/summary' : `https://api.covid19api.com/country/${args[0]}`;

        fetch(query)
            .then(r => r.json())

            .then(d => {
                if (query !== 'https://api.covid19api.com/summary') {
                    const i = d.length - 1;

                    const embed = new Discord.MessageEmbed()
                        .setColor(magenta)
                        .setTitle('🦠 COVID-19')
                        .addFields([
                            {
                                name: '🌎 País',
                                value: `\`${d[i].Country}\``,
                                inline: true
                            },
                            {
                                name: '💳 Código',
                                value: `\`${d[i].CountryCode}\``,
                                inline: true
                            },
                            {
                                name: '😷 Ativos',
                                value: `\`${d[i].Active.toLocaleString('pt-BR')}\``,
                                inline: true
                            },
                            {
                                name: '📈 Confirmados',
                                value: `\`${d[i].Confirmed.toLocaleString('pt-BR')}\``,
                                inline: true
                            },
                            {
                                name: '❤️ Recuperados',
                                value: `\`${d[i].Recovered.toLocaleString('pt-BR')}\``,
                                inline: true
                            },
                            {
                                name: '💔 Mortes',
                                value: `\`${d[i].Deaths.toLocaleString('pt-BR')}\``,
                                inline: true
                            }
                        ])
                        .setTimestamp()
                        .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

                    msg.channel.send(embed);
                
                } else {
                    const date = d.Global.Date;

                    const embed = new Discord.MessageEmbed()
                        .setColor(magenta)
                        .setTitle('🦠 COVID-19')
                        .addFields([
                            {
                                name: '😷 Novos Casos',
                                value: `\`${d.Global.NewConfirmed.toLocaleString('pt-BR')}\``,
                                inline: true
                            },
                            {
                                name: '😷 Confirmados',
                                value: `\`${d.Global.TotalConfirmed.toLocaleString('pt-BR')}\``,
                                inline: true
                            },
                            {
                                name: '❤️ Novos Recuperados',
                                value: `\`${d.Global.NewRecovered.toLocaleString('pt-BR')}\``,
                                inline: true
                            },
                            {
                                name: '❤️ Recuperados',
                                value: `\`${d.Global.TotalRecovered.toLocaleString('pt-BR')}\``,
                                inline: true
                            },
                            {
                                name: '💔 Novos Mortos',
                                value: `\`${d.Global.NewDeaths.toLocaleString('pt-BR')}\``,
                                inline: true
                            },
                            {
                                name: '💔 Mortos',
                                value: `\`${d.Global.TotalDeaths.toLocaleString('pt-BR')}\``,
                                inline: true
                            }
                        ])
                        .setTimestamp()
                        .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))
                        
                    msg.channel.send(embed);
                }
            })

            .catch (() => {
                const embed = new Discord.MessageEmbed()
                    .setColor(red)
                    .setDescription(`\`O país especificado não existe. (Exemplo: ${prefix}covid **br**)\``)
                    .setTimestamp()
                    .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

                msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));
            });
    }
=======
const Discord = require('discord.js');
const fetch = require('node-fetch');
const { magenta, red} = require('../../assets/colors.json');
const { prefix } = require('../../assets/config.json');

module.exports = {
    name: 'covid',
    aliases: ['covid19'],
    async execute(bot, msg, args) {
        const query = args[0] === undefined ? 'https://api.covid19api.com/summary' : `https://api.covid19api.com/country/${args[0]}`;

        fetch(query)
            .then(r => r.json())

            .then(d => {
                if (query !== 'https://api.covid19api.com/summary') {
                    const i = d.length - 1;

                    const embed = new Discord.MessageEmbed()
                        .setColor(magenta)
                        .setTitle('🦠 COVID-19')
                        .addFields([
                            {
                                name: '🌎 País',
                                value: `\`${d[i].Country}\``,
                                inline: true
                            },
                            {
                                name: '💳 Código',
                                value: `\`${d[i].CountryCode}\``,
                                inline: true
                            },
                            {
                                name: '😷 Ativos',
                                value: `\`${d[i].Active.toLocaleString('pt-BR')}\``,
                                inline: true
                            },
                            {
                                name: '📈 Confirmados',
                                value: `\`${d[i].Confirmed.toLocaleString('pt-BR')}\``,
                                inline: true
                            },
                            {
                                name: '❤️ Recuperados',
                                value: `\`${d[i].Recovered.toLocaleString('pt-BR')}\``,
                                inline: true
                            },
                            {
                                name: '💔 Mortes',
                                value: `\`${d[i].Deaths.toLocaleString('pt-BR')}\``,
                                inline: true
                            }
                        ])
                        .setTimestamp()
                        .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

                    msg.channel.send(embed);
                
                } else {
                    const date = d.Global.Date;

                    const embed = new Discord.MessageEmbed()
                        .setColor(magenta)
                        .setTitle('🦠 COVID-19')
                        .addFields([
                            {
                                name: '😷 Novos Casos',
                                value: `\`${d.Global.NewConfirmed.toLocaleString('pt-BR')}\``,
                                inline: true
                            },
                            {
                                name: '😷 Confirmados',
                                value: `\`${d.Global.TotalConfirmed.toLocaleString('pt-BR')}\``,
                                inline: true
                            },
                            {
                                name: '❤️ Novos Recuperados',
                                value: `\`${d.Global.NewRecovered.toLocaleString('pt-BR')}\``,
                                inline: true
                            },
                            {
                                name: '❤️ Recuperados',
                                value: `\`${d.Global.TotalRecovered.toLocaleString('pt-BR')}\``,
                                inline: true
                            },
                            {
                                name: '💔 Novos Mortos',
                                value: `\`${d.Global.NewDeaths.toLocaleString('pt-BR')}\``,
                                inline: true
                            },
                            {
                                name: '💔 Mortos',
                                value: `\`${d.Global.TotalDeaths.toLocaleString('pt-BR')}\``,
                                inline: true
                            }
                        ])
                        .setTimestamp()
                        .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))
                        
                    msg.channel.send(embed);
                }
            })

            .catch (() => {
                const embed = new Discord.MessageEmbed()
                    .setColor(red)
                    .setDescription(`\`O país especificado não existe. (Exemplo: ${prefix}covid **br**)\``)
                    .setTimestamp()
                    .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

                msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));
            });
    }
>>>>>>> 062f6d30c15a44857f4fff07e56cc18cbc7f5e74
}