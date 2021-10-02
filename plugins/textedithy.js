const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'textedit', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/dCrPuyu.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `🍀 ᴄᴏᴍᴍᴀɴᴅ : ```.ᴅᴇᴠɪʟ``` 
ᴍᴀᴋᴇs ᴅᴇᴠɪʟ ᴛʜᴇᴍᴇᴅ ʟᴏɢᴏ._
🐼 ᴇxᴀᴍᴘʟᴇ : *.ᴛᴇxᴛᴅᴇᴠɪʟ ʜʏᴘᴇʀ*

🍀 ᴄᴏᴍᴍᴀɴᴅ : ```.ʙᴇᴀʀ``` 
🌈 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ : ᴍᴀᴋᴇs ʟᴏɢᴏ ᴡɪᴛʜ ʙᴇᴀʀ ɪᴄᴏɴ._
🐼 ᴇxᴀᴍᴘʟᴇ : *.ᴛᴇxᴛʙᴇᴀʀ ʜʏᴘᴇʀ*

🍀 ᴄᴏᴍᴍᴀɴᴅ : ```.ᴡᴏʟғ``` 
🌈 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ : ᴍᴀᴋᴇs ʟᴏɢᴏ ᴡɪᴛʜ ᴡᴏʟғ ɪᴄᴏɴ._
🐼 ᴇxᴀᴍᴘʟᴇ : *.ᴛᴇxᴛᴡᴏʟғ ʜʏᴘᴇʀ;ʙᴏᴛ*

🍀 ᴄᴏᴍᴍᴀɴᴅ : ```.ɴᴇᴏɴ```
🌈 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ : ᴍᴀᴋᴇs ʟᴏɢᴏ ᴡɪᴛʜ ɴᴇᴏɴ ᴇғғᴇᴄᴛ._
🐼 ᴇxᴀᴍᴘʟᴇ : *.ɴᴇᴏɴ ʜʏᴘᴇʀ*

🍀 ᴄᴏᴍᴍᴀɴᴅ : ```.ғᴜᴛᴜʀᴇ``` 
🌈 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ : ᴍᴀᴋᴇs ʟᴏɢᴏ ᴡɪᴛʜ sᴇᴄᴏɴᴅ ɴᴇᴏɴ ᴇғғᴇᴄᴛ._
🐼 ᴇxᴀᴍᴘʟᴇ : *.ғᴜᴛᴜʀᴇ ʜʏᴘᴇʀ*

🍀 ᴄᴏᴍᴍᴀɴᴅ : ```.2ɴᴇᴏɴ``` 
🌈 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ : ᴍᴀᴋᴇs ᴀ ᴛʜɪʀᴅ ɴᴇᴏɴ ᴛʜᴇᴍᴇᴅ ʟᴏɢᴏ._
🐼 ᴇxᴀᴍᴘʟᴇ : *.2ɴᴇᴏɴ ʜʏᴘᴇʀ*

🍀 ᴄᴏᴍᴍᴀɴᴅ : ```.3ɴᴇᴏɴ``` 
🌈 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ : ᴍᴀᴋᴇs ᴀ ғᴏᴜʀᴛʜ ɴᴇᴏɴ-ᴛʜᴇᴍᴇᴅ ʟᴏɢᴏ._
🐼 ᴇxᴀᴍᴘʟᴇ : *.3ɴᴇᴏɴ ʜʏᴘᴇʀ*

🍀 ᴄᴏᴍᴍᴀɴᴅ : ```.ʟɪɢʜᴛ``` 
🌈 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ : ᴍᴀᴋᴇs ʟɪɢʜᴛɴɪɴɢ ᴛʜᴇᴍᴇᴅ ʟᴏɢᴏ._
🐼 ᴇxᴀᴍᴘʟᴇ : *.ʟɪɢʜᴛ ʜʏᴘᴇʀ*

🍀 ᴄᴏᴍᴍᴀɴᴅ : ```.ᴊᴏᴋᴇʀ``` 
🌈 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ : ᴍᴀᴋᴇs ᴊᴏᴋᴇʀ ᴛʜᴇᴍᴇᴅ ʟᴏɢᴏ._
🐼 ᴇxᴀᴍᴘʟᴇ : *.ᴊᴏᴋᴇʀ ʜʏᴘᴇʀ*

🍀 ᴄᴏᴍᴍᴀɴᴅ : ```.ɴɪɴᴊᴀ``` 
🌈 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ : ᴍᴀᴋᴇs ɴɪɴᴊᴀ ᴛʜᴇᴍᴇᴅ ʟᴏɢᴏs._
🐼 ᴇxᴀᴍᴘʟᴇ : *.ɴɪɴᴊᴀ ʜʏᴘᴇʀ;ʙᴏᴛ*

🍀 ᴄᴏᴍᴍᴀɴᴅ : ```.ɢʟɪᴛᴛᴇʀ``` 
🌈 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ : ᴍᴀᴋᴇs ɢʟɪᴛᴛᴇʀ ᴛʜᴇᴍᴇᴅ ʟᴏɢᴏ._
🐼 ᴇxᴀᴍᴘʟᴇ : *.ɢʟɪᴛᴛᴇʀ ʜʏᴘᴇʀ*

🍀 ᴄᴏᴍᴍᴀɴᴅ : ```.ʙᴏᴋᴇʜ``` 
🌈 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ : ᴍᴀᴋᴇs ʟᴏɢᴏ ᴡɪᴛʜ ʙᴏᴋᴇʜ ᴇғғᴇᴄᴛ._
🐼 ᴇxᴀᴍᴘʟᴇ : *.ʙᴏᴋᴇʜ ʜʏᴘᴇʀ*

🍀 ᴄᴏᴍᴍᴀɴᴅ : ```.ᴍᴀʀᴠᴇʟ``` 
🌈 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ : ᴍᴀᴋᴇs ʙʟᴀᴄᴋ ᴀɴᴅ ᴡʜɪᴛᴇ ᴍᴀʀᴠᴇʟ ʟᴏɢᴏ._
🐼 ᴇxᴀᴍᴘʟᴇ : *.ᴍᴀʀᴠᴇʟ ʜʏᴘᴇʀ;ʙᴏᴛ*

🍀 ᴄᴏᴍᴍᴀɴᴅ : ```.2ᴍᴀʀᴠᴇʟ``` 
🌈 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ : ᴍᴀᴋᴇs ᴄᴏʟᴏʀғᴜʟ ᴍᴀʀᴠᴇʟ ʟᴏɢᴏ._
🐼 ᴇxᴀᴍᴘʟᴇ : *.2ᴍᴀʀᴠᴇʟ ʜʏᴘᴇʀ;ʙᴏᴛ*

🍀 ᴄᴏᴍᴍᴀɴᴅ : ```.ᴀᴠᴇɴɢᴇʀs``` 
🌈 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ : ᴍᴀᴋᴇs ᴛʜᴇ ᴀᴠᴇɴɢᴇʀs ʟᴏɢᴏ._
🐼 ᴇxᴀᴍᴘʟᴇ : *.ᴀᴠᴇɴɢᴇʀs ʜʏᴘᴇʀ;ʙᴏᴛ*

🍀 ᴄᴏᴍᴍᴀɴᴅ : ```.ɢʀᴀғ``` 
🌈 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ : ᴍᴀᴋᴇs ɢʀᴀғғɪᴛɪ ᴛʜᴇᴍᴇᴅ ʟᴏɢᴏ._
🐼 ᴇxᴀᴍᴘʟᴇ : *.ɢʀᴀғ ʜʏᴘᴇʀ;ʙᴏᴛ*

🍀 ᴄᴏᴍᴍᴀɴᴅ : ```.2ɢʀᴀғ``` 
🌈 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ : ᴍᴀᴋᴇs ᴀ sᴇᴄᴏɴᴅ ɢʀᴀғғɪᴛɪ ᴛʜᴇᴍᴇᴅ ʟᴏɢᴏ._
🐼 ᴇxᴀᴍᴘʟᴇ : *.2ɢʀᴀғ ʜʏᴘᴇʀ;ʙᴏᴛ*

🍀 ᴄᴏᴍᴍᴀɴᴅ : ```.ʟɪᴏɴ``` 
🌈 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ : ᴍᴀᴋᴇs ʟɪᴏɴ ᴛʜᴇᴍᴇᴅ ʟᴏɢᴏ._
🐼 ᴇxᴀᴍᴘʟᴇ : *.ʟɪᴏɴ ʜʏᴘᴇʀ;ʙᴏᴛ*

🍀 ᴄᴏᴍᴍᴀɴᴅ : ```.ɪᴄᴇ``` 
🌈 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ : ᴍᴀᴋᴇs ɪᴄᴇ ᴛʜᴇᴍᴇᴅ ʟᴏɢᴏ._
🐼 ᴇxᴀᴍᴘʟᴇ : *.ɪᴄᴇ ʜʏᴘᴇʀ*

🍀 ᴄᴏᴍᴍᴀɴᴅ : ```.sᴘᴀᴄᴇ``` 
🌈 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ : ᴍᴀᴋᴇs sᴘᴀᴄᴇ ᴛʜᴇᴍᴇᴅ ʟᴏɢᴏ._
🐼 ᴇxᴀᴍᴘʟᴇ : *.sᴘᴀᴄᴇ ʜʏᴘᴇʀ;ʙᴏᴛ*

🍀 ᴄᴏᴍᴍᴀɴᴅ : ```.sᴍᴏᴋᴇ``` 
🌈 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ : ᴍᴀᴋᴇs ʟᴏɢᴏ ᴡɪᴛʜ sᴍᴏᴋᴇ ᴇғғᴇᴄᴛ._
🐼 ᴇxᴀᴍᴘʟᴇ : *.sᴍᴏᴋᴇ ʜʏᴘᴇʀ*

🍀 ᴄᴏᴍᴍᴀɴᴅ : ```.ɢʟᴏᴡ``` 
🌈 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ : ᴍᴀᴋᴇs ᴀ ɢʟᴏᴡ ᴛʜᴇᴍᴇᴅ ʟᴏɢᴏ._
🐼 ᴇxᴀᴍᴘʟᴇ : *.ɢʟᴏᴡ ʜʏᴘᴇʀ*

🍀 ᴄᴏᴍᴍᴀɴᴅ : ```.ғɪʀᴇ``` 
🌈 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ : ᴍᴀᴋᴇs ғʟᴀᴍᴇ ᴛʜᴇᴍᴇᴅ ʟᴏɢᴏ._
🐼 ᴇxᴀᴍᴘʟᴇ : *.ғɪʀᴇ ʜʏᴘᴇʀ*

🍀 ᴄᴏᴍᴍᴀɴᴅ : ```.ʜᴀʀʀʏ``` 
🌈 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ : ᴍᴀᴋᴇs ᴀ ʜᴀʀʀʏ ᴘᴏᴛᴛᴇʀ ᴛʜᴇᴍᴇᴅ ʟᴏɢᴏ._
🐼 ᴇxᴀᴍᴘʟᴇ : *.ʜᴀʀʀʏ ʜʏᴘᴇʀ*

🍀 ᴄᴏᴍᴍᴀɴᴅ : ```.ᴄᴜᴘ``` 
🌈 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ : ᴍᴀᴋᴇs ᴀ ᴄᴜᴘ ᴛʜᴇᴍᴇᴅ ʟᴏɢᴏ._
🐼 ᴇxᴀᴍᴘʟᴇ : *.ᴄᴜᴘ ʜʏᴘᴇʀ*

🍀 ᴄᴏᴍᴍᴀɴᴅ : ```.ᴄᴇᴍᴇᴛᴇʀʏ``` 
🌈 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ : ᴍᴀᴋᴇs ᴀ ᴄᴇᴍᴇᴛᴇʀʏ ᴛʜᴇᴍᴇᴅ ʟᴏɢᴏ._
🐼 ᴇxᴀᴍᴘʟᴇ : *.ᴄᴇᴍᴇᴛᴇʀʏ ʜʏᴘᴇʀ*

🍀 ᴄᴏᴍᴍᴀɴᴅ : ```.ɢʟɪᴛᴄʜ``` 
🌈 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ : ᴍᴀᴋᴇs ʟᴏɢᴏ ᴡɪᴛʜ ɢʟɪᴛᴄʜ ᴇғғᴇᴄᴛ._
🐼 ᴇxᴀᴍᴘʟᴇ : *.ɢʟɪᴛᴄʜ ʜʏᴘᴇʀ;*



📱ᴄᴏᴍᴍᴀɴᴅ : .ʙʀᴇᴀᴋ
💎ᴅᴇsᴄ : ᴄʜᴀɴɢᴇ ʏᴏᴜʀ ᴛᴇxᴛ ᴛᴏ ᴡᴀʟʟ ʙʀᴇᴀᴋɪɴɢ ɪᴍᴀɢᴇ.

📱ᴄᴏᴍᴍᴀɴᴅ : .ᴘʜᴜʙ
💎ᴅᴇsᴄ : ᴄʜᴀɴɢᴇ ʏᴏᴜʀ ᴛᴇxᴛ ɪɴᴛᴏ ᴘᴏʀɴʜᴜʙ ʟᴏɢᴏ.
🏷️ᴇxᴀᴍᴘʟᴇ : .ᴘʜᴜʜ ʙᴏᴛ;x.

📱ᴄᴏᴍᴍᴀɴᴅ : .ʙʟᴏᴏᴅ
💎ᴅᴇsᴄ : ᴄʜᴀɴɢᴇ ʏᴏᴜʀ ᴛᴇxᴛ ғʀᴏᴢᴇɴ ʙʟᴏᴏᴅ ᴏɴ ᴀ ɢʟᴀss

📱ᴄᴏᴍᴍᴀɴᴅ : .1917
💎ᴅᴇsᴄ : ᴄʜᴀɴɢᴇ ʏᴏᴜʀ ᴛᴇxᴛ ᴛᴏ ᴀ 1917 ᴍᴏᴅᴇʟ ɪᴍᴀɢᴇ

📱ᴄᴏᴍᴍᴀɴᴅ : .ᴀᴠᴇɴɢᴇʀs
💎ᴅᴇsᴄ : ᴄʜᴀɴɢᴇ ʏᴏᴜʀ ᴛᴇxᴛ ᴛᴏ ᴀᴠᴀɴɢᴇʀs ʟᴏɢᴏ
🏷️ᴇxᴀᴍᴘʟᴇ : .ᴀᴠᴇɴɢᴇʀs ɪᴛs;ʙᴏᴛ x.

📱ᴄᴏᴍᴍᴀɴᴅ : .ʙᴏxᴇᴅ
💎ᴅᴇsᴄ : ᴄʜᴀɴɢᴇ ʏᴏᴜʀ ᴛᴇxᴛ ᴛᴏ 3ᴅ ʙᴏxᴇᴅ ᴅᴇsɪɢɴ

📱ᴄᴏᴍᴍᴀɴᴅ : .ᴡɪɴᴅᴏᴡ
💎ᴅᴇsᴄ : ᴡʀɪᴛᴇ ʏᴏᴜʀ ᴛᴇxᴛ ᴏɴ ᴀ ғᴏɢɢʏ ᴡɪɴᴅᴏᴡ 

📱ᴄᴏᴍᴍᴀɴᴅ : .sᴋʏᴡᴀʟ
💎ᴅᴇsᴄ : ʀᴀɴᴅᴏᴍ sᴋʏ ᴡᴀʟʟᴘᴀᴘᴇʀ ᴡɪᴛʜ ɢɪᴠᴇɴ ᴛᴇxᴛ

📱ᴄᴏᴍᴍᴀɴᴅ : .ʜᴏʟᴏ
💎ᴅᴇsᴄ : ᴄʜᴀɴɢᴇ ʏᴏᴜʀ ᴛᴇxᴛ ᴛᴏ ʜᴏʟᴏ ᴅᴇsɪɢɴ

📱ᴄᴏᴍᴍᴀɴᴅ : .ᴅʀᴏᴘ
💎ᴅᴇsᴄ : ᴄʜᴀɴɢᴇ ʏᴏᴜʀ ᴛᴇxᴛ ɪɴᴛᴏ ʀᴀɪɴ ᴡᴀᴛᴇʀ ᴅʀᴏᴘ.ɴ
📱ᴄᴏᴍᴍᴀɴᴅ : .ғʟᴀᴍᴇ
💎ᴅᴇsᴄ : ᴛᴇxᴛ ᴡɪᴛʜ ғɪʀᴇ ᴇғғᴇᴄᴛ.

📱ᴄᴏᴍᴍᴀɴᴅ : .ᴠᴛᴇxᴛ
💎ᴅᴇsᴄ : ᴛᴇxᴛ ᴛᴏ ᴠɪᴅᴇᴏ.

📱ᴄᴏᴍᴍᴀɴᴅ : .ᴘᴛᴇxᴛ
💎ᴅᴇsᴄ : ᴛᴇxᴛ ᴛᴏ ᴠɪᴅᴇᴏ.

📱ᴄᴏᴍᴍᴀɴᴅ : .ᴄᴏʟᴏʀᴛᴇxᴛ
💎ᴅᴇsᴄ : ᴛᴇxᴛ ᴛᴏ ᴄᴏʟᴏʀғᴜʟʟ ᴠɪᴅᴇᴏ

📱ᴄᴏᴍᴍᴀɴᴅ : .ᴄʟᴏᴜᴅ
💎ᴅᴇsᴄ : ᴛᴇxᴛ ᴏɴ ᴄʟᴏᴜᴅ

📱ᴄᴏᴍᴍᴀɴᴅ : .2ɴɪɴᴊᴀ
💎ᴅᴇsᴄ : ʀᴀɴᴅᴏᴍ ɴɪɴᴊᴀ ʟᴏɢᴏ ᴡɪᴛʜ ɢɪᴠᴇɴ ɴᴀᴍᴇ.
`}) 

})); 
