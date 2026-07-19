const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
// Add Your Session Id Start With Kaif-MD Hear is
SESSION_ID: process.env.SESSION_ID || "Kaif-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUl0cFpreTMrY3RaaStMdDNmL2EyenBTV2ZPdEhSRWR6N0Z3WFNpYjQxaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRG1CdFQ4Y21pVzBNL05FSUkzV1dJb0N0YmdnRVlpUFZldU0rbWg5R0pqVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtRm1nWDFiRTU4T3phLzRNdERRb1h5MUl2NFo5WWtHaWJ4MkUvUkZJaVZzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRZDVOb3BIZXZGUTEzMVBsL0RYaXluYkZ1cXRLYm9NNzBFYXRiODJITzJrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitGNGRob2NQL1RvcXZBTlBidFZnWW9wNXZDOWp6dWY1Mi9QbTJWOFJ4WGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imk5anRud3RaTWNOK09qQ2g5Zk54UlBzYUJiZFhJQkRUVjlRRlcwaGIxRms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0cydjhtL3YxQmZzako0QTR0SERGYWF0TTEzdGhTWHVuSG9jWFhRTVRrTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiamUwSFViMFNqSXFZQ1hsRHFvUC9DdUxpQWZad3ZJMFVPR3hJN2NzbjVBRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBjUi9ZNnY1SFpUOER3bnJiMDNKSE12RWFDdWlRNmVPQmFPeHFKZ0ZNQmwyS05xWVZkOUI0R25Sa3RMSVBmeXFsaHdzMVB4QXdvUWQ2OE00aGZrQ0JRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAyLCJhZHZTZWNyZXRLZXkiOiJvZkNzY01sRTZsODdndUdXNEtpWXhXWjR2Y29UK0s1d2ZYWVl1WGlsTlRRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzAzODY1MjA2N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQ0Q0OTdDNzFENDIzMzNFM0Y5NzA3Q0ZCOTdCN0NFNCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzg0NDMxOTk3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMwMzg2NTIwNjdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUM5NjI2NkI1NDEwRjk2QzEzQ0RFRDA3REFCRjRENDkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc4NDQzMTk5N30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMDM4NjUyMDY3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDRDZGQ0U0MkExMTg2NkI3NDczRUQyMzg3ODdEQzIwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3ODQ0MzE5OTh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzAzODY1MjA2N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzJGNkRFODE5MzlBNkM5NzUwQTk2MjU1MEZFRjA1MSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzg0NDMxOTk4fV0sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjIsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IllVUFJBREVWIiwibWUiOnsiaWQiOiI5MjMwMzg2NTIwNjc6MkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE4NTkyOTkwNjA1NzMyODoyQGxpZCIsIm5hbWUiOiLihKJBRFMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pLVXN2SUhFTzJLOGRJR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlhEUTh1WU44aitiUDlIRVNGcWdianVOcVhRdjBjM3VQL2pJbjZwMkZkMWM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkZ2b0hEb2hVWTlnai9VcitieDVISmdaamNGbnJycFVRRUx0VlVvelN0MkI2TXlNZ2x5aUtSc056dlVvYkNuRk92MTB3T09YV0RVMHQ3elFINFBrK0NBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJGbGF2QlZQblJEUG5YNS9UNEhQZmlXUFZVZFF2SUZTRlgxQVFaVktrTFFqaDRtWWd6Rm1QZnBiTHJLWTMwSWVwZ1BvdGZiekRHWkgzekNRSjZmSENBUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzAzODY1MjA2NzoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZ3MFBMbURmSS9tei9SeEVoYW9HNDdqYWwwTDlITjdqLzR5SitxZGhYZFgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlEUWdGIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc4NDQzMTk5NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMZHoifQ==",
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







