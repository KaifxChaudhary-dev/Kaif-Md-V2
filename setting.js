const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
// Add Your Session Id Start With Kaif-MD Hear is
SESSION_ID: process.env.SESSION_ID || "Kaif-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0hxUCt3c1YrbVoxc0lhSDIwN2g2WDlJSFk4Qy9FNFNYRGMrMTFsRGRuST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibDg5MlowQWwxU3JPYzFoZjJiUDVJc25kOHB5Y0JwWkpVV2RlM2lkN21EMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRR05ZYjNRbUpUR0pQQnJhYlRGQTVNbDJ1SE81aEZWcDdTZkV2dS94T2xNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQQ2h3ZmoyeGxQelFwY3Nlak4vN3dza3ZpbkJoRXFhMEkyeGpEVE9LaHhRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndJOHdZcXNpWFVIcUZpd05uZG9EUWw2Wkg1M1JLc0hSM0xvYlpYY0V2VmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlUvNU5vakxxK1BRR1lGSjhLa0FVSEZPYUVBRDZnWTFLYitrTExsOHVGVjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU04TWpBTnBtN3U4Tk16aXhqMFZ2dVJUWlI1TDdqSUNYQ3hBVng0elpGRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQWExU1dkb1pHa2FBM0VKZ3lOZVZqcjhwSHBaRDFVT3Z6c1FqejR5UUxIcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRkNGN2N0JZRzdiOFNTaERSY3ZKRXova1NDWUFDT2FPVVJVd3hsamFEcjJQZStqeGltSXR5djdkOUVvQ3ZZSG9ENmVjMkdhU2poZGN0dllsdVJMWml3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NCwiYWR2U2VjcmV0S2V5IjoiR2FWNmJRWUM1dGFVeXJJZ2JDWGtPemRWN3pDK1BPaGx1cnZMQU9XOHIxdz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjgxMywiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjgxMywiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJZVVBSQURFViIsIm1lIjp7ImlkIjoiOTIzNDUzNjg0MDYxOjIyQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjEzNjg4MDk1MTM4MDIzOjIyQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSXVNMjhjQkVNbTI3OUlHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSHVZSzJ3R1lMWE5IN0tiMlhlUmMvcnB0YTdmUDZadWVTYVNERmhWMVpVWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNUIycGt0VS9peU5XMnJUK0Q4K28ySjUyMjJxWTA0d0ZYSy9uMXBUZnFNekduRXRJSW5aNy9aRm9pU1R0cFlEZXpOV1hHQkNFUEFKMlNVemtNZVdkRFE9PSIsImRldmljZVNpZ25hdHVyZSI6IldCWnRoYW5Dby9BVDFYNzNUQjlJWGFGR3VObk1hSnRHVGVWQ2c1UTFFQyswcDRrRHN1T0VuZlUrRm5RQkQ5Mi9kMnlNQVFtdDFNTXBwaDltRlUrYmhRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzNDUzNjg0MDYxOjIyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlI3bUN0c0JtQzF6Uit5bTlsM2tYUDY2Yld1M3orbWJua21rZ3hZVmRXVkcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lEUWdDIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc4NDQwNDgyNn0=",
// Kaif MD Api Site Url
API_BASE: process.env.API_BASE || "https://arslan-apis.vercel.app/",
// Kaif MD Api Key -- Add This To Your Api Key Form Api Site
API_KEY: process.env.API_KEY || "arslanmdofficialadmin",
// Auto Status Seen
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Kaif-MD 🤍*",

AUTO_BIO: process.env.AUTO_BIO || "true",
// true if want welcome msg in groups
GOODBYE: process.env.GOODBYE || "false",
// true if want goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
PREFIX: process.env.PREFIX || ".",
// add your prefix for bot   
BOT_NAME: process.env.BOT_NAME || "Kaif-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Kaif-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923466859436",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "Kaif x Chaudhary Official",

SEND_WELCOME: process.env.SEND_WELCOME || "true",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "true",
// make true for auto read message
READ_CMD_ONLY: process.env.READ_CMD_ONLY || "true",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti Calls
ANTI_CALL: process.env.ANTI_CALL || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "true",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
 //Bot olways offline
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923466859436",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",

ANTI_BOT: process.env.ANTI_BOT || "true",
// true for anti once view 

ANTI_DELETE: process.env.ANTI_DELETE || "true",
// true for anti delete 
ANTI_DELETE_TYPE: process.env.ANTI_DELETE_TYPE || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
// make it true for auto recoding 
AUTO_BLOCK: process.env.AUTO_BLOCK || "false"
// make it true for auto block
};







