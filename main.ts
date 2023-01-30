import { createBot, Intents, startBot } from "./deps.ts";
import { secrets } from "./secret.ts";

const bot = createBot({
  token: secrets.DISCORD_TOKEN,
  intents: Intents.Guilds | Intents.GuildMessages | Intents.MessageContent,
  events: {
    ready: (_bot, payload) => {
      console.log(`${payload.user.username} is ready!`);
    },
  },
});

export const checkMessage = (messageContent: string): boolean => {
  const pattern =
    /^(ぱ|(けき))$|(ぱん|パン)[けケ][ー\-〜\~]*[きキ]|(pan|hot)cake/i;
  return pattern.test(messageContent);
};

const pancakeUrls = [
  "https://imgur.com/eoeCqai",
  "https://imgur.com/SD0Lcs3",
  "https://imgur.com/VH9zxjl",
  "https://imgur.com/RdYjOS1",
];

bot.events.messageCreate = (b, message) => {
  if (message.isFromBot) return;
  if (checkMessage(message.content)) {
    b.helpers.sendMessage(message.channelId, {
      content: pancakeUrls[Math.floor(Math.random() * pancakeUrls.length)],
    });
  }
};

await startBot(bot);
