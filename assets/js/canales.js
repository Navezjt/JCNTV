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
    /* 'jne': {
        'name': 'Jurado Nacional de Elecciones - JNE <img src="assets/svg/paises/peru.svg" alt="bandera Perú" title="Perú"><span hidden>Perú, español, elecciones, presidenciales, conteo votos</span>',
        'm3u': 'https://dc1.webstream.eu/hls/hls/jnetvhdstreaming_high/index.m3u8',
        'source': 'https://www.jne.gob.pe/jnetv/'
    },
    'Voto Informado': {
        'name': 'Voto Informado <img src="assets/svg/paises/peru.svg" alt="bandera Perú" title="Perú"><span hidden>Perú, español, elecciones, presidenciales, conteo votos</span>',
        'code': 'https://votoinformado.jne.gob.pe/',
        'source': 'https://votoinformado.jne.gob.pe/'
    },
    'decide-bien': {
        'name': 'Decide Bien <img src="assets/svg/paises/peru.svg" alt="bandera Perú" title="Perú"><span hidden>Perú, español, elecciones, presidenciales, conteo votos</span>',
        'code': 'https://decidebien.pe/',
        'source': 'https://decidebien.pe/'
    },
    'onpe': {
        'name': 'Oficina Nacional de Procesos Electorales - ONPE <img src="assets/svg/paises/peru.svg" alt="bandera Perú" title="Perú"><span hidden>Perú, español, elecciones, presidenciales, conteo votos</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCe54d4U9342SA5ov0Nb0geA&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCe54d4U9342SA5ov0Nb0geA'
    }, */
// Canales
    'tv-peru': {
        'name': 'TVPerú <img src="assets/svg/paises/peru.svg" title="Perú"><span hidden>Perú, español</span>',
        'm3u': 'https://cdnh8.iblups.com/hls/R9WtilpKKB.m3u8',
        'source': 'https://www.tvperu.gob.pe/play'
    },
    'tv-peru-noticias': {
        'name': 'TVPerú Noticias <img src="assets/svg/paises/peru.svg" title="Perú"><span hidden>Perú, español</span>',
        'm3u': 'https://cdnh8.iblups.com/hls/RMuwrdk7M9.m3u8',
        'source': 'https://www.tvperu.gob.pe/play'
    },
    'tv-peru-noticias-yt': {
        'name': 'TVPerú Noticias YT <img src="assets/svg/paises/peru.svg" title="Perú"><span hidden>Perú, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCkZCoc42IipR1ucqJmIehsA&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCkZCoc42IipR1ucqJmIehsA'
    },
    'nacional-tv': {
        'name': 'Nacional TV <img src="assets/svg/paises/peru.svg" title="Perú"><span hidden>Perú, español</span>',
        'm3u': 'https://stmv.panel.grupolimalive.com/nacionaltv/nacionaltv/playlist.m3u8',
        'source': 'https://ntvperu.pe/'
    },
    'panamericana': {
        'name': 'Panamericana TV <img src="assets/svg/paises/peru.svg" title="Perú"><span hidden>Perú, español</span>',
        'm3u': 'https://panamericana.pe/tvenvivo/noframes',
        'source': 'https://panamericana.pe/tvenvivo'
    },
    'panamericana-dm': {
        'name': 'Panamericana TV DM <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://geo.dailymotion.com/player/x5poh.html?video=x774s7s&autoplay=true',
        'source': 'https://panamericana.pe/tvenvivo'
    },
    'onda-digital': {
        'name': 'Onda Digital <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://tv.ondadigital.pe:1936/ondatv2/ondatv2/playlist.m3u8',
        'source': 'https://ondadigitaltv.com'
    },
    'onda-digital-alt': {
        'name': 'Onda Digital ALT <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://ed1ov.live.opencaster.com/CwCfFGFdtebB/index.m3u8',
        'source': 'https://ondadigitaltv.com'
    },
    'ovacion': {
        'name': 'Ovación <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://5c3fb01839654.streamlock.net:1963/iptvovacion1/liveovacion1tv/playlist.m3u8',
        'source': 'https://ovacion.pe/radio'
    },
    'uci': {
        'name': 'UCI <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://servilive.com:3449/live/mlecaroslive.m3u8',
        'source': 'https://uci.pe/envivo'
    },
    'uci-yt': {
        'name': 'UCI YT <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCdl1ygFwPa6lUdNYPLjoAGg&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCdl1ygFwPa6lUdNYPLjoAGg'
    },
    'vnp': {
        'name': 'Visión Noticias - VNP <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://5ee0faac3bbae.streamlock.net/visionnoticias/visionnoticias/playlist.m3u8',
        'source': 'https://www.cablevisionperu.pe/?page_id=1938'
    },
    'atv': {
        'name': 'ATV <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://d2tr4gdfol9ja.cloudfront.net/atv/smil:atv.smil/playlist.m3u8',
        'source': 'https://www.atv.pe/envivo-atv'
    },
    'atv-plus': {
        'name': 'ATV Más <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://d2tr4gdfol9ja.cloudfront.net/atv/smil:atv-mas.smil/playlist.m3u8',
        'source': 'https://www.atv.pe/envivo-atv'
    },
    'radio-exitosa': {
        'name': 'Radio Exitosa <img src="assets/svg/paises/peru.svg" title="Perú"><span hidden>Perú, español</span>',
        'm3u': 'https://cu.onliv3.com/livevd1/user2.m3u8',
        'source': 'https://exitosanoticias.pe/v1/tvenvivo/'
    },
    'radio-exitosa-yt': {
        'name': 'Radio Exitosa YT <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Lima, radio, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCbyblOHU12USUbbPL_M7BNg&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCbyblOHU12USUbbPL_M7BNg'
    },
    'pbo-radio': {
        'name': 'PBO Radio <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCgR0st4ZLABi-LQcWNu3wnQ&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCgR0st4ZLABi-LQcWNu3wnQ'
    },
    'santa-rosa': {
        'name': 'Radio Santa Rosa <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, radio, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCIGV0oiNkdK2-tnf10DNp2A&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCIGV0oiNkdK2-tnf10DNp2A'
    },
    'san-borja': {
        'name': 'Radio San Borja <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, radio, español</span>',
        'm3u': 'https://5c3fb01839654.streamlock.net:1963/iptvsanborja/livesanborjatv/playlist.m3u8',
        'source': 'https://radiosanborjatv.com/'
    },
    'radio-tropical': {
        'name': 'Radio Tropical <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, Tarapoto, radio, español</span>',
        'm3u': 'https://5ee0faac3bbae.streamlock.net/raditropical/raditropical/playlist.m3u8',
        'source': 'https://radiotropical.pe/'
    },
    'radio-uno': {
        'name': 'Radio Uno <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, Tacna, radio, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCK0lpuL9PQb3I5CDcu7Y7bA&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCK0lpuL9PQb3I5CDcu7Y7bA'
    },
    'la-republica': {
        'name': 'La República - RTV <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, noticias, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UC-B7Xv56uNRDkj0vC3QW8Cg&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UC-B7Xv56uNRDkj0vC3QW8Cg'
    },
    'willax': {
        'name': 'Willax <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://geo.dailymotion.com/player/x5poh.html?video=x7x4dgx&autoplay=true',
        'source': 'https://willax.tv/en-vivo/'
    },
    'latina-noticias': {
        'name': 'Latina Noticias <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, noticias, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCpSJ5fGhmAME9Kx2D3ZvN3Q&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCpSJ5fGhmAME9Kx2D3ZvN3Q'
    },
