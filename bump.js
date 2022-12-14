const { Client } = require('discord.js-selfbot-v13');
const client = new Client(); // All partials are loaded automatically

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
  await client.channels.cache.get('ChannelID').sendSlash('302050872383242240', 'bump');
  await process.exit();
})

client.login('Token');
