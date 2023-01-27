import { createBot, Intents, startBot } from "./deps.ts";
import { Secret } from "./secret.ts";

const bot = createBot({
  token: Secret.DISCORD_TOKEN,
  intents: Intents.Guilds | Intents.GuildMessages | Intents.MessageContent,
  events: {
    ready: (_bot, payload) => {
      console.log(`${payload.user.username} is ready!`);
    },
  },
});

bot.events.messageCreate = (b, message) => {
  if (message.content === "ぱ") {
    b.helpers.sendMessage(message.channelId, {
      content: "https://imgur.com/eoeCqai",
    });
  } else if (message.content === "ぱんけーき") {
    b.helpers.sendMessage(message.channelId, {
      content: "https://imgur.com/SD0Lcs3",
    });
  }
};

await startBot(bot);
