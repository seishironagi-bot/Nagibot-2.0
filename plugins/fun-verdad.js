const handler = async (m, {conn}) => {
  conn.reply(m.chat, `*◤ ────「 𝚅 𝙴 𝚁 𝙳 𝙰 𝙳 」──── ◥*

*⚄︎.- ${pickRandom(global.verdad)}*

*◣ ──「 ```CrowBot``` 」── ◢*
  `, m);
};
handler.help = ['verdad'];
handler.tags = ['fun'];
handler.command = /^verdad/i;
export default handler;

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

global.verdad = [
  // Preguntas soft:
  '¿Con quién experimentaste el amor de verdad?',
  '¿Cómo sería tu cita perfecta?',
  '¿Cuál es tu mayor miedo en la vida?',
  '¿Cuántas veces te han rechazado?',
  '¿Cuál es tu mayor inseguridad?',
  '¿Eres realmente feliz?',
  '¿Sientes que ya cumpliste tu objetivo en la vida?',
  '¿A los cuántos años fue tu primer amor?',
  '¿Alguna vez has tenido una _"aventura"_ con alguien?',
  '¿Te gustaría repetir los últimos 5 años de tu vida?',
  'Actualmente, ¿Quién es la persona más influyente de tu vida?',
  '¿Cuál es tu mayor logro?',
  '¿Te sientes capaz de cumplir todos tus sueños?',
  '¿Cuál es tu más grande sueño?',
  '¿Qué te atrae del sexo opuesto?',
  '¿Qué es lo que le quita lo atractivo a tu sexo opuesto?',
  '¿Qué te causa desagrabilidad en las personas?',
  '¿Tienes alguna enfermedad heredada?',
  '¿Alguna vez has rechazado a alguien? ¿Por qué?',
  '¿Cuál ha sido el momento más vergonzoso de tu vida?',
  '¿Qué logros haz obtenido este año?',
  '¿Cuál es tu peor hábito en el colegio?',
  '¿Cuál es tu peor hábito en tu casa?',
  '¿Te consideras una persona feliz? ¿Por qué?',
  '¿Cuál es la peor cosa que alguien ha inventado sobre ti?',
  '¿Te importan mucho las opiniones ajenas?',
  '¿Qué es lo primero que ves cuando miras a una persona de tu sexo opuesto?',
  '¿Qué es lo que te impide continuar una conversación con alguien?',
  '¿Que es lo mas tonto que has hecho en tu vida?',
  '¿Cómo te gustaría que fuera el último día de tu vida?',
  '¿A qué edad te gustaría fallecer?',
  '¿De verdad amas a tu familia? ¿Por qué?',
  '¿Qué rasgo de ti te gustaría cambiar? ¿Por qué?',
  '¿Qué rasgo de tu amig@ te gustaría cambiar? ¿Por qué?',
  '¿Qué harías si tu novi@ te critica el aspecto físico?',
  '¿En qué piensas antes de dormir?',
  '¿Tienes algún talento oculto? ¿Cuál?',
  '¿Haz manipulado gente para tu beneficio? ¿Por qué?',
  '¿Odias alguna parte de tu cuerpo? ¿Cuál? ¿Por qué?',
  '¿Cuál es tu pasatiempo favorito?',
  'Para ti, ¿Qué es ser feliz?',
  'Define a tu persona con una sola palabra y explica los detalles',
  '¿Alguna película te ha hecho llorar? ¿Cuál?',
  '¿Alguna canción te ha hecho llorar? ¿Cuál?',
  '¿Cuál es tu mayor secreto hasta ahora?',
  '¿Qué ha sido lo más loco que haz hecho por una persona del sexo opuesto?',
  '¿Qué es lo más desagradable que has experimentado?',
  '¿Crees en el amor a primera vista?',
  '¿Cuál sería tu superpoder ideal?',
  '¿Alguien te ha hecho cambiar?',
  '¿Ya tuviste tu _"desarrollo de personaje_"? ¿Cómo fue?',
  '¿Alguna vez has robado algo?',
  '¿Tienes miedo a morir? ¿Por qué?',
  '¿Cuándo fue la última vez que lloraste? ¿Por qué?',
  '¿Cuáles son tus habilidades especiales?',
  '¿Cómo te puede gustar la persona que te gusta?',
  '¿Cómo sabes cuando estás enamorado de una persona?',
  '¿Tienes un gusto culposo? ¿Cuál?',
  '¿Te gustaría casarte algún día?',
  'En tu opinión, ¿Cuál es el peor trabajo que purdes tener? Justifica tu respuesta.',
  '¿Eres virgen?',
  '¿Alguna vez has esperado que la relación de alguien se rompiera? ¿Por qué?',
  '¿Prefieres más amigas o amigos? ¿Por qué?',
  '¿Cómo fue tu mejor cita?',
  '¿Cómo sería _"Tu cita ideal"_?',
  '¿Quién es tu ejemplo a seguir?',
  '¿Te haz enamorado de tu mejor amig@?',
  '¿A los cuántos años fue tu _"primera vez"_?',
  '¿A los cuántos años fue tu primer beso?',
  '¿Cuál ha sido la mejor relación que haz tenido, y por qué se terminó?',
  '¿Te gustaría ser famoso? ¿Por qué?',
  '¿Alguna vez te enamoraste en secreto de algún docente?',
  '¿Cómo te ves en 10 años?',
  '¿Quieres tener hijos?',
  '¿Odias a alguien? ¿Por qué?',
  '¿Actualmente te gusta alguien? ¿Quién y por qué?',
  '¿Ya comiste?',
  '¿Quién es la persona más molesta entre tus amigos? Di la razón.',
  '¿Te gustaría volver a vivir tu niñez? ¿Por qué?',
  '¿Tuviste alguna relación con una ex-pareja de tu amig@?',
  '¿Haz tenido una relación con la pareja de tu amig@?',
  '¿Padre o madre?',
  '¿Eres introvertido, o extrovertido?',
  '¿Alguna vez te han hecho un halago exagerado?',
  '¿Cuál es la peor forma con la que te han querido ligar?',
  '¿Qué es lo primero que harías si te despertaras como alguien del sexo opuesto?',
  '¿Haz resolvido todos tus problemas?',
  '¿Alguna vez dudaste de tu sexualidad?',
  '¿Cuál es la razón más absurda por la que haz terminado una relación?',
  '¿Cuál es el peor hábito que tienes?',
  '¿Cuál crees que es tu mejor característica?',
  '¿Cuál crees que es tu peor característica?',
  '¿Qué es lo más valiente que haz hecho?',
  'Si tuvieras la oportunidad de cambiarte el mombre, ¿Cuál sería tu nuevo nombre?',
  '¿Tienes algún sueño recurrente? ¿Cuál?',
  '¿Cuál sería tu manera de ganar dinero ilegalmente?',
  '¿Sigues haciendo cosas infantiles? ¿Cuáles?',
  '¿Te gustaría ser alguien de tu sexo opuesto?',
  '¿Qué es lo que más te impresiona de la gente?',
  '¿Que es lo que más te decepciona de la gente?',
  '¿Cuál sería una razón por la que irías a prisión?',
  'Si fueras un presidente, ¿Qué ley promulgarías primero?',
  '¿A qué celebridad de gustaría concer en persona?',
  '¿Resucitarías a un muerto? ¿Quién y por qué?',
  '¿Cuál es el mayor error de tu vida?',
  '¿Ya tomaste agua?',
  '¿Haz cometido algún delito?',
  '¿Haz estado en prisión?',
  '¿Crees en la unión libre?',
  '¿Haz tenido un "casi algo"?',
  '¿Alguien te ha traumado?',
  'Si tuvieras la posibilidad de borrar algún acto que hiciste en el pasado, ¿Cuál sería y por qué?',
  '¿Qué es lo peor que le has hecho a alguien?',
  '¿Qué artista/celebridad te atrae y por qué?',
  '¿Actualmente te gusta algún integrante en este chat?',
  '¿Tienes algún amorío/romance con algún integrante de este chat?',
  '¿Ya bañaste?',
  '¿Cuál es tu fantasía sexual más oscura?',
  '¿Tienes algún fetiche? ¿Cuál?',
  '¿Cuál es el mejor regalo que haz recibido?',
  '¿Cuál es la mayor desilusión de tu vida?',
  '(Hombres) ¿Te sientes cómodo con tu _"tamaño"_?',
  'De este chat, ¿A quién te gustaría ver desnud@?',
  '¿Por qué eres amigo de tu amigo?',
  '¿Alguna vez has tenido un sueño erótico con algún integrante de este chat? ¿Quién?',
  '¿Cómo sería tu tatuaje ideal?',
  'Para ti, ¿Qué es más importante en una relación? ¿El sexo, o el amor?',
  '¿Crees que el sexo es genial, bueno, bueno, divertido a veces, o realmente no te importa?',
  '¿Qué te hace realmente amar a alguien?',
  '¿Qué animal se adapta mejor a ti y por qué?',
  '¿Cuál ha sido tu peor cita?',
  '¿Te gustaría besar a alguien ahora? ¿A quién?',
  '¿Te consideras una persona _"fiel"_?',
  '¿Cómo fue tu primer romance adolescente?',
  '¿Cómo te enamoraste por primera vez?',
  '¿Con qué celebridad te gustaría tomar un café?',
  '¿Prefieres cosas materiales, o sentimentales?',
  'De este chat, ¿Quién consideras que es el más atractivo físicamente?',
  'De este chat, ¿Con quién tendrías una _"aventura"_?',
  'De este chat, ¿A quién consideran como el más divertido?',
  '¿Cuál ha sido la experiencia más vergonzosa que has tenido en una cita?',
  '¿Ha estado alguna vez en contacto con drogas?',
  '¿Cuándo fue la última vez que estuviste ebrio?',
  '¿Alguna vez has hecho trampa en un examen escolar?',
  '¿Has robado algo en el pasado?',
  '¿Roncas por la noche?',
  '¿Cuales tu cancion favorita?',
  '¿Tienes un apodo? ¿Cuál?',
  '¿Cuánto tiempo pasas mirándote en el espejo?',
  // Preguntas de índole sexual:
  '(Mujeres) ¿El _"tamaño"_ importa?',
  '¿Cuántas veces a la semana / mes tiene relaciones sexuales y con qué frecuencia desea tener relaciones sexuales?',
  '¿Con cuántas parejas sexuales te has acostado?',
  '¿Cuántas veces te masturbas a la semana?',
  '¿Cómo, dónde y con quién fue tu _"primera vez"_?',
  '¿Qué importancia tienen para ti los _"juegos previos prolongados_"?',
  '¿Qué debe hacer un hombre o una mujer para provocarte sexualmente?',
  '¿Alguna vez has tenido sexo con un amigo cercano?',
  '¿Tienes alguna posición sexual favorita? ¿Cuál?',
  '¿Arriba o abajo?',
  '¿Alguna vez practicaste sexo oral?',
  '¿Peluda o depilada?',
  '¿Haz tenido alguna videollamada hot?',
  '¿Haz hecho intercambios de _"pack"_?',
  '¿Cuándo fue la última vez que tuviste sexo?',
  '¿Te gusta el sexo casual?',
  '¿Disfrutas de tu sexualidad?',
  '¿Cuál ha sido el lugar más raro donde haz tenido relaciones sexuales?',
  '¿Cuál es el lugar más raro donde te gustaría tener relaciones sexuales?',
  '¿Haz mirado pornografía con tu pareja?',
  '¿Tienes algún juguete sexual entre tus pertenencias?',
  '¿Prefieres parado, o acostado?',
  '¿Con la luz encendida, o apagada?',
  '¿Prefieres lento y romántico, o duro y agresivo?',
  '¿Te consideras alguien sexualmente dominante?',
  'De los integrantes de este chat, ¿Con quién te gustaría tener relaciones?',
  // Preguntas piteras
  'Si no fueras pendejo, ¿Qué te gustaría ser?',
  '¿Tienes carro?',

];