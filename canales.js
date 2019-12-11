var App = {
    tunedIn: [],
    channels: {
       'venticuatro': {
            'nombre': '24 horas <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>', 
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCTXNz3gjAypWp3EhlIATEJQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"><a href="https://www.youtube.com/channel/UCTXNz3gjAypWp3EhlIATEJQ" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> 24 Horas TVN</a>&nbsp;<img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'venticuatro-play': {
            'nombre': '24 Play <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>', 
            'status': 'offline',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCeKSSTjG4r-Qvcpjnwgo0VQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"><a href="https://www.youtube.com/channel/UCeKSSTjG4r-Qvcpjnwgo0VQ" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> 24 Play TVN</a>&nbsp;<img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'meganoticias': {
            'nombre': 'Meganoticias <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCkccyEbqhhM3uKOI6Shm-4Q&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"><a href="https://www.youtube.com/channel/UCkccyEbqhhM3uKOI6Shm-4Q" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Meganoticias</a>&nbsp;<img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'meganoticias-2': {
            'nombre': 'Meganoticias 2 <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/Be5jEbkQFS8?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"><a href="https://www.youtube.com/channel/UCkccyEbqhhM3uKOI6Shm-4Q" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Meganoticias</a> (Live 2)&nbsp;<img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'meganoticias-3': {
            'nombre': 'Meganoticias 3 <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'status': 'offline',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/gVm6vqJn7aE?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"><a href="https://www.youtube.com/channel/UCkccyEbqhhM3uKOI6Shm-4Q" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Meganoticias</a> (Live 3)&nbsp;<img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'cima': {
            'nombre': 'Galeria CIMA <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>', 
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UC4GOcOKkEefz5NamN4WyMFg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"><a href="https://www.youtube.com/channel/UC4GOcOKkEefz5NamN4WyMFg" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Galeria CIMA</a>&nbsp;<img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        't13': {
            'nombre': 'T13 <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>', 
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/bOvhCYr1NYk?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><a href="https://www.youtube.com/channel/UCsRnhjcUCR78Q3Ud6OXCTNg" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> T13</a>&nbsp;<img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        't13-2': {
            'nombre': 'T13 2 <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCsRnhjcUCR78Q3Ud6OXCTNg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"><a href="https://www.youtube.com/channel/UCsRnhjcUCR78Q3Ud6OXCTNg" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> T13</a> (Live 2)&nbsp;<img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'cnn-cl': {
            'nombre': 'CNN Chile <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code':'<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCpOAcjJNAp0Y0fhznRrXIJQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><a href="https://www.youtube.com/user/cnnchile" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> CNN Chile</a> <img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
         'cnn-m3u': {
            'nombre': 'CNN Chile 2 <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="https://alplox.github.io/tele/m3u/cnn1" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><a href="https://www.youtube.com/user/cnnchile" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> CNN Chile</a> 2 <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img></div>'
        },
        'tv-senado': {
            'nombre': '🏛️ TV Senado <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://janus-tv.senado.cl/embed.php" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><a href="https://tv.senado.cl/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> TV Senado</a> <img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'tv-senado-m3u': {
            'nombre': '🏛️ TV Senado 2 <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="https://alplox.github.io/tele/m3u/tv-senado" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><a href="https://tv.senado.cl/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> TV Senado</a> 2 <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img></div>'
        },
        'cam-dipu-m3u-1': {
            'nombre': '🏛️ Cámara Diputados <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="https://alplox.github.io/tele/m3u/camara-diputados1" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><a href="http://www.cdtv.cl/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Cámara Diputados</a> <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img></div>'
        },
        'cam-dipu-m3u-2': {
            'nombre': '🏛️ Cámara Diputados 2 <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="https://alplox.github.io/tele/m3u/camara-diputados2" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><a href="http://www.cdtv.cl/sesion_sala.aspx" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Cámara Diputados 0</a><img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img></div>'
        },
        'cam-dipu-m3u-3': {
            'nombre': '🏛️ Cámara Diputados 3 <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="https://alplox.github.io/tele/m3u/camara-diputados3" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><a href="http://webtv.camara.cl/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Cámara Diputados 1</a><img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img></div>'
        },
        'chv-m3u-1': {
            'nombre': 'CHV <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="https://alplox.github.io/tele/m3u/chv1" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><a href="http://www.chilevision.cl/senal-online/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> CHV </a><img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img></div>'
        },
         'uoct-tobalaba': {
            'nombre': 'UOCT <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="https://alplox.github.io/tele/m3u/tobalaba" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><a href="https://www.24horas.cl/envivo/senal-de-la-uoct-3685422" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> UOCT Tobalaba</a> <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img></div>'
        },
        'cooperativa': {
            'nombre': '📻 Cooperativa <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/coopetv?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">📻 <a href="http://programas.cooperativa.cl/showalairelibre/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión">Radio Cooperativa</a> <img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'bbtv': {
            'nombre': '📻 Biobio TV <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/bbtv?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">📻 <a href="https://www.biobiochile.cl/biobiotv/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión">Biobio TV</a> <img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'adn': {
            'nombre': '📻 ADN <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/adntv?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">📻 <a href="http://tv.adnradio.cl/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión">ADN TV</a> <img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'duna': {
            'nombre': '📻 Duna <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/dunatv?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">📻 <a href="https://www.duna.cl/tv/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión">Radio Duna</a> <img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'infinita': {
            'nombre': '📻 Infinita <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/infinitatv?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">📻 <a href="http://www.infinita.cl/home/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión">Radio Infinita</a> <img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'universo': {
            'nombre': '📻 Universo <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/universotv?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">📻 <a href="https://www.universo.cl/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión">Radio Universo</a> <img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'radio-ae': {
            'nombre': '📻 AE (DUOC) <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://live.grupoz.cl/3991add90400a25a1580f290246f90eb?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">📻 <a href="https://www.aeradio.cl" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión">Radio AE</a> <img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'mi-radiols': {
            'nombre': '📻 Mi Radio LS <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code':'<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UClJiriqxFwmmVIQeASJfICQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">📻 <a href="https://www.youtube.com/channel/UClJiriqxFwmmVIQeASJfICQ" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión">Mi Radio La Serena 98.5</a> <img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'holvoet-tv-m3u': {
            'nombre': 'Holvoet TV <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="https://alplox.github.io/tele/m3u/holvoet-tv" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><a href="https://holvoet.cl/en-vivo/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Holvoet TV</a> <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img></div>'
        },
        'tv-central': {
            'nombre': 'TV El Central <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="https://alplox.github.io/tele/m3u/tv-central" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><a href="https://tvelcentral.cl/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> TV El Central</a> <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img></div>'
        },
        'canal-9': {
            'nombre': 'Canal 9 (Conce) <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/c9?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><a href="https://www.canal9.cl/en-vivo/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Canal 9 BBTV</a> <img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'tvu': {
            'nombre': 'TVU (Conce) <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/tvu?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><a href="https://www.tvu.cl/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> TVU</a> (Concepción) <img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'canal-21': {
            'nombre': 'Canal 21 (Chillán) <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://live.grupoz.cl/8b383d0a9cef5560a1bfbbeaf6ad4a38?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><a href="http://www.canal21tv.cl/wp/en-vivo/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Canal 21</a> (Chillán) <img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'ucv': {
            'nombre': 'UCV TV <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/ucvtv2?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><a href="https://pucvmultimedios.cl/senal-online-tv.php" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> UCV TV</a> <img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'uatv': {
            'nombre': 'UATV <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/uatv?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><a href="https://uatv.cl/uatv-en-vivo/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Universidad Autónoma de Chile Televisión</a> <img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'vtv': {
            'nombre': 'VTV <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/vtv?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><a href="http://canalvtv.cl/vtv/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> VTV2 Valle Televisión de Los Andes</a> <img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'canal-33': {
            'nombre': 'Canal 33 (Temuco) <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://streaminghd.cl/player.video/index.php?s=eduardo555/eduardo555" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><a href="http://www.canal33.cl/online.php" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Canal 33</a> (Temuco) <img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></div>'
        },
        'left-voice-cima2': {
            'nombre': 'Left Voice 🌍',
            'status': 'offline',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UClUHLX_Rd-SNOl8Ws2C_EJQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"><a href="https://www.youtube.com/channel/UClUHLX_Rd-SNOl8Ws2C_EJQ" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Left Voice</a> 🌍</div>'
        },
        'tn': {
            'nombre': 'Todonoticias 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCj6PcyLvpnIRT_2W_mwa9Aw&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"><a href="https://www.youtube.com/channel/UCj6PcyLvpnIRT_2W_mwa9Aw" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> TN</a> 🌍</div>'
        },
        'c5n': {
            'nombre': 'C5N 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCFgk2Q2mVO1BklRQhSv6p0w&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"><a href="https://www.youtube.com/channel/UCFgk2Q2mVO1BklRQhSv6p0w" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Youtube C5N</a> 🌍</div>'
        },
        'el-tiempo': {
            'nombre': 'EL TIEMPO 🌍',
            'status': 'offline',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCe5-b0fCK3eQCpwS6MT0aNw&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"><a href="https://www.youtube.com/channel/UCe5-b0fCK3eQCpwS6MT0aNw" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> EL TIEMPO</a> 🌍 </div>'
        },
         'revista-semana': {
            'nombre': 'Revista Semana 🌍',
             'status': 'offline',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UC4oQAvXFuNlKivYjUynQKTA&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"><a href="https://www.youtube.com/channel/UC4oQAvXFuNlKivYjUynQKTA" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Revista Semana</a> 🌍 </div>'
        },
         'noti-caracol': {
            'nombre': 'Noticias Caracol 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UC2Xq2PK-got3Rtz9ZJ32hLQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"><a href="https://www.youtube.com/channel/UC2Xq2PK-got3Rtz9ZJ32hLQ" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Noticias Caracol</a> 🌍 </div>'
        },
         'euronews': {
            'nombre': 'euronews Español 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCyoGb3SMlTlB8CLGVH4c8Rw&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"><a href="https://www.youtube.com/channel/UCyoGb3SMlTlB8CLGVH4c8Rw" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> euronews</a> 🌍 </div>'
        },
        'dw': {
            'nombre': 'DW Español 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCT4Jg8h03dD0iN3Pb5L0PMA&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"><a href="https://www.youtube.com/channel/UCT4Jg8h03dD0iN3Pb5L0PMA" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> DW Español</a> 🌍</div>'
        },
        'cronica-tv': {
            'nombre': 'Crónica TV 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCT7KFGv6s2a-rh2Jq8ZdM1g&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"><a href="https://www.youtube.com/channel/UCT7KFGv6s2a-rh2Jq8ZdM1g" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Crónica TV</a> 🌍</div>'
        },
         'RT-español': {
            'nombre': 'RT en Español 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UC2mtXUpAYLYJIZ2deSPhlqw&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"><a href="https://www.youtube.com/channel/UC2mtXUpAYLYJIZ2deSPhlqw" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> RT en Español</a> 🌍</div>'
        },
         'RT-español2': {
            'nombre': 'RT en vivo 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCEIhICHOQOonjE6V0SLdrHQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"><a href="https://www.youtube.com/channel/UCEIhICHOQOonjE6V0SLdrHQ" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> RT en vivo</a> 🌍</div>'
        },
        'rt-en-vivo2': {
            'nombre': 'RT en vivo 2 🌍',
            'status': 'offline',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/culxRjPWWYs?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"><a href="https://www.youtube.com/channel/UCpwvZwUam-URkxB7g4USKpg" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> RT en vivo</a> 🌍 (Live 2)'
        },
        'RT-News': {
            'nombre': 'RT News 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCpwvZwUam-URkxB7g4USKpg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"><a href="https://www.youtube.com/channel/UCpwvZwUam-URkxB7g4USKpg" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> RT News</a> 🌍</div>'
        },
        'RT-america': {
            'nombre': 'RT America 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCczrL-2b-gYK3l4yDld4XlQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"><a href="https://www.youtube.com/channel/UCczrL-2b-gYK3l4yDld4XlQ" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> RT America</a> 🌍</div>'
        },
        'MILENIO': {
            'nombre': 'MILENIO 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCFxHplbcoJK9m70c4VyTIxg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><a href="https://www.youtube.com/channel/UCFxHplbcoJK9m70c4VyTIxg" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> MILENIO</a> 🌍</div>'
        },
         'vpitv': {
            'nombre': 'VPItv 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCVFiIRuxJ2GmJLUkHmlmj4w&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><a href="https://www.youtube.com/channel/UCVFiIRuxJ2GmJLUkHmlmj4w" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> VPItv</a> 🌍</div>'
        },
         'canal-26-arg': {
            'nombre': 'Canal 26 Argentina 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCrpMfcQNog595v5gAS-oUsQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"><a href="https://www.youtube.com/channel/UCrpMfcQNog595v5gAS-oUsQ" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Canal 26 Argentina</a> 🌍</div>'
        },
        'a24': {
            'nombre': 'A24 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCR9120YBAqMfntqgRTKmkjQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"><a href="https://www.youtube.com/channel/UCR9120YBAqMfntqgRTKmkjQ" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> A24</a> 🌍</div>'
        },
         'noticias-uno-colombia': {
            'nombre': 'NoticiasUnoColombia 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UC3NUgxBBl05tthfGBS6kPkA&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"><a href="https://www.youtube.com/channel/UC3NUgxBBl05tthfGBS6kPkA" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> NoticiasUnoColombia</a> 🌍</div>'
        },
        'tv-publica-arg': {
            'nombre': 'TV Pública Argentina 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCs231K71Bnu5295_x0MB5Pg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"><a href="https://www.youtube.com/channel/UCs231K71Bnu5295_x0MB5Pg" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> TV Pública Argentina</a> 🌍</div>'
        },
        'france-24': {
            'nombre': 'FRANCE 24 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCQfwfsi5VrQ8yKZ-UWmAEFg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><a href="https://www.youtube.com/channel/UCQfwfsi5VrQ8yKZ-UWmAEFg" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> France 24</a> 🌍 </div>'
        }, 
        'sky-news': {
            'nombre': 'Sky News 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCoMdktPbSTixAyNGwb-UYkQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"><a href="https://www.youtube.com/channel/UCoMdktPbSTixAyNGwb-UYkQ" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Sky News</a> 🌍 </div>'
        }, 
        'America TV': {
            'nombre': 'America TV 🌍',
            'status': 'offline',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UC6NVDkuzY2exMOVFw4i9oHw&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"><a href="https://www.youtube.com/channel/UC6NVDkuzY2exMOVFw4i9oHw" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> America TV</a> 🌍 </div>'
        },
        'la-nacion': {
            'nombre': 'LA NACION 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCba3hpU7EFBSk817y9qZkiA&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"><a href="https://www.youtube.com/channel/UCba3hpU7EFBSk817y9qZkiA" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> LA NACION</a> 🌍 </div>'
        },
        'telesur-tv': {
            'nombre': 'teleSUR tv 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCbHFKMtqLYkIBRiPHJwxu_w&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"><a href="https://www.youtube.com/channel/UCbHFKMtqLYkIBRiPHJwxu_w" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> teleSUR tv</a> 🌍 </div>'
        },
        'news-nigeria': {
            'nombre': 'TVC News Nigeria  🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCq9e_hCv2jvgck8WowW1NXg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><a href="https://www.youtube.com/channel/UCq9e_hCv2jvgck8WowW1NXg" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> TVC News Nigeria</a> 🌍 </div>'
        },
        'abc7': {
            'nombre': 'ABC7 SWFL  🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCgp4A6I8LCWrhUzn-5SbKvA&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><a href="https://www.youtube.com/channel/UCgp4A6I8LCWrhUzn-5SbKvA" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> ABC7 SWFL</a> 🌍 </div>'
        },
        'HK-apple-daily': {
            'nombre': 'HK Apple Daily 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCeqUUXaM75wrK5Aalo6UorQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"><a href="https://www.youtube.com/channel/UCeqUUXaM75wrK5Aalo6UorQ" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> 蘋果動新聞 HK Apple Daily (Hong Kong)</a> 🌍 </div>'
        },  
        'HK-cable-tv': {
            'nombre': 'CABLE TV & CABLE News 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UC_q7e5XYJB0JDGagcF0KW0w&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"><a href="https://www.youtube.com/channel/UC_q7e5XYJB0JDGagcF0KW0w" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> 有線電視 CABLE TV & 有線新聞 CABLE News (Hong Kong)</a> 🌍 </div>'
        },
        'live-chino': {
            'nombre': '三立LIVE新聞 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UC2TuODJhC03pLgd6MpWP0iw&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"><a href="https://www.youtube.com/channel/UC2TuODJhC03pLgd6MpWP0iw" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> 三立LIVE新聞</a> 🌍 </div>'
        },
        'live-japones': {
            'nombre': 'ANNnewsCH 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCGCZAYq5Xxojl_tSXcVJhiQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><a href="https://www.youtube.com/channel/UCGCZAYq5Xxojl_tSXcVJhiQ" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> ANNnewsCH</a> 🌍 </div>'
        },
        'chilledCow': {
            'nombre': 'ChilledCow 🎵',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/hHW1oY26kxQ?autoplay=1&mute=0&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"><a href="https://www.youtube.com/channel/UCSJ4gkVC6NrvII8umztf0Ow" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> ChilledCow</a> 🎵</div>'
        },
        'chillhop': {
            'nombre': 'Chillhop 🎵',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/bebuiaSKtU4?autoplay=1&mute=0&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"><a href="https://www.youtube.com/channel/UCOxqgCwgOqC2lMqC5PYz_Dg" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Chillhop</a> 🎵</div>'
        },
        'steezyasfuck': {
            'nombre': 'Steezyasfuck 🎵',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/g0AvCn6ViqY?autoplay=1&mute=0&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"><a href="https://www.youtube.com/channel/UCsIg9WMfxjZZvwROleiVsQg" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> STEEZYASFUCK</a> 🎵</div>'
        },
        'relaxdaily': {
            'nombre': 'Relaxdaily 🎵',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCc9EzBNAtdnNiDrMw5CAxUw&autoplay=1&mute=0&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"><a href="https://www.youtube.com/channel/UCc9EzBNAtdnNiDrMw5CAxUw" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Relaxdaily</a> 🎵 </div>'
        }, 
         'imuc-radio-chile': {
            'nombre': 'IMUC Chile <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img> 🎵',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCIIDtZoaK9UZi4FaGMmL_hw&autoplay=1&mute=0&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img><a href="https://www.youtube.com/channel/UCIIDtZoaK9UZi4FaGMmL_hw" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> IMUC Chile</a> 🎵</div>'
        },
        'radio-placeres': {
            'nombre': '📻 Radio Placeres 87.7 FM <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="https://alplox.github.io/tele/radios-solo-audio/radio-placeres" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"><a href="https://www.radioplaceres.cl/sitio/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> 📻 Radio Placeres 87.7 FM </a><img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img></div>'
        },
        'radio-manque': {
            'nombre': '📻 Radio Manque 102.9 FM <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="https://alplox.github.io/tele/radios-solo-audio/radio-manque" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><a href="http://www.radiomanque.org/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> 📻 Radio Manque 102.9 FM </a><img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img></div>'
        },
        'radio-usach': {
            'nombre': '📻 Radio USACH 94.5 FM <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code':'<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="https://alplox.github.io/tele/radios-solo-audio/radio-usach" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><a href="http://www.radio.usach.cl/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> 📻 Radio USACH 94.5 FM </a><img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img></div>'
        },
        'cam-dipu-13-yutu': {
            'nombre': 'Cámara Diputados Señal Youtube <img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCYd5k2TyOyOmUJNx0SH17KA&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"><a href="https://www.youtube.com/channel/UCYd5k2TyOyOmUJNx0SH17KA" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Cámara Diputados Señal Youtube (no es 24/7) </a><img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img></div>'
        },
        'cam-dipu-13-yutu2': {
            'nombre': 'Cámara Diputados Señal Youtube 2<img src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UC33MG3YdoQ16a8a3wODh6lw&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre"><img class="rec" src="https://github.com/Alplox/tele/raw/master/icons/rojo.png"><a href="https://www.youtube.com/channel/UC33MG3YdoQ16a8a3wODh6lw" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Cámara Diputados Señal Youtube (no es 24/7) </a><img class="edge" src="https://github.com/Alplox/tele/raw/master/icons/chile.png"></img></div>'
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
            App.add('t13-2');
            App.add('cnn-m3u');
            App.add('tv-senado-m3u');
            App.add('cima');
            App.add('cam-dipu-m3u-1');
            App.add('venticuatro');
            App.add('meganoticias-2');
        }
        
    }
};

jQuery(document).ready( function(){
    App.init();
});
