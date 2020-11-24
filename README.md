# Annoy me bot

A Telegram bot which allows you to ring into my door bell.

# Running

* `docker pull stepy/annoy-me-bot:1.0`
* `docker run --env-file .env --publish 8000:8080 stepy/annoy-me-bot:1.0`

`.env` file:

```
BOT_TOKEN=<token>
MQTT_BROKER_URL=<url>
```