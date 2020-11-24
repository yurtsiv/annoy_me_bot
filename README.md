# Annoy me bot

Bot username: `@AnnoyStepanBot`

A Telegram bot which allows you to ring into my door bell.

# Running

* `docker pull stepy/annoy-me-bot`
* `docker run -d --env-file .env --publish 8000:8080 stepy/annoy-me-bot`

`.env` file:

```
BOT_TOKEN=<token>
MQTT_BROKER_URL=<url>
```