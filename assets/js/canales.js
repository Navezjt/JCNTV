const channels = {
    'tv-senado': {
        'name': '🏛️ TV Senado <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://janus-tv.senado.cl/embed.php',
        'source': 'https://tv.senado.cl/'
    },
    'tv-senado-m3u': {
        'name': '🏛️ TV Senado 2 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'm3u': 'https://janus-tv-ply.senado.cl/playlist/playlist.m3u8',
        'source': 'https://tv.senado.cl/'
    },
    'tv-senado-yutu': {
        'name': '🏛️ TV Senado 3 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UC4GJ43VNn4AYfiYa0RBCHQg&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UC4GJ43VNn4AYfiYa0RBCHQg'
    },
    'cam-dipu-m3u-1': {
        'name': '🏛️ Cámara Diputados <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'm3u': 'https://camara.03.cl.cdnz.cl/camara19/live/playlist.m3u8',
        'source': 'http://www.cdtv.cl/'
    },
    'cam-dipu-m3u-2': {
        'name': '🏛️ Cámara Diputados 2 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'm3u': 'https://camara.02.cl.cdnz.cl/cdndvr/live/playlist.m3u8?DVR',
        'source': 'http://webtv.camara.cl/'
    },
    'cam-dipu-m3u-3': {
        'name': '🏛️ Cámara Diputados 3 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'm3u': 'https://camara.02.cl.cdnz.cl/cdndvr/live/playlist.m3u8',
        'source': 'http://webtv.camara.cl/'
    },
    'convencion-tv': {
        'name': '🏛️ Convención Constitucional <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://mdstrm.com/live-stream/60d476c14157440829d03cd7?autoplay=true&volume=0',
        'source': 'https://www.convencion.tv/'
    },
    'convencion-tv-yutu': {
        'name': '🏛️ Convención Constitucional 2 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCRlIWVAxQdAnCl4D4UR9r3Q&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCRlIWVAxQdAnCl4D4UR9r3Q'
    },
    'convencion-tv-m3u': {
        'name': '🏛️ Convención Constitucional 3 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'm3u': 'https://mdstrm.com/live-stream-playlist-v/60d476c14157440829d03cd7.m3u8',
        'source': 'https://www.convencion.tv/'
    },
    'convencion-tv-s1': {
        'name': '🏛️ Convención Constitucional s1 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCc3koBbWMyvSyzRbG5eTgvQ&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCc3koBbWMyvSyzRbG5eTgvQ'
    },
    'convencion-tv-s2': {
        'name': '🏛️ Convención Constitucional s2 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCKmKUwcjv6HJP7-z9Nnpp2w&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCKmKUwcjv6HJP7-z9Nnpp2w'
    },
    'convencion-tv-s3': {
        'name': '🏛️ Convención Constitucional s3 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCeIlCkkBplhU0SrWM9B7u7Q&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCeIlCkkBplhU0SrWM9B7u7Q'
    },
    'convencion-tv-s4': {
        'name': '🏛️ Convención Constitucional s4 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCkMWMYCPUGzf3UPAxcIaVqA&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCkMWMYCPUGzf3UPAxcIaVqA'
    },
    'convencion-tv-s5': {
        'name': '🏛️ Convención Constitucional s5 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UChNeKfZ0-wwuOCyUSu6BlcA&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UChNeKfZ0-wwuOCyUSu6BlcA'
    },
    'convencion-tv-s6': {
        'name': '🏛️ Convención Constitucional s6 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UC-HPc8CLoGRSG0dgbzZbDWA&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UC-HPc8CLoGRSG0dgbzZbDWA'
    },
    'convencion-tv-s7': {
        'name': '🏛️ Convención Constitucional s7 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UC9p2Hsom7SXdro9FhN4K59w&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UC9p2Hsom7SXdro9FhN4K59w'
    },
    'convencion-tv-s8': {
        'name': '🏛️ Convención Constitucional s8 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCFkkF0LKUOUOcQEwG4nTrHw&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCFkkF0LKUOUOcQEwG4nTrHw'
    },
    'tribunal-consti': {
        'name': '🏛️ Tribunal Constitucional <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCZaI-1N1oaGb-U8K2VNztjg&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCZaI-1N1oaGb-U8K2VNztjg'
    },
    'poder-judicial': {
        'name': '🏛️ Poder Judicial <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCo0C1-ocUG9a0Yb3iO0V-xg&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCo0C1-ocUG9a0Yb3iO0V-xg'
    },
    '24-horas': {
        'name': '24 horas <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCTXNz3gjAypWp3EhlIATEJQ&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCTXNz3gjAypWp3EhlIATEJQ'
    },    
    '24-horas-m3u': {
        'name': '24 Horas 2 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'm3u': 'https://mdstrm.com/live-stream-playlist/57d1a22064f5d85712b20dab.m3u8',
        'source': 'https://www.24horas.cl/envivo/'
    },
    '24-horas-m3u-2': {
        'name': '24 Horas 3 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'm3u': 'https://mdstrm.com/live-stream-playlist-v/5346f657c1e6f5810b5b9df3.m3u8',
        'source': 'https://www.24horas.cl/envivo/'
    },
    '24-horas-m3u-3': {
        'name': '24 Horas 4 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'm3u': 'https://mdstrm.com/live-stream-playlist/57d1a22064f5d85712b20dab.m3u8',
        'source': 'https://www.24horas.cl/envivo/'
    },
    '24-horas-señal2': {
        'name': '24 Horas s2 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'm3u': 'https://mdstrm.com/live-stream-playlist-v/53443c472c6e89675103cc4c.m3u8',
        'source': 'https://www.24horas.cl/envivo/'
    },
    '24-horas-señal2-2': {
        'name': '24 Horas s2 2 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'm3u': 'https://mdstrm.com/live-stream-playlist-v/5346f5f2c1e6f5810b5b9df0.m3u8',
        'source': 'https://www.24horas.cl/envivo/'
    },
    '24-horas-señal3': {
        'name': '24 Horas s3 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'm3u': 'https://mdstrm.com/live-stream-playlist-v/555c9a91eb4886825b07ee7b.m3u8',
        'source': 'https://www.24horas.cl/envivo/'
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
    'cnn-cl': {
        'name': 'CNN Chile <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCpOAcjJNAp0Y0fhznRrXIJQ&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCpOAcjJNAp0Y0fhznRrXIJQ'
    },
    'cnn-cl-m3u': {
        'name': 'CNN Chile 2 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'm3u': 'https://unlimited1-cl.dps.live/cnn/cnn.smil/playlist.m3u8',
        'source': 'https://www.cnnchile.com/'
    },
    'cnn-cl-m3u-2': {
        'name': 'CNN Chile 3 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'm3u': 'https://unlimited1-cl-isp.dps.live/cnn/cnn.smil/playlist.m3u8',
        'source': 'https://www.cnnchile.com/'
    },
    'prensa-presidencia': {
        'name': 'Prensa Presidencia <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://mdstrm.com/live-stream/5dc17f8944795108a2a52a49?autoplay=true&volume=0',
        'source': 'https://prensa.presidencia.cl/streaming.aspx'
    },
    'tv-chile-m3u': {
        'name': 'TV Chile <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'm3u': 'https://mdstrm.com/live-stream-playlist/533adcc949386ce765657d7c.m3u8',
        'source': 'https://www.tvchile.cl/envivo/'
    },
    'tv-chile-m3u-2': {
        'name': 'TV Chile 2 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'm3u': 'https://mdstrm.com/live-stream-playlist-v/533adcc949386ce765657d7c.m3u8',
        'source': 'https://www.tvchile.cl/envivo/'
    },
    'tvn-yutu': {
        'name': 'TVN <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCaVaCaiG6qRzDiJDuEGKOhQ&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCaVaCaiG6qRzDiJDuEGKOhQ'
    },
    'tvn-m3u': {
        'name': 'TVN 2 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'm3u': 'https://unlimited10-cl.dps.live/tvn/tvn.smil/tvn/livestream1/chunks.m3u8',
        'source': 'https://www.24horas.cl/envivo/'
    },
    'canal-13': {
        'name': 'Canal 13 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCd4D3LfXC_9MY2zSv_3gMgw&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCd4D3LfXC_9MY2zSv_3gMgw'
    },
    'chv': {
        'name': 'CHV <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UC8EdTmyUaFIfZvVttJ9lgIA&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UC8EdTmyUaFIfZvVttJ9lgIA'
    },
    'la-red': {
        'name': 'La Red <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'm3u': 'https://unlimited1-cl-isp.dps.live/lared/lared.smil/playlist.m3u8',
        'source': 'https://www.lared.cl/senal-online'
    },
    'la-red-2': {
        'name': 'La Red 2 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'm3u': 'https://unlimited1-cl-movistar.dps.live/lared/lared.smil/lared/livestream0/chunks.m3u8',
        'source': 'https://www.lared.cl/senal-online'
    },
    'stgo-tv': {
        'name': 'Stgo TV <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://stv.janus.cl/front/embed.html',
        'source': 'https://www.santiagotelevision.cl/'
    },
    'cooperativa': {
        'name': '📻 Cooperativa <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, Radios</span>',
        'code': 'https://rudo.video/live/coopetv?volume=0&mute=1',
        'source': 'http://programas.cooperativa.cl/showalairelibre/'
    },
    'bbtv': {
        'name': '📻 Biobio TV <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, Radios</span>',
        'code': 'https://rudo.video/live/bbtv?volume=0&mute=1',
        'source': 'https://www.biobiochile.cl/biobiotv/'
    },
    'adn': {
        'name': '📻 ADN <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, Radios</span>',
        'code': 'https://rudo.video/live/adntv?volume=0&mute=1',
        'source': 'http://tv.adnradio.cl/'
    },
    'adn-2': {
        'name': '📻 ADN 2 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, Radios</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCczkrFICr0xEgDsk51zZojA&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCczkrFICr0xEgDsk51zZojA'
    },
    'duna': {
        'name': '📻 Duna <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, Radios</span>',
        'code': 'https://rudo.video/live/dunatv?volume=0&mute=1',
        'source': 'https://www.duna.cl/tv/'
    },
    'infinita': {
        'name': '📻 Infinita <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, Radios</span>',
        'code': 'https://rudo.video/live/infinitatv?volume=0&mute=1',
        'source': 'http://www.infinita.cl/home/'
    },
    'universo': {
        'name': '📻 Universo <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, Radios</span>',
        'code': 'https://rudo.video/live/universotv?volume=0&mute=1',
        'source': 'https://www.universo.cl/'
    },
    'radio-ae': {
        'name': '📻 AE (DUOC) <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, Radios</span>',
        'code': 'https://live.grupoz.cl/3991add90400a25a1580f290246f90eb?sound=0',
        'source': 'https://www.aeradio.cl/'
    },
    'carolina-tv': {
        'name': '📻 Carolina TV <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, Radios, Musica</span>',
        'code': 'https://rudo.video/live/carolinatv?volume=0&mute=1',
        'source': 'https://www.carolina.cl/tv/'
    },
    'carolina-tv-m3u': {
        'name': '📻 Carolina TV 2 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, Radios, Musica</span>',
        'm3u': 'https://unlimited6-cl.dps.live/carolinatv/carolinatv.smil/carolinatv/livestream2/chunks.m3u8',
        'source': 'https://www.carolina.cl/tv/'
    },
    'fm-tiempo': {
        'name': '📻 FM Tiempo <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, Radios, Musica</span>',
        'code': 'https://rudo.video/live/fmtiempotv?volume=0&mute=1',
        'source': 'https://www.fmtiempo.cl/'
    },
    'fm-tiempo-m3u': {
        'name': '📻 FM Tiempo 2 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, Radios, Musica</span>',
        'm3u': 'https://unlimited10-cl.dps.live/fmtiempotv/fmtiempotv.smil/playlist.m3u8',
        'source': 'https://www.fmtiempo.cl/'
    },
    'alegria-tv-m3u': {
        'name': '📻 Alegría TV <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, Radios, Musica</span>',
        'm3u': 'https://593b04c4c5670.streamlock.net:443/8192/8192/playlist.m3u8',
        'source': 'https://www.alegriafm.cl/'
    },
    'radio-las-nieves-m3u': {
        'name': '📻 Radio Las Nieves <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, Radios, Musica</span>',
        'm3u': 'https://v2.tustreaming.cl/rln/live1/tracks-v1a1/mono.m3u8',
        'source': 'https://www.rln.cl/'
    },
    'romantica-tv': {
        'name': '📻 Romántica TV <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, Radios, Musica</span>',
        'code': 'https://rudo.video/live/romanticatv?volume=0&mute=1',
        'source': 'https://www.romantica.cl/romantica-tv/'
    },
    'romantica-tv-m3u': {
        'name': '📻 Romántica TV 2 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, Radios, Musica</span>',
        'm3u': 'https://unlimited2-cl.dps.live/romanticatv/romanticatv.smil/playlist.m3u8',
        'source': 'https://www.romantica.cl/romantica-tv/'
    },
    'radio-genial': {
        'name': '📻 Radio Genial 100.5 FM <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, Radios, Musica</span>',
        'code': 'https://v2.tustreaming.cl/genialtv/live1/embed.html?autoplay=true',
        'source': 'https://radiogenial.cl/'
    },
    'radio-genial-m3u': {
        'name': '📻 Radio Genial 100.5 FM 2 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, Radios, Musica</span>',
        'm3u': 'https://v2.tustreaming.cl/genialtv/live1/index.m3u8',
        'source': 'https://radiogenial.cl/'
    },
    'mi-radiols': {
        'name': '📻 Mi Radio LS <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, Radios</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UClJiriqxFwmmVIQeASJfICQ&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UClJiriqxFwmmVIQeASJfICQ'
    },
    'radio-la-clave': {
        'name': '📻 Radio La Clave <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, Radios, Musica</span>',
        'code': 'https://rudo.video/live/laclavetv?volume=0&mute=1"></iframe><div class="nombre-barra">',
        'source': 'https://radiolaclave.cl/'
    },
    'radio-folclor-chile': {
        'name': '📻 Radio Folclor de Chile <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, Radios</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UC0Hl8kJe8Xwv8g63Q4qefQg&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UC0Hl8kJe8Xwv8g63Q4qefQg'
    },
    'radio-maria-chile': {
        'name': '📻 Radio María Chile <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, Radios</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UClMwb2kCYemWyDIZ2dYttKA&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UClMwb2kCYemWyDIZ2dYttKA'
    },
    'on-radio-kpop': {
        'name': '📻 On Radio Kpop <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, Radios, Musica</span>',
        'code': 'https://live.grupoz.cl/0551dfe14dd61f524debcb5b5595b3f2?sound=0"></iframe><div class="nombre-barra">',
        'source': 'https://onradiochile.cl/kpop/'
    },
    'on-radio-kpop-m3u': {
        'name': '📻 On Radio Kpop 2 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, Radios, Musica</span>',
        'm3u': 'https://tls.cdnz.cl/onradio4/live/playlist.m3u8',
        'source': 'https://onradiochile.cl/kpop/'
    },
    'radio-america-tv-m3u': {
        'name': '📻 Radio América TV Chile <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, Radios, Musica</span>',
        'm3u': 'https://Stmv1.zcastbr.com/americatvchile/smil:transcoder.smil/playlist.m3u8',
        'source': 'http://www.radioamerica.cl/'
    },
    'holvoet-tv-m3u': {
        'name': 'Holvoet TV <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, Radios</span>',
        'm3u': 'https://unlimited1-cl.dps.live/holvoettv/holvoettv.smil/playlist.m3u8',
        'source': 'https://holvoet.cl/en-vivo/'
    },
    'tv-salud-m3u': {
        'name': 'TV Salud <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'm3u': 'https://srv3.zcast.com.br/mastermedia/mastermedia/tvsalud.cl.m3u8',
        'source': 'https://tvsalud.cl/'
    },
    'antofagasta-tv-m3u': {
        'name': 'Antofagasta TV <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'm3u': 'https://unlimited6-cl.dps.live/atv/atv.smil/atv/livestream2/playlist.m3u8',
        'source': 'https://www.antofagasta.tv/'
    },
    'canal-9': {
        'name': 'Canal 9 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://rudo.video/live/c9?volume=0&mute=1',
        'source': 'https://www.canal9.cl/en-vivo/'
    },
    'canal-9-m3u': {
        'name': 'Canal 9 2 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'm3u': 'https://unlimited6-cl.dps.live/c9/c9.smil/c9/livestream1/chunks.m3u8',
        'source': 'https://www.canal9.cl/en-vivo/'
    },
    'tvu': {
        'name': 'TVU <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://rudo.video/live/tvu?volume=0&mute=1',
        'source': 'https://www.tvu.cl/'
    },
    'tvu-m3u': {
        'name': 'TVU 2 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'm3u': 'https://unlimited6-cl.dps.live/tvu/tvu.smil/playlist.m3u8',
        'source': 'https://www.tvu.cl/'
    },
    'canal-21': {
        'name': 'Canal 21 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://live.grupoz.cl/8b383d0a9cef5560a1bfbbeaf6ad4a38?sound=0',
        'source': 'https://www.canal21tv.cl/wp/en-vivo/'
    },
    'canal-21-m3u': {
        'name': 'Canal 21 2 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'm3u': 'https://tls.cdnz.cl/canal21tv/live/playlist.m3u8',
        'source': 'https://www.canal21tv.cl/wp/en-vivo/'
    },
    'estaciontv-m3u': {
        'name': 'Estacióntv <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'm3u': 'https://unlimited6-cl.dps.live/estaciontv/estaciontv.smil/playlist.m3u8',
        'source': 'https://www.estaciontv.cl/site/'
    },
    'pinguino-tv': {
        'name': 'Pingüino TV <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://elpinguino.com/reproductor/',
        'source': 'https://elpinguino.com/reproductor/'
    },
    'teleton-tv': {
        'name': 'Teletón TV <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://mdstrm.com/live-stream/5d6d5f05a2f6f407b0147965?autoplay=true&volume=0',
        'source': 'https://teletontv.cl/'
    },
    'teleton-tv-m3u': {
        'name': 'Teletón TV 2 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'm3u': 'https://mdstrm.com/live-stream-playlist/5d6d5f05a2f6f407b0147965.m3u8',
        'source': 'https://teletontv.cl/'
    },
    'contexto-nuble-tv-m3u': {
        'name': 'Contexto Ñuble TV <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'm3u': 'https://streaming10.zglobalhost.com:1936/8014/8014/playlist.m3u8',
        'source': 'https://tv.contextonuble.cl/'
    },
    'ucv': {
        'name': 'UCV TV <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://rudo.video/live/ucvtv2?volume=0&mute=1',
        'source': 'https://pucvmultimedios.cl/senal-online-tv.php'
    },
    'uatv': {
        'name': 'UATV <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://rudo.video/live/uatv?volume=0&mute=1',
        'source': 'https://uatv.cl/uatv-en-vivo/'
    },
    'vtv': {
        'name': 'VTV <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://rudo.video/live/vtv?volume=0&mute=1',
        'source': 'http://canalvtv.cl/vtv/'
    },
    'canal-33': {
        'name': 'Canal 33 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://streaminghd.cl/player.video/index.php?s=eduardo555/eduardo555',
        'source': 'http://www.canal33.cl/online.php'
    },
    'contivision-m3u': {
        'name': 'Contivision <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'm3u': 'https://unlimited2-cl.dps.live/contivision/contivision.smil/playlist.m3u8',
        'source': 'http://w.contivision.cl/cvn/envivo.php'
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
    'ip-noticias': {
        'name': 'IP Noticias <img src="assets/svg/paises/argentina.svg" alt="bandera Argentina" title="Argentina"><span hidden>Argentina, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UC1bBjOZieJWHbsFA0LwjjJA&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UC1bBjOZieJWHbsFA0LwjjJA'
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
        'source': 'ttps://www.youtube.com/channel/UCpcvsK0UAI3MIHsjjj3CgMg'
    },
// PERU
    'tv-peru': {
        'name': 'TVPerú Noticias <img src="assets/svg/paises/peru.svg" title="Peru"><span hidden>Peru, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCkZCoc42IipR1ucqJmIehsA&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCkZCoc42IipR1ucqJmIehsA'
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
    'hch-live': {
        'name': 'HCH Live <img src="assets/svg/paises/honduras.svg" alt="bandera Honduras" title="Honduras"><span hidden>Honduras</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCVhRud5bqgYoiN9X3C_v_Sw&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCVhRud5bqgYoiN9X3C_v_Sw'
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
    'palestine-tv': {
        'name': 'Palestine Today TV 🌍<span hidden>Catar, arabe</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCQiGmJwJHVd3xcEbUmxM4Kw&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCQiGmJwJHVd3xcEbUmxM4Kw'
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
    'HK-cable-tv': {
        'name': 'CABLE TV & CABLE News 🌍<span hidden>Hong Kong, chino</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UC_q7e5XYJB0JDGagcF0KW0w&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UC_q7e5XYJB0JDGagcF0KW0w'
    },
    'live-chino': {
        'name': '三立LIVE新聞 🌍<span hidden>Taiwan, chino</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UC2TuODJhC03pLgd6MpWP0iw&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UC2TuODJhC03pLgd6MpWP0iw'
    },
    'live-japones': {
        'name': 'ANNnewsCH 🌍<span hidden>Japon, japones</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCGCZAYq5Xxojl_tSXcVJhiQ&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCGCZAYq5Xxojl_tSXcVJhiQ'
    },
    'live-taiwan': {
        'name': '民視直播 FTVN Live 53 🌍<span hidden>Taiwan, chino</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UClIfopQZlkkSpM1VgCFLRJA&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UClIfopQZlkkSpM1VgCFLRJA'
    },
    'live-chino-2': {
        'name': '三立iNEWS 🌍<span hidden>Taiwan, chino</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCoNYj9OFHZn3ACmmeRCPwbA&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCoNYj9OFHZn3ACmmeRCPwbA'
    },
// MUSICA 24/7
    'chilledCow': {
        'name': 'ChilledCow 🎵<span hidden>Radios</span>',
        'code': 'https://www.youtube-nocookie.com/embed/5qap5aO4i9A?autoplay=1&mute=0&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCSJ4gkVC6NrvII8umztf0Ow'
    },
    'chillhop': {
        'name': 'Chillhop 🎵<span hidden>Radios</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCOxqgCwgOqC2lMqC5PYz_Dg&autoplay=1&mute=0&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCOxqgCwgOqC2lMqC5PYz_Dg'
    },
    'steezyasfuck': {
        'name': 'Steezyasfuck 🎵<span hidden>Radios</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCsIg9WMfxjZZvwROleiVsQg&autoplay=1&mute=0&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCsIg9WMfxjZZvwROleiVsQg'
    },
    'relaxdaily': {
        'name': 'Relaxdaily 🎵<span hidden>Radios</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCc9EzBNAtdnNiDrMw5CAxUw&autoplay=1&mute=0&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCc9EzBNAtdnNiDrMw5CAxUw'
    },
    'imuc-radio-chile': {
        'name': 'IMUC Chile <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"> 🎵<span hidden>Radios</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCIIDtZoaK9UZi4FaGMmL_hw&autoplay=1&mute=0&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCIIDtZoaK9UZi4FaGMmL_hw'
    },
    'live-vinyl-chile': {
        'name': 'Live Vinyl Chile <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"> 🎵<span hidden>Radios</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UC8FJRxSiunppaD0sZgL7H_A&autoplay=1&mute=0&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UC8FJRxSiunppaD0sZgL7H_A'
    },
    'doom-radio': {
        'name': 'Doom Radio 🎵<span hidden>Radios</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCR2D48i5MCMYwVKbgYIAftQ&autoplay=1&mute=0&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCR2D48i5MCMYwVKbgYIAftQ'
    },
    'naxos-japan': {
        'name': 'naxos japan 🎵<span hidden>Radios</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCwP6-81HmoDyC3nfBAyGPXQ&autoplay=1&mute=0&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCwP6-81HmoDyC3nfBAyGPXQ'
    },
    'acidjazz': {
        'name': 'AcidJazz 🎵<span hidden>Radios</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UC8cRYBn-z6y1EOUeMdJ0VHA&autoplay=1&mute=0&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UC8cRYBn-z6y1EOUeMdJ0VHA'
    },
    'darkwave': {
        'name': 'The 80s Guy 🎵<span hidden>Radios</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UC6ghlxmJNMd8BE_u1HR-bTg&autoplay=1&mute=0&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UC6ghlxmJNMd8BE_u1HR-bTg'
    },
    'the-bootleg-boy-2': {
        'name': 'the bootleg boy 2 🎵<span hidden>Radios</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCwkTfp14Sj7o6q9_8ADJpnA&autoplay=1&mute=0&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCwkTfp14Sj7o6q9_8ADJpnA'
    },
// CAMARAS MUNDO
// Chile
    'plaza-italia': {
        'name': '📷 Galería CIMA <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Cámaras, Chile, español</span>',
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
    'pandas': {
        'name': '📷 アドベンチャーワールド公式 🌍<span hidden>Cámaras, Japon, japones</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCVEmpbL5VzfXsULPFeRsj4Q&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCVEmpbL5VzfXsULPFeRsj4Q'
    },
    'cruce-shibuya': {
        'name': '📷 SHIBUYA COMMUNITY NEWS 🌍<span hidden>Cámaras, Japon, japones</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCgdHxnHSXvcAi4PaMIY1Ltg&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCgdHxnHSXvcAi4PaMIY1Ltg'
    },
    'RailCam': {
        'name': '📷 Aoba traffics 🌍<span hidden>Cámaras, Japon, japones</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCynDLZ-YJnrMLSQvwYi-bUA&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCynDLZ-YJnrMLSQvwYi-bUA'
    },
    'jerusalem': {
        'name': '📷 JERUSALEM Live 🌍<span hidden>Cámaras, Jerusalem, arabe</span>',
        'code': 'https://www.youtube-nocookie.com/embed/UAjimIsht0M?autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UC1byT4dOeBAZwVqQ309iAuA'
    },
    'hawaii-livecam': {
        'name': '📷 Aqualink Hawaii 🌍<span hidden>Cámaras, Hawaii</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCTLF36lXVM7uiR-VolWHv0Q&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCTLF36lXVM7uiR-VolWHv0Q'
    },
// aleatorio
    'camaras-aleatorias': {
        'name': '📷 Boston and Maine Live 🌍<span hidden>Cámaras</span>',
        'code': 'https://www.youtube-nocookie.com/embed/ZPdV3Ae4ZuU?autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UC8gbWbcNNyb5-NIXvFklkOA'
    },
// ESPACIO
    'nasa': {
        'name': '🔭 NASA Live <img src="assets/svg/paises/us.svg" alt="bandera US" title="US"><span hidden>Estados unidos, ingles, espacio</span>',
        'code': 'https://www.youtube-nocookie.com/embed/21X5lGlDOfg?autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/watch?v=21X5lGlDOfg'
    },
    'space-videos': {
        'name': '🔭 NASA ISS Live Stream <img src="assets/svg/paises/us.svg" alt="bandera US" title="US"><span hidden>Estados unidos, ingles, espacio</span>',
        'code': 'https://www.youtube-nocookie.com/embed/EEIk7gwjgIM?autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/watch?v=EEIk7gwjgIM'
    },
    'nasa-spaceflight': {
        'name': '🔭 NASASpaceflight <img src="assets/svg/paises/us.svg" alt="bandera US" title="US"><span hidden>Estados unidos, ingles, espacio</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCSUu1lih2RifWkKtDOJdsBA&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCSUu1lih2RifWkKtDOJdsBA'
    },
    'spacex': {
        'name': '🔭 SpaceX <img src="assets/svg/paises/us.svg" alt="bandera US" title="US"><span hidden>Estados unidos, ingles, espacio</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCtI0Hodo5o5dUb67FeUjDeA&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCtI0Hodo5o5dUb67FeUjDeA'
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
    '31-minutos': {
        'name': '31 minutos - Todos los episodios <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/videoseries?list=PLVI9tQggdGtFXgCwpjTM_d2pdH6ABeRFL&autoplay=0&mute=0&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/playlist?list=PLVI9tQggdGtFXgCwpjTM_d2pdH6ABeRFL'
    },
    'diego-glot-s01': {
        'name': 'Diego y Glot - Temporada 1 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/videoseries?list=PLnDONcPxnlq2s8zwIuJt8_JI4Tf3amd6u&autoplay=0&mute=0&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/watch?v=J3cLcZ1QhFE&list=PLnDONcPxnlq2s8zwIuJt8_JI4Tf3amd6u'
    },
    'los-pulentos-s01': {
        'name': 'Los Pulentos - Temporada 1 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/videoseries?list=PLnDONcPxnlq2gZlH-OAXCnIeyPwMpQuUb&autoplay=0&mute=0&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/playlist?list=PLnDONcPxnlq2gZlH-OAXCnIeyPwMpQuUb'
    },
    'villa-dulce-s01': {
        'name': 'Villa Dulce - Temporada 1 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/videoseries?list=PLnDONcPxnlq1V8zLL54a6luAy4Wp6ldK3&autoplay=0&mute=0&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/playlist?list=PLnDONcPxnlq1V8zLL54a6luAy4Wp6ldK3'
    },
    'bob-ross': {
        'name': 'Bob Ross (Todas las Temporadas) 🌍<span hidden>Estados unidos, ingles</span>',
        'code': 'https://www.youtube-nocookie.com/embed/videoseries?list=PLaLOVNqqD-2HgiA-GZyzcfZN9n-YelhB5&autoplay=0&mute=0&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCxcnsr1R5Ge_fbTu5ajt8DQ'
// EDUCATIVOS
    },
    'tv-educa-cl': {
        'name': '📚 TV Educa Chile <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'm3u': 'https://mdstrm.com/live-stream-playlist/5aaabe9e2c56420918184c6d.m3u8',
        'source': 'https://www.tvn.cl/envivo/tveducachile/'
    },
    'tv-educa-cl-2': {
        'name': '📚 TV Educa Chile 2 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'm3u': 'https://mdstrm.com/live-stream-playlist-v/5e74e53f1ab4eb073b19ef34.m3u8',
        'source': 'https://www.tvn.cl/envivo/tveducachile/'
    },
    'puntaje-nacional': {
        'name': '📚 PuntajeNacional Chile <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCCY6xIXHmGBGZUgUYxtfKSg&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCCY6xIXHmGBGZUgUYxtfKSg'
    },
// CANALES ALTERNATIVOS CAM DIPUTADOS
    'cam-dipu-yutu': {
        'name': 'Cámara Diputados Señal Youtube <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCYd5k2TyOyOmUJNx0SH17KA&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCYd5k2TyOyOmUJNx0SH17KA'
    },
    'cam-dipu-01-yutu': {
        'name': 'Cámara Diputados YT 01 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCcULnWuDzgQG9yF0Dv3DIgg&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCcULnWuDzgQG9yF0Dv3DIgg'
    },
    'cam-dipu-03-yutu': {
        'name': 'Cámara Diputados YT 03 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCF6KgLfQqQzekn8U1DwVs9g&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCF6KgLfQqQzekn8U1DwVs9g'
    },
    'cam-dipu-05-yutu': {
        'name': 'Cámara Diputados YT 05 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UC0QKtI8NpeMObauDylsSUDA&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UC0QKtI8NpeMObauDylsSUDA'
    },
    'cam-dipu-06-yutu': {
        'name': 'Cámara Diputados YT 06 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCspWzpGflwb6A8PZqWw49CQ&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCspWzpGflwb6A8PZqWw49CQ'
    },
    'cam-dipu-07-yutu': {
        'name': 'Cámara Diputados YT 07 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCyVjDDBZGDywVGrpGBvGEsw&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCyVjDDBZGDywVGrpGBvGEsw'
    },
    'cam-dipu-08-yutu': {
        'name': 'Cámara Diputados YT 08 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCCtDbZzh63vgU_BWHRGsbug&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCCtDbZzh63vgU_BWHRGsbug'
    },
    'cam-dipu-11-yutu': {
        'name': 'Cámara Diputados YT 11 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCYPKjGKq2yLbAnmth5rFZmQ&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCYPKjGKq2yLbAnmth5rFZmQ'
    },
    'cam-dipu-12-yutu': {
        'name': 'Cámara Diputados YT 12 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCVOWFY-sgbDglBsfOap9okg&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UCVOWFY-sgbDglBsfOap9okg'
    },
    'cam-dipu-13-yutu': {
        'name': 'Cámara Diputados YT 13 <img src="assets/svg/paises/chile.svg" alt="bandera Chile" title="Chile"><span hidden>Chile, español</span>',
        'code': 'https://www.youtube-nocookie.com/embed/live_stream?channel=UC33MG3YdoQ16a8a3wODh6lw&autoplay=1&mute=1&modestbranding=1&showinfo=0',
        'source': 'https://www.youtube.com/channel/UC33MG3YdoQ16a8a3wODh6lw'
    }
}