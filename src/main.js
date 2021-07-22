const Discord = require('discord.js');
const bot = new Discord.Client({ ws: { intents: [ Discord.Intents.NON_PRIVILEGED, 'GUILD_MEMBERS' ] } });
const fs = require('fs');
const colors = require('colors');

console.clear();

// Dependencies
const { token } = require('./assets/config.json');
bot.commands = new Discord.Collection();

console.clear();
console.log(`
                        ██████╗  ██████╗ ████████╗
                        ██╔══██╗██╔═══██╗╚══██╔══╝
                        ██████╔╝██║   ██║   ██║   
                        ██╔══██╗██║   ██║   ██║   
                        ██████╔╝╚██████╔╝   ██║   
                        ╚═════╝  ╚═════╝    ╚═╝   
                    
                            Version: 1.0.2b\n\n`.magenta);

// Command handler
console.log('Loading plugins...\n'.yellow)
const commandFolders = fs.readdirSync(__dirname + '/commands');
for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(__dirname + `/commands/${folder}`).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const cmd = require(`./commands/${folder}/${file}`);
        bot.commands.set(cmd.name, cmd);
    }

    console.log(`> Plugin "${folder}" loaded.`.green);
}

// Event handler

const eventsFolder = fs.readdirSync(__dirname + '/events');
for (const events of eventsFolder) {
    const event = require(`./events/${events}`);
    const eventName = events.split('.')[0];
    bot.on(eventName, event.bind(Discord.Message, bot, Discord.GuildMember));
}

// Bot token
console.log('\nConnecting...'.yellow);
bot.login(token);