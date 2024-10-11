const { Telegraf } = require("telegraf");
const TOKEN = "6942301517:AAE5WBMZyH5Mr7SOtS8Rug_e3IOAy_8sEys";
const bot = new Telegraf(TOKEN);

const web_link = "https://etlottocassino.netlify.app";

bot.start((ctx) =>
  ctx.reply("Welcome to ET-Lotto Telegram Mini App: ፈታ ይበሉ - አቦ !", {
    reply_markup: {
      keyboard: [[{ text: "Give your Dream a Chance...", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