// LOCALES
   'DobleC-tv': {
        'name': 'Doble C TV <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, Puno, español</span>',
        'm3u': 'https://7.innovatestream.pe:19360/cctvchupaca/cctvchupaca.m3u8',
        'source': 'https://doblectelevision.com/'
    },
    'antares-tv2': {
        'name': 'Antares TV2 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, Tarapoto, español</span>',
        'code': 'http://www.ujjina.com/cdn/antarestv.html',
        'source': 'http://antarestvradio.com/tvonline.html'
    },
    'autentica-tv': {
        'name': 'Auténtica TV <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, Tarapoto, español</span>',
        'm3u': 'https://live.obslivestream.com/autenticatvmux/index.m3u8',
        'source': 'https://autenticatv.pe/'
    },
    'tarapoto-tv': {
        'name': 'Tarapoto TV <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Tarapoto, español</span>',
        'm3u': 'https://ott1.hdlatam.tv/live_abr/webtvTarapotoPe/playlist.m3u8',
        'source': 'https://www.televisiontarapoto.pe/tv-en-vivo/'
    },
    'antares-tv': {
        'name': 'Antares TV <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, Tarapoto, español</span>',
        'm3u': 'https://5c3fb01839654.streamlock.net:1963/iptvantares/liveantarestv/chunklist_w1847670507.m3u8',
        'source': 'http://antarestvradio.com/tvonline.html'
    },
    'rn-tv': {
        'name': 'Radio Noticias Televisión (RN) <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Yurimaguas, español</span>',
        'code': 'https://videoserver.tmcreativos.com:2020/VideoPlayer/rnyurimaguas?autoplay=1',
        'source': 'http://radionoticiastv.com/'
    },
    'vz-tv': {
        'name': 'VZ Televisión <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Moyobamba, español</span>',
        'm3u': 'https://live.obslivestream.com/vztv/index.m3u8?PlaylistM3UCL',
        'source': 'https://vztvproducciones.com/'
    },
    'tv-en-linea': {
        'name': 'TV en Línea <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Cuzco, español</span>',
        'm3u': 'https://s1.tvdatta.com:3883/live/tvenlinealive.m3u8',
        'source': 'https://www.tvenlineaoficial.com/'
    },
    'qt-tv': {
        'name': 'QT Televisión - Qosqo Times <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Cuzco, español</span>',
        'm3u': 'https://servilive.com:3753/live/qosqotimeslive.m3u8',
        'source': 'https://qosqotimes.pe/'
    },
    'asiri': {
        'name': 'Asiri <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Lima, español</span>',
        'm3u': 'https://video2.lhdserver.es/asiritv/live.m3u8',
        'source': 'https://www.asiritv.pe/'
    },
    'bhtv': {
        'name': 'BHTV <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Lima, español</span>',
        'm3u': 'http://cdn1.ujjina.com:1935/iptvbhtv/livebhtvtv/playlist.m3u8',
        'source': 'https://bhtv.pe/'
    },
    'Mas-Cumbia': {
        'name': 'Mas cumbia <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Lima, español</span>',
        'code': 'https://dattassd.com/player/index.php?puerto=19360&rtmp=mascumbiatvonline&stream=mascumbiatvonline',
        'source': 'https://bestcableperu.com.pe/tv6.html'
    },
    'Hatun-tv': {
        'name': 'Hatun tv <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Lima, español</span>',
        'code': 'https://dattassd.com/player/index.php?puerto=19360&rtmp=bestcablehatuntv&stream=bestcablehatuntv',
        'source': 'https://bestcableperu.com.pe/lima/enVivo'
    },
    'best-cable': {
        'name': 'Best Cable <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Lima, español</span>',
        'code': 'https://dattassd.com/player/index.php?puerto=19360&rtmp=bestcable&stream=bestcable',
        'source': 'https://bestcableperu.com.pe/tv3.html'
    },
    'best-cable-sports': {
        'name': 'Best Cable Sports <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Lima, español</span>',
        'code': 'https://dattassd.com/player/index.php?puerto=19360&rtmp=bestcablesports&stream=bestcablesports',
        'source': 'https://bestcableperu.com.pe/tv6.html'
    },
    'canal-b': {
        'name': 'Canal B <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, Lima, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCbPOnTkKzeIkoYNTo6n3FvA&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCbPOnTkKzeIkoYNTo6n3FvA'
    },
    'conecta-tv': {
        'name': 'Radio Conecta2 TV <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Lima, radio, español</span>',
        'm3u': 'https://servilive.com:3528/live/conect2tvlive.m3u8',
        'source': 'https://conecta2peru.com/'
    },
    'la-abeja': {
        'name': 'La Abeja <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, Lima, español</span>',
        'm3u': 'http://cdnhd.iblups.com/hls/F87ppt1YAT.m3u8',
        'source': 'https://www.laabeja.pe/tv/'
    },
    'peru-Channel': {
        'name': 'Perú Channel <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Lima, radio, español</span>',
        'm3u': 'https://a.cdni.live/peruchanel/peruchanel/playlist.m3u8',
        'source': 'https://www.cxtvenvivo.com/tv-en-vivo/peru-channel'
    },
    'cadena-tv': {
        'name': 'Cadena TV <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Huancayo, español</span>',
        'code': 'https://servilive.com/live-stream-video-widget/cdnatv',
        'source': 'https://www.cadenatv.com.pe/'
    },
    'canal-21': {
        'name': 'Canal 21 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Huancayo, español</span>',
        'code': 'https://www.opencaster.com/nicolezevallos98-100-100',
        'source': 'https://canal21huancayo.com/en-vivo/'
    },
    'catacaos-tv': {
        'name': 'Catacaos TV 8 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Piura, español</span>',
        'm3u': 'https://live.obslivestream.com/canal8/tracks-v1a1/mono.m3u8',
        'source': 'https://canal8tv.pe/'
    },
    'Ok-teVe': {
        'name': 'Ok TeVe <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Cajamarca, español</span>',
        'm3u': 'https://vdo.grupolimalive.com:3005/live/oktvlive.m3u8',
        'source': 'https://oktelevisionhd.com/'
    },
    'cajamarca-tv': {
        'name': 'Cajamarca TV <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Cajamarca, español</span>',
        'm3u': 'https://s1.tvdatta.com:3252/live/cajamarcatvlive.m3u8',
        'source': 'https://cajamarcatv.pe/tv'
    },
    'tv-cosmos': {
        'name': 'TV Cosmos <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Trujillo, español</span>',
        'm3u': 'https://5790d294af2dc.streamlock.net:443/8134/8134/playlist.m3u8',
        'source': 'https://tvcosmos.pe/envivo'
    },
    'tv-cosmos-2': {
        'name': 'TV Cosmos 2 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Trujillo, español</span>',
        'code': 'https://online.tvcosmos.pe/envivo.html',
        'source': 'https://tvcosmos.pe/envivo'
    },
    'tv-cosmos-3': {
        'name': 'TV Cosmos 3 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Trujillo, español</span>',
        'code': 'https://online.tvcosmos.pe/envivo.html',
        'source': 'https://tvcosmos.pe/envivo'
    },
    'tv-tumpis': {
        'name': 'TV Tumpis <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Tumbes, español</span>',
        'code': 'https://servilive.com/hybrid-stream-video-widget/tumpistv',
        'source': 'https://tumpistv.pe/transmision-en-vivo-tumpis-tv/'
    },
    'gaceta-ucayalina': {
        'name': 'Gaceta Ucayalina <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://vk.com/video_ext.php?oid=710509469&id=456239043&hd=2&autoplay=1',
        'source': 'https://gacetaperutv.pe/envivo'
    },
    'Palmeras-tv': {
        'name': 'Gaceta Ucayalina <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://video.ingenioperu.com/live-stream-video-widget/palmerastv',
        'source': 'https://grupopalmerastv.com/portal/'
    },
    'canalb-tv': {
        'name': 'canalb <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://www.youtube.com/embed/nOukZI_clUU?hd=1&autoplay=1',
        'source': 'https://canalb.pe/live'
    },
    'Grupo-Tvl"': {
        'name': 'Grupo Tvl <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://player.twitch.tv/?autoplay=true&channel=tvlesp&height=720&muted=false&parent=grupotvl.com&referrer=https%3A%2F%2Fgrupotvl.com%2Fen-vivo%2F&width=1280',
        'source': 'https://grupotvl.com/en-vivo/'
    },
    'Alternativam-mix': {
        'name': 'Alternativam Mix <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'm3u': 'https://eu1.servers10.com:8081/8130/index.m3u8',
        'source': 'https://grupoalternativamix.com/'
    },
    'canal45-tv': {
        'name': 'Canal45 Tv <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'm3u': 'https://nlb1-live.emitstream.com/hls/625csn5et2iszm9oze65/master.m3u8',
        'source': 'https://canalb.pe/live'
    },
    'piura-plustv': {
        'name': 'piura plustv <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'm3u': 'https://s.piuraplustv.com/hls/stream.m3u8',
        'source': 'https://www.piuraplustv.com/'
    },
    'Piura-tv': {
        'name': 'Piura Tv <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://live.obslivestream.com/piuratv/embed.html',
        'source': 'https://www.facebook.com/piuratvcanal/?locale=es_LA'
    },
    'vea-canal': {
        'name': 'Canal45 Tv <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://player.kick.com/veacanaltv',
        'source': 'https://veacanal.tv/sitio/'
    },
    'vea-canal': {
        'name': 'Canal45 Tv <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://player.kick.com/veacanaltv',
        'source': 'https://veacanal.tv/sitio/'
    },
    'radioa1-fmperu': {
        'name': 'radioa1 fmperu <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'm3u': 'https://tv.portalexpress.es:3333/live/radiotva1live.m3u8',
        'source': 'https://radioa1fmperu.com/tv/'
    },
    'huancayo-tv': {
        'name': 'huancayo tv <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'm3u': 'https://6362ca6f1fc28.streamlock.net:443/8090/8090/playlist.m3u8',
        'source': 'https://www.huancayotv.com/'
    },
    'canal-21-huancayo': {
        'name': 'Canal45 Tv <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://www.opencaster.com/nicolezevallos98-100-100',
        'source': 'https://canal21huancayo.com/en-vivo/'
    },
    'navez-dsports-1-2': {
        'name': 'Navez dsports-1-2 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://1.deporte-libre.org/en-vivo-online/dsports/embed2.php',
        'source': 'https://1.deporte-libre.org/'
    },
    'navez-dsports-1-1': {
        'name': 'Navez dsports-1-1  <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://1.deporte-libre.org/en-vivo-online/dsports/embed.php',
        'source': 'https://1.deporte-libre.org/'
    },
    'navez-dsports-1-3': {
        'name': 'Navez dsports-1-3 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://1.deporte-libre.org/en-vivo-online/dsports/embed3.php',
        'source': 'https://1.deporte-libre.org/'
    },
    'navez-tudn-1-1': {
        'name': 'Navez dsports-1-2 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://1.deporte-libre.org/en-vivo-online/tudn/embed.php',
        'source': 'https://1.deporte-libre.org/'
    },
    'navez-tudn-1-2': {
        'name': 'Navez dsports-1-1  <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://1.deporte-libre.org/en-vivo-online/tudn/embed2.php',
        'source': 'https://1.deporte-libre.org/'
    },
    'navez-tudn-1-3': {
        'name': 'Navez dsports-1-3 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://1.deporte-libre.org/en-vivo-online/tudn/embed3.php',
        'source': 'https://1.deporte-libre.org/'
    },
    'navez-tudnmx-1-4': {
        'name': 'Navez dsports-1-3 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://1.deporte-libre.org/en-vivo-online/tudnmx/embed.php',
        'source': 'https://1.deporte-libre.org/'
    },
    'navez-tudnmx-1-5': {
        'name': 'Navez dsports-1-3 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://1.deporte-libre.org/en-vivo-online/tudnmx/embed2.php',
        'source': 'https://1.deporte-libre.org/'
    },
    'navez-azteca-guate-1-1': {
        'name': 'Navez azteca-guate-1-1 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://fullchannels.online/canales.php?id=azteca-guate',
        'source': 'https://1.deporte-libre.org/'
    },
    'navez-fox-1-1': {
        'name': 'Navez fox-1-1 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://fullchannels.online/canales.php?id=azteca-guate',
        'source': 'https://1.deporte-libre.org/'
    },
    'navez-fox-1-2': {
        'name': 'Navez fox-1-2 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://1.deporte-libre.org/en-vivo-online/fox-deportes/embed.php',
        'source': 'https://1.deporte-libre.org/'
    },
    'navez-fox-1-3': {
        'name': 'Navez fox-1-3 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://1.deporte-libre.org/en-vivo-online/fox-deportes/embed2.php',
        'source': 'https://1.deporte-libre.org/'
    },
    'navez-fox-1-4': {
        'name': 'Navez fox-1-4 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://1.deporte-libre.org/en-vivo-online/fox-deportes/embed3.php',
        'source': 'https://1.deporte-libre.org/'
    },
    'navez-sky-sport-1-it': {
        'name': 'Navez sky-sport-1-it <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://1.deporte-libre.org/en-vivo-online/sky-sport-1-it/embed.php',
        'source': 'https://1.deporte-libre.org/'
    },
    'navez-vamos-1-1': {
        'name': 'Navez vamos-1-1 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://1.deporte-libre.org/en-vivo-online/vamos/embed.php',
        'source': 'https://1.deporte-libre.org/'
    },
    'navez-vamos-1-2': {
        'name': 'Navez vamos-1-2 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://1.deporte-libre.org/en-vivo-online/vamos/embed2.php',
        'source': 'https://1.deporte-libre.org/'
    },
    'navez-vamos-1-3': {
        'name': 'Navez vamos-1-3 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://1.deporte-libre.org/en-vivo-online/vamos/embed3.php',
        'source': 'https://1.deporte-libre.org/'
    },
    'navez-teleonce-usa-1-1': {
        'name': 'Navez teleonce-usa-1-1 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://player.restream.io/?token=4c57ad65917d4802a65ba18911e366cf',
        'source': 'https://cdn.teleonce.com/en-vivo/'
    },
    'navez-univision-usa-1-1': {
        'name': 'Navez univision-usa-1-1 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://deporte-libre.top/en-vivo-online/univision-usa/embed.php',
        'source': 'https://deporte-libre.top/en-vivo-online/univision-usa/'
    },
    'navez-univision-usa-1-2': {
        'name': 'Navez univision-usa-1-1 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://deporte-libre.top/en-vivo-online/univision-usa/embed2.php',
        'source': 'https://deporte-libre.top/en-vivo-online/univision-usa/'
    },
    'navez-univision-usa-1-3': {
        'name': 'Navez univision-usa-1-1 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://www.telegratis.me/en-vivo/player/embed.php?r=univision',
        'source': 'https://www.telegratis.me/en-vivo/univision'
    },
    'navez-univision-usa-1-4': {
        'name': 'Navez univision-usa-1-1 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'm3u': 'https://raw.githubusercontent.com/CODERX24/tv/master/Univision.m3u8',
        'source': 'https://github.com/CODERX24/tv/blob/0104ad7a64ab808ff95a0e77953bfd38aa94401c/advancefeed.json#L943'
    },
    'navez-telemundo-usa-1-1': {
        'name': 'Navez Telemundo-usa-1-1 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'm3u': 'https://nbculocallive.akamaized.net/hls/live/2037499/puertorico/stream1/master.m3u8',
        'source': 'https://amorlatinochat.com/telemundo.html'
    },
    'navez-telemundo-usa-1-2': {
        'name': 'Navez Telemundo-usa-1-2 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'm3u': 'https://dai2-playlistserver.aws.syncbak.com/media.m3u8?bitrate=3659760&session=668092073c3c49fab2712412b1a870a1',
        'source': 'https://www.telemundolaredo.tv/en-vivo/'
    },
    'navez-telemundo-usa-1-3': {
        'name': 'Navez Telemundo-usa-1-3 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://deporte-libre.top/en-vivo-online/telemundo-usa/embed.php',
        'source': 'https://deporte-libre.top/en-vivo-online/telemundo-usa/'
    },
    'navez-telemundo-usa-1-4': {
        'name': 'Navez Telemundo-usa-1-3 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://deporte-libre.top/en-vivo-online/telemundo-usa/embed2.php',
        'source': 'https://deporte-libre.top/en-vivo-online/telemundo-usa/'
    },
    'navez-nbc-universo-usa-1-1': {
        'name': 'Navez nbc-universo-usa-1-1 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://1.deporte-libre.org/en-vivo-online/nbc-universo-usa/embed.php',
        'source': 'https://1.deporte-libre.org/'
    },
    'navez-nbc-universo-usa-1-2': {
        'name': 'Navez nbc-universo-usa1-2 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://1.deporte-libre.org/en-vivo-online/nbc-universo-usa/embed2.php',
        'source': 'https://1.deporte-libre.org/'
    },
    'navez-vtv-plus-1-1': {
        'name': 'Navez vtv-plus-1-1 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://1.deporte-libre.org/en-vivo-online/vtv-plus/embed.php',
        'source': 'https://1.deporte-libre.org/'
    },
    'navez-vtv-plus-1-2': {
        'name': 'Navez vtv-plus-1-2 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://1.deporte-libre.org/en-vivo-online/vtv-plus/embed2.php',
        'source': 'https://1.deporte-libre.org/'
    },
    'navez-vtv-plus-1-3': {
        'name': 'Navez vtv-plus-1-3 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://1.deporte-libre.org/en-vivo-online/vtv-plus/embed3.php',
        'source': 'https://1.deporte-libre.org/'
    },
    'navez-arena-premium-1-1': {
        'name': 'Navez arena-premium-1-1 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://1.deporte-libre.org/en-vivo-online/arena-premium/embed.php',
        'source': 'https://1.deporte-libre.org/'
    },
    'navez-tele-1-1': {
        'name': 'Navez tele-1-1 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://miztv.shop/tele/stream-3.php',
        'source': 'https://1.deporte-libre.org/'
    },
    'navez-dazn-1-2': {
        'name': 'Navez-dazn-1-2 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://1.deporte-libre.org/en-vivo-online/dazn-1-es/embed2.php',
        'source': 'https://1.deporte-libre.org/'
    },
    'navez-dazn-1-4': {
        'name': 'Navez-dazn-1-4 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://1.deporte-libre.org/en-vivo-online/dazn-1-es/embed4.php',
        'source': 'https://1.deporte-libre.org/'
    },
    'navez-dazn-1-3': {
        'name': 'Navez-dazn-1-3 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://1.deporte-libre.org/en-vivo-online/dazn-1-es/embed3.php',
        'source': 'https://1.deporte-libre.org/'
    },
    'navez-dazn-1-2': {
        'name': 'Navez-dazn-1-2 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://1.deporte-libre.org/en-vivo-online/dazn-1-es/embed2.php',
        'source': 'https://1.deporte-libre.org/'
    },
    'navez-dazn-1-1': {
        'name': 'Navez-dazn-1-1 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://1.deporte-libre.org/en-vivo-online/dazn-1-es/embed.php',
        'source': 'https://1.deporte-libre.org/'
    },
    'navez-espn-1-1': {
        'name': 'Navez-espn-1-1 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://tucanaldeportivo.com/espn-hd.php',
        'source': 'https://1.deporte-libre.org/'
    },
    'navez-sky-1-1': {
        'name': 'Navez sky-1-1 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://1.deporte-libre.org/en-vivo-online/sky-sport-calcio/embed.php',
        'source': 'https://1.deporte-libre.org/'
    },
    'navez-tve1-1-1': {
        'name': 'Navez tve1-1-1 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://tele-libre.com/en-vivo-online/tve1/embed3.php',
        'source': 'https://1.deporte-libre.org/'
    },
    'navez-sporttv1-1-1': {
        'name': 'Navez sporttv1-1-1 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://1.deporte-libre.org/en-vivo-online/sporttv1/embed.php',
        'source': 'https://1.deporte-libre.org/'
    },
    'navez-sporttv1-1-2': {
        'name': 'Navez sporttv1-1-2 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://1.deporte-libre.org/en-vivo-online/sporttv1/embed2.php',
        'source': 'https://1.deporte-libre.org/'
    },
    'navez-bein-sports-1-1': {
        'name': 'Navez bein-sports-1-fr <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://1.deporte-libre.org/en-vivo-online/bein-sports-1-fr/embed.php',
        'source': 'https://1.deporte-libre.org/'
    },
    'navez-bein-sports-1-2': {
        'name': 'Navez bein-sports-1-fr <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://1.deporte-libre.org/en-vivo-online/bein-sports-1-fr/embed2.php',
        'source': 'https://1.deporte-libre.org/'
    },
    'navez-supersport-premier-league-1': {
        'name': 'Navez supersport-premier-league-1 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://1.deporte-libre.org/en-vivo-online/supersport-premier-league/embed.php',
        'source': 'https://1.deporte-libre.org/'
    },
    'navez-supersport-premier-league-2': {
        'name': 'Navez supersport-premier-league-2 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://1.deporte-libre.org/en-vivo-online/supersport-premier-league/embed2.php',
        'source': 'https://1.deporte-libre.org/'
    },
    'navez-teledeporte': {
        'name': 'Navez-teledeporte <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://1.deporte-libre.org/en-vivo-online/teledeporte/embed2.php',
        'source': 'https://1.deporte-libre.org/'
    },
    'telemundo-teledeporte': {
        'name': 'Telemundo TV <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://www.goltvgo.com/canalestv.php?get=aHR0cHM6Ly9uYmN1bG9jYWxsaXZlLmFrYW1haXplZC5uZXQvaGxzL2xpdmUvMjAzNzQ5OS9wdWVydG9yaWNvL3N0cmVhbTEvbWFzdGVyLm0zdTg=',
        'source': 'https://www.goltvgo.com/en-vivo/telemundo/'
    },
    'hbo-teledeporte': {
        'name': 'Hbo TV <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://clarovideo.vtvcable.com/HBOMAX/?url=aHR0cHM6Ly9sYXRhbXZvc2xpdmVjbGFyb3ZpZGVvLmFrYW1haXplZC5uZXQvQ29udGVudC9EQVNIX0RBU0hfRksvTGl2ZS9DaGFubmVsKEhCT19IRF9NWCkvbWFuaWZlc3QubXBk&key=MjRjMmE0ZGY4ZThkZGQxNzY2NjFjYTZlMGQ2MWIyNmI=&key2=YjFiMTM4ODlmNzFhOTY5MDJjMjg1ODIzMDIxNjNhNWM=&lang=1',
        'source': 'https://www.goltvgo.com/en-vivo/hbo/'
    },
    'nativa-teledeporte': {
        'name': 'Nativa TV <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Ucayali, español</span>',
        'code': 'https://www.goltvgo.com/canalestv.php?get=aHR0cHM6Ly9vbmVwbGF5LmlwdHZwZXJ1LnR2OjE5MzYvc3RhdGljL25hdGl2YTEuc3RyZWFtL3BsYXlsaXN0Lm0zdTg=',
        'source': 'https://www.goltvgo.com/peru/nativa-tv-en-vivo/'
    },
   // BOLIVIA 
    'RED-UNO': {
        'name': 'RED UNO <img src="assets/svg/paises/Bolivia.svg" title="Bolivia"><span hidden>Bolivia, español</span>',
        'code': 'https://www.dailymotion.com/embed/video/x8s1at2?syndication=278713',
        'source': 'https://www.reduno.com.bo/senal-en-vivo'
    },
