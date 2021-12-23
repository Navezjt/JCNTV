/* 
Guía rápida:
    'nombre': {                 (Nombre objeto/canal, no repetir entre señales debe ser único)
        'name': 'nombre'        (Nombre canal a mostrar en botón y barra que dirige a su origen cuando activo)
        'code': 'url'           (Code se utiliza cuando se trata de contenido que va dentro de un iframe (un embed directo))
    SINO SE CUENTA CON URL PARA FORMATO "code" UTILIZAR "m3u"
        'm3u': 'url'            (M3U se utiliza cuando se utilizan enlaces .m3u8, no listas m3u solo canales individuales)
        'source': 'url'         (Source es el enlace de origen de la señal, a modo de transparencia y libertad de abandonar la página si solo se quiere continuar con dicha señal, si se extra una señal ya sea tipo "code" o "m3u8" de www.pagina-ejemplo.cl debe de ponerse www.pagina-ejemplo.cl en "source")
    }

by Alplox 
https://github.com/Alplox
*/

const channels = {
//ELECCIONES
    /* 'decidechile': {
        'name': 'decidechile.cl <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español, elecciones, presidenciales, conteo votos</span>',
        'code': 'https://live.decidechile.cl/#/ev/2021.12/ct/2021.12.P/',
        'source': 'https://live.decidechile.cl/'
    },
    'servelelecciones': {
        'name': 'servelelecciones.cl <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español, elecciones, presidenciales, conteo votos</span>',
        'code': 'https://servelelecciones.cl/',
        'source': 'https://servelelecciones.cl/'
    },
    'tips': {
        'name': 'Vaya a votar (si quiere) <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español, elecciones, presidenciales, conteo votos</span>',
        'code': 'https://alplox.github.io/tele/assets/js/archivo.html',
        'source': 'https://alplox.github.io/tele/'
    },
    'servel': {
        'name': 'Servicio Electoral de Chile <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español, elecciones, presidenciales, conteo votos</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCB8s6rETjmWgXrp_BxyXqdg&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCB8s6rETjmWgXrp_BxyXqdg'
    }, */
// Canales
    'tv-peru': {
        'name': 'TVPerú <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, español</span>',
        'm3u': 'https://cdnh8.iblups.com/hls/R9WtilpKKB.m3u8',
        'source': 'https://www.tvperu.gob.pe/play'
    },
    'tv-peru-noticias': {
        'name': 'TVPerú Noticias <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, español</span>',
        'm3u': 'http://cdnh8.iblups.com/hls/RMuwrdk7M9.m3u8',
        'source': 'https://www.tvperu.gob.pe/play'
    },
    'tv-peru-noticias-yt': {
        'name': 'TVPerú Noticias YT <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCkZCoc42IipR1ucqJmIehsA&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCkZCoc42IipR1ucqJmIehsA'
    },
    'antares-tv': {
        'name': 'Antares TV <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, español</span>',
        'm3u': 'https://5c3fb01839654.streamlock.net:554/iptvantares/liveantarestv/playlist.m3u8',
        'source': 'http://antarestvradio.com/tvonline.html'
    },
    'panamericana': {
        'name': 'Panamericana TV <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, español</span>',
        'm3u': 'https://cdnh71.iblups.com/hls/ptv2.m3u8',
        'source': 'https://panamericana.pe/tvenvivo'
    },
    'panamericana-dm': {
        'name': 'Panamericana TV DM <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, español</span>',
        'code': 'https://geo.dailymotion.com/player/x5poh.html?video=x774s7s&autoplay=true',
        'source': 'https://panamericana.pe/tvenvivo'
    },
    'uci': {
        'name': 'UCI <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, español</span>',
        'm3u': 'https://mediastreamm.com:3449/live/mlecaroslive.m3u8',
        'source': 'https://uci.pe/envivo'
    },
    'uci-yt': {
        'name': 'UCI YT <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCdl1ygFwPa6lUdNYPLjoAGg&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCdl1ygFwPa6lUdNYPLjoAGg'
    },
    'atv': {
        'name': 'ATV <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, español</span>',
        'm3u': 'https://d2tr4gdfol9ja.cloudfront.net/atv/smil:atv.smil/playlist.m3u8',
        'source': 'https://www.atv.pe/envivo-atv'
    },
    'atv-plus': {
        'name': 'ATV Más <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, español</span>',
        'm3u': 'https://d2tr4gdfol9ja.cloudfront.net/atv/smil:atv-mas.smil/playlist.m3u8',
        'source': 'https://www.atv.pe/envivo-atv'
    },
    'andes-tv': {
        'name': 'Andes TV <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, español</span>',
        'm3u': 'https://stmv1.voxhdnet.com/tvsicuani/tvsicuani/playlist.m3u8',
        'source': 'https://radiosicuani.com/ANDESTV/'
    },
    'turbo-mix': {
        'name': 'Turbo Mix <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, español</span>',
        'm3u': 'https://7.innovatestream.pe:19360/turbomixoficial/turbomixoficial.m3u8',
        'source': 'https://www.turbomix.com.pe/'
    },    
    'pbo-radio': {
        'name': 'PBO Radio <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCgR0st4ZLABi-LQcWNu3wnQ&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCgR0st4ZLABi-LQcWNu3wnQ'
    },     
    'santa-rosa': {
        'name': 'Radio Santa Rosa <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCIGV0oiNkdK2-tnf10DNp2A&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCIGV0oiNkdK2-tnf10DNp2A'
    },
    'willax': {
        'name': 'Willax <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, español</span>',
        'code': 'https://geo.dailymotion.com/player/x5poh.html?video=x7x4dgx&autoplay=true',
        'source': 'https://willax.tv/en-vivo/'
    },
    'latina-noticias': {
        'name': 'Latina Noticias <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCpSJ5fGhmAME9Kx2D3ZvN3Q&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCpSJ5fGhmAME9Kx2D3ZvN3Q'
    },
// ARGENTINA
    'tn': {
        'name': 'Todonoticias <img src="assets/svg/paises/argentina.svg" alt="bandera Argentina" title="Argentina"><span hidden>Argentina, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCj6PcyLvpnIRT_2W_mwa9Aw&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCj6PcyLvpnIRT_2W_mwa9Aw'
    },
    'c5n': {
        'name': 'C5N <img src="assets/svg/paises/argentina.svg" alt="bandera Argentina" title="Argentina"><span hidden>Argentina, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCFgk2Q2mVO1BklRQhSv6p0w&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCFgk2Q2mVO1BklRQhSv6p0w'
    },
    'america-tv': {
        'name': 'América TV <img src="assets/svg/paises/argentina.svg" alt="bandera Argentina" title="Argentina"><span hidden>Argentina, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/2Vyx4ee2Tss?autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UC6NVDkuzY2exMOVFw4i9oHw'
    },
    'net-tv': {
        'name': 'Net TV <img src="assets/svg/paises/argentina.svg" alt="bandera Argentina" title="Argentina"><span hidden>Argentina, español</span>',
        'code': 'https://rudo.video/live/nettv?volume=0&mute=1',
        'source': 'https://www.canalnet.tv/page/senal-en-vivo'
    },
    'tv-publica-arg': {
        'name': 'Televisión Pública <img src="assets/svg/paises/argentina.svg" alt="bandera Argentina" title="Argentina"><span hidden>Argentina, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCs231K71Bnu5295_x0MB5Pg&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCs231K71Bnu5295_x0MB5Pg'
    },
    'cronica-tv': {
        'name': 'Crónica TV <img src="assets/svg/paises/argentina.svg" alt="bandera Argentina" title="Argentina"><span hidden>Argentina, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCT7KFGv6s2a-rh2Jq8ZdM1g&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCT7KFGv6s2a-rh2Jq8ZdM1g'
    },
    'el-siete-tv': {
        'name': 'El Siete TV <img src="assets/svg/paises/argentina.svg" alt="bandera Argentina" title="Argentina"><span hidden>Argentina, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UC64ZNqX0FQHabP8iIkmnR3A&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UC64ZNqX0FQHabP8iIkmnR3A'
    },
    'a24': {
        'name': 'A24 <img src="assets/svg/paises/argentina.svg" alt="bandera Argentina" title="Argentina"><span hidden>Argentina, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCR9120YBAqMfntqgRTKmkjQ&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCR9120YBAqMfntqgRTKmkjQ'
    },
    'la-nacion': {
        'name': 'LA NACION <img src="assets/svg/paises/argentina.svg" alt="bandera Argentina" title="Argentina"><span hidden>Argentina, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCba3hpU7EFBSk817y9qZkiA&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCba3hpU7EFBSk817y9qZkiA'
    },
// COLOMBIA
    'el-tiempo': {
        'name': 'EL TIEMPO <img src="assets/svg/paises/colombia.svg" alt="bandera Colombia" title="Colombia"><span hidden>Colombia, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCe5-b0fCK3eQCpwS6MT0aNw&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCe5-b0fCK3eQCpwS6MT0aNw'
    },
    'noti-caracol': {
        'name': 'Noticias Caracol <img src="assets/svg/paises/colombia.svg" alt="bandera Colombia" title="Colombia"><span hidden>Colombia, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UC2Xq2PK-got3Rtz9ZJ32hLQ&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UC2Xq2PK-got3Rtz9ZJ32hLQ'
    },
    'red-mas-noticias': {
        'name': 'RED MÁS Noticias <img src="assets/svg/paises/colombia.svg" alt="bandera Colombia" title="Colombia"><span hidden>Colombia, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCpcvsK0UAI3MIHsjjj3CgMg&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCpcvsK0UAI3MIHsjjj3CgMg'
    },
// CHILE
   '24-horas': {
        'name': '24 horas <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCTXNz3gjAypWp3EhlIATEJQ&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCTXNz3gjAypWp3EhlIATEJQ'
    },  
    'meganoticias': {
        'name': 'Meganoticias <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCkccyEbqhhM3uKOI6Shm-4Q&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCkccyEbqhhM3uKOI6Shm-4Q'
    },
    't13': {
        'name': 'T13 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCsRnhjcUCR78Q3Ud6OXCTNg&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCsRnhjcUCR78Q3Ud6OXCTNg'
    },
// VENEZUELA
    'globovision': {
        'name': 'Globovisión En Vivo <img src="assets/svg/paises/venezuela.svg" alt="bandera Venezuela" title="Venezuela"><span hidden>Venezuela, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCfJtBtmhnIyfUB6RqXeImMw&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCfJtBtmhnIyfUB6RqXeImMw'
    },
    'vpitv': {
        'name': 'VPItv <img src="assets/svg/paises/venezuela.svg" alt="bandera Venezuela" title="Venezuela"><span hidden>Venezuela, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCVFiIRuxJ2GmJLUkHmlmj4w&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCVFiIRuxJ2GmJLUkHmlmj4w'
    },
    'telesur-tv': {
        'name': 'teleSUR tv <img src="assets/svg/paises/venezuela.svg" alt="bandera Venezuela" title="Venezuela"><span hidden>Venezuela, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCbHFKMtqLYkIBRiPHJwxu_w&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCbHFKMtqLYkIBRiPHJwxu_w'
    },   
// MEXICO
    'MILENIO': {
        'name': 'MILENIO <img src="assets/svg/paises/mexico.svg" alt="bandera Mexico" title="Mexico"><span hidden>Mexico, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCFxHplbcoJK9m70c4VyTIxg&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCFxHplbcoJK9m70c4VyTIxg'
    },
// HONDURAS
    'hch-vivo': {
        'name': 'HCH En Vivo <img src="assets/svg/paises/honduras.svg" alt="bandera Honduras" title="Honduras"><span hidden>Honduras</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCIs6fmAXOI1K2jgkoBdWveg&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCIs6fmAXOI1K2jgkoBdWveg'
    },        
// ESPAÑA
    'rtve': {
        'name': 'RTVE Noticias <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UC7QZIf0dta-XPXsp9Hv4dTw&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UC7QZIf0dta-XPXsp9Hv4dTw'
    },
    'cnn-español': {
        'name': 'CNN en Español <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UC_lEiu6917IJz03TnntWUaQ&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UC_lEiu6917IJz03TnntWUaQ'
    },
// BRASIL
    'cnn-brasil': {
        'name': 'CNN Brasil <img src="assets/svg/paises/brasil.svg" alt="bandera Brasil" title="Brasil"><span hidden>Brasil, Portugues</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCvdwhh_fDyWccR42-rReZLw&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCvdwhh_fDyWccR42-rReZLw'
    },
// ESTADOS UNIDOS
    'cnn-us': {
        'name': 'CNN US <img src="assets/svg/paises/us.svg" alt="bandera US" title="US"><span hidden>Estados unidos, inglés</span>',
        'm3u': 'https://cnn-cnninternational-1-de.samsung.wurl.com/manifest/playlist.m3u8',
        'source': 'https://us.cnn.com'
    },
    'telemundo': {
        'name': 'Noticias Telemundo <img src="assets/svg/paises/us.svg" alt="bandera US" title="US"><span hidden>Estados unidos, ingles</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCRwA1NUcUnwsly35ikGhp0A&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCRwA1NUcUnwsly35ikGhp0A'
    },
    'sky-news': {
        'name': 'Sky News <img src="assets/svg/paises/us.svg" alt="bandera US" title="US"><span hidden>Estados unidos, ingles</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCoMdktPbSTixAyNGwb-UYkQ&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCoMdktPbSTixAyNGwb-UYkQ'
    },
    'newsmax': {
        'name': 'Newsmax <img src="assets/svg/paises/us.svg" alt="bandera US" title="US"><span hidden>Estados unidos, ingles</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCx6h-dWzJ5NpAlja1YsApdg&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCx6h-dWzJ5NpAlja1YsApdg'
    },
    'fox-news-now': {
        'name': 'NewsNOW from FOX <img src="assets/svg/paises/us.svg" alt="bandera US" title="US"><span hidden>Estados unidos, ingles</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCJg9wBPyKMNA5sRDnvzmkdg&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCJg9wBPyKMNA5sRDnvzmkdg'
    },
    'abc7': {
        'name': 'ABC7 <img src="assets/svg/paises/us.svg" alt="bandera US" title="US"><span hidden>Estados unidos, ingles</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCVxBA3Cbu3pm8w8gEIoMEog&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCVxBA3Cbu3pm8w8gEIoMEog'
    },
    'abc7-swfl': {
        'name': 'ABC7 SWFL <img src="assets/svg/paises/us.svg" alt="bandera US" title="US"><span hidden>Estados unidos, ingles</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCq9e_hCv2jvgck8WowW1NXg&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCq9e_hCv2jvgck8WowW1NXg'
    },
    'nbcla': {
        'name': 'NBCLA <img src="assets/svg/paises/us.svg" alt="bandera US" title="US"><span hidden>Estados unidos, ingles</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCSWoppsVL0TLxFQ2qP_DLqQ&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCSWoppsVL0TLxFQ2qP_DLqQ'
    },   
    'nbc-news': {
        'name': 'NBC News <img src="assets/svg/paises/us.svg" alt="bandera US" title="US"><span hidden>Estados unidos, ingles</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCeY0bbntWzzVIaj2z3QigXg&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCeY0bbntWzzVIaj2z3QigXg'
    },
    'record-news': {
        'name': 'Record News <img src="assets/svg/paises/us.svg" alt="bandera US" title="US"><span hidden>Estados unidos, ingles</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCuiLR4p6wQ3xLEm15pEn1Xw&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCuiLR4p6wQ3xLEm15pEn1Xw'
    },
// FRANCIA        
    'euronews-esp': {
        'name': 'euronews (Español) <img src="assets/svg/paises/francia.svg" alt="bandera Francia" title="Francia"><span hidden>Francia, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCyoGb3SMlTlB8CLGVH4c8Rw&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCyoGb3SMlTlB8CLGVH4c8Rw'
    },
    'euronews-eng': {
        'name': 'euronews (English) <img src="assets/svg/paises/francia.svg" alt="bandera Francia" title="Francia"><span hidden>Francia, ingles</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCSrZ3UV4jOidv8ppoVuvW9Q&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCSrZ3UV4jOidv8ppoVuvW9Q'
    },
    'euronews-ru': {
        'name': 'euronews Русский <img src="assets/svg/paises/francia.svg" alt="bandera Francia" title="Francia"><span hidden>Francia, ruso/span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCFzJjgVicCtFxJ5B0P_ei8A&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCFzJjgVicCtFxJ5B0P_ei8A'
    },
    'france-24-esp': {
        'name': 'FRANCE 24 Español <img src="assets/svg/paises/francia.svg" alt="bandera Francia" title="Francia"><span hidden>Francia, español/span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCUdOoVWuWmgo1wByzcsyKDQ&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCUdOoVWuWmgo1wByzcsyKDQ'
    },
    'france-24-eng': {
        'name': 'FRANCE 24 English <img src="assets/svg/paises/francia.svg" alt="bandera Francia" title="Francia"><span hidden>Francia, ingles/span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCQfwfsi5VrQ8yKZ-UWmAEFg&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCQfwfsi5VrQ8yKZ-UWmAEFg'
    },
    'france-info': {
        'name': 'franceinfo <img src="assets/svg/paises/francia.svg" alt="bandera Francia" title="Francia"><span hidden>Francia, frances/span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCO6K_kkdP-lnSCiO3tPx7WA&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCO6K_kkdP-lnSCiO3tPx7WA'
    },
// RUSIA
    'RT-español': {
        'name': 'RT en Español <img src="assets/svg/paises/rusia.svg" alt="bandera Rusia" title="Rusia"><span hidden>Rusia, español/span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UC2mtXUpAYLYJIZ2deSPhlqw&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UC2mtXUpAYLYJIZ2deSPhlqw'
    },
    'RT-español2': {
        'name': 'RT en vivo <img src="assets/svg/paises/rusia.svg" alt="bandera Rusia" title="Rusia"><span hidden>Rusia, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCEIhICHOQOonjE6V0SLdrHQ&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCEIhICHOQOonjE6V0SLdrHQ'
    },
    'RT-News': {
        'name': 'RT News <img src="assets/svg/paises/rusia.svg" alt="bandera Rusia" title="Rusia"><span hidden>Rusia, ingles</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCpwvZwUam-URkxB7g4USKpg&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCpwvZwUam-URkxB7g4USKpg'
    },
    'RT-america': {
        'name': 'RT America <img src="assets/svg/paises/rusia.svg" alt="bandera Rusia" title="Rusia"><span hidden>Rusia, ingles</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCczrL-2b-gYK3l4yDld4XlQ&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCczrL-2b-gYK3l4yDld4XlQ'
    },
// CHINA
    'live-chino': {
        'name': '民視直播 FTVN Live 53 <img src="assets/svg/paises/china.svg" alt="bandera China" title="China"><span hidden>China, Taiwan, chino</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UClIfopQZlkkSpM1VgCFLRJA&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UClIfopQZlkkSpM1VgCFLRJA'
    },
    'live-chino-2': {
        'name': '三立LIVE新聞 <img src="assets/svg/paises/china.svg" alt="bandera China" title="China"><span hidden>China, Taiwan, chino</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UC2TuODJhC03pLgd6MpWP0iw&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UC2TuODJhC03pLgd6MpWP0iw'
    },
    'live-chino-3': {
        'name': '三立iNEWS <img src="assets/svg/paises/china.svg" alt="bandera China" title="China"><span hidden>China, Taiwan, chino</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCoNYj9OFHZn3ACmmeRCPwbA&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCoNYj9OFHZn3ACmmeRCPwbA'
    },
    'live-chino-4': {
        'name': ' <img src="assets/svg/paises/china.svg" alt="bandera China" title="China"><span hidden>China, Taiwan, chino</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCmH4q-YjeazayYCVHHkGAMA&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCmH4q-YjeazayYCVHHkGAMA'
    },
    'live-chino-5': {
        'name': '華視新聞 CH52 <img src="assets/svg/paises/china.svg" alt="bandera China" title="China"><span hidden>China, Taiwan, chino</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCDCJyLpbfgeVE9iZiEam-Kg&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCDCJyLpbfgeVE9iZiEam-Kg'
    },
    'live-chino-6': {
        'name': '中天電視 <img src="assets/svg/paises/china.svg" alt="bandera China" title="China"><span hidden>China, Taiwan, chino</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UC5l1Yto5oOIgRXlI4p4VKbw&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UC5l1Yto5oOIgRXlI4p4VKbw'
    },
// VARIOS
    'dw': {
        'name': 'DW Español 🌍<span hidden>Alemania, español/span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCT4Jg8h03dD0iN3Pb5L0PMA&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCT4Jg8h03dD0iN3Pb5L0PMA'
    },
    'trt-world': {
        'name': 'TRT World 🌍<span hidden>Turquia, ingles</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UC7fWeaHhqgM4Ry-RMpM2YYw&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UC7fWeaHhqgM4Ry-RMpM2YYw'
    },
    'al-jazeera': {
        'name': 'Al Jazeera English 🌍<span hidden>Catar, arabe</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCNye-wNBqNL5ZzHSJj3l8Bg&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCNye-wNBqNL5ZzHSJj3l8Bg'
    },
    'al-jazeera-arabe': {
        'name': 'AlJazeera Channel قناة الجزيرة 🌍<span hidden>Catar, arabe</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCfiwzLy-8yKzIbsmZTzxDgw&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCfiwzLy-8yKzIbsmZTzxDgw'
    },
    'cna': {
        'name': 'CNA 🌍<span hidden>Singapur, ingles</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UC83jt4dlz1Gjl58fzQrrKZg&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UC83jt4dlz1Gjl58fzQrrKZg'
    },
    'news-nigeria': {
        'name': 'TVC News Nigeria 🌍<span hidden>Nigeria, ingles</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCgp4A6I8LCWrhUzn-5SbKvA&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCgp4A6I8LCWrhUzn-5SbKvA'
    },
    'HK-apple-daily': {
        'name': 'HK Apple Daily 🌍<span hidden>Hong Kong, chino</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCeqUUXaM75wrK5Aalo6UorQ&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCeqUUXaM75wrK5Aalo6UorQ'
    },
    'live-japones': {
        'name': 'ANNnewsCH 🌍<span hidden>Japon, japones</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCGCZAYq5Xxojl_tSXcVJhiQ&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCGCZAYq5Xxojl_tSXcVJhiQ'
    },
// MUSICA 24/7
    'chilledCow': {
        'name': 'ChilledCow 🎵<span hidden>Radios, lofi, 24/7</span>',
        'code': 'https://www.youtube-nocookie.com/embed/5qap5aO4i9A?autoplay=1&mute=0&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCSJ4gkVC6NrvII8umztf0Ow'
    },
    'chillhop': {
        'name': 'Chillhop 🎵<span hidden>Radios, lofi, 24/7</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCOxqgCwgOqC2lMqC5PYz_Dg&autoplay=1&mute=0&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCOxqgCwgOqC2lMqC5PYz_Dg'
    },
    'steezyasfuck': {
        'name': 'Steezyasfuck 🎵<span hidden>Radios, lofi, 24/7</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCsIg9WMfxjZZvwROleiVsQg&autoplay=1&mute=0&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCsIg9WMfxjZZvwROleiVsQg'
    },
    'imuc-radio-chile': {
        'name': 'IMUC Chile <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"> 🎵<span hidden>Radios, 24/7</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCIIDtZoaK9UZi4FaGMmL_hw&autoplay=1&mute=0&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCIIDtZoaK9UZi4FaGMmL_hw'
    },
    'doom-radio': {
        'name': 'Doom Radio 🎵<span hidden>Radios, 24/7</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCR2D48i5MCMYwVKbgYIAftQ&autoplay=1&mute=0&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCR2D48i5MCMYwVKbgYIAftQ'
    },
    'naxos-japan': {
        'name': 'naxos japan 🎵<span hidden>Radios, 24/7</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCwP6-81HmoDyC3nfBAyGPXQ&autoplay=1&mute=0&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCwP6-81HmoDyC3nfBAyGPXQ'
    },
    'acidjazz': {
        'name': 'AcidJazz 🎵<span hidden>Radios, 24/7</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UC8cRYBn-z6y1EOUeMdJ0VHA&autoplay=1&mute=0&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UC8cRYBn-z6y1EOUeMdJ0VHA'
    },
    'darkwave': {
        'name': 'The 80s Guy 🎵<span hidden>Radios, 24/7</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UC6ghlxmJNMd8BE_u1HR-bTg&autoplay=1&mute=0&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UC6ghlxmJNMd8BE_u1HR-bTg'
    },
    'the-bootleg-boy-1': {
        'name': 'the bootleg boy 🎵<span hidden>Radios, lofi, 24/7</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UC0fiLCwTmAukotCXYnqfj0A&autoplay=1&mute=0&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UC0fiLCwTmAukotCXYnqfj0A'
    },
    'the-bootleg-boy-2': {
        'name': 'the bootleg boy 2 🎵<span hidden>Radios, lofi, 24/7</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCwkTfp14Sj7o6q9_8ADJpnA&autoplay=1&mute=0&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCwkTfp14Sj7o6q9_8ADJpnA'
    },
    'chill-with-taiki': {
        'name': 'Chill with Taiki 🎵<span hidden>Radios, lofi, 24/7</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCKdURsjh1xT1vInYBy82n6g&autoplay=1&mute=0&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCKdURsjh1xT1vInYBy82n6g'
    },
    'abao-en-tokio': {
        'name': 'Abao en Tokio 🎵<span hidden>Radios, lofi, 24/7</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UC84whx2xxsiA1gXHXXqKGOA&autoplay=1&mute=0&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UC84whx2xxsiA1gXHXXqKGOA'
    },
// CAMARAS MUNDO
// Peru
    'av-angamos': {
        'name': '📷 Av Angamos <img src="assets/svg/paises/peru.svg" alt="bandera Peru" title="Peru"><span hidden>Cámaras, Peru, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/jQcotlKaPYY?autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCP9nvEUj8EN-wuOQajPQbAw'
    },
    'av-la-marina': {
        'name': '📷 Av La Marina <img src="assets/svg/paises/peru.svg" alt="bandera Peru" title="Peru"><span hidden>Cámaras, Peru, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/Arq2BUHYz9Y?autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCP9nvEUj8EN-wuOQajPQbAw'
    },
// Chile
    'galeria-cima': {
        'name': '📷 Galería CIMA <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Cámaras, Chile, español, plaza italia</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UC4GOcOKkEefz5NamN4WyMFg&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UC4GOcOKkEefz5NamN4WyMFg'
    },
    'parquemet-cumbre': {
        'name': '📷 Halcón Parquemet, Cumbre <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Cámaras, Chile, español</span>',
        'code': 'https://g1.ipcamlive.com/player/player.php?alias=5a7084c9e0136&autoplay=true',
        'source': 'https://halcon.parquemet.cl/index.html'
    },
    'parquemet-terraza': {
        'name': '📷 Halcón Parquemet, Terraza <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Cámaras, Chile, español</span>',
        'code': 'https://g1.ipcamlive.com/player/player.php?alias=5a7085fe914c0&autoplay=true',
        'source': 'https://halcon.parquemet.cl/index.html'
    },
    'ledrium': {
        'name': '📷 Providencia, Ledrium <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Cámaras, Chile, español, plaza italia</span>',
        'code': 'https://www.youtube-nocookie.com/embed/mGxX5PfREPA?autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCTDewuGhfwGv6JRNnqa-yXw'
    },
//  Argentina
    'obelisco': {
        'name': '📷 FourSeasons BuenosAires <img src="assets/svg/paises/argentina.svg" alt="bandera Argentina" title="Argentina"><span hidden>Cámaras, Argentina, Español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCCkRwmztPEvut3gpsgmCmzw&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCCkRwmztPEvut3gpsgmCmzw'
    },
    'puente-gral-belgrano': {
        'name': '📷 SISE Argentina <img src="assets/svg/paises/argentina.svg" alt="bandera Argentina" title="Argentina"><span hidden>Cámaras, Argentina, Español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UC2RkL2eATR1V6H8g4eNfA5Q&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UC2RkL2eATR1V6H8g4eNfA5Q'
    },
// EEUU
    'times-square': {
        'name': '📷 Times Square Live 4K <img src="assets/svg/paises/us.svg" alt="bandera US" title="US"><span hidden>Cámaras, Estados unidos, ingles</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UC6qrG3W8SMK0jior2olka3g&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UC6qrG3W8SMK0jior2olka3g'
    },
    'puente-brooklyn': {
        'name': '📷 St. George Tower <img src="assets/svg/paises/us.svg" alt="bandera US" title="US"><span hidden>Cámaras, Estados unidos, ingles</span>',
        'code': 'https://www.youtube-nocookie.com/embed/KGuCGd726RA?autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCp1ojgNJ8mNWdMDsdcMRA2Q'
    },
    'bryant-park': {
        'name': '📷 Bryant Park NYC <img src="assets/svg/paises/us.svg" alt="bandera US" title="US"><span hidden>Cámaras, Estados unidos, ingles</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UC6AlfoRUeH4B1an_R5YSSTw&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UC6AlfoRUeH4B1an_R5YSSTw'
    },
    'george-washington-bridge': {
        'name': '📷 Fort Lee Today On Demand <img src="assets/svg/paises/us.svg" alt="bandera US" title="US"><span hidden>Cámaras, Estados unidos, ingles</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UChQ5P-kHBZpH20EnXm9X0YQ&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UChQ5P-kHBZpH20EnXm9X0YQ'
    },
// Japon
    'RailCam': {
        'name': '📷 Aoba traffics 🌍<span hidden>Cámaras, Japon, japones</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCynDLZ-YJnrMLSQvwYi-bUA&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCynDLZ-YJnrMLSQvwYi-bUA'
    },
    'jerusalem': {
        'name': '📷 Steadycamline, Jerusalem 🌍<span hidden>Cámaras, Jerusalem, arabe</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UC1byT4dOeBAZwVqQ309iAuA&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UC1byT4dOeBAZwVqQ309iAuA'
    },
    'hawaii-livecam': {
        'name': '📷 Aqualink Hawaii 🌍<span hidden>Cámaras, Hawaii</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCTLF36lXVM7uiR-VolWHv0Q&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCTLF36lXVM7uiR-VolWHv0Q'
    },
    'daily-seoul': {
        'name': '📷 Daily Seoul Live Camera - Hangang 🌍<span hidden>Cámaras, corea</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCQKQTgZJo3PlxA-9V1Z51XA&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCQKQTgZJo3PlxA-9V1Z51XA'
    },
// aleatorio
    'camaras-aleatorias': {
        'name': '📷 Boston and Maine Live 🌍<span hidden>Cámaras</span>',
        'code': 'https://www.youtube-nocookie.com/embed/0jwaMlVL9ZA?autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UC8gbWbcNNyb5-NIXvFklkOA'
    },
    'namibiacam': {
        'name': '📷 NamibiaCam 🌍<span hidden>Cámaras, Namibia</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UC9X6gGKDv2yhMoofoeS7-Gg&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UC9X6gGKDv2yhMoofoeS7-Gg'
    },
// ESPACIO
    'nasa': {
        'name': '🔭 NASA Live <img src="assets/svg/paises/us.svg" alt="bandera US" title="US"><span hidden>Estados unidos, ingles, espacio</span>',
        'code': 'https://www.youtube-nocookie.com/embed/21X5lGlDOfg?autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/watch?v=21X5lGlDOfg'
    },
    'space-videos': {
        'name': '🔭 NASA ISS Live Stream <img src="assets/svg/paises/us.svg" alt="bandera US" title="US"><span hidden>Estados unidos, ingles, espacio</span>',
        'code': 'https://www.youtube-nocookie.com/embed/86YLFOog4GM?autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/watch?v=86YLFOog4GM'
    },
    'space-videos-2': {
        'name': '🔭 Space Videos <img src="assets/svg/paises/us.svg" alt="bandera US" title="US"><span hidden>Estados unidos, ingles, espacio</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCakgsb0w7QB0VHdnCc-OVEA&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCakgsb0w7QB0VHdnCc-OVEA'
    },
    'nasa-spaceflight': {
        'name': '🔭 NASASpaceflight <img src="assets/svg/paises/us.svg" alt="bandera US" title="US"><span hidden>Estados unidos, ingles, espacio</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCSUu1lih2RifWkKtDOJdsBA&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCSUu1lih2RifWkKtDOJdsBA'
    },
    'espacio-tierra': {
        'name': '🔭 Earth view from ISS <img src="assets/svg/paises/us.svg" alt="bandera US" title="US"><span hidden>Estados unidos, ingles, espacio</span>',
        'code': 'https://www.youtube-nocookie.com/embed/XBPjVzSoepo?autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/watch?v=XBPjVzSoepo'
    },
    'labpadre': {
        'name': '🔭 LabPadre <img src="assets/svg/paises/us.svg" alt="bandera US" title="US"><span hidden>Estados unidos, ingles, espacio</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCFwMITSkc1Fms6PoJoh1OUQ&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCFwMITSkc1Fms6PoJoh1OUQ'
    },
    'spacex': {
        'name': '🔭 SpaceX <img src="assets/svg/paises/us.svg" alt="bandera US" title="US"><span hidden>Estados unidos, ingles, espacio</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCtI0Hodo5o5dUb67FeUjDeA&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCtI0Hodo5o5dUb67FeUjDeA'
    },
    'blue-origin': {
        'name': '🔭 Blue Origin <img src="assets/svg/paises/us.svg" alt="bandera US" title="US"><span hidden>Estados unidos, ingles, espacio</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCVxTHEKKLxNjGcvVaZindlg&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCVxTHEKKLxNjGcvVaZindlg'
    },
    'virgin-galactic': {
        'name': '🔭 Virgin Galactic <img src="assets/svg/paises/us.svg" alt="bandera US" title="US"><span hidden>Estados unidos, ingles, espacio</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UClcvOr7LV8tlJwJvkNMmnKg&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UClcvOr7LV8tlJwJvkNMmnKg'
    },
// COVID
    'corona-pagina': {
        'name': '🦠 COVID-19 Dashboard 🌍<span hidden>Estados unidos, ingles</span>',
        'code': 'https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6',
        'source': 'https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6'
    },
    'corona1': {
        'name': '🦠 COVID-19 Live 🌍<span hidden>Estados unidos, ingles</span>',
        'code': 'https://www.youtube-nocookie.com/embed/NMre6IAAAiU?autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCDGiCfCZIV5phsoGiPwIcyQ'
    },
    'corona-pag-chile': {
        'name': '🦠 COVID-19 Chile <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://bing.com/covid/local/chile',
        'source': 'https://bing.com/covid/local/chile'
    },
// SERIES
    'pataclaun': {
        'name': 'Patacláun - Todos los episodios <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/videoseries?list=PLipJYKrsQUvxUtvTGNovoaEau2-_0gf9j&autoplay=0&mute=0&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/playlist?list=PLipJYKrsQUvxUtvTGNovoaEau2-_0gf9j'
    },
   'nuestra-historia': {
        'name': 'Nuestra historia - Todos los episodios <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/videoseries?list=PLtU1EVPSjC2BFUDlGRiq37vGM4sPnnZZN&autoplay=0&mute=0&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/playlist?list=PLtU1EVPSjC2BFUDlGRiq37vGM4sPnnZZN'
    },
    'afhs': {
        'name': 'Al fondo hay sitio - Los mejores momentos <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/videoseries?list=PLC3i0ombJso_KHNBnH97-icKgQ1_CeyzV&autoplay=0&mute=0&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/playlist?list=PLC3i0ombJso_KHNBnH97-icKgQ1_CeyzV'
    },
    'bob-ross': {
        'name': 'Bob Ross (Todas las Temporadas) 🌍<span hidden>Estados unidos, ingles</span>',
        'code': 'https://www.youtube-nocookie.com/embed/videoseries?list=PLaLOVNqqD-2HgiA-GZyzcfZN9n-YelhB5&autoplay=0&mute=0&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCxcnsr1R5Ge_fbTu5ajt8DQ'
// EDUCATIVOS
    },
    'tv-educa-cl': {
        'name': '📚 TV Educa Chile <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'm3u': 'https://mdstrm.com/live-stream-playlist-v/5e74e53f1ab4eb073b19ef34.m3u8',
        'source': 'https://www.tvn.cl/envivo/tveducachile/'
    },
    'puntaje-nacional': {
        'name': '📚 PuntajeNacional Chile <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCCY6xIXHmGBGZUgUYxtfKSg&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCCY6xIXHmGBGZUgUYxtfKSg'
    },
// 🏛️ 🏛️ 🏛️ 
    'tv-senado': {
        'name': '🏛️ TV Senado <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://janus-tv.senado.cl/embed.php',
        'source': 'https://tv.senado.cl/'
    },
    'poder-judicial': {
        'name': '🏛️ Poder Judicial <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCo0C1-ocUG9a0Yb3iO0V-xg&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCo0C1-ocUG9a0Yb3iO0V-xg'
    },    
// CANALES ALTERNATIVOS CAM DIPUTADOS
    'cam-dipu-yutu': {
        'name': 'Cámara Diputados Señal Youtube <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCYd5k2TyOyOmUJNx0SH17KA&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCYd5k2TyOyOmUJNx0SH17KA'
    },
}
