const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *DURRANI-MD*

> *DURRANI-MD REPO:*
*|* *https://github.com/Shatirmemer/DURRANI-MD*

> *SUPPORT GROUP:*
*|* *.......................................................*
*╰──────────────●●►*

> *POWERED BY FAISAL DURRANI*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363232588171807@newsletter',
      newsletterName: "FAISAL DURRANI",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'DURRANI-MD',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/Shatirmemer/DURRANI-MD" ,
thumbnailUrl: "https://i.ibb.co/68L65DB/17aafb1e66c52c22.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
