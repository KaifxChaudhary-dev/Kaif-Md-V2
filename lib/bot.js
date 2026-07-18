const fs = require('fs');
if (fs.existsSync('bot.env')) require('dotenv').config({ path: './bot.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
BOT_URL: process.env.BOT_URL || "https://raw.githubusercontent.com/ArslanMDofficial/ARSLAN-MD-DATA/refs/heads/main/datafile.json",
AUTO_SITE: process.env.AUTO_SITE || "https://arslan-apis.vercel.app",
BAND_URL: process.env.BAND_URL || "https://raw.githubusercontent.com/ArslanMDofficial/ARSLAN-MD-DATA/refs/heads/main/bandusers.json",
REPO_LINK: process.env.REPO_LINK || "https://github.com/KaifxChaudhary-dev/Kaif-Md-V2",
REPO_NAME: process.env.REPO_NAME || "Kaif-MD",
BOT_NAME: process.env.BOT_NAME || "Kaif-MD",
DESCRIPTION: process.env.DESCRIPTION || "Kaif MD PAKISTANI POWERFULL WHATSAPP BOT",
OWNER_NUMBER: process.env.OWNER_NUMBER || "923466859436",
OWNER_NAME: process.env.OWNER_NAME || "Kaif-MD Official",
ST_SAVE: process.env.ST_SAVE || "Kaif-MD-STATUS-SERVER",
BIO_TEXT: process.env.BIO_TEXT || "Kaif-MD-BY-Kaif-OFFICIAL",
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*`STATUS SEEN BY Kaif-MD`* _*POWERD BY*_ *Kaif-MD Official Whtsapp Bot*",
FOOTER: process.env.FOOTER || "KIRA-MD",
COPYRIGHT: process.env.COPYRIGHT || "*㋛ Kaif-MD BY Kaif-MD OFFICIAL*",
VERSION: process.env.VERSION || "9.0.0",
NEWSLETTER: process.env.NEWSLETTER || "120363410230117027@newsletter",
WA_CHANNEL: process.env.WA_CHANNEL || "https://whatsapp.com/channel/0029VbDMt1C3rZZaigDWAj1X",
INSTA: process.env.INSTA || "https://Instagram.com/exotic.kaif_46",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qhcwb6.png",
OWNER_IMG: process.env.OWNER_IMG || "https://files.catbox.moe/qhcwb6.png",
CONVERT_IMG: process.env.CONVERT_IMG || "https://files.catbox.moe/qhcwb6.png",
AI_IMG: process.env.AI_IMG || "https://files.catbox.moe/qhcwb6.png",
SEARCH_IMG: process.env.SEARCH_IMG || "https://files.catbox.moe/qhcwb6.png",
DOWNLOAD_IMG: process.env.DOWNLOAD_IMG || "https://files.catbox.moe/qhcwb6.png,
MAIN_IMG: process.env.MAIN_IMG || "https://files.catbox.moe/qhcwb6.png",
GROUP_IMG: process.env.GROUP_IMG || "https://files.catbox.moe/qhcwb6.png",
FUN_IMG: process.env.FUN_IMG || "hhttps://files.catbox.moe/qhcwb6.png",
TOOLS_IMG: process.env.TOOLS_IMG || "https://files.catbox.moe/qhcwb6.png",
OTHER_IMG: process.env.OTHER_IMG || "https://files.catbox.moe/qhcwb6.png",
MOVIE_IMG: process.env.MOVIE_IMG || "https://files.catbox.moe/qhcwb6.png",
NEWS_IMG: process.env.NEWS_IMG || "https://files.catbox.moe/qhcwb6.png",
PP_IMG: process.env.PP_IMG || "https://files.catbox.moe/qhcwb6.png"
};