// PARAGUAY
   'La-Tele': {
        'name': 'La Tele <img src="assets/svg/paises/Paraguay.svg" title="Paraguay"><span hidden>Paraguay, español</span>',
        'm3u': 'https://hhkld.com/vi/19_ENG.m3u8',
        'source': 'https://latele.com.py/envivo/'
    }, 
    'ABC': {
        'name': 'ABC <img src="assets/svg/paises/Paraguay.svg" title="Paraguay"><span hidden>Paraguay, español</span>',
        'code': 'https://cdn.jwplayer.com/players/0qRytEJD-bL2g5Vmx.html',
        'source': 'https://www.abc.com.py/tv/'
    }, 
    'NPY': {
        'name': 'NPY <img src="assets/svg/paises/Paraguay.svg" title="Paraguay"><span hidden>Paraguay, español</span>',
        'm3u': 'https://hhkld.com/vi/19_ENG.m3u8',
        'source': 'https://npy.com.py/en-vivo/'
    }, 
    'GEN': {
        'name': 'GEN <img src="assets/svg/paises/Paraguay.svg" title="Paraguay"><span hidden>Paraguay, español</span>',
        'm3u': 'https://rds3gen.desdeparaguay.net/gentv/gentv_int_alta/playlist.m3u8?k=77f5dd9b286e3b4d8981b3266a7b85a9b7703eff007489173219e404fca3c567&exp=1708634283',
        'source': 'https://npy.com.py/en-vivo/'
    }, 
    'UNIVERSO': {
        'name': 'UNIVERSO <img src="assets/svg/paises/Paraguay.svg" title="Paraguay"><span hidden>Paraguay, español</span>',
        'm3u': 'https://rds3gen.desdeparaguay.net/universotv/universotv_int_alta/playlist.m3u8?k=c6cdd7508c1f67c0cd7429d8644c027d355269f453ee6c9d0c49ece41a07c9a7&exp=1708634580',
        'source': 'https://npy.com.py/en-vivo/'
    }, 
    'TRECE': {
        'name': 'TRECE <img src="assets/svg/paises/Paraguay.svg" title="Paraguay"><span hidden>Paraguay, español</span>',
        'code': 'https://www.desdepylabs.com/External/trecetv',
        'source': 'https://trece.com.py/'
    }, 
    'UNICANAL': {
        'name': 'UNICANAL <img src="assets/svg/paises/Paraguay.svg" title="Paraguay"><span hidden>Paraguay, español</span>',
        'code': 'https://www.desdepylabs.com/External/unicanal',
        'source': 'https://unicanal.com.py/'
    }, 
    'America': {
        'name': 'America <img src="assets/svg/paises/Paraguay.svg" title="Paraguay"><span hidden>Paraguay, español</span>',
        'm3u': 'https://live-ak.vimeocdn.com/exp=1726156791~acl=%2F53ea59d7-7bd5-4547-b943-d1dbdb8b53e7_fmp4%2F%2A~hmac=4d944e008a25aeb2255a6f30e3b5991cbb3379bb7088f5ae73c3828c0564576b/53ea59d7-7bd5-4547-b943-d1dbdb8b53e7_fmp4/chunklist_b600000_cmaf_v.m3u8?_HLS_skip=YES',
        'source': 'https://www.americatv.com.py/ver-vivo/'
    }, 
    'UnionTV': {
        'name': 'UnionTV <img src="assets/svg/paises/Paraguay.svg" title="Paraguay"><span hidden>Paraguay, español</span>',
        'code': 'https://www.desdepylabs.com/External/video/800tv',
        'source': 'https://uniontv.com.py/'
    }, 
    'Telefuturo': {
        'name': 'Telefuturo <img src="assets/svg/paises/Paraguay.svg" title="Paraguay"><span hidden>Paraguay, español</span>',
        'm3u': 'https://hhkld.com/vi/19_ENG.m3u8',
        'source': 'https://telefuturo.com.py/envivo'
    }, 
    'CN9': {
        'name': 'CN9 <img src="assets/svg/paises/Paraguay.svg" title="Paraguay"><span hidden>Paraguay, español</span>',
        'm3u': 'https://deh05ueq91v6s.cloudfront.net/C9NPY/031fe10f99063bb9e8271716ce50b133.sdp/playlist.m3u8',
        'source': 'https://telefuturo.com.py/envivo'
    }, 
