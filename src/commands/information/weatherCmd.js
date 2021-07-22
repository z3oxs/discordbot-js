<<<<<<< HEAD
const Discord = require('discord.js');
const { magenta, red } = require('../../assets/colors.json');
const { prefix } = require('../../assets/config.json');
const fetch = require('node-fetch');

module.exports = {
    name: 'weather',
    aliases: ['temperatura', 'meteorologia'],
    async execute(bot, msg, args) {
        if (args[0] !== undefined) {
            const city = args.reduce((a, c) => `${a} ${c}`);

            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=YOURTOKENHERE`)
                .then(r => r.json())

                .then(d => {
                    const embed = new Discord.MessageEmbed()
                        .setColor(magenta)
                        .setTitle(`⛅ ${d.name}`)
                        .addFields([
                            {
                                name: '🌎 País',
                                value: `\`${d.sys.country}\``,
                                inline: true
                            },
                            {
                                name: '⛄ Clima',
                                value: `\`${d.weather[0].main}\``,
                                inline: true
                            },
                            {
                                name: '🌡️ Temperatura',
                                value: `\`${Math.floor(d.main.temp - 273.15)} °C\``,
                                inline: true
                            },
                            {
                                name: '🌡️ Máxima',
                                value: `\`${Math.floor(d.main.temp_max - 273.15)} °C\``,
                                inline: true
                            },
                            {
                                name: '🌡️ Mínima',
                                value: `\`${Math.floor(d.main.temp_min - 273.15)} °C\``,
                                inline: true
                            },
                            {
                                name: '🗜️ Pressão',
                                value: `\`${d.main.pressure}\``,
                                inline: true
                            },
                            {
                                name: '💧 Umidade',
                                value: `\`${d.main.humidity}%\``,
                                inline: true
                            },
                            {
                                name: '💨 Vento',
                                value: `\`${Math.fround(d.wind.speed * 1.6).toFixed(2)} KM/h\``,
                                inline: true
                            }
                        ])
                        .setTimestamp()
                        .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

                    msg.channel.send(embed);
                })

                .catch(() => {
                    const embed = new Discord.MessageEmbed()
                        .setColor(red)
                        .setDescription(`\`Não foi possível encontrar esta cidade.\``)
                        .setTimestamp()
                        .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

                    msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));
                });
        } else {
            const embed = new Discord.MessageEmbed()
                .setColor(red)
                .setDescription(`\`Você deve especificar a cidade. (Exemplo: ${prefix}weather **Cidade**)\``)
                .setTimestamp()
                .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

            msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));
        }
    }
=======
const Discord = require('discord.js');
const { magenta, red } = require('../../assets/colors.json');
const { prefix } = require('../../assets/config.json');
const fetch = require('node-fetch');

module.exports = {
    name: 'weather',
    aliases: ['temperatura', 'meteorologia'],
    async execute(bot, msg, args) {
        if (args[0] !== undefined) {
            const city = args.reduce((a, c) => `${a} ${c}`);

            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=YOURTOKENHERE`)
                .then(r => r.json())

                .then(d => {
                    const embed = new Discord.MessageEmbed()
                        .setColor(magenta)
                        .setTitle(`⛅ ${d.name}`)
                        .addFields([
                            {
                                name: '🌎 País',
                                value: `\`${d.sys.country}\``,
                                inline: true
                            },
                            {
                                name: '⛄ Clima',
                                value: `\`${d.weather[0].main}\``,
                                inline: true
                            },
                            {
                                name: '🌡️ Temperatura',
                                value: `\`${Math.floor(d.main.temp - 273.15)} °C\``,
                                inline: true
                            },
                            {
                                name: '🌡️ Máxima',
                                value: `\`${Math.floor(d.main.temp_max - 273.15)} °C\``,
                                inline: true
                            },
                            {
                                name: '🌡️ Mínima',
                                value: `\`${Math.floor(d.main.temp_min - 273.15)} °C\``,
                                inline: true
                            },
                            {
                                name: '🗜️ Pressão',
                                value: `\`${d.main.pressure}\``,
                                inline: true
                            },
                            {
                                name: '💧 Umidade',
                                value: `\`${d.main.humidity}%\``,
                                inline: true
                            },
                            {
                                name: '💨 Vento',
                                value: `\`${Math.fround(d.wind.speed * 1.6).toFixed(2)} KM/h\``,
                                inline: true
                            }
                        ])
                        .setTimestamp()
                        .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

                    msg.channel.send(embed);
                })

                .catch(() => {
                    const embed = new Discord.MessageEmbed()
                        .setColor(red)
                        .setDescription(`\`Não foi possível encontrar esta cidade.\``)
                        .setTimestamp()
                        .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

                    msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));
                });
        } else {
            const embed = new Discord.MessageEmbed()
                .setColor(red)
                .setDescription(`\`Você deve especificar a cidade. (Exemplo: ${prefix}weather **Cidade**)\``)
                .setTimestamp()
                .setFooter(msg.author.tag, msg.author.avatarURL({ dynamic: true }))

            msg.channel.send(embed).then(m => m.delete({ timeout: 5000 }));
        }
    }
>>>>>>> 062f6d30c15a44857f4fff07e56cc18cbc7f5e74
}