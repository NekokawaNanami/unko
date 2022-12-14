const { Client } = require('discord.js-selfbot-v13');
const client = new Client(); // All partials are loaded automatically

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
  await client.channels.cache.get('ChannelID').sendSlash('903541413298450462', 'up');
  await process.exit();
})

client.login('Token');