// GRECIA
    'Megatv-GR': {
        'name': 'Megatv GR <img src="assets/svg/paises/Greece.svg" alt="bandera Greece" title="Greece"><span hidden>Greece, Griego</span>',
        'm3u': 'https://c98db5952cb54b358365984178fb898a.msvdn.net/live/S86713049/gonOwuUacAxM/playlist.m3u8',
        'source': 'https://www.megatv.com/'
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
    'telefe-tw': {
        'name': 'Telefe TW <img src="assets/svg/paises/argentina.svg" alt="bandera Argentina" title="Argentina"><span hidden>Argentina, español</span>',
        'code': 'https://www.twitch.tv/telefe',
        'source': 'https://www.twitch.tv/telefe'
    },
    'telefe-tv': {
        'name': 'Telefe TV <img src="assets/svg/paises/argentina.svg" alt="bandera Argentina" title="Argentina"><span hidden>Argentina, español</span>',
        'code': 'https://vercanalesonline.com/embed/cv.html?get=VGVsZWZlSEQ=&lang=1',
        'source': 'https://vercanalesonline.com/en-vivo/telefe/'
    },
    'net-tv': {
        'name': 'Net TV <img src="assets/svg/paises/argentina.svg" alt="bandera Argentina" title="Argentina"><span hidden>Argentina, español</span>',
        'code': 'https://rudo.video/live/nettv?volume=0&mute=1',
        'source': 'https://www.canalnet.tv/page/senal-en-vivo'
    },
    'tv-publica-arg': {
        'name': 'Televisión Pública <img src="assets/svg/paises/argentina.svg" alt="bandera Argentina" title="Argentina"><span hidden>Argentina, español</span>',
        'code': 'https://www.youtube.com/embed/ocFG3yor--M?frameborder=0&mute=1&autoplay=1&amp;rel=0&amp;showinfo=0',
        'source': 'https://lnmas.lanacion.com.ar/'
    },
    'ip-tv-vivo': {
        'name': 'IP Noticia <img src="assets/svg/paises/argentina.svg" alt="bandera Argentina" title="Argentina"><span hidden>Argentina, español</span>',
        'code': 'https://rudo.video/live/nettv?volume=0&mute=1',
        'source': 'https://ipnoticias.ar/actualidad/19807-ip-en-vivo'
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
        'code': 'https://www.youtube.com/embed/LY2XEQ_SSXA?frameborder=0&mute=1&autoplay=1&amp;rel=0&amp;showinfo=0',
        'source': 'https://www.youtube.com/channel/UCba3hpU7EFBSk817y9qZkiA'
    },
    'uniteve': {
        'name': 'Uniteve <img src="assets/svg/paises/argentina.svg" alt="bandera Argentina" title="Argentina"><span hidden>Argentina, español</span>',
        'm3u': 'https://vivo.solumedia.com:19360/uniteve/uniteve.m3u8',
        'source': 'http://uniteve.com.ar/'
    },
    'multivisionfederal': {
        'name': 'multivisionfederal <img src="assets/svg/paises/argentina.svg" alt="bandera Argentina" title="Argentina"><span hidden>Argentina, español</span>',
        'code': 'https://389471779-atari-embeds.googleusercontent.com/embeds/16cb204cf3a9d4d223a0a3fd8b0eec5d/inner-frame-minified.html?jsh=m%3B%2F_%2Fscs%2Fabc-static%2F_%2Fjs%2Fk%3Dgapi.lb.es.JittUyyTSxA.O%2Fam%3DAAAg%2Fd%3D1%2Frs%3DAHpOoo-1D2N_rfVIW10DIrv6De_3PqIS8Q%2Fm%3D__features__',
        'source': 'https://sites.google.com/view/multivisionfederal/'
    },
    'canal-79-la-costa': {
        'name': 'canal-79-la-costa <img src="assets/svg/paises/argentina.svg" alt="bandera Argentina" title="Argentina"><span hidden>Argentina, español</span>',
        'm3u': 'https://streamconex.com:19360/lacosta/lacosta.m3u8',
        'source': 'https://canal79tv.com.ar/la-costa/'
    },
    'rts-1': {
        'name': 'rts-1 <img src="assets/svg/paises/argentina.svg" alt="bandera Argentina" title="Argentina"><span hidden>Argentina, español</span>',
        'm3u': 'https://ed1.acangroup.org:1929/larts/rts1_all/playlist.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Ny8yOS8yMDI0IDc6MTM6NDUgUE0maGFzaF92YWx1ZT1NWVZkcXJpbnFkaTlrOEZrTEd0WitRPT0mdmFsaWRtaW51dGVzPTEw',
        'source': 'https://www.rts.sn/tv/rts-1'
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
    'ntn24': {
        'name': 'NTN24 <img src="assets/svg/paises/colombia.svg" alt="bandera Colombia" title="Colombia"><span hidden>Colombia, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCEJs1fTF3KszRJGxJY14VrA&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCEJs1fTF3KszRJGxJY14VrA'
    },
    'red-mas-noticias': {
        'name': 'RED MÁS Noticias <img src="assets/svg/paises/colombia.svg" alt="bandera Colombia" title="Colombia"><span hidden>Colombia, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCpcvsK0UAI3MIHsjjj3CgMg&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCpcvsK0UAI3MIHsjjj3CgMg'
    },
    'red-mas': {
        'name': 'RED MÁS <img src="assets/svg/paises/colombia.svg" alt="bandera Colombia" title="Colombia"><span hidden>Colombia, español</span>',
        'm3u': 'https://inforedvos.lcdn.claro.net.co/Content/HLS_HLS_DIR/Live/channel(REDMASHDWEB)/master.m3u8',
        'source': 'https://redmas.com.co/senal-en-vivo/'
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
    'canal21tv.cl': {
        'name': 'canal21tv.cl <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://live.grupoz.cl/7092f3c5b7a28815b97373b9d6e84df5',
        'source': 'https://www.canal21tv.cl/wp/en-vivo/'
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
        'code': 'https://www.youtube.com/embed/-eJZ_JUoY_o?si=-pwGXOFT4Sn1bfz5" title="YouTube video player',
        'source': 'https://www.youtube.com/channel/UCFxHplbcoJK9m70c4VyTIxg'
    },
    'N+': {
        'name': 'N+ <img src="assets/svg/paises/mexico.svg" alt="bandera Mexico" title="Mexico"><span hidden>Mexico, español</span>',
        'm3u': 'https://channel07-notusa.akamaized.net/hls/live/2036971/event01/index_1.m3u8',
        'source': 'https://www.nmas.com.mx/en-vivo/'
    },
    'FOROtv': {
        'name': 'FOROtv <img src="assets/svg/paises/mexico.svg" alt="bandera Mexico" title="Mexico"><span hidden>Mexico, español</span>',
        'm3u': 'https://channel02-notusa.akamaized.net/hls/live/2023914/event01/index_2.m3u8',
        'source': 'https://www.nmas.com.mx/en-vivo/?canal=forotv'
    },
    'canal-once': {
        'name': 'CANAL ONCE <img src="assets/svg/paises/mexico.svg" alt="bandera Mexico" title="Mexico"><span hidden>Mexico, español</span>',
        'm3u': 'https://vivo.canaloncelive.tv/oncedos/ngrp:pruebachunks_all/playlist.m3u8',
        'source': 'https://canalonce.mx/'
    },
    'ADN40': {
        'name': 'ADN40 <img src="assets/svg/paises/mexico.svg" alt="bandera Mexico" title="Mexico"><span hidden>Mexico, español</span>',
        'code': 'https://mdstrm.com/live-stream/60b578b060947317de7b57ac?jsapi=true&show_controls_on_ad=true&autoplay=true&player=607868647ef7d607f13d0adb&show_title=false&ads[map]=https%3A%2F%2Fpubads.g.doubleclick.net%2Fgampad%2Flive%2Fads%3Fiu%3D%2F29782907%2FADN-40%2FEnvivoConstantPage%26description_url%3D%5Bplaceholder%5D%26url%3D%26env%3Dvp%26impl%3Ds%26tfcd%3D0%26npa%3D0%26gdfp_req%3D1%26output%3Dvast%26sz%3D640x480%26unviewed_position_start%3D1%26ad_rule%3D1%26correlator%3D%22',
        'source': 'https://www.adn40.mx/'
    },
    'telediario': {
        'name': 'Telediario <img src="assets/svg/paises/mexico.svg" alt="bandera Mexico" title="Mexico"><span hidden>Mexico, español</span>',
        'code': 'https://mdstrm.com/live-stream/5f2d9d6ff17144074bd8a284?jsapi=true&autoplay=true&mse=true',
        'source': 'https://www.telediario.mx/television'
    },
    'capital21': {
        'name': 'Capital21 <img src="assets/svg/paises/mexico.svg" alt="bandera Mexico" title="Mexico"><span hidden>Mexico, español</span>',
        'm3u': 'https://video.cdmx.gob.mx/redes/stream.m3u8',
        'source': 'https://www.capital21.cdmx.gob.mx/'
    },
    'mexiquense': {
        'name': 'Mexiquense <img src="assets/svg/paises/mexico.svg" alt="bandera Mexico" title="Mexico"><span hidden>Mexico, español</span>',
        'code': 'https://conceptoweb-studio.com/radio/video/mexiquense/',
        'source': 'https://radioytvmexiquense.mx/'
    },
    'elfinanciero': {
        'name': 'Elfinanciero <img src="assets/svg/paises/mexico.svg" alt="bandera Mexico" title="Mexico"><span hidden>Mexico, español</span>',
        'code': 'https://us-east-1.prod.tvcoins.com/player/player.html?tenant-id=elfinanciero&channel-id=820d0659-b687-44cc-97ed-b69098e058ad&autoplay=true',
        'source': 'https://www.elfinanciero.com.mx/tv/'
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
    'TV-33': {
        'name': 'TV 33 <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'm3u': 'https://directes-tv-int.ccma.cat/live-content/c33-super3-hls/bitrate_1.m3u8',
        'source': 'https://www.ccma.cat/3cat/directes/33/'
    }, 
    'Canal-324': {
        'name': 'CANAL 324 <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'm3u': 'https://directes-tv-int.ccma.cat/live-content/canal324-hls/bitrate_1.m3u8',
        'source': 'https://www.ccma.cat/3cat/directes/324/'
    },
    'TV3': {
        'name': 'TV3 <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'm3u': 'https://directes3-tv-int.ccma.cat/live-content/tvi-hls/bitrate_1.m3u8',
        'source': 'https://www.ccma.cat/3cat/directes/tv3/'
    },
    'Z-ONZE': {
        'name': 'Z ONZE <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'm3u': 'https://directes-tv-int.ccma.cat/live-origin/esport3-hls/bitrate_1.m3u8',
        'source': 'https://www.ccma.cat/3cat/directes/esport3/'
    },
    '3DH': {
        'name': '3HD <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://punt3.es/directo/directo.html',
        'source': 'https://www.punt3.es/'
    },
    'Canal-3': {
        'name': 'Canal 3 <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'm3u': 'https://avantstreaming.es/hls/canal3.m3u8',
        'source': 'https://canal3biar.es/directe/'
    },
    'Mijas-3.40-TV': {
        'name': 'Mijas 3.40 TV <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'm3u': 'https://streaming004.gestec-video.com/hls/MIJAS.m3u8',
        'source': 'https://www.coolstreaming.us/channelnew/es/71317/Mijas340TV.html'
    },
    'Bon-Dia-TV': {
        'name': 'Bon Dia TV <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://www.ccma.cat/3cat/video/bondiatv/embed/',
        'source': 'https://www.ccma.cat/bondiatv/'
    },
    'Radio-Televisión-Ceuta': {
        'name': 'Radio Televisión Ceuta <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'm3u': 'https://cdnlivevlc.codev8.net/rtvcelive/smil:channel1.smil/playlist.m3u8?test',
        'source': 'https://www.coolstreaming.us/channelnew/es/74465/RadioTelevisinCeuta.html'
    },
    'STZ-Telebista': {
        'name': 'STZ Telebista <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'm3u': 'https://cloudvideo.servers10.com:8081/stztelebista/index.m3u8',
        'source': 'https://www.coolstreaming.us/channelnew/es/71505/STZTelebista.html'
    },
    'Auronplay': {
        'name': 'Auronplay <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://player.twitch.tv/?channel=auronplay&parent=www.coolstreaming.us&theme=dark',
        'source': 'https://www.coolstreaming.us/channelnew/es/71505/STZTelebista.html'
    },
    'Activa-Musical': {
        'name': 'Activa Musical <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://www.emisorasmusicales.net/tv/tv.php',
        'source': 'https://www.emisorasmusicales.net/activa-tv/'
    },
    'Activa-Musical1': {
        'name': 'Activa Musical1 <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'm3u': 'https://streamtv.mediasector.es/hls/activatv/index.m3u8',
        'source': 'https://www.coolstreaming.us/channelnew/es/71505/STZTelebista.html'
    },
    'MolaHits': {
        'name': 'MolaHits <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'm3u': 'https://ventdelnord.tv:8080/mola/directe.m3u8?hls_ctx=m43x06q8',
        'source': 'https://www.coolstreaming.us/channelnew/es/74786/MolaHitsTV.html'
    },
    'HQM-Folk': {
        'name': 'HQM Folk <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://yowi.tv/embed/folkhqm?autoplay=false',
        'source': 'https://www.coolstreaming.us/channelnew/es/74802/HQMFolk.html'
    },
    'Hermes-TV-Vigo': {
        'name': 'Hermes TV Vigo <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://player.twitch.tv/?channel=hermestelevisionvigo&parent=www.coolstreaming.us&theme=dark',
        'source': 'https://www.coolstreaming.us/channelnew/es/61883/HermesTVVigo.html'
    },
    'Alcarria': {
        'name': 'Alcarria <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'm3u': 'https://cls.alcarria.tv/live/alcarriatv-livestream.m3u8',
        'source': 'https://www.coolstreaming.us/channelnew/es/63114/AlcarriaTV.html'
    },
    'TeleMadrid': {
        'name': 'TeleMadrid <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCv2BcgqxHSrl2QQfIkjR5Eg&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.coolstreaming.us/channelnew/es/61883/HermesTVVigo.html'
    },
    'La-8-Mediterraneo': {
        'name': 'La 8 Mediterraneo <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'm3u': 'https://streaming004.gestec-video.com/hls/8TV.m3u8',
        'source': 'https://www.coolstreaming.us/channelnew/es/63297/La8MediterraneoLaOchoTV.html'
    },
    'TeleVigo': {
        'name': 'TeleVigo <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'm3u': 'https://cloud.fastchannel.es/mic/manifiest/hls/televigo/televigo.m3u8',
        'source': 'https://www.coolstreaming.us/channelnew/es/63306/TeleVigoTV.html'
    },
    'Durangaldeko-Telebista': {
        'name': 'Durangaldeko Telebista <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'm3u': 'https://nlb2-live.emitstream.com/hls/5f9asjsehd7gmyxsdpzu/master.m3u8',
        'source': 'https://www.coolstreaming.us/channelnew/es/71321/DurangaldekoTelebista.html'
    },
    'HQM-Spanish': {
        'name': 'HQM Spanish <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://yowi.tv/embed/spanishhqm?autoplay=false',
        'source': 'https://www.coolstreaming.us/channelnew/es/61182/HQMSpanish.html'
    },
    'Punt-3-Television': {
        'name': 'Punt 3 Television <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'm3u': 'https://bit.controlstreams.com:5443/LiveApp/streams/punt3.m3u8',
        'source': 'https://www.coolstreaming.us/channelnew/es/64270/Punt3Television.html'
    },
    'HQM-Spanish': {
        'name': 'HQM Spanish <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://yowi.tv/embed/spanishhqm?autoplay=false',
        'source': 'https://www.coolstreaming.us/channelnew/es/61182/HQMSpanish.html'
    },
    'TEF-Tv': {
        'name': 'TEF TV <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'm3u': 'https://5940924978228.streamlock.net/EIVISSA_1/EIVISSA_1/playlist.m3u8',
        'source': 'https://www.coolstreaming.us/channelnew/es/63246/TEFTV.html'
    },
    'Negocios-tv': {
        'name': 'Negocios TV <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'm3u': 'https://streaming013.gestec-video.com/hls/negociostv.m3u8',
        'source': 'https://www.coolstreaming.us/channelnew/es/66866/NegociosTV.html'
    },
    'Telemotril-tv': {
        'name': 'NTelemotril TV <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'm3u': 'https://5940924978228.streamlock.net/8431/8431/playlist.m3u8',
        'source': 'https://www.coolstreaming.us/channelnew/es/71318/TelemotrilTV.html'
    },
    'Canal-Sur-Andalucía': {
        'name': 'Canal Sur Andalucía <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UChtLgH7ZJLqLGWJpBnzy9Lg&controls=1',
        'source': 'https://www.coolstreaming.us/channelnew/es/74612/CanalSurAndaluca.html'
    },
    'Grupo-Canal-Media': {
        'name': 'Grupo Canal Media <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'm3u': 'https://cloud.fastchannel.es/mic/manifiest/hls/gcmi/gcmi.m3u8',
        'source': 'https://www.coolstreaming.us/channelnew/es/74781/GrupoCanalMedia.html'
    },
    'XPTV1': {
        'name': 'XPTV1 <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'm3u': 'https://janus.xpbroadcasting.com:8443/hls/xptv1.m3u8',
        'source': 'https://www.coolstreaming.us/channelnew/es/72817/XPTV1.html'
    },
    'SpektraTV': {
        'name': 'SpektraTV <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'm3u': 'https://cloudvideo.servers10.com:8081/8136/index.m3u8',
        'source': 'https://www.coolstreaming.us/channelnew/es/71501/SpektraTV.html'
    },
    'Canela-Music-Hits': {
        'name': 'Canela Music Hits <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'm3u': 'https://stream.ads.ottera.tv/playlist.m3u8?network_id=1058',
        'source': 'https://www.coolstreaming.us/channelnew/es/74441/CanelaMusicHits.html'
    },
    'DoTB-TV': {
        'name': 'DoTB Tv <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'm3u': 'https://nlb2-live.emitstream.com/hls/5f9asjsehd7gmyxsdpzu/fragments/live-2000/index.m3u8',
        'source': 'https://www.coolstreaming.us/channelnew/es/55105/DoTBTv.html'
    },
    'a3series-TV': {
        'name': 'A3series Tv <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://clarovideo.deportesporinternet.com/dash2.html?url=aHR0cHM6Ly9sYXRhbXZvc2xpdmVjbGFyb3ZpZGVvLmFrYW1haXplZC5uZXQvQ29udGVudC9EQVNIX0RBU0hfRksvTGl2ZS9DaGFubmVsKEEzU0VSSUVTSEQpL21hbmlmZXN0Lm1wZA==&k1=ODQyYzA0ODc0NmEzNzdjOGJiZmU3M2E1Mzc5NDU3Y2M=&k2=YzE4YjRiNTQyZWM0MmQxNDM0MTQxNTE4YzYyZDU5NjY=&aut=true&lang=0',
        'source': 'a3series'
    },
    'global-TV': {
        'name': 'GLOBAL TV <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://atvenvivo.com/hls.php-94.html?get=Ly9saXZlLWV2ZzI1LnR2MzYwLmJpdGVsLmNvbS5wZS9iaXRlbC9nbG9iYWwvcGxheWxpc3QubTN1OD91aWQ9Mzg3MTEyOQ==',
        'source': 'https://tvhd.pe/global-tv-en-vivo/'
    },
    'espn-2-TV': {
        'name': 'Espn 2 Tv <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://la10hd.com/vivo/canal.php?stream=espn2',
        'source': 'https://tvhd.pe/espn-2-en-vivo/'
    },
    'espn-3-TV': {
        'name': 'Espn 3 Tv <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://la10hd.com/vivo/canal.php?stream=espn3',
        'source': 'https://tvhd.pe/espn-3-en-vivo/'
    },
    'liga-1-max-TV': {
        'name': 'Liga 1 Max Tv <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://la10hd.com/vivo/canal.php?stream=liga1max',
        'source': 'https://tvhd.pe/liga-1-max-en-vivo/'
    },
    'movistar-deportes-TV': {
        'name': 'Movistar Deportes Tv <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://betzta.com/canales.php?stream=movistar',
        'source': 'https://tvhd.pe/movistar-deportes-en-vivo/'
    },
    'directv-sports-2-TV': {
        'name': 'Directv Sports 2 <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://la10hd.com/vivo/canal.php?stream=dsports2',
        'source': 'https://tvhd.pe/directv-sports-2-en-vivo/'
    },
    'directv-sports-TV': {
        'name': 'Directv Sports <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://la10hd.com/vivo/canal.php?stream=dsports',
        'source': 'https://tvhd.pe/directv-sports-en-vivo/'
    },
    'CANAL19-TV': {
        'name': 'CANAL19 Tv <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://atvenvivo.com/hls.php-65.html?get=Ly9jZG4ubXljbG91ZHN0cmVhbS5pby9obHMvbGl2ZS9icm9hZGNhc3QvZXR5ZXRpaGsvaW5kZXgubTN1OD9EVlI=',
        'source': 'https://tvhd.pe/tnt-novelas-en-vivo/'
    },
    'real-madrid-TV': {
        'name': 'Real Madrid Tv <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://betzta.com/hls.php?url=aHR0cHM6Ly9ybXR2LmFrYW1haXplZC5uZXQvaGxzL2xpdmUvMjA0MzE1NC9ybXR2LWVuLXdlYi9tYXN0ZXIubTN1OAo=',
        'source': 'https://tvhd.pe/real-madrid-tv-en-vivo/'
    },
    'antena-3-TV': {
        'name': 'Antena 3 Tv <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://tele-libre.org/en-vivo-online/antena-3/embed.php',
        'source': 'https://tele-libre.org/en-vivo-online/antena-3/'
    }, 
    'antena-3-TV2': {
        'name': 'Antena 3 Tv2 <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://tele-libre.org/en-vivo-online/antena-3/embed2.php',
        'source': 'https://tele-libre.org/en-vivo-online/antena-3/'
    },
    'antena-3-TV3': {
        'name': 'Antena 3 Tv3 <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://tele-libre.org/en-vivo-online/antena-3/embed3.php',
        'source': 'https://tele-libre.org/en-vivo-online/antena-3/'
    },
    'la-cuatro-TV': {
        'name': 'La Cuatro Tv <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://tele-libre.org/en-vivo-online/la-cuatro/embed.php',
        'source': 'https://tele-libre.org/en-vivo-online/la-cuatro/'
    },
    'la-cuatro-TV2': {
        'name': 'La Cuatro Tv2 <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://tele-libre.org/en-vivo-online/la-cuatro/embed2.php',
        'source': 'https://tele-libre.org/en-vivo-online/la-cuatro/'
    },
    'telecinco-TV': {
        'name': 'Telecinco Tv <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://tele-libre.org/en-vivo-online/telecinco/embed.php',
        'source': 'https://tele-libre.org/en-vivo-online/telecinco/'
    },
    'telecinco-TV1': {
        'name': 'Telecinco Tv1 <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://tele-libre.org/en-vivo-online/telecinco/embed2.php',
        'source': 'https://tele-libre.org/en-vivo-online/telecinco/'
    },
    'telecinco-TV2': {
        'name': 'Telecinco Tv2 <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://tele-libre.org/en-vivo-online/telecinco/embed3.php',
        'source': 'https://tele-libre.org/en-vivo-online/telecinco/'
    },
    'la-sexta-TV': {
        'name': 'La Sexta Tv <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://tele-libre.org/en-vivo-online/la-sexta/embed.php',
        'source': 'https://tele-libre.org/en-vivo-online/la-sexta/'
    },
    'la-sexta-TV1': {
        'name': 'La Sexta Tv1 <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://tele-libre.org/en-vivo-online/la-sexta/embed2.php',
        'source': 'https://tele-libre.org/en-vivo-online/la-sexta/'
    },
    'la-sexta-TV2': {
        'name': 'La Sexta Tv2 <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://tele-libre.org/en-vivo-online/la-sexta/embed3.php',
        'source': 'https://tele-libre.org/en-vivo-online/la-sexta/'
    },
    'MEGA-TV': {
        'name': 'MEGA Tv <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://tele-libre.org/en-vivo-online/mega/embed.php',
        'source': 'https://tele-libre.org/TV-en-VIVO'
    },
    'MEGA-TV1': {
        'name': 'MEGA Tv1 <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://tele-libre.org/en-vivo-online/mega/embed2.php',
        'source': 'https://tele-libre.org/TV-en-VIVO'
    },
    'DMAX-TV': {
        'name': 'DMAX Tv <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://tele-libre.org/en-vivo-online/dmax/embed.php',
        'source': 'https://tele-libre.org/en-vivo-online/dmax/'
    },
    'DMAX-TV1': {
        'name': 'DMAX Tv1 <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://tele-libre.org/en-vivo-online/dmax/embed2.php',
        'source': 'https://tele-libre.org/en-vivo-online/dmax/'
    },
    'toros-TV': {
        'name': 'Toros Tv <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://tele-libre.org/en-vivo-online/toros/embed.php',
        'source': 'https://tele-libre.org/en-vivo-online/toros/'
    },
    'toros-TV': {
        'name': 'Toros Tv <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://tele-libre.org/en-vivo-online/toros/embed2.php',
        'source': 'https://tele-libre.org/en-vivo-online/toros/embed.php'
    },
    'volver-TV': {
        'name': 'Volver Tv <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://tele-libre.org/en-vivo-online/volver/embed.php',
        'source': 'https://tele-libre.org/en-vivo-online/volver/'
    },
    'volver-TV': {
        'name': 'Volver Tv <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://tele-libre.org/en-vivo-online/tvolver/embed2.php',
        'source': 'https://tele-libre.org/en-vivo-online/volver/'
    },
    'lifetime-TV': {
        'name': 'Lifetime Tv <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://tele-libre.org/en-vivo-online/lifetime/embed.php',
        'source': 'https://tele-libre.org/en-vivo-online/lifetime/'
    },
    'lifetime-TV': {
        'name': 'Lifetime Tv <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://tele-libre.org/en-vivo-online/lifetime/embed2.php',
        'source': 'https://tele-libre.org/en-vivo-online/lifetime/'
    },
    'food-network-TV': {
        'name': 'Food network Tv <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://tele-libre.org/en-vivo-online/food-network/embed.php',
        'source': 'https://tele-libre.org/en-vivo-online/food-network/'
    },
    'food-network-TV': {
        'name': 'Food network Tv <img src="assets/svg/paises/españa.svg" alt="bandera España" title="España"><span hidden>España, español</span>',
        'code': 'https://tele-libre.org/en-vivo-online/food-network/embed2.php',
        'source': 'https://tele-libre.org/en-vivo-online/food-network/'
    },
// BRASIL
    'cnn-brasil': {
        'name': 'CNN Brasil <img src="assets/svg/paises/brasil.svg" alt="bandera Brasil" title="Brasil"><span hidden>Brasil, Portugues</span>',
        'code': 'https://www.youtube.com/embed/1kLySHZxgDg?embed_config=%7B%22adsConfig%22%3A%7B%22disableAds%22%3Atrue%7D%2C%22enableIma%22%3Atrue%7D&enablejsapi=1&origin=https%3A%2F%2Fwww.cnnbrasil.com.br&widgetid=1',
        'source': 'https://www.cnnbrasil.com.br/'
    },
    'aratu-AO-brasil': {
        'name': 'aratu AO Brasil <img src="assets/svg/paises/brasil.svg" alt="bandera Brasil" title="Brasil"><span hidden>Brasil, Portugues</span>',
        'code': 'https://player.jmvstream.com/lvw/37jDLdzr0ReTuCIodqOVe5VoVFRt8l',
        'source': 'https://tvaratu.com.br/ao-vivo/'
    },
    'JovemPanNews': {
        'name': 'JovemPanNews.br <img src="assets/svg/paises/brasil.svg" alt="bandera Brasil" title="Brasil"><span hidden>Brasil, Portugues</span>',
        'm3u': 'https://d6yfbj4xxtrod.cloudfront.net/out/v1/7836eb391ec24452b149f3dc6df15bbd/index.m3u8',
        'source': 'https://github.com/listamake/iptvbr/blob/main/ytchannelbr.m3u'
    },
    'GloboNordeste-tv': {
        'name': 'GloboNordeste.br <img src="assets/svg/paises/brasil.svg" alt="bandera Brasil" title="Brasil"><span hidden>Brasil, Portugues</span>',
        'm3u': 'https://live-01.edge-dtel-vsa-pe.video.globo.com/j/eyJhbGciOiJSUzUxMiIsImtpZCI6IjEiLCJ0eXAiOiJKV1QifQ.eyJjb3VudHJ5X2NvZGUiOiJCUiIsImRvbWFpbiI6ImxpdmUtMDEuZWRnZS1kdGVsLXZzYS1wZS52aWRlby5nbG9iby5jb20iLCJleHAiOjE3MTk1OTU4NDgsImlhdCI6MTcxOTUwOTQ0OCwiaXNzIjoicGxheWJhY2stYXBpLXByb2QtZ2NwIiwib3duZXIiOiI5OTkwYTc3YS1hMGE2LTQ4NzQtYTZhNy1kY2RlYTdhODAyZGIiLCJwYXRoIjoiL251L2YoZHZyPTEyMCxpPTIpL2dsb2JvLXBlMS9wbGF5bGlzdC5tM3U4In0.qp2KeiMHzMOiPz3VKPfi8MStQRQsRLexvJHt1lt3KhPcYbNXVDk-jZVgwHKlZQdrQGDR8JChSjgkMtzu-FGTU9cDhUDkOqDalFRWMNHrCSrJsUSU0fmqSOsPUJeLctTYx5SPY-GP1gx03FusIIcqWLq5Ytjwg9c55j6VhNpKJh_Rm3T4Z5ShkcutPmsEOUbUgELoTrJbAlUeZPgfCJV8ToIN8YljvWl0QLtq7x96aaOOKFKMNhnQV9EHXroIXwyJb_JM6iQKB1GhjF0V8x3MpI3J2VM1i3eavAfruy_3Q-trlL4auF1aGakGeoWUq1RAFlM--Z3k75myEc33LpCL4A/nu/f(dvr=120,i=2)/globo-pe1/playlist.m3u8',
        'source': 'https://github.com/listamake/iptvbr/blob/main/home.m3u'
    },
    'RedeVida-tv': {
        'name': 'RedeVida.br <img src="assets/svg/paises/brasil.svg" alt="bandera Brasil" title="Brasil"><span hidden>Brasil, Portugues</span>',
        'm3u': 'https://cvd1.cds.ebtcvd.net/live-redevida/smil:redevida.smil/playlist.m3u8',
        'source': 'https://github.com/listamake/iptvbr/blob/main/home.m3u'
    },
    'RBATV-1': {
        'name': 'RBATV.br <img src="assets/svg/paises/brasil.svg" alt="bandera Brasil" title="Brasil"><span hidden>Brasil, Portugues</span>',
        'm3u': 'https://cdn.live.br1.jmvstream.com/w/LVW-15748/LVW15748_Yed7yzLuRC/playlist.m3u8',
        'source': 'https://github.com/listamake/iptvbr/blob/main/home.m3u'
    },
    'RedeTV.br-2': {
        'name': 'RedeTV.br <img src="assets/svg/paises/brasil.svg" alt="bandera Brasil" title="Brasil"><span hidden>Brasil, Portugues</span>',
        'm3u': 'https://cdn.jmvstream.com/w/AVJ-15235/playlist/playlist.m3u8',
        'source': 'https://github.com/listamake/iptvbr/blob/main/home.m3u'
    },
    'RedeTVRondonia.br-0': {
        'name': 'RedeTVRondonia.br <img src="assets/svg/paises/brasil.svg" alt="bandera Brasil" title="Brasil"><span hidden>Brasil, Portugues</span>',
        'm3u': 'https://59f1cbe63db89.streamlock.net:1443/redetvro/_definst_/redetvro/playlist.m3u8',
        'source': ''
    },
    'RecordNews.br-0': {
        'name': 'RecordNews.br <img src="assets/svg/paises/brasil.svg" alt="bandera Brasil" title="Brasil"><span hidden>Brasil, Portugues</span>',
        'm3u': 'https://5cf4a2c2512a2.streamlock.net/8016/8016/playlist.m3u8',
        'source': ''
    },
    'JovemPanNews.br-1-0': {
        'name': 'JovemPanNews.br <img src="assets/svg/paises/brasil.svg" alt="bandera Brasil" title="Brasil"><span hidden>Brasil, Portugues</span>',
        'm3u': 'https://d6yfbj4xxtrod.cloudfront.net/out/v1/7836eb391ec24452b149f3dc6df15bbd/index.m3u8',
        'source': ''
    },
    'redefamilia.br-1-0': {
        'name': 'redefamilia.br <img src="assets/svg/paises/brasil.svg" alt="bandera Brasil" title="Brasil"><span hidden>Brasil, Portugues</span>',
        'm3u': 'https://tv01.zas.media:1936/rftv/rftv/playlist.m3u8',
        'source': ''
    },
    'RedeBrasil.br-1-0': {
        'name': 'RedeBrasil.br <img src="assets/svg/paises/brasil.svg" alt="bandera Brasil" title="Brasil"><span hidden>Brasil, Portugues</span>',
        'm3u': 'https://video07.logicahost.com.br/redebrasil/redebrasil/playlist.m3u8',
        'source': ''
    },
    'CentralTV.br-1-0': {
        'name': 'CentralTV.br <img src="assets/svg/paises/brasil.svg" alt="bandera Brasil" title="Brasil"><span hidden>Brasil, Portugues</span>',
        'm3u': 'https://tv01.zas.media:1936/centraltvweb/centraltvweb/playlist.m3u8',
        'source': ''
    },
    'ISTVHD.br-1-0': {
        'name': 'ISTVHD.br music <img src="assets/svg/paises/brasil.svg" alt="bandera Brasil" title="Brasil"><span hidden>Brasil, Portugues</span>',
        'm3u': 'https://stmv1.srvstm.com/sistema7933/sistema7933/playlist.m3u8',
        'source': ''
    },
    'Cultura.br-1-0': {
        'name': 'Cultura.br <img src="assets/svg/paises/brasil.svg" alt="bandera Brasil" title="Brasil"><span hidden>Brasil, Portugues</span>',
        'm3u': 'https://sitetv.brasilstream.com.br/hls/sitetv/index.m3u8?token=9818453201921378000',
        'source': ''
    },
    'TVEBahia.br-1-0': {
        'name': 'TVEBahia.br <img src="assets/svg/paises/brasil.svg" alt="bandera Brasil" title="Brasil"><span hidden>Brasil, Portugues</span>',
        'm3u': 'https://8hzcavccys.zoeweb.tv/redeminas/ngrp:redeminas_all/playlist.m3u8',
        'source': ''
    },
    'anitv.br-1-0': {
        'name': 'anitv.br <img src="assets/svg/paises/brasil.svg" alt="bandera Brasil" title="Brasil"><span hidden>Brasil, Portugues</span>',
        'm3u': 'https://stream.ichibantv.com:3764/hybrid/play.m3u8',
        'source': ''
    },
    'PLAYTV.br-1-0': {
        'name': 'PLAYTV.br <img src="assets/svg/paises/brasil.svg" alt="bandera Brasil" title="Brasil"><span hidden>Brasil, Portugues</span>',
        'm3u': 'https://isaocorp.cloudecast.com/playtv/index.fmp4.m3u8',
        'source': ''
    },
    '-1-0': {
        'name': ' <img src="assets/svg/paises/brasil.svg" alt="bandera Brasil" title="Brasil"><span hidden>Brasil, Portugues</span>',
        'm3u': 'https://a.cdni.live/radioesporte/radioesporte/playlist.m3u8',
        'source': ''
    },
    'EsporteBrasilia.br-1-0': {
        'name': 'EsporteBrasilia.br <img src="assets/svg/paises/brasil.svg" alt="bandera Brasil" title="Brasil"><span hidden>Brasil, Portugues</span>',
        'm3u': 'https://a.cdni.live/radioesporte/radioesporte/playlist.m3u8',
        'source': ''
    },
    'RSNewsSports.br-1-0': {
        'name': 'RSNewsSports.br <img src="assets/svg/paises/brasil.svg" alt="bandera Brasil" title="Brasil"><span hidden>Brasil, Portugues</span>',
        'm3u': 'https://59f1cbe63db89.streamlock.net:1443/rsnewssports/_definst_/rsnewssports/playlist.m3u8',
        'source': ''
    },
    'UnivespTV.br-1-0': {
        'name': 'UnivespTV.br <img src="assets/svg/paises/brasil.svg" alt="bandera Brasil" title="Brasil"><span hidden>Brasil, Portugues</span>',
        'm3u': 'https://5b33b873179a2.streamlock.net:1443/mastertv/livestream/playlist.m3u8',
        'source': ''
    },
    'TVMaisFamilia.br-1-0': {
        'name': 'TVMaisFamilia.br <img src="assets/svg/paises/brasil.svg" alt="bandera Brasil" title="Brasil"><span hidden>Brasil, Portugues</span>',
        'm3u': 'https://video01.logicahost.com.br/redefamiliaa/redefamiliaa/playlist.m3u8',
        'source': ''
    },
    'SESCTV.br-1-0': {
        'name': 'SESCTV.br <img src="assets/svg/paises/brasil.svg" alt="bandera Brasil" title="Brasil"><span hidden>Brasil, Portugues</span>',
        'm3u': 'https://slbps-ml-sambatech.akamaized.net/samba-live/2472/7424/b0601c5cba87e912a4e37e8b68c1499b/video/a41dcac4-0033-46ca-b03f-d7858c6ad0c1_index.m3u8',
        'source': ''
    },
    'CanalEducacao.br-1-0': {
        'name': 'CanalEducacao.br <img src="assets/svg/paises/brasil.svg" alt="bandera Brasil" title="Brasil"><span hidden>Brasil, Portugues</span>',
        'm3u': 'https://canaleducacao-stream.ebc.com.br/chunks.m3u8',
        'source': ''
    },
    'RTNTV.br-1-0': {
        'name': 'RTNTV.br <img src="assets/svg/paises/brasil.svg" alt="bandera Brasil" title="Brasil"><span hidden>Brasil, Portugues</span>',
        'm3u': 'https://tv01.zas.media:1936/rtntv/rtntv/playlist.m3u8',
        'source': ''
    },
    'IdealTV.br-1-0': {
        'name': 'IdealTV.br <img src="assets/svg/paises/brasil.svg" alt="bandera Brasil" title="Brasil"><span hidden>Brasil, Portugues</span>',
        'code': 'https://s.apkwuv.xyz:80/6jcBys/VND1HB/83359',
        'source': ''
    },
    'MeioNorte.br-1-0': {
        'name': 'MeioNorte.br <img src="assets/svg/paises/brasil.svg" alt="bandera Brasil" title="Brasil"><span hidden>Brasil, Portugues</span>',
        'm3u': 'http://streaming.jornalmn.com.br/live/tvmn.m3u8',
        'source': ''
    },
    'AllSports.br-1-0': {
        'name': 'AllSports.br <img src="assets/svg/paises/brasil.svg" alt="bandera Brasil" title="Brasil"><span hidden>Brasil, Portugues</span>',
        'm3u': 'https://5cf4a2c2512a2.streamlock.net/dgrau/dgrau/playlist.m3u8',
        'source': ''
    },
    'vivaxtv.br-1-0': {
        'name': 'vivaxtv.br <img src="assets/svg/paises/brasil.svg" alt="bandera Brasil" title="Brasil"><span hidden>Brasil, Portugues</span>',
        'm3u': 'https://stmv2.samcast.com.br/marcus8647/marcus8647/playlist.m3u8',
        'source': ''
    },
    'bstv.br-1-0': {
        'name': ' <img src="assets/svg/paises/brasil.svg" alt="bandera Brasil" title="Brasil"><span hidden>Brasil, Portugues</span>',
        'm3u': 'https://br5093.streamingdevideo.com.br/bstv/bstv/playlist.m3u8',
        'source': ''
    },
    'adessotv.br-1-0': {
        'name': 'adessotv.br <img src="assets/svg/paises/brasil.svg" alt="bandera Brasil" title="Brasil"><span hidden>Brasil, Portugues</span>',
        'm3u': 'https://cdn.jmvstream.com/w/LVW-9715/LVW9715_12B26T62tm/chunklist.m3u8',
        'source': ''
    },
    'rbctv.br-1-0': {
        'name': 'rbctv.br music <img src="assets/svg/paises/brasil.svg" alt="bandera Brasil" title="Brasil"><span hidden>Brasil, Portugues</span>',
        'm3u': 'https://60d88f8ce1206.streamlock.net/id2515/id2515/chunklist.m3u8',
        'source': ''
    },
    'RetroCartoon.br-1-0': {
        'name': 'RetroCartoon.br <img src="assets/svg/paises/brasil.svg" alt="bandera Brasil" title="Brasil"><span hidden>Brasil, Portugues</span>',
        'm3u': 'https://stmv1.srvif.com/retrotv/retrotv/playlist-480p.m3u8',
        'source': ''
    },
    'RetroCartoon.br-1-0': {
        'name': 'RetroCartoon.br 2 <img src="assets/svg/paises/brasil.svg" alt="bandera Brasil" title="Brasil"><span hidden>Brasil, Portugues</span>',
        'm3u': 'https://stmv1.srvif.com/gospelcartoon/gospelcartoon/playlist.m3u8',
        'source': ''
    },
    'fkids.br-1-0': {
        'name': 'fkids.br <img src="assets/svg/paises/brasil.svg" alt="bandera Brasil" title="Brasil"><span hidden>Brasil, Portugues</span>',
        'm3u': 'https://stmv1.srvif.com/emlsilva/emlsilva/playlist.m3u8',
        'source': ''
    },
    'turnerdemo.br-1-0': {
        'name': 'turnerdemo.br <img src="assets/svg/paises/brasil.svg" alt="bandera Brasil" title="Brasil"><span hidden>Brasil, Portugues</span>',
        'm3u': 'https://cdn-1.nxplay.com.br/TOONCAST_TK/index.m3u8',
        'source': ''
    },
    'TVMax.br-1-0': {
        'name': 'TVMax.br usic <img src="assets/svg/paises/brasil.svg" alt="bandera Brasil" title="Brasil"><span hidden>Brasil, Portugues</span>',
        'm3u': 'https://5cf4a2c2512a2.streamlock.net/tvmax/tvmax/chunklist_w777565696.m3u8',
        'source': ''
    },
// ESTADOS UNIDOS
    'cnn-us': {
        'name': 'CNN US <img src="assets/svg/paises/us.svg" alt="bandera US" title="US"><span hidden>Estados unidos, inglés</span>',
        'code': 'https://livingabroad.tv/app/cnn-international',
        'source': 'https://us.cnn.com'
    },
    'cnn-us1': {
        'name': 'CNN US1 <img src="assets/svg/paises/us.svg" alt="bandera US" title="US"><span hidden>Estados unidos, inglés</span>',
        'code': 'https://livingabroad.tv/app/cnn-international',
        'source': 'https://livingabroad.tv/cnn-international-live-stream'
    },
    'cnn-us2': {
        'name': 'CNN US2 <img src="assets/svg/paises/us.svg" alt="bandera US" title="US"><span hidden>Estados unidos, inglés</span>',
        'code': 'https://babaktv.com/embed/cnn-international-link01/',
        'source': 'https://babaktv.com/cnn-international/'
    },
    'cnn-us3': {
        'name': 'CNN US3 <img src="assets/svg/paises/us.svg" alt="bandera US" title="US"><span hidden>Estados unidos, inglés</span>',
        'm3u': 'https://livenewsplay.com:1936/cnnsd/cnnsd//playlist.m3u8?dvr&secendtime=1721674713&sechash=MfjIbvyMONajiQ2pXQLuAMddCn8GtqeeYMI-177pu00=&secstarttime=1721663913',
        'source': 'https://www.livenewsmag.com/livecnn/'
    },
    '7News': {
        'name': 'Noticias 7News <img src="assets/svg/paises/us.svg" alt="bandera US" title="US"><span hidden>Estados unidos, ingles</span>',
        'm3u': 'https://dai2-playlistserver.aws.syncbak.com/cpl/20359441/dai2v5/1.0/7b2264657669636554797065223a387d/master.m3u8?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjIwMTYwNDAxIn0.eyJtaWQiOiIyMDM1OTQ0MSIsImNpZCI6MjA5MzAsInNpZCI6ODYzLCJtZDUiOiI2NDVlOGI4YzNlZjVjNjIzMWZmZDBmMjQ2YjM2NWNhNSIsImlhdCI6MTY4MTQyMDM2MSwiaXNzIjoiU3luY2JhayAoVEcpIn0.z6s98foBqaIqJNlYcAcqkgFbgL5xw_oO7KK0S38E6z0&platform=web',
        'source': 'https://wsvn.com/on-air-live-stream/'
    },
    'abc17news': {
        'name': 'Noticias abc17news <img src="assets/svg/paises/us.svg" alt="bandera US" title="US"><span hidden>Estados unidos, ingles</span>',
        'm3u': 'https://dai2-playlistserver.aws.syncbak.com/cpl/22150625/dai2v5/1.0/7b7d/master.m3u8?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjIwMTYwNDAxIn0.eyJtaWQiOiIyMjE1MDYyNSIsImNpZCI6MjIzNzcsInNpZCI6MTIyMywibWQ1IjoiZTM1OTdiYTU5YmExOTgwYzUxYTc3ODExM2VmZTYwNzEiLCJpYXQiOjE2ODE5MTU1MTcsImlzcyI6IlN5bmNiYWsgKFRHKSJ9.vclKOthiy0Ir27YzoIeaSSD8I99Er9WWDsf9MZYeDPM',
        'source': 'https://abc17news.com/livestream/'
    },
    'live5news': {
        'name': 'Noticias live5news <img src="assets/svg/paises/us.svg" alt="bandera US" title="US"><span hidden>Estados unidos, ingles</span>',
        'm3u': 'https://dai2-playlistserver.aws.syncbak.com/cpl/18498840/dai2v5/1/7b2264657669636554797065223a382c22616b616d61694d7670644b6579223a6e756c6c7d/master.m3u8?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjIwMTYwNDAxIn0.eyJkZXZpY2VUeXBlIjo4LCJzaWQiOjc1MSwiY2lkIjoxNzA3NywibWlkIjoxODQ5ODg0MCwibWsiOm51bGwsIm9vbSI6dHJ1ZSwiaXAiOiIxNzkuNi4xNjguNTciLCJ1aXAiOiIxNzkuNi4xNjguNTciLCJkbWEiOjAsInNzaWQiOiI5MjcwYWJhZmRlNzE0ZDBkYjk1ZTM4Njk2NWVkNDM4MiIsInNuIjoiV2ViIGExNjQxYjU3ZTEgKCBudWxsICkiLCJ1aWQiOm51bGwsImFwc3QiOm51bGwsInNiZXAiOmZhbHNlLCJjc2IiOmZhbHNlLCJtZDUiOiIxNGNkYzExOWZkN2Y0YWZiZGM2Nzk3MjA2YTMyNjhhZiIsImlhdCI6MTcyMTY2ODYxMCwiZXhwIjoxNzIxNjY4OTEwLCJhdWQiOiJodHRwczovL3BsYXlsaXN0c2VydmVyLmF3cy5zeW5jYmFrLmNvbSIsImlzcyI6IlN5bmNiYWsgR3JhcGhRTCBBUEkiLCJzdWIiOiJTS3JfYlc3amlsdHQtS2luUURzZkJ5ODBuT0YxT1hWTmo2OE5qSTNSaERZeHRJTTFuZyJ9.GW-snVrFhVBtN3WD8VOvYjhJkAADiajNhpUmxxcX8sQ',
        'source': 'https://www.live5news.com/livestream/'
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
        'code': 'https://actualidad.rt.com/live-embed',
        'source': 'https://actualidad.rt.com/en_vivo'
    },
    'RT-español2': {
        'name': 'RT en vivo <img src="assets/svg/paises/rusia.svg" alt="bandera Rusia" title="Rusia"><span hidden>Rusia, español</span>',
        'code': 'https://actualidad.rt.com/live-embed',
        'source': 'https://actualidad.rt.com/en_vivo'
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
// KOREA
    'JTBC-GOLF': {
        'name': 'JTBC GOLF <img src="assets/svg/paises/Korea.svg" alt="bandera Korea" title="Korea"><span hidden>Korea, español/span>',
        'm3u': 'https://www.yjtv007.com/liveedge/live37/playlist.m3u8?site=boxtv&ch=live37&pm=P&wowzatokenstarttime=1706564464&wowzatokenendtime=1706575264&wowzatokenCustomParameter=live37&wowzatokenhash=vpR-RP1Bqqb2r7o3LZfRWz6I89-WYHdbXQIhL0NaLWk=',
        'source': 'http://jtbcgolf.joins.com/tv/tv_timer.asp'
    },
    'SBS-GOLF': {
        'name': 'SBS GOLF <img src="assets/svg/paises/Korea.svg" alt="bandera Korea" title="Korea"><span hidden>Korea, español/span>',
        'm3u': 'https://www.yjtv1004.com/liveedge/live26/playlist.m3u8?site=boxtv&ch=live26&pm=P&wowzatokenstarttime=1706564843&wowzatokenendtime=1706575643&wowzatokenCustomParameter=live26&wowzatokenhash=bDnrqeUK86Yu9l7ffKeKJE7RJDavqgHAMk1fgp1AYhM=',
        'source': 'https://golf.sbs.co.kr/'
    },
    'OCN': {
        'name': 'OCN <img src="assets/svg/paises/Korea.svg" alt="bandera Korea" title="Korea"><span hidden>Korea, español/span>',
        'm3u': 'https://www.yjtv007.com/liveedge/live05/playlist.m3u8?site=boxtv&ch=live05&pm=P&wowzatokenstarttime=1706563601&wowzatokenendtime=1706574401&wowzatokenCustomParameter=live05&wowzatokenhash=hyFIf_5UtnElZ8Fv0JY4qPBgfATZ4d8HlD5tMaQTsW4=',
        'source': 'https://golf.sbs.co.kr/'
    },
    'CATCH-ON1': {
        'name': 'CATCH ON1 <img src="assets/svg/paises/Korea.svg" alt="bandera Korea" title="Korea"><span hidden>Korea, español/span>',
        'm3u': 'https://www.jobstv24.com/liveedge/live09/playlist.m3u8?site=boxtv&ch=live09&pm=P&wowzatokenstarttime=1706564088&wowzatokenendtime=1706574888&wowzatokenCustomParameter=live09&wowzatokenhash=eq38dlW6S3Th4QJGUo5kqqTzCCImqSF8ZIevMqbm04E=',
        'source': 'https://box24.tv/'
    },
    'KBS1': {
        'name': 'KBS1 <img src="assets/svg/paises/Korea.svg" alt="bandera Korea" title="Korea"><span hidden>Korea, español/span>',
        'code': 'https://sang007.com/sites/boxtv/theme/new_black/pages/pc/pc_view.php?ch=live26&title=SBS%20GOLF&m3u8=undefined&html=undefined&start=on&num=1',
        'source': 'https://onair.kbs.co.kr/index.html?sname=onair&stype=live&ch_code=11&ch_type=globalList'
    },
    'KBS2': {
        'name': 'KBS2 <img src="assets/svg/paises/Korea.svg" alt="bandera Korea" title="Korea"><span hidden>Korea, español/span>',
        'm3u': 'https://www.yjtv1004.com/liveedge/live13/playlist.m3u8?site=boxtv&ch=live13&pm=P&wowzatokenstarttime=1706565219&wowzatokenendtime=1706576019&wowzatokenCustomParameter=live13&wowzatokenhash=8rxdi34-fJyJfNmrR9mi-3Ul62mugDGovrlZO-2h-Q0=',
        'source': 'https://onair.kbs.co.kr/index.html?sname=onair&stype=live&ch_code=11&ch_type=globalList'
    },
    'SBS': {
        'name': 'SBS <img src="assets/svg/paises/Korea.svg" alt="bandera Korea" title="Korea"><span hidden>Korea, español/span>',
        'm3u': 'https://www.mvptv24.com/liveedge/live14/playlist.m3u8?site=boxtv&ch=live14&pm=P&wowzatokenstarttime=1706565417&wowzatokenendtime=1706576217&wowzatokenCustomParameter=live14&wowzatokenhash=J7nCgpse86-slBaL-n4T_I8AV_2BIBFwq6BQjAhNPp4=',
        'source': 'https://www.sbs.co.kr/'
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
        'code': 'https://www.youtube.com/embed/oIgbl7t0S_w?autoplay=0&controls=0&disablekb=1&playsinline=1&cc_load_policy=0&cc_lang_pref=auto&widget_referrer=https%3A%2F%2Fctinews.com%2Flive&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1&customControls=true&noCookie=false&enablejsapi=1&origin=https%3A%2F%2Fctinews.com&widgetid=1',
        'source': 'https://www.youtube.com/channel/UC5l1Yto5oOIgRXlI4p4VKbw'
    },
// VARIOS
    'dw': {
        'name': 'DW Español 🌍<span hidden>Alemania, español/span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCT4Jg8h03dD0iN3Pb5L0PMA&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCT4Jg8h03dD0iN3Pb5L0PMA'
    },
    'dw1': {
        'name': 'DW Español 1 🌍<span hidden>Turquia, ingles</span>',
        'code': 'https://www.youtube.com/embed/5VF4aor94gw?si=4PEaUDDCMU5XRjQ6',
        'source': 'https://www.dw.com/es/live-tv/channel-spanish'
    },
    'dw2': {
        'name': 'DW Español 2 🌍<span hidden>Turquia, ingles</span>',
        'm3u': 'https://dwamdstream104.akamaized.net/hls/live/2015530/dwstream104/index.m3u8',
        'source': 'https://www.youtube.com/channel/UC7fWeaHhqgM4Ry-RMpM2YYw'
    },
    'HispanTV': {
        'name': 'HispanTV 🌍<span hidden>Turquia, ingles</span>',
        'm3u': 'https://cdnlive.presstv.ir/live/smil:live.smil/playlist.m3u8',
        'source': 'https://www.hispantv.com/directo'
    },
    'Africa 24': {
        'name': 'Africa 24 🌍<span hidden>Turquia, ingles</span>',
        'code': 'https://player.infomaniak.com/?channel=71743&player=11471',
        'source': 'https://africa24tv.com/africa-24-live/'
    },
    'ZEE': {
        'name': 'ZEE 🌍<span hidden>Turquia, ingles</span>',
        'code': 'https://player.3rbcafee.com/2021/09/zee-alwan-ex.html',
        'source': 'قناة بى فور يو أفلام B4U Aflam بث مباشر (3rbcafee.com)'
    },
    'MBCBollywood': {
        'name': 'MBC Bollywood 🌍<span hidden>Turquia, ingles</span>',
        'code': 'https://tv.aflam4you.org/embed.php?vid=78',
        'source': 'http://mbc-bollywood.algeria-tv.com/'
    },
    'mbc1': {
        'name': 'mbc 🌍<span hidden>Turquia, ingles</span>',
        'code': 'https://tv.aflam4you.org/mbc-live-mbc-watch2024_5.html',
        'source': 'https://tv.aflam4you.org/mbc-live-mbc-watch2024_5.html'
    },
    'AbuDhabi': {
        'name': 'Abu Dhabi 🌍<span hidden>Turquia, ingles</span>',
        'm3u': 'https://admdn2.cdn.mangomolo.com/adtv/smil:adtv.stream.smil/playlist.m3u8',
        'source': 'https://online-television.net/es/2718-abu-dhabi-tv.html'
    },
    'Abscbnnews': {
        'name': 'abs cbn news 🌍<span hidden>Turquia, ingles</span>',
        'code': 'https://www.youtube-nocookie.com/embed/pBmRIjlAe_U?autoplay=1&playsinline=1',
        'source': 'https://www.youtube.com/channel/UCaLzUKBv5iIAHKYP8hL2zFw'
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
    'turbo-mix': {
        'name': 'Turbo Mix <img src="assets/svg/paises/peru.svg" title="Peru"> 🎵<span hidden>Radios, Perú, español</span>',
        'm3u': 'https://7.innovatestream.pe:19360/turbomixoficial/turbomixoficial.m3u8',
        'source': 'https://www.turbomix.com.pe/'
    },
    'stereo-tv': {
        'name': 'Stereo TV <img src="assets/svg/paises/peru.svg" title="Peru"> 🎵<span hidden>Radios, Perú, Jaen, español</span>',
        'm3u': 'https://servers.amelbasoluciones.co:19360/5medialive/5medialive.m3u8',
        'source': 'https://radiostereotv.com/'
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
    'Musica': {
        'name': '📷 Musica <img src="assets/svg/paises/peru.svg" alt="bandera Peru" title="Peru"><span hidden>Cámaras, Peru, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/HpdsHrfhKqQ?si=xHpkUqXHgv8pn9l9?autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/@almaantiguamusica-yh3qg'
    },
    'av-la-marina': {
        'name': '📷 Av La Marina <img src="assets/svg/paises/peru.svg" alt="bandera Peru" title="Peru"><span hidden>Cámaras, Peru, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/Arq2BUHYz9Y?autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCP9nvEUj8EN-wuOQajPQbAw'
    },
    'av-javier-prado': {
        'name': '📷 Av Javier Prado <img src="assets/svg/paises/peru.svg" alt="bandera Peru" title="Peru"><span hidden>Cámaras, Peru, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/BYw_2aRwALk?autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCCvdN9xfucz3W0fS47HkiFw'
    },
    'av-republica-panama': {
        'name': '📷 Av República de Panamá <img src="assets/svg/paises/peru.svg" alt="bandera Peru" title="Peru"><span hidden>Cámaras, Peru, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/aywirEbu12A?autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCCvdN9xfucz3W0fS47HkiFw'
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
    'El-trece': {
        'name': '📷 EL TRECE <img src="assets/svg/paises/argentina.svg" alt="bandera Argentina" title="Argentina"><span hidden>Cámaras, Argentina, Español</span>',
        'code': 'https://geo.dailymotion.com/player/x8p5t.html?video=x8aobf1',
        'source': 'https://www.rosario3.com/'
    },
// EEUU
    'times-square': {
        'name': '📷 Times Square Live 4K <img src="assets/svg/paises/us.svg" alt="bandera US" title="US"><span hidden>Cámaras, Estados unidos, ingles</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UC6qrG3W8SMK0jior2olka3g&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UC6qrG3W8SMK0jior2olka3g'
    },
    'VOA': {
        'name': '📷 VOA <img src="assets/svg/paises/us.svg" alt="bandera US" title="US"><span hidden>Cámaras, Estados unidos, ingles</span>',
        'm3u': 'https://voa-ingest.akamaized.net/hls/live/2033866/tvmc01/playlist.m3u8',
        'source': 'https://www.vozdeamerica.com/'
    },
    'Ariana-NEWS': {
        'name': '📷 Ariana NEWS <img src="assets/svg/paises/us.svg" alt="bandera US" title="US"><span hidden>Cámaras, Estados unidos, ingles</span>',
        'm3u': 'https://d10rltuy0iweup.cloudfront.net/ATNNEWS/myStream/playlist.m3u8',
        'source': 'https://www.ariananews.af/livetv/'
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
        'name': '🦠 COVID-19 Perú <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://bing.com/covid/local/peru',
        'source': 'https://bing.com/covid/local/peru'
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
    'encerrona': {
        'name': 'La Encerrona - Todos los episodios <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/videoseries?list=PL4_L4CSNdHPUIm8ajOHFvHniKhc8Z26hY&autoplay=0&mute=0&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/playlist?list=PL4_L4CSNdHPUIm8ajOHFvHniKhc8Z26hY'
    },
    'bob-ross': {
        'name': 'Bob Ross (Todas las Temporadas) 🌍<span hidden>Estados unidos, ingles</span>',
        'code': 'https://www.youtube-nocookie.com/embed/videoseries?list=PLaLOVNqqD-2HgiA-GZyzcfZN9n-YelhB5&autoplay=0&mute=0&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCxcnsr1R5Ge_fbTu5ajt8DQ'
// EDUCATIVOS
    },
    'ipe': {
        'name': '📚 Indentidad Peruana - iPE <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, español</span>',
        'm3u': 'http://cdnh4.iblups.com/hls/OVJNKV4pSr.m3u8',
        'source': 'https://www.canalipe.tv/streaming'
    },
    'cultura-24': {
        'name': '📚 Cultura 24 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, español</span>',
        'code': 'https://www.opencaster.com/clients/cultura24/',
        'source': 'https://cultura24.tv/'
    },
// 🏛️ 🏛️ 🏛️
    'congreso': {
        'name': '🏛️ Congreso <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCsKiP5cZCYh9YhPGrI6GrkQ&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCsKiP5cZCYh9YhPGrI6GrkQ'
    },
    'justicia-tv': {
        'name': '🏛️ JusticiaTV <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCwsURxTXqGqijgu98ndod3A&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCwsURxTXqGqijgu98ndod3A'
    },
// CANALES ALTERNATIVOS CAM DIPUTADOS
// NA
}
