//Holly-Bot version V1.1.1 - 12/30/2024
const { Client, GatewayIntentBits } = require('discord.js');
const schedule = require('node-schedule'); // Import node-schedule for scheduling tasks

// Create a new client instance
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent // Required for reading messages
    ]
});

// Your bot token
const token = 'YOUR_BOT_TOKEN_HERE';

// Array of random responses
const defaultResponses = [
    "okay",
    "okay",
    "What do you mean by that?",
    "no",
    "Shenanigans...",
    "yes",
    "fine",
    "no problem",
    "understood",
    "JZ House React this guy"
];

// Array of gif responses
const gifResponses = [
    "https://tenor.com/view/kevin-kevin-olson-pointing-finger-kevtechify-gif-1782117470257839659",
    "https://tenor.com/view/kevtechify-sandwich-ospf-network-gif-9445611463973337668",
    "https://tenor.com/view/kevtechify-gif-1133948291341687435",
    "https://tenor.com/view/kaperoo-the-isle-puppy-strawberry-kebab-gif-2297137112253417897",
    "https://tenor.com/view/walking-cat-cat-water-gif-13530083",
    "https://tenor.com/view/cat-cat-drink-water-water-cat-daily-reminder-drink-water-gif-18175012770390304303",
    "https://tenor.com/view/iamtoffie-dog-cake-dogcake-puppycake-puppy-in-fridge-gif-17202106354264547949",
    "https://tenor.com/view/ospf-gif-20198001",
    "https://tenor.com/view/armzzy-zfe-uncle-pete-sir-box-packet-goblin-gif-14669189",
    "https://tenor.com/view/kdo-se-ptal-kdo-se-ptal-ccna-gif-25844168"
];

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    // Schedule a message for 7:00 AM CST every day
    const channelId = 'YOUR_CHANNEL_ID_HERE'; // Replace with your target channel ID
    schedule.scheduleJob('0 7 * * *', 'America/Chicago', async () => {
        const channel = await client.channels.fetch(channelId);
        if (channel) {
            channel.send(gifResponses[5]).catch(console.error);
        } else {
            console.error('Channel not found.');
        }
    });
});

client.on('messageCreate', (message) => {
    if (message.author.bot) return;

    const targetChannelId = 'YOUR_CHANNEL_ID_HERE';
    if (message.channel.id === targetChannelId) {
        // Check if the message contains "hello holly" or "hello"
        const lowerCaseMessage = message.content.toLowerCase();
        if (lowerCaseMessage.includes("hello holly") || lowerCaseMessage === "hello" || lowerCaseMessage === "hi" || lowerCaseMessage === "hey") {
            message.reply("Hello! How can I help you?").catch(console.error);
        }

        //Send a gif
        else if (lowerCaseMessage.includes("gif")) {
            // Generate a random index between 0 and 9
            const randomIndex = Math.floor(Math.random() * 10);
            
            // Reply with a random response
            message.reply(gifResponses[randomIndex]).catch(console.error);
        }

        // Number based response
        else if (lowerCaseMessage.includes("how much") || lowerCaseMessage.includes("how many")) {
            // Generate a random index between 0 and 999
            const randomNumber = Math.floor(Math.random() * 1000);
            const response = `I would say ${randomNumber}`;
            
            // Reply with a random response
            message.reply(response).catch(console.error);
        }

        //Generate a default response
        else {
            // Generate a random index between 0 and 9
            const randomIndex = Math.floor(Math.random() * 10);
            
            // Reply with a random response
            message.reply(defaultResponses[randomIndex]).catch(console.error);
        }
    }
});

client.login(token);
