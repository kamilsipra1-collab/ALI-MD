
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA61U2a6bSBD9l36NFYPNaulKw+YFGy9gG+yZeWhDg9usoRu4OLKUL8hH5ktG2PcmkZJJ7kgDPDRNUXXq9KnzEWQ5JmiOWjD6CIoS15CibknbAoERUKswRCXogQBSCEaAzL2pa3k7RCKU8JYzpSaVs6tVJMmhkF1DqT4IYk7tdn94ArceKKpTgv1fJAwvbuJVnptICxY7y1ZiSZ82sJ4dE6/PNU2ok83AifjAkZ7ArcsIcYmzyCjOKEUlTOaoXUNcvg2+pPiTjSkmBpc4i+XeyhxOZtJFeq2JPJZntpdZF/u6P7XJ7G3w32X68pSrdbivn8V2vNtIp/L6gY+ygj0eV97aMohwMjnX1ZgHfIKjDAWzAGUU0/bNvB+mdb5oiECJj2E/cPrHvmoJqTqvBuX2KOHKLa1VWB7cbPc24EiiK3dbfiirgctP5Ow89a45gdvtMi1al7HT6/60ZYrZehJ/D3xdvmol/i+8VxbDUluIrGtSv7NaOV/Ot0eDpyw8e83eGPj7a5JgsTJd7m3w7fykqSGT1ZI+NexdVB3T+AD3sUXEJhYW7lXOivMEOq63+wYf0qr8FcokwCffzXdqFa7coLYNeRUrEyZssOY2zwtfEDbHNbse5Ge7qGrmOGUoDENxE2+14Mhr/u44ViqLXKR5heKBFRQm3V82T/eOYtTOAjBibz1QoggTWkKK86zbG8o9AIPaQX6J6J1dgHaTVSM4bNI/pnvPwNeCzOiWd7RWoqElTjwtL5nD1j0F8RPogaLMfUQICqaY0LxsLUQIjBABoz/vB9X1XKI0p8jEARgBeTBkJWEgswNW/IO8b86QElgU7zNEQQ+EZZ5aCIxoWaEeuP/ADzWDFyR9rCu6oY95XRqzGqdIQ4lTdYPRuw7TR9EtThGhMC3AiBV5kRnKksDcev8PDlERJEVSWENkhgzLqDxn6LLOMwpvaAOD036Dg7v93QMZeqYPGd/JZ3sgxCWhu6wqkhwGrxp//Qh9P68y6rSZr3ULVILRd9uIUpxFpOusymDpn3GNtK4PMAphQtDX80YlCl57efEwLQ86GU5thzO3rgc67F2iH7gZsdKP9CT3ME5iBY5nWJ6RWFHoArv9Hshglwt8+fT5y6fPf2W/vx+RX5+OyZceO0gBohAnBIyANq/sdyKZGMvqKPi7yUQxIkWLFPCNk9dRe2hZ4U013uZxODD327Oc2MFwpszCSx2Zl4BFc/nAxKyxSc2r8vSTJGAEHFdlm60gFH2dnpDxLHNmy9jjoLmeHbJkrcsOjY10ftEz212oB9fQC0VUaTjl2HlEV1bg8x4Kp1fRiuZWgjbr7HJQo6euWoBq7KPvi6n25rCYL8J6iJcrnWOS+bixG/sia+1wMLNjtN/3p/GJMy8TNC+vWhL7JI0G4nnh5wdja0FfjVJuM98catu0hychjvRL8zCBuwklL+aPX+YT319DjO5e+nJuvz39B/BOpMyt912OF3f+F4dTNytnczQEcyrj/Y4LjzsvaBVtyomcdhgGHq7dpbm0DRP7Dbh101IkkIZ5mYIRgFlQ5ndxlXnVqX6WhfkvimnKbKa/2F8CCVW+TdJPhpNnHlHrMi+mkJzBCAxt+TiUu7FolaJwKKSvgwmU7lprK3D7Bz0zxR3CCAAA", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by ALI-MD", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "923003588997", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐀ɭīī 𝐈𝐍𝅦𝐗īī𝐃𝐄 ‹³策", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "6.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𓆩ု᪳𝐀ɭīī 𝐌Ɗှ᪳𓆪", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/2ka956.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ALI MD ALIVE",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
//not working for the moment do don't on it
GOODBYE: process.env.GOODBYE || "false", //not working for the moment do don't on it
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Asia/Karachi", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
