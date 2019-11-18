var App = {
    tunedIn: [],
    channels: {
       'venticuatro': {
            'nombre': '24 horas <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>', 
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCTXNz3gjAypWp3EhlIATEJQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"> 24 Horas TVN&nbsp;<img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'venticuatro-play': {
            'nombre': '24 Play <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>', 
            'status': 'offline',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCeKSSTjG4r-Qvcpjnwgo0VQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"> 24 Play TVN&nbsp;<img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'meganoticias': {
            'nombre': 'Meganoticias <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCkccyEbqhhM3uKOI6Shm-4Q&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"> Meganoticias&nbsp;<img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'meganoticias-2': {
            'nombre': 'Meganoticias 2 <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'status': 'offline',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/HChCAZCHhS4?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"> Meganoticias (Live secundario)&nbsp;<img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'cima': {
            'nombre': 'Galeria CIMA <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>', 
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UC4GOcOKkEefz5NamN4WyMFg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"> Galeria CIMA&nbsp;<img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        't13': {
            'nombre': 'T13 <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>', 
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/bOvhCYr1NYk?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">T13&nbsp;<img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        't13-2': {
            'nombre': 'T13 2 <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>', 
            'status': 'offline',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCsRnhjcUCR78Q3Ud6OXCTNg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"> T13 (Live secundario)&nbsp;<img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'cnn-cl': {
            'nombre': 'CNN Chile <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code':'<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCpOAcjJNAp0Y0fhznRrXIJQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">CNN Chile <img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'tv-senado': {
            'nombre': '🏛️ TV Senado <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://janus-tv.senado.cl/embed.php" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">TV Senado <img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'cam-dipu-m3u-1': {
            'nombre': '🏛️ Cámara Diputados <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="https://alplox.github.io/tele/m3u/camara-diputados1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"> Cámara Diputados <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img></div>'
        },
        'cam-dipu-m3u-2': {
            'nombre': '🏛️ Cámara Diputados 2 <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="https://alplox.github.io/tele/m3u/camara-diputados2" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"> Cámara Diputados 0<img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img></div>'
        },
        'cam-dipu-m3u-3': {
            'nombre': '🏛️ Cámara Diputados 3 <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="https://alplox.github.io/tele/m3u/camara-diputados3" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"> Cámara Diputados 1<img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img></div>'
        },
        'chv-m3u-1': {
            'nombre': 'CHV <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="https://alplox.github.io/tele/m3u/chv1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"> CHV <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img></div>'
        },
        'cooperativa': {
            'nombre': '📻 Cooperativa <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/coopetv?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">📻 Radio Cooperativa <img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'bbtv': {
            'nombre': '📻 Biobio TV <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/bbtv?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">📻 Biobio TV <img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'adn': {
            'nombre': '📻 ADN <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/adntv?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">📻 ADN TV <img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'duna': {
            'nombre': '📻 Duna <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/dunatv?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">📻 Radio Duna <img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'infinita': {
            'nombre': '📻 Infinita <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/infinitatv?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">📻 Radio Infinita <img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'universo': {
            'nombre': '📻 Universo <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/universotv?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">📻 Radio Universo <img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'radio-ae': {
            'nombre': '📻 AE (DUOC) <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://live.grupoz.cl/3991add90400a25a1580f290246f90eb?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">📻 Radio AE <img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'mi-radiols': {
            'nombre': '📻 Mi Radio LS <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code':'<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UClJiriqxFwmmVIQeASJfICQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">📻 Mi Radio La Serena 98.5 <img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'canal-9': {
            'nombre': 'Canal 9 (Conce) <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/c9?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"> Canal 9 BBTV <img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'tvu': {
            'nombre': 'TVU (Conce) <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/tvu?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">TVU <img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'canal-21': {
            'nombre': 'Canal 21 (Chillán) <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://live.grupoz.cl/8b383d0a9cef5560a1bfbbeaf6ad4a38?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">Canal 21 (Chillán) <img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'ucv': {
            'nombre': 'UCV TV <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/ucvtv2?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">UCV TV <img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'uatv': {
            'nombre': 'UATV <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/uatv?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">Universidad Autónoma de Chile Televisión <img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'vtv': {
            'nombre': 'VTV <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/vtv?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">VTV2 Valle Televisión de Los Andes <img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'canal-33': {
            'nombre': 'Canal 33 (Temuco) <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://streaminghd.cl/player.video/index.php?s=eduardo555/eduardo555" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">Canal 33 (Temuco) <img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'left-voice-cima2': {
            'nombre': 'Left Voice 🌍', 
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UClUHLX_Rd-SNOl8Ws2C_EJQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"> Left Voice 🌍</div>'
        },
        'tn': {
            'nombre': 'Todonoticias 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCj6PcyLvpnIRT_2W_mwa9Aw&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"> TN 🌍</div>'
        },
        'c5n': {
            'nombre': 'C5N 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCFgk2Q2mVO1BklRQhSv6p0w&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"> Youtube C5N 🌍</div>'
        },
        'dw': {
            'nombre': 'DW Español 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCT4Jg8h03dD0iN3Pb5L0PMA&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"> DW Español 🌍</div>'
        },
        'cronica-tv': {
            'nombre': 'Crónica TV 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCT7KFGv6s2a-rh2Jq8ZdM1g&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"> Crónica TV 🌍</div>'
        },
        'infobae': {
            'nombre': 'Infobae 🌍',
            'status': 'offline',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCvsU0EGXN7Su7MfNqcTGNHg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"> Infobae 🌍</div>'
        },
         'RT-español': {
            'nombre': 'RT Español 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/mOcEqTR1Hn4?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"> RT Español 🌍</div>'
        },
         'RT-español2': {
            'nombre': 'RT Español op2 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/9DXGrOU5wKQ?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"> RT Español op2 🌍</div>'
        },
         'Global-news': {
            'nombre': 'Global News 🌍',
            'status': 'offline',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UChLtXXpo4Ge1ReTEboVvTDg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"> Global News 🌍</div>'
        },
        'RT-News': {
            'nombre': 'RT News 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/NvCSr7qzAAM?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"> RT News 🌍</div>'
        },
        'MILENIO': {
            'nombre': 'MILENIO 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCFxHplbcoJK9m70c4VyTIxg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"> MILENIO 🌍</div>'
        },
        'france-24': {
            'nombre': 'FRANCE 24 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCQfwfsi5VrQ8yKZ-UWmAEFg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">France 24 🌍 </div>'
        }, 
        'abc-news': {
            'nombre': 'ABC News 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCBi2mrWuNuyYy4gbM6fU18Q&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"> ABC News 🌍  </div>'
        }, 
        'sky-news': {
            'nombre': 'Sky News 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCoMdktPbSTixAyNGwb-UYkQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"> Sky News 🌍 </div>'
        }, 
        'America TV': {
            'nombre': 'America TV 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UC6NVDkuzY2exMOVFw4i9oHw&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"> America TV 🌍 </div>'
        },
        'la-nacion': {
            'nombre': 'LA NACION 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCba3hpU7EFBSk817y9qZkiA&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"> LA NACION 🌍 </div>'
        },
        'telesur-tv': {
            'nombre': 'teleSUR tv 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCbHFKMtqLYkIBRiPHJwxu_w&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"> teleSUR tv 🌍 </div>'
        },
        'HK-apple-daily': {
            'nombre': 'HK Apple Daily 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCeqUUXaM75wrK5Aalo6UorQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"> 蘋果動新聞 HK Apple Daily (Hong Kong) 🌍 </div>'
        },  
        'HK-cable-tv': {
            'nombre': 'CABLE TV & CABLE News 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UC_q7e5XYJB0JDGagcF0KW0w&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"> 有線電視 CABLE TV & 有線新聞 CABLE News (Hong Kong) 🌍 </div>'
        },
        'HK-chilli-lucas': {
            'nombre': 'Chilli Lucas 🌍',
            'status': 'offline',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCMEhYuxpkmiXoYryeXt0b5A&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"> Chilli Lucas - 智利仔 (Hong Kong) 🌍 </div>'
        },
        'chilledCow': {
            'nombre': 'ChilledCow 🎵',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/hHW1oY26kxQ?autoplay=1&mute=0&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"> ChilledCow 🎵</div>'
        },
        'chillhop': {
            'nombre': 'Chillhop 🎵',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/bebuiaSKtU4?autoplay=1&mute=0&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"> Chillhop 🎵</div>'
        },
        'steezyasfuck': {
            'nombre': 'Steezyasfuck 🎵',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/g0AvCn6ViqY?autoplay=1&mute=0&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"> STEEZYASFUCK 🎵</div>'
        },
        'relaxdaily': {
            'nombre': 'Relaxdaily 🎵',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCc9EzBNAtdnNiDrMw5CAxUw&autoplay=1&mute=0&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"> Relaxdaily 🎵 </div>'
        }, 
        'cam-dipu-13-yutu': {
            'nombre': 'Cámara Diputados Señal Youtube <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'status': 'offline',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UC33MG3YdoQ16a8a3wODh6lw&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"> Cámara Diputados Señal Youtube (no es 24/7) <img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img></div>'
        },
        'chv-m3u': {
            'nombre': 'CHV  <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img><img src="https://github.com/Alplox/tele/raw/master/icons/edge.png"></img>',
            'code': '<video id="hls-example" class="embed-responsive embed-responsive-16by9 video-js vjs-default-skin" controls><source type="application/x-mpegURL" src="http://mi.chv.cl/playlist/stream.m3u8?s=sd"></video><div class="nombre"><img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/edge.png"> CHV [qHD] <img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img></div>'
        },
        'chv-m3u2': {
            'nombre': 'CHV op2 <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img><img src="https://github.com/Alplox/tele/raw/master/icons/edge.png"></img>',
            'code': '<video id="hls-example" class="embed-responsive embed-responsive-16by9 video-js vjs-default-skin" controls><source type="application/x-mpegURL" src="http://mi.chv.cl/playlist/stream.m3u8?s=hd"></video><div class="nombre"><img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/edge.png"> CHV [nHD] <img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img></div>'
        }
    },
    templateCanal: '<div class="col-4 col-md-4 col-lg-4 un-player" data-canal="{canal}">{htmelele}</div>',
    templateCanalMobile: '<div class="col-12 col-md-6 col-lg-4 un-player" data-canal="{canal}">{htmelele}</div>',
    add: function(canal){
        if( App.channels[canal] ){
            let sintonizados = App.tunedIn.length;
            let thisCanal = App.templateCanal.replace('{canal}', 'player-'+ canal).replace('{htmelele}', App.channels[canal].code );

            var $losCanales = jQuery('#los-canales');


            switch( sintonizados ){
                case 0:
                    // Siempre va antes del reloj
                    $losCanales.find('#reloj-control').removeClass('offset-md-4').before( jQuery.parseHTML(thisCanal) );
                    break;
                case 1:
                    // Siempre va despuÃ©s del reloj
                    $losCanales.find('#reloj-control').after( jQuery.parseHTML(thisCanal) );
                    break;
                case 2:
                    // Arriba con offsets
                    var $video = jQuery( jQuery.parseHTML(thisCanal) ).addClass('offset-md-4 mr-3');
                    $losCanales.prepend( $video );
                    break;
                case 3: 
                    // Arriba con offset
                    var $video = jQuery( jQuery.parseHTML(thisCanal) ).addClass('offset-md-4');
                    $losCanales.find('.un-player').eq(0).removeClass('offset-md-4 mr-3').after( $video );
                    break;
                case 4:
                    // Arriba, vuela offsets
                    $losCanales.find('.un-player').eq(1).removeClass('offset-md-4').after( jQuery.parseHTML(thisCanal) );
                    break;
                default:
                    // Siempre al final
                    $losCanales.append( jQuery.parseHTML(thisCanal) );
                    break;
            }

            jQuery('#modal-selecta .modal-body').find('button[data-canal="'+ canal +'"]').removeClass('btn-outline-secondary').addClass('btn-primary');
            App.tunedIn.push( canal );
        }
    },
    remove: function(canal){
        let $findCanal = jQuery('.row').find('div[data-canal="player-'+ canal +'"]');
        let sintonizados = App.tunedIn.length;
        var $losCanales = jQuery('#los-canales');

        if( 1 == $findCanal.length ){
            $findCanal.remove();
            App.tunedIn = _.remove( App.tunedIn, function(el){ return el != canal; });
            sintonizados--;

            switch( sintonizados ){
                case 0:
                    $losCanales.find('#reloj-control').addClass('offset-md-4');
                    break;
                case 1:
                    // Si el primer elemento de $losCanales es el reloj, le agregamos offset
                    let $firstEle = $losCanales.find('div').eq(0);
                    if( 'reloj-control' == $firstEle[0].id ){
                        $losCanales.find('#reloj-control').addClass('offset-md-4');
                    }

                    break;
                default:
                    break;
            }

            jQuery('#modal-selecta .modal-body').find('button[data-canal="'+ canal +'"]').removeClass('btn-primary').addClass('btn-outline-secondary');
        }
    },
    isMobile: function(){
        // https://stackoverflow.com/a/11381730
        var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
    },
    initProcess: {
        initReloj: function(){
            time_is_widget.init({ Santiago_z179: { template: "TIME"} });
        },
        initRelojUtc: function(){
            time_is_widget.init({ UTC_za00: { template: "TIME"} });
        },
        seedModal: function(){
            let htmlBotones = '';
            _.forEach( App.channels, function(el, llave){ 
                if( !el.status || 'offline' != el.status ){
                    htmlBotones += '<button type="button" class="btn btn-outline-secondary" data-canal="'+ llave +'">'+ el.nombre +'</button>';
                }
            });
            jQuery('#modal-selecta .modal-body').html( jQuery.parseHTML(htmlBotones) );
            jQuery('#modal-selecta .modal-body button').on('click', function(ev){
                let $this = jQuery(this);
                queClases = $this[0].className.replace('btn ', '');
                if('btn-outline-secondary' == queClases ){
                    App.add( $this.data('canal') );
                } else if( 'btn-primary' == queClases ){
                    App.remove( $this.data('canal') );
                }
            });
        },
        fixMobile: function(){
            if( App.isMobile() ){
                App.templateCanal = App.templateCanalMobile;
                jQuery('#reloj-control').removeClass('col-4 col-md-4').addClass('col-12 col-md-6');
            }
        }
    },
    init: function(){
        App.initProcess.initReloj();
        App.initProcess.seedModal();
        App.initProcess.fixMobile();

        // Como estaban los canales al comienzo
        if( App.isMobile() ){
            App.add('venticuatro');
        } else {
            App.add('t13');
            App.add('cnn-cl');
            App.add('venticuatro');
            App.add('cima');
            App.add('meganoticias');
            App.add('c5n');

        }
        
    }
};

jQuery(document).ready( function(){
    App.init();
});
