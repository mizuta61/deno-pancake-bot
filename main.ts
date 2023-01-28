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

const pattern = /^ぱ$|ぱんけーき|パンケーキ|ぱんけーき|ホットケーキ|pancake/;
const pancake_urls = [
  "https://imgur.com/eoeCqai",
  "https://imgur.com/SD0Lcs3",
  "https://imgur.com/VH9zxjl",
  "https://imgur.com/RdYjOS1",
];

bot.events.messageCreate = (b, message) => {
  if (pattern.test(message.content)) {
    b.helpers.sendMessage(message.channelId, {
      content: pancake_urls[Math.floor(Math.random() * pancake_urls.length)],
    });
  }
};

await startBot(bot);
