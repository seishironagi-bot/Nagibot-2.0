/* Imagen Search By WillZek
- https://github.com/WillZek
*/

import fetch from 'node-fetch';

let handler = async(m, { conn, text, usedPrefix, command }) => {

if (!text) return m.reply('🍭 Ingrese Un Texto Para Buscar Una Imagen');

try {
let api = `https://api.dorratz.com/v3/ai-image?prompt=${text}`;
let response = await fetch(api);
let json = await response.json();
let res = json.data;

m.react('🕑');
let txt = `> *Resultado De: ${text}*`;
let img = res.image_link;
let link = img;

await conn.sendMessage(m.chat, { image: { url: link }, caption: txt }, {quoted: fkontak});   
m.react('✅');

} catch (e) {
m.reply(`Error: ${e.message}`);
m.react('✖️');
 }
}

handler.help = ['imagen'];
handler.tag = ['buscador'];
handler.command = ['imagen', 'image'];

export default handler;