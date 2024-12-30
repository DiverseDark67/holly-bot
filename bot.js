const { Client, GatewayIntentBits } = require('discord.js');

//Create a new client instance
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent
	]
});

// Bot token
const token = 'EnterYourBotToken';

//Ready event: triggers when the bot logs in
client.once('ready', () => {
	console.log('Logged in as ${client.user.tag}!'};
});

//Message event: triggers whenever a message is sent in a server
client.on('messageCreate', (message) => {
	//Avoid replying to other bott messages or the bot itself
	if (message.author.bot) return;

	//Specify the channel ID to listen to
	const targetChannelId = 'YOUR_CHANNEL_ID';

	//Check to see if the message is in the specific channel
	if (message.channel.id === targetChannelId) {
		//Reply to message
		message.reply('okay').catch(console.error);
	}
});

// Log the bot in
client.login(token);
