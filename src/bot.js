require('dotenv').config();

const mqtt = require('mqtt')
const { Telegraf } = require('telegraf')

const {
  BOT_TOKEN,
  MQTT_BROKER_URL
} = process.env;

const mqtt_client = mqtt.connect(MQTT_BROKER_URL)

const bot = new Telegraf(BOT_TOKEN)
bot.start((ctx) => ctx.reply("Welcome! Please don't annoy me too much"))

bot.command('door_bell', (ctx) => {
  if (!mqtt_client.connected) {
    ctx.reply('What a shame! The bot is not functioning (no connection with MQTT broker)')
  } else {
    mqtt_client.publish('home/ding_dong', 'test', {}, (err) => {
      ctx.reply(err ? err.message : `Ringing into Stepan's door bell`);
    });
  }
});

bot.launch()
  .then(() => console.log('Bot started'))
  .catch(e => console.error('Failed to start the bot', e))
