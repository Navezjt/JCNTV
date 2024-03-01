/*
Guía rápida:
    'nombre': {                 (Nombre objeto/canal, no repetir entre señales debe ser único)
        'name': 'nombre'        (Nombre canal a mostrar en botón y barra que dirige a su origen cuando activo)
        'code': 'url'           (Code se utiliza cuando se trata de contenido que va dentro de un iframe (un embed directo))
    SINO SE CUENTA CON URL PARA FORMATO "code" UTILIZAR "m3u"
        'm3u': 'url'            (M3U se utiliza cuando se utilizan enlaces .m3u8, no listas m3u solo canales individuales)
        'source': 'url'         (Source es el enlace de origen de la señal, a modo de transparencia y libertad de abandonar la página si solo se quiere continuar con dicha señal, si se extra una señal ya sea tipo "code" o "m3u8" de www.pagina-ejemplo.cl debe de ponerse www.pagina-ejemplo.cl en "source")
    }

by Navezjt
https://github.com/Navezjt
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
        'code': 'https://iblups.com/e_tvperuHD',
        'source': 'https://www.tvperu.gob.pe/play'
    },
    'tv-peru-noticias': {
        'name': 'TVPerú Noticias <img src="assets/svg/paises/peru.svg" title="Perú"><span hidden>Perú, español</span>',
        'm3u': 'https://d6vls0u25arys.cloudfront.net/out/v1/777b4d4cc0984575a7d14f6ee57dbcaf/index.m3u8',
        'source': 'https://www.tvperu.gob.pe/play'
    },
    'tv-peru-noticias-yt': {
        'name': 'TVPerú Noticias YT <img src="assets/svg/paises/peru.svg" title="Perú"><span hidden>Perú, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCkZCoc42IipR1ucqJmIehsA&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCkZCoc42IipR1ucqJmIehsA'
    },
    'telecolor-tv': {
        'name': 'Telecolor TV <img src="assets/svg/paises/peru.svg" title="Perú"><span hidden>Perú, español</span>',
        'm3u': 'https://live.obslivestream.com/telecolormux/index.m3u8',
        'source': 'https://telecolortv.pe/'
    },
    'planeta-tv': {
        'name': 'Planeta TV <img src="assets/svg/paises/peru.svg" title="Perú"><span hidden>Perú, español</span>',
        'm3u': 'https://live.obslivestream.com/planetatv/tracks-v1a1/mono.m3u8',
        'source': 'https://moyobamba.com/planetatv/'
    },
    'panamericana': {
        'name': 'Panamericana TV <img src="assets/svg/paises/peru.svg" title="Perú"><span hidden>Perú, español</span>',
        'code': 'https://panamericana.pe/tvenvivo/noframes',
        'source': 'https://panamericana.pe/tvenvivo'
    },
    'panamericana-TV2-dm': {
        'name': 'Panamericana TV2 DM <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
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
        'code': 'https://v4.tustreaming.cl:2000/VideoPlayer/ondadigitaltv?autoplay=1',
        'source': 'https://ondadigitaltv.com'
    },
    'ovacion': {
        'name': 'Ovación <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://5c3fb01839654.streamlock.net:1963/iptvovacion1/liveovacion1tv/playlist.m3u8',
        'source': 'https://ovacion.pe/radio'
    },
    'palmeras-tv1': {
        'name': 'Palmeras TV1 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://video.ingenioperu.com:3982/live/palmerastvlive.m3u8',
        'source': 'https://grupopalmerastv.com/portal/'
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
    'Vision-Sur-Television': {
        'name': 'Vision Sur Television <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://ott1.hdlatam.tv/live_abr/webtvVisionSur/playlist.m3u8',
        'source': 'https://visionsurtv.pe/tv-en-vivo/'
    },
    'atv': {
        'name': 'ATV <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://d3krdjs7is1y42.cloudfront.net/ATVpe/df13ed57843877b21ad969184ab6888f.sdp/playlist.m3u8?PlaylistM3UCL',
        'source': 'https://www.atv.pe/envivo-atv'
    },
    'atv-plus': {
        'name': 'ATV Más <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://d3krdjs7is1y42.cloudfront.net/ATVmas/74ee4169b59e6f987ae3d77317309109.sdp/playlist.m3u8?PlaylistM3UCL',
        'source': 'https://www.atv.pe/envivo-atv'
    },
    'radio-exitosa1': {
        'name': 'Radio Exitosa1 <img src="assets/svg/paises/peru.svg" title="Perú"><span hidden>Perú, español</span>',
        'code': 'https://cu.onliv3.com/exitosa/',
        'source': 'https://exitosanoticias.pe/v1/tvenvivo/'
    },
    'radio-exitosa-yt': {
        'name': 'Radio Exitosa YT <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Lima, radio, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/K1O6v9EHBzY?channel=UCbyblOHU12USUbbPL_M7BNg&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/@exitosape'
    },
    'pbo-radio': {
        'name': 'PBO Radio <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/UObrwwt9Z9c?channel=UCgR0st4ZLABi-LQcWNu3wnQ&autoplay=1&mute=1&modestbranding=1&showinfo=0',
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
        'code': 'https://videoserver.tmcreativos.com:2020/VideoPlayer/raditropical?autoplay=1',
        'source': 'https://radiotropical.pe/'
    },
    'radio-uno': {
        'name': 'Radio Uno <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, Tacna, radio, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCK0lpuL9PQb3I5CDcu7Y7bA&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCK0lpuL9PQb3I5CDcu7Y7bA'
    },
    'Mega-TV': {
        'name': 'Mega TV <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, noticias, español</span>',
        'code': 'https://megatvarequipa.com/megatvarequipa-live/index.html',
        'source': 'https://www.megatvarequipa.com/television-en-vivo/'
    },
    'Mega-TV-Jaen': {
        'name': 'Mega TV Jaen <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, noticias, español</span>',
        'm3u': 'https://7.innovatestream.pe:19360/megatvjaen/megatvjaen.m3u8',
        'source': 'https://megatvjaen.pe/tv-en-vivo/'
    },
    'liga1max': {
        'name': 'Liga1Max <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://clarovideo.deportesporinternet.com/dash2.html?url=aHR0cHM6Ly9wZWxpdmVjaGFubmVsc2Rhc2gtMy5jbGFyb3ZpZGVvLmNvbS9icGstdHYvTElHQTFNQVgvZGFzaF9may9pbmRleC5tcGQ=&k1=NDlmMTRkYzZhNzMxNDgwOTRkZmMyNzJkZjkwOGFjMWQ=&k2=MTFjNTg2YmUyNmM0MjJjZDE2OWUwMTczOWI1NzAyZTk=&aut=true&lang=0',
        'source': 'https://tvporinternet.pe/golperu-en-vivo/'
    },
    'Doble-AA': {
        'name': 'Doble AA <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://videoserver.tmcreativos.com:2020/VideoPlayer/yvmgbdpqmp',
        'source': 'https://dobleaamedios.com/tv'
    },
    'Radio-California': {
        'name': 'Radio California <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://vdo.grupolimalive.com/live-stream-video-widget/californiatv',
        'source': 'https://www.radiocalifornia.pe/'
    },
    'atm': {
        'name': 'ATM <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://vdo.grupolimalive.com/live-stream-video-widget/atm',
        'source': 'https://atm.pe/'
    },
    'diariohechicera': {
        'name': 'Diariohechicera <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://video.misistemareseller.com:443/corporationhc/corporationhc/playlist.m3u8',
        'source': 'https://diariohechicera.com/'
    },
    'Canal33Ayacucho': {
        'name': 'Canal33Ayacucho <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://video2.getstreamhosting.com:19360/8206/8206.m3u8',
        'source': 'https://live.canal33ayacucho.com/'
    },
    'uraniotv': {
        'name': 'Uraniotv <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://live.obslivestream.com/uraniotv/index.m3u8',
        'source': 'https://uraniotv.pe/'
    },
    'ozonotv': {
        'name': 'Ozonotv <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://live.obslivestream.com/ozonotv/index.m3u8',
        'source': 'https://ozonotelevision.pe/'
    },
    'aldiaradiotv': {
        'name': 'Aldiaradiotv <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://7.innovatestream.pe:19360/aldiatv/aldiatv.m3u8',
        'source': 'https://aldiaradiotv.com/'
    },
    'viaaltomayotv': {
        'name': 'Viaaltomayotv <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://bradmax.com/client/embed-player/6f3681d2b86803cdd0e30ff79e8d2240dcca604c_9989?mediaUrl=https%3A%2F%2Flive.obslivestream.com%2Fviaaltomayomux%2Findex.m3u8&title=VIA%20Alto%20Mayo&duration=0',
        'source': 'https://www.viaaltomayotv.com/'
    },
    'geniostv': {
        'name': 'Geniostv <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://live.obslivestream.com/geniostvmux/index.m3u8',
        'source': 'https://geniostv.pe/'
    },
    'crtv': {
        'name': 'Crtv <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://live.obslivestream.com/crtvmux/index.m3u8',
        'source': 'https://crtv.pe/'
    },
    'wtv': {
        'name': 'Wtv <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://live.obslivestream.com/wtv/index.m3u8',
        'source': 'https://playmax.tv/'
    },
    'estacioncmtv': {
        'name': 'Estacioncmtv <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://live.obslivestream.com/mtv/index.m3u8',
        'source': 'https://estacioncmtv.pe/'
    },
    'radiotvnorselva': {
        'name': 'Radiotvnorselva <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://live.obslivestream.com/norselvatv/index.m3u8',
        'source': 'https://radiotvnorselva.com/'
    },
    'sanjuaneratv': {
        'name': 'Sanjuaneratv <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://live.obslivestream.com/sanjuanera/index.m3u8',
        'source': 'http://sanjuaneratv.pe/'
    },
    'supercanal': {
        'name': 'Supercanal <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://live.obslivestream.com/supercanal/index.m3u8',
        'source': 'https://supercanal.com.pe/'
    },
    'reddigital': {
        'name': 'Reddigital <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://live.obslivestream.com/reddigital/index.m3u8',
        'source': 'https://playmax.tv/'
    },
    'riberena': {
        'name': 'Riberena <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://vdo.grupolimalive.com:3277/live/riberenatvlive.m3u8',
        'source': 'https://riberena.pe/'
    },
    'radioselvatv': {
        'name': 'Radioselvatv <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://app.ahxpro.com/audio/radioselvav2/',
        'source': 'https://radioselvatv.pe/'
    },
    'cositel': {
        'name': 'Cositel <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://cloudvideo.servers10.com:2020/VideoPlayer/8180?autoplay=1',
        'source': 'https://cositelperu.com/'
    },
    'cultura24': {
        'name': 'Cultura24 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://www.opencaster.com/clients/cultura24/index.php?ancho=100&alto=100',
        'source': 'https://www.cultura24.tv/'
    },
    'huanucoenvivo': {
        'name': 'Huanucoenvivo <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://vdo.grupolimalive.com/live-stream-video-widget/antonio',
        'source': 'https://huanucoenvivo.com/'
    },
    'cutervotv': {
        'name': 'Cutervotv <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://mc.servidor.stream:2020/VideoPlayer/8256?autoplay=1',
        'source': 'https://cutervotv.com/'
    },
    'cumo': {
        'name': 'Cumo <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://live.obslivestream.com/cumo/index.m3u8',
        'source': 'https://cumo.pe/'
    },
    'creotvperu': {
        'name': 'Creotvperu <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://srv1.mediastreamperu.com:19360/creotv/creotv.m3u8',
        'source': 'https://www.creotvperu.com/'
    },
    'CentralTV': {
        'name': 'CentralTV <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://5c3fb01839654.streamlock.net:1963/iptvcentraltv/livecentraltvtv/playlist.m3u8',
        'source': 'https://artv.watch/es/PE/CentralTV.pe'
    },
    'conecta2peru': {
        'name': 'Conecta2peru <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://tmcreativos.app/android/conecta2',
        'source': 'https://conecta2peru.com/'
    },
    'conecta2peruR': {
        'name': 'Conecta2peruR <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://servilive.com:3696/live/enlacetxlive.m3u8',
        'source': 'https://conecta2peru.com/'
    },
    'canalb': {
        'name': 'Canalb <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://www.youtube.com/embed/OH3UAIu2q-U?hd=1&autoplay=1',
        'source': 'https://canalb.pe/'
    },
    'bnbdigitaltv': {
        'name': 'Bnbdigitaltv <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://vdo.panelstreaming.live:3806/live/bnbdigitallive.m3u8',
        'source': 'https://www.bnbdigitaltv.com/'
    },
    'canal8tv': {
        'name': 'Canal8tv <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://live.obslivestream.com/canal8/index.m3u8',
        'source': 'https://canal8tv.pe/quienes-somos/'
    },
    'radioatmosfera': {
        'name': 'Radioatmosfera <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://castv10.plugstreaming.com:19360/atmosferatv/atmosferatv.m3u8',
        'source': 'https://radioatmosfera.pe/'
    },
    'dmjsur': {
        'name': 'Dmjsur <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://stmv1.voxhdnet.com/dmjsurtv/dmjsurtv/playlist.m3u8',
        'source': 'https://www.dmjsur.com/tv/'
    },
    'galactica-tv': {
        'name': 'Galactica tv <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': '//tmcreativos.app/android/galacticatv',
        'source': 'https://galacticatv.com/'
    },
    'imperial-tv': {
        'name': 'Imperial TV <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://vdo.grupolimalive.com:3162/live/imperialtvlive.m3u8',
        'source': 'https://artv.watch/es/PE/ImperialTelevision.pe'
    },
    'Intuitiva-TV': {
        'name': 'Intuitiva TV <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://video2.lhdserver.es/cableperu/live.m3u8',
        'source': 'https://cableperu.pe/'
    },
    'la-republica': {
        'name': 'La Republica <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://mdstrm.com/live-stream/621936cf2953c10828e21c03?player=5ff34bac3c6bb67fa49896b5',
        'source': 'https://larepublica.pe/'
    },
    'miel-TV': {
        'name': 'Miel TV <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://7.innovatestream.pe:19360/nativatv/nativatv.m3u8',
        'source': 'https://elgrupofiesta.pe/'
    },
    'Controversia-TV': {
        'name': 'Controversia TV <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://live.obslivestream.com/controversiatv/index.m3u8',
        'source': 'https://artv.watch/es/PE/ControversiaTV.pe'
    },
    'la-abeja2': {
        'name': 'La-Abeja2 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://cdnhd.iblups.com/hls/F87ppt1YAT.m3u8',
        'source': 'https://www.laabeja.pe/tv/'
    },
    'limalive': {
        'name': 'Limalive <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://vdo.grupolimalive.com:3245/stream/play.m3u8',
        'source': 'https://grupolimalive.com/radio-nube/'
    },
    'matices': {
        'name': 'Matices <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://vdo.grupolimalive.com/live-stream-video-widget/maticestv',
        'source': 'https://aldiaconmatices.com/'
    },
    'milenial': {
        'name': 'Milenial <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://www.milenial.news/salida/sd/milenial.m3u8',
        'source': 'https://www.milenial.news/'
    },
    'milleniumr-tv': {
        'name': 'Milleniumr TV <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://videoserver.tmcreativos.com:2020/VideoPlayer/nqvnhujhrx',
        'source': 'https://milleniumrtv.com/'
    },
    'minedu-1': {
        'name': 'MINEDU 1<img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'http://iptv.perueduca.pe:1935/canal1/canal11/playlist.m3u8',
        'source': 'http://iptv.perueduca.pe/'
    },
    'minedu-2': {
        'name': 'MINEDU 2 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'http://iptv.perueduca.pe:1935/canal2/canal22/playlist.m3u8',
        'source': 'http://iptv.perueduca.pe/'
    },
    'minedu-3': {
        'name': 'MINEDU 3 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'http://iptv.perueduca.pe:1935/canal3/canal33/playlist.m3u8',
        'source': 'http://iptv.perueduca.pe/'
    },
    'minedu-4': {
        'name': 'MINEDU 4 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'http://iptv.perueduca.pe:1935/canal4/canal44/playlist.m3u8',
        'source': 'http://iptv.perueduca.pe/'
    },
    'hipodromo-monterrico': {
        'name': 'Hipodromo-Monterrico <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://www.opencaster.com/clients/hipodromojcp/',
        'source': 'https://hipodromodemonterrico.com.pe/monterrico/home'
    },
    'Nacional-TV-Perú': {
        'name': 'Nacional TV Perú <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://s1.tvdatta.com/live-stream-video-widget/nacionaltv',
        'source': 'https://nacionaltvperu.com/'
    },
    'ntv': {
        'name': 'NTV <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://ntv.pe/salida/nativa.m3u8',
        'source': 'https://ntv.pe/'
    },
    'Nativa-TV-Satipo': {
        'name': 'Nativa TV Satipo <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://7.innovatestream.pe:19360/nativatv/nativatv.m3u8',
        'source': 'https://elgrupofiesta.pe/'
    },
    'Nazarenas-TV': {
        'name': 'Nazarenas TV <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://5c3fb01839654.streamlock.net:1963/iptvnazarenas/livenazarenastv/playlist.m3u8',
        'source': 'https://www.nazarenas.tv/'
    },
    'NorSelva-RTV': {
        'name': 'NorSelva RTV <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://live.obslivestream.com/norselvatv/index.m3u8',
        'source': 'https://radiotvnorselva.com/'
    },
    'Nova-TV-Star': {
        'name': 'Nova TV Star <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://7.innovatestream.pe:19360/radionovastar/radionovastar.m3u8',
        'source': 'http://radionovastar.com/tv-en-vivo/'
    },
    'Oasis-RTV': {
        'name': 'Oasis RTV <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://7.innovatestream.pe:19360/oasisrtv/oasisrtv.m3u8',
        'source': 'https://oasisrtv.com/'
    },
    'PeruvianRadio-TV': {
        'name': 'PeruvianRadio TV <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://vdo.grupolimalive.com:3399/stream/play.m3u8',
        'source': 'https://artv.watch/es/PE/PeruvianRadioTV.pe'
    },
    'Planea-TV-amazonas': {
        'name': 'Planea TV Amazonas <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://vdo.grupolimalive.com/live-stream-video-widget/planeatv',
        'source': 'https://planeatvamazonas.com/'
    },
    'Primavera-radio': {
        'name': 'Primavera Radio <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://playerv.streamingvip.click/video/primaveratv/1/true/false/YzNSdGRpNXpkSEpsWVcxcGJtZDJhWEF1WTJ4cFkycz0rWg==/16:9/',
        'source': 'https://www.radioprimaveratv.com.pe/'
    },
    'QT-Television': {
        'name': 'QT Television <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://servilive.com/live-stream-video-widget/qosqotimes',
        'source': 'https://qosqotimes.pe/'
    },
    'Radio-El-Pueblo': {
        'name': 'Radio El Pueblo <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://tv.mediacp.eu:2020/VideoPlayer/radioelpueblo?autoplay=1',
        'source': 'https://radioelpueblo.com/el-pueblo-tv/'
    },
    'Radio-Inka-TV': {
        'name': 'Radio Inka TV <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://playerv.streamingvip.click/video-chat/inkatropical/YzNSdGRpNXpkSEpsWVcxcGJtZDJhWEF1WTJ4cFkycz0rWg==/true/',
        'source': 'https://inkatropical.pe/'
    },
    'Radio-TV-Tendencias': {
        'name': 'Radio TV Tendencias <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://s1.tvdatta.com:3950/multi_web/play.m3u8',
        'source': 'https://www.radiotvtendencias.com/'
    },
    'RCR': {
        'name': 'RCR <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://5c3fb01839654.streamlock.net:1963/iptvrcrperu/livercrperutv/playlist.m3u8',
        'source': 'https://www.rcrperu.com/'
    },
    'Region-TV-Callao': {
        'name': 'Region TV Callao <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://reproplay.com/callaotv/',
        'source': 'https://regionteve.com/'
    },
    'RTV-Total-Yurimaguas': {
        'name': 'RTV Total Yurimaguas <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://innovatestream.com/tv/v2/rtv.php',
        'source': 'https://rtvtotal.pe/'
    },
    'RW-Television-Tarapoto': {
        'name': 'RW Television Tarapoto <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://',
        'source': 'https://rwtelevision.com/'
    },
    'Senal-Peru-TV': {
        'name': 'Senal Peru TV <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'value="https://livestream.perucast.com/hls/stream.m3u8"',
        'source': 'https://xn--sealperutv-u9a.pe/'
    },
    'Sistema-1': {
        'name': 'Sistema 1 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://inliveserver.com:1936/9514/9514/playlist.m3u8',
        'source': 'https://sistema1tv.com/'
    },
    'SolTV': {
        'name': 'SolTV <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://playerv.logicahost.com.br/video/soltv/1/true/false/ZG1sa1pXOHdNeTVzYjJkcFkyRm9iM04wTG1OdmJTNWljZz09K1o=/16:9///',
        'source': 'https://soltvperu.com/'
    },
    'Teleamazonas': {
        'name': 'Teleamazonas <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://live.tvcontrolcp.com:1936/8054/8054/playlist.m3u8',
        'source': 'https://teleamazonas.pe/tv-en-vivo/'
    },
    'Telecanal': {
        'name': 'Telecanal <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://vdo.grupolimalive.com/broadcaster/millenium/live/player',
        'source': 'https://telecanalperu.com/tv-en-vivo/'
    },
    'Telelima': {
        'name': 'Telelima <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://mserver.latincable.net/TeleLima/index.m3u8',
        'source': 'https://www.telelima.pe/'
    },
    'Television-Tarapoto': {
        'name': 'Television Tarapoto <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://ott1.hdlatam.tv/live_abr/webtvTarapotoPe/playlist.m3u8',
        'source': 'https://www.televisiontarapoto.pe/'
    },
    'Telesur-Camana': {
        'name': 'Telesur Camana <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://telesur.com.pe/streaming/stream.html',
        'source': 'https://www.telesur.com.pe/telesur/streaming'
    },
    'Top-TV': {
        'name': 'Top TV <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://audiostreamvolt.com/tvcliente/toptvaguaytia.html',
        'source': 'https://www.toptvaguaytia.com/'
    },
    'Top-Latino': {
        'name': 'Top Latino <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://toplatino.net/players/latinotv/',
        'source': 'https://toplatino.net/'
    },
    'Top-Latino-Tv': {
        'name': 'Top Latino Tv <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://5cefcbf58ba2e.streamlock.net:543/tltvweb/latin-tv.stream/playlist.m3u8',
        'source': 'https://toplatino.net/'
    },
    'Trivu': {
        'name': 'Trivu <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://cdn.theoplayer.com/demos/iframe/theoplayer.html?autoplay=false&muted=false&preload=none&src=//www.chasquirouter.com/salida/sd/trivu.m3u8',
        'source': 'https://www.trivutv.com/home'
    },
    'Tropical-TV': {
        'name': 'Tropical TV <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://tv.oyotunstream.com:1936/tropicaltv/tropicaltv/playlist.m3u8',
        'source': 'https://corporaciontropicalpuerto.com/'
    },
    'Turbo-Mix-Radio-TV': {
        'name': 'Turbo Mix Radio TV <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://innovatestream.com/tv/v2/turbomix.php',
        'source': 'https://www.turbomix.com.pe/'
    },
    'TV-Bella-Asuncion': {
        'name': 'TV Bella Asuncion <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://tvdatta.com/hybrid-stream-video-widget/tvbella',
        'source': 'https://www.tvbellaasuncion.com/'
    },
    'TV-Peruanisima': {
        'name': 'TV Peruanisima <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://62fc643fbf1aa.streamlock.net/TVperuanisima/TVperuanisima/playlist.m3u8',
        'source': 'https://tvperuanisima.com/'
    },
    'TV-Sistemas-Cuzco': {
        'name': 'TV Bella Asuncion <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://stmv1.voxhdnet.com/sistemascusco/sistemascusco/chunklist_w1194342348.m3u8',
        'source': 'https://sistemascuscoperu.com/'
    },
    'TVUNO': {
        'name': 'TVUNO <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://streamtv.onliv3.online:1936/karibtv/karibtv/playlist.m3u8',
        'source': 'https://artv.watch/es/PE/TVUNO.pe'
    },
    'solartv': {
        'name': 'Solartv <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://stmv1.voxhdnet.com/solartv/solartv/chunklist_w2016841464.m3u8',
        'source': 'https://sistemascuscoperu.com/'
    },
    'andestv': {
        'name': 'Andestv <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://www.radiosicuani.com/andestv/fvp-1/',
        'source': 'https://www.radiosicuani.com/andestv/'
    },
    'Unitel': {
        'name': 'Unitel <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://vdo.grupolimalive.com/live-stream-video-widget/unitel',
        'source': 'https://unitelperu.pe/'
    },
    'USIL-TV': {
        'name': 'USIL TV <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://per01-lim01.servidor.stream/usiltv/embed.html',
        'source': 'https://usil.tv/'
    },
    'VamisaTV': {
        'name': 'VamisaTV <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://inliveserver.com:1936/10044/10044/playlist.m3u8',
        'source': 'https://radiovamisa.tv/'
    },
    'Via-Altomayo': {
        'name': 'Via Altomayo <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://bradmax.com/client/embed-player/6f3681d2b86803cdd0e30ff79e8d2240dcca604c_9989?mediaUrl=https%3A%2F%2Flive.obslivestream.com%2Fviaaltomayomux%2Findex.m3u8&title=VIA%20Alto%20Mayo&duration=0',
        'source': 'https://www.viaaltomayotv.com/'
    },
    'Via-Television': {
        'name': 'Via Television <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://videoserver.tmcreativos.com:2020/VideoPlayer/cablerasvia?autoplay=1',
        'source': 'https://viatelevision.pe/'
    },
    'Vision-TV-Musica': {
        'name': 'Vision TV Musica <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://videoserver.tmcreativos.com:2020/VideoPlayer/visionnoticias?autoplay=1',
        'source': 'https://www.cablevisiontv.pe/en-vivo/'
    },
    'Viva-TV-Yurimaguas': {
        'name': 'Viva TV Yurimaguas <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://www-vivatvonline-com.filesusr.com/html/2c320d_77f089c57da0ec47aa7b507af52cf5b7.html',
        'source': 'https://www.vivatvonline.com/'
    },
    'VNP': {
        'name': 'VNP <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://videoserver.tmcreativos.com:1936/visionnoticias/visionnoticias/playlist.m3u8',
        'source': 'https://artv.watch/es/PE/VNP.pe'
    },
    'Wtv': {
        'name': 'Wtv <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'm3u': 'https://live.obslivestream.com/wtv/index.m3u8',
        'source': 'https://artv.watch/es/PE/Wtv.pe'
    },
    'X TV Chachapoyas': {
        'name': 'X TV Chachapoyas <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://vdo.panelchs.com/live-stream-video-widget/xtvcontrol',
        'source': 'https://xtv.pe/'
    },
    'zona-film': {
        'name': '📷 Zona Film <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',,
        'code': 'https://vdo.panelchs.com/live-stream-video-widget/do9373639',
        'source': 'https://xtv.pe/canal-zona-film/',
    },
    'xtvcumbia': {
        'name': '📷 xtvcumbia <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://vdo.panelchs.com/live-stream-video-widget/vdo82376947328',
        'source': 'https://xtv.pe/xtvcumbia/',
    },
    'willax': {
        'name': 'Willax <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, español</span>',
        'code': 'https://geo.dailymotion.com/player/x5poh.html?video=x7x4dgx&autoplay=true',
        'source': 'https://willax.tv/en-vivo/'
    },
    'latina-noticias': {
        'name': 'Latina Noticias <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, noticias, español</span>',
        'code': 'https://www.youtube.com/channel/UCpSJ5fGhmAME9Kx2D3ZvN3Q/live',
        'source': 'https://www.youtube.com/channel/UCpSJ5fGhmAME9Kx2D3ZvN3Q'
    },
    'America-tv': {
        'name': 'America tv <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, noticias, español</span>',
        'code': 'https://mdstrm.com/live-stream/6099b04d9418ac082441dd74?jsapi=true&pause_ad_on_click=false&show_controls_on_ad=true&autoplay=true&player=60c2a74e0f4668082e309af4&ref=https%3A%2F%2Ftvgo.americatv.com.pe%2F&access_token=bD3FQoPGvwZ1FNiY59c8ZRP3hKVJLxdv2aKla3rBW6CxeLZ5gjpJYBz2iVaXkOpujBvndqkYdoy&c=&ads[map]=https%3A%2F%2Fpubads.g.doubleclick.net%2Fgampad%2Fads%3Fiu%3D%2F84748259%2Ftvgo_home_atf_player%26description_url%3D%5Bplaceholder%5D%26tfcd%3D0%26npa%3D0%26sz%3D640x480%26gdfp_req%3D1%26output%3Dvast%26unviewed_position_start%3D1%26env%3Dvp%26impl%3Ds%26correlator%3D&youbora[extra][0]=NoRegNoSusc&youbora[extra][1]=TVGO%20Web&youbora[extra][2]=tvgo-web',
        'source': 'https://tvgo.americatv.com.pe/'
    },
    'latina-noticias-2': {
        'name': 'Latina Noticias 2 <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Perú, noticias, español</span>',
        'code': 'https://rudo.video/live/latina',
        'source': 'https://latinanoticias.pe/'
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
        'source': 'https://bestcableperu.com.pe/tv6.html'
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
        'm3u': 'https://live.obslivestream.com/oktv/video.m3u8?token=Bk-DXAXulO1OV0',
        'source': 'https://oktelevisionhd.com/'
    },
    'cajamarca-tv': {
        'name': 'Cajamarca TV <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, Cajamarca, español</span>',
        'm3u': 'https://ca.inka.net.pe/cajamarcatv/cajamarcatv/index.m3u8',
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
        'code': 'https://vimeo.com/event/3970934/embed/interaction',
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
        'code': 'https://cntlnk-main-edge-access.secure.footprint.net/entrypoint/c7_vivo01_dai_source-20001_all_480p.m3u8',
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
        'code': 'https://www.youtube.com/embed/LY2XEQ_SSXA?frameborder=0&mute=1&autoplay=1&amp;rel=0&amp;showinfo=0',
        'source': 'https://www.youtube.com/channel/UCba3hpU7EFBSk817y9qZkiA'
    },
    'uniteve': {
        'name': 'Uniteve <img src="assets/svg/paises/argentina.svg" alt="bandera Argentina" title="Argentina"><span hidden>Argentina, español</span>',
        'm3u': 'https://vivo.solumedia.com:19360/uniteve/uniteve.m3u8',
        'source': 'http://uniteve.com.ar/'
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
        'code': 'https://www.youtube.com/embed/OpcsOaurCRI?si=jidTDns-35G7Bfru" title="YouTube video player',
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
// BRASIL
    'cnn-brasil': {
        'name': 'CNN Brasil <img src="assets/svg/paises/brasil.svg" alt="bandera Brasil" title="Brasil"><span hidden>Brasil, Portugues</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCvdwhh_fDyWccR42-rReZLw&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCvdwhh_fDyWccR42-rReZLw'
    },
    'aratu-AO-brasil': {
        'name': 'aratu AO Brasil <img src="assets/svg/paises/brasil.svg" alt="bandera Brasil" title="Brasil"><span hidden>Brasil, Portugues</span>',
        'code': 'https://player.jmvstream.com/lvw/37jDLdzr0ReTuCIodqOVe5VoVFRt8l',
        'source': 'https://tvaratu.com.br/ao-vivo/'
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
        'code': 'https://www.youtube.com/channel/UCT4Jg8h03dD0iN3Pb5L0PMA/live',
        'source': 'https://www.youtube.com/channel/UC7fWeaHhqgM4Ry-RMpM2YYw'
    },
    'dw2': {
        'name': 'DW Español 2 🌍<span hidden>Turquia, ingles</span>',
        'm3u': 'https://dwamdstream104.akamaized.net/hls/live/2015530/dwstream104/index.m3u8',
        'source': 'https://www.youtube.com/channel/UC7fWeaHhqgM4Ry-RMpM2YYw'
    },
    'HispanTV': {
        'name': 'HispanTV 🌍<span hidden>Turquia, ingles</span>',
        'm3u': 'https://live3.presstv.ir/hispantv/index.m3u8',
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
