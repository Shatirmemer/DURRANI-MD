const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "nJxwBSoB#U3kYUydb7tJHG9ac692POVBK_GDe19ryGS5bKR31QOc",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/68L65DB/17aafb1e66c52c22.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM ONLINE I'M DURRANI-MD WHATSAPP BOT 😊♻️",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
AUTO_REACT: process.env.AUTO_REACT || "true",
OWNER_REACT: process.env.OWNER_REACT || "true",
BOT_NAME: process.env.BOT_NAME || "➺𝙵𝙰𝙸𝚂𝙰𝙻-𝙳𝚄𝚁𝚁𝙰𝙽𝙸࿐",
};
