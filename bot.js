const mqtt = require('mqtt')
const { Telegraf } = require('telegraf')
 
const mqtt_client  = mqtt.connect('mqtt://test.mosquitto.org')
const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => ctx.reply("Welcome! Please don't annoy me too much"))

bot.command('door_bell', (ctx) => {
  mqtt_client.publish('home/ding_dong');
  ctx.reply("Ringing into Stepan's door bell")
});

bot.launch()