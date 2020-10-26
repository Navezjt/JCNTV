// barra tamaño https://codepen.io/nosurprisethere/pen/KJxwQz
const settings={
    fill: '#ce6102',
    background: '#1f1f1f'
  }
  
  const sliders = document.querySelectorAll('.range-slider');
  

  Array.prototype.forEach.call(sliders,(slider)=>{
    slider.querySelector('input').addEventListener('input', (event)=>{
      slider.querySelector('span').innerHTML = event.target.value;
      applyFill(event.target);
    });
    applyFill(slider.querySelector('input'));
  });
  
  function applyFill(slider) {
    const percentage = 100*(slider.value-slider.min)/(slider.max-slider.min);
    const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage+0.1}%)`;
    slider.style.background = bg;
  }
/////////////////////////////////////////////////////////

///Modal aviso legal para que carge al inicar la página junto a crear cookie para que no vuelva a salir https://coderwall.com/p/gnqdpg/dismiss-bootstrap-modal-forever-with-jquery-cookie-on-click///
   $(document).ready(function () {
    //if cookie hasn't been set...
    if (document.cookie.indexOf("ModalShown=true")<0) {
        $("#modalabout").modal("show");
        //Modal has been shown, now set a cookie so it never comes back
        $("#myModalClose").click(function () {
            $("#modalabout").modal("hide");
        });
        document.cookie = "ModalShown=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    }
});
/////////////////////////////////////////////////////////

///Filtro de canales https://www.w3schools.com/bootstrap/bootstrap_filters.asp
$(document).ready(function(){
    $("#mifiltro").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#PorFiltrar *").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
/////////////////////////////////////////////////////////


///copiar enlace a portapapeles//////////////////////////
function myFunction() {
    var copyText = document.getElementById("myInput");

    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    document.execCommand("copy");

    alert("Copiado exitoso!: " + copyText.value);
}
/////////////////////////////////////////////////////////

///canales/////////////////////////////////////////////////////////
var size = 4;
var sizeMobile = 12;
var App = {
    channels: {
        'tv-senado': {
            'nombre': '🏛️ TV Senado <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://janus-tv.senado.cl/embed.php" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://tv.senado.cl/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión">🏛️ TV Senado <img src="icons/chile.png"></img></a></div>'
        },
        'tv-senado-m3u': {
            'nombre': '🏛️ TV Senado 2 <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="m3u/tv-senado" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://tv.senado.cl/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión">🏛️ TV Senado 2 <img src="icons/chile.png"></img></a></div>'
        },
        'tv-senado-yutu': {
            'nombre': '🏛️ TV Senado 3 <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UC4GJ43VNn4AYfiYa0RBCHQg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"><a class="nombre-color" href="https://www.youtube.com/channel/UC4GJ43VNn4AYfiYa0RBCHQg" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión">🏛️ TV Senado 3 <img src="icons/chile.png"></img></a></div>'
        },
        'cam-dipu-m3u-1': {
            'nombre': '🏛️ Cámara Diputados <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="m3u/camara-diputados1" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="http://www.cdtv.cl/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión">🏛️ Cámara Diputados <img src="icons/chile.png"></img></a></div>'
        },
        'cam-dipu-m3u-2': {
            'nombre': '🏛️ Cámara Diputados 2 <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="m3u/camara-diputados2" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="http://webtv.camara.cl/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión">🏛️ Cámara Diputados 2 <img src="icons/chile.png"></img></a></div>'
        },
        'cam-dipu-m3u-3': {
            'nombre': '🏛️ Cámara Diputados 3 <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="m3u/camara-diputados3" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="http://webtv.camara.cl/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión">🏛️ Cámara Diputados 3 <img src="icons/chile.png"></img></a></div>'
        },
        'cam-dipu-dipu': {
            'nombre': '🏛️ Cámara Diputados 4 <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCYd5k2TyOyOmUJNx0SH17KA&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UCYd5k2TyOyOmUJNx0SH17KA" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión">🏛️ Cámara Diputados 4 <img src="icons/chile.png"></img></a></div>'
        },
        'cima': {
            'nombre': 'Galeria CIMA <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UC4GOcOKkEefz5NamN4WyMFg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UC4GOcOKkEefz5NamN4WyMFg" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Galeria CIMA <img src="icons/chile.png"></img></a></div>'
                //        },
                //        'cima-mirror': {
                //            'nombre': 'Galeria CIMA op1 <img src="icons/chile.png"></img>',
                //            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://invidio.us/embed/live_stream?channel=UC4GOcOKkEefz5NamN4WyMFg&autoplay=1&volume=0&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://www.youtube.com/channel/UC4GOcOKkEefz5NamN4WyMFg" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Galeria CIMA op1 <img src="icons/chile.png"></img></a></div>'
        },
        'venticuatro': {
            'nombre': '24 horas <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCTXNz3gjAypWp3EhlIATEJQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UCTXNz3gjAypWp3EhlIATEJQ" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> 24 horas <img src="icons/chile.png"></img></a></div>'
        },
        'venticuatro-yutu-2': {
            'nombre': '24 horas 2 <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/sjQsjgBt03I?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UCTXNz3gjAypWp3EhlIATEJQ" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> 24 horas 2 <img src="icons/chile.png"></img></a></div>'
                //        },
                //        '24-horas-señal2': {
                //            'nombre': '24 Horas 2 <img src="icons/chile.png"></img>',
                //            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="m3u/24-horas-2" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.24horas.cl/envivo/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> 24 horas 2 <img src="icons/chile.png"></img></a></div>'
        },
        '24-horas-m3u': {
            'nombre': '24 Horas op1 <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="m3u/24-horas" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://www.24horas.cl/envivo/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> 24 Horas op1 <img src="icons/chile.png"></img></a></div>'
                 //       },
                //        'canal-13-m3u': {
                //            'nombre': 'Canal 13 <img src="icons/chile.png"></img>',
                //            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="m3u/canal13" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://www.13.cl/en-vivo" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Canal 13 <img src="icons/chile.png"></img></a></div>'
        },
        'meganoticias': {
            'nombre': 'Meganoticias <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCkccyEbqhhM3uKOI6Shm-4Q&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UCkccyEbqhhM3uKOI6Shm-4Q" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Meganoticias <img src="icons/chile.png"></img></a></div>'
        },
        'meganoticias-yutu-2': {
            'nombre': 'meganoticias 2 <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/D1cIpb9Zkqk?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UCkccyEbqhhM3uKOI6Shm-4Q" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Meganoticias 2 <img src="icons/chile.png"></img></a></div>'
                //        },
                //        'meganoticias-mirror': {
                //           'nombre': 'Meganoticias op1 <img src="icons/chile.png"></img>',
                //            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://invidio.us/embed/live_stream?channel=UCkccyEbqhhM3uKOI6Shm-4Q&autoplay=1&volume=0&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UCkccyEbqhhM3uKOI6Shm-4Q" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Meganoticias op1 <img src="icons/chile.png"></img></a></div>'
                //        },
                //        'meganoticias-m3u': {
                //            'nombre': 'Meganoticias op2 <img src="icons/chile.png"></img>',
                //            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://mdstrm.com/live-stream/5ddfebf14bee0054b9b3fd14" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.meganoticias.cl/senal-en-vivo/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Meganoticias op2 <img src="icons/chile.png"></img></a></div>'
        },
        't13': {
            'nombre': 'T13 <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCsRnhjcUCR78Q3Ud6OXCTNg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://www.youtube.com/channel/UCsRnhjcUCR78Q3Ud6OXCTNg" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> T13 <img src="icons/chile.png"></img></a></div>'
                //        },
                //        't13-m3u': {
                //            'nombre': 'T13 op1 <img src="icons/chile.png"></img>',
                //            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="m3u/t13" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://www.t13.cl/en-vivo" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> T13 op1 <img src="icons/chile.png"></img></a></div>'
                //       },
                //       'tribunal-consti': {
                //           'nombre': '🏛️ Tribunal Constitucional de Chile <img src="icons/chile.png"></img>', 
                //           'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCZaI-1N1oaGb-U8K2VNztjg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://www.youtube.com/channel/UCZaI-1N1oaGb-U8K2VNztjg" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> 🏛️ Tribunal Constitucional de Chile <img src="icons/chile.png"></img></a></div>'
        },
        'cnn-cl': {
            'nombre': 'CNN Chile <img src="icons/chile.png"></img>',
            'code':'<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCpOAcjJNAp0Y0fhznRrXIJQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/user/cnnchile" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> CNN Chile <img src="icons/chile.png"></img></a></div>'
                //        },
                //        'cnn-m3u': {
                //            'nombre': 'CNN Chile op1 <img src="icons/chile.png"></img>',
                //            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="m3u/cnn1" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://www.cnnchile.com/page/en-vivo/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> CNN Chile op1 <img src="icons/chile.png"></img></a></div>'
        },
        'tvn-yutu': {
            'nombre': 'TVN <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCaVaCaiG6qRzDiJDuEGKOhQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://www.youtube.com/channel/UCaVaCaiG6qRzDiJDuEGKOhQ" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> T13 <img src="icons/chile.png"></img></a></div>'
        },
        'tv-chile-m3u': {
            'nombre': 'TV Chile <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="m3u/tv-chile" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://www.tvchile.cl/envivo/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> TV Chile <img src="icons/chile.png"></img></a></div>'
                //        },
                //        'chv-m3u-1': {
                //            'nombre': 'CHV <img src="icons/chile.png"></img>',
                //            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="m3u/chv1" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="http://www.chilevision.cl/senal-online/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> CHV <img src="icons/chile.png"></img></a></div>'
        },
        'uoct-tobalaba': {
            'nombre': 'UOCT <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="m3u/tobalaba" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://www.24horas.cl/envivo/senal-de-la-uoct-3685422" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> UOCT <img src="icons/chile.png"></img></a></div>'
        },
        'cooperativa': {
            'nombre': '📻 Cooperativa <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/coopetv?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="http://programas.cooperativa.cl/showalairelibre/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión">📻 Cooperativa <img src="icons/chile.png"></img></a></div>'
        },
        'bbtv': {
            'nombre': '📻 Biobio TV <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/bbtv?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://www.biobiochile.cl/biobiotv/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión">📻 Biobio TV <img src="icons/chile.png"></img></a></div>'
        },
        'adn': {
            'nombre': '📻 ADN <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/adntv?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="http://tv.adnradio.cl/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión">📻 ADN <img src="icons/chile.png"></img></a></div>'
        },
        'duna': {
            'nombre': '📻 Duna <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/dunatv?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://www.duna.cl/tv/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión">📻 Duna <img src="icons/chile.png"></img></a></div>'
        },
        'infinita': {
            'nombre': '📻 Infinita <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/infinitatv?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="http://www.infinita.cl/home/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión">📻 Infinita <img src="icons/chile.png"></img></a></div>'
        },
        'universo': {
            'nombre': '📻 Universo <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/universotv?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://www.universo.cl/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión">📻 Universo <img src="icons/chile.png"></img></a></div>'
        },
        'radio-ae': {
            'nombre': '📻 AE (DUOC) <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://live.grupoz.cl/3991add90400a25a1580f290246f90eb?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://www.aeradio.cl/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión">📻 AE (DUOC) <img src="icons/chile.png"></img></a></div>'
        },
        'mi-radiols': {
            'nombre': '📻 Mi Radio LS <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UClJiriqxFwmmVIQeASJfICQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://www.youtube.com/channel/UClJiriqxFwmmVIQeASJfICQ" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión">📻 Mi Radio LS <img src="icons/chile.png"></img></a></div>'
        },
        'radio-la-clave': {
            'nombre': '📻 Radio La Clave <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/laclavetv?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><div class="nombre-barra"><a class="nombre-color" href="https://radiolaclave.cl/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión">📻 Radio La Clave <img src="icons/chile.png"></img></a></div>'
        },
        'holvoet-tv-m3u': {
            'nombre': 'Holvoet TV <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="m3u/holvoet-tv" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://holvoet.cl/en-vivo/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Holvoet TV <img src="icons/chile.png"></img></a></div>'
        },
        'tv-central-m3u': {
            'nombre': 'TV El Central <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="m3u/tv-central" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://tvelcentral.cl/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> TV El Central <img src="icons/chile.png"></img></a></div>'
        },
        'tv-salud-m3u': {
            'nombre': 'TV Salud <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="m3u/tv-salud" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://tvsalud.cl/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> TV Salud <img src="icons/chile.png"></img></a></div>'
        },
        'canal-9': {
            'nombre': 'Canal 9 (Conce) <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/c9?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://www.canal9.cl/en-vivo/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Canal 9 (Concepción) <img src="icons/chile.png"></img></a></div>'
        },
        'tvu': {
            'nombre': 'TVU (Conce) <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/tvu?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://www.tvu.cl/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> TVU (Concepción) <img src="icons/chile.png"></img></a></div>'
        },
        'canal-21': {
            'nombre': 'Canal 21 (Chillán) <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://live.grupoz.cl/8b383d0a9cef5560a1bfbbeaf6ad4a38?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="http://www.canal21tv.cl/wp/en-vivo/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Canal 21 (Chillán) <img src="icons/chile.png"></img></a></div>'
        },
        'ucv': {
            'nombre': 'UCV TV <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/ucvtv2?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://pucvmultimedios.cl/senal-online-tv.php" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> UCV TV <img src="icons/chile.png"></img></a></div>'
        },
        'uatv': {
            'nombre': 'UATV <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/uatv?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://uatv.cl/uatv-en-vivo/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> UATV <img src="icons/chile.png"></img></a></div>'
        },
        'vtv': {
            'nombre': 'VTV <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://rudo.video/live/vtv?volume=0&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="http://canalvtv.cl/vtv/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> VTV <img src="icons/chile.png"></img></a></div>'
        },
        'canal-33': {
            'nombre': 'Canal 33 (Temuco) <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://streaminghd.cl/player.video/index.php?s=eduardo555/eduardo555" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="http://www.canal33.cl/online.php" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Canal 33 (Temuco) <img src="icons/chile.png"></img></a></div>'
        },
        'tn': {
            'nombre': 'Todonoticias 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCj6PcyLvpnIRT_2W_mwa9Aw&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UCj6PcyLvpnIRT_2W_mwa9Aw" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Todonoticias 🌍</a></div>'
        },
        'c5n': {
            'nombre': 'C5N 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCFgk2Q2mVO1BklRQhSv6p0w&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UCFgk2Q2mVO1BklRQhSv6p0w" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> C5N 🌍</a></div>'
        },
        'cnn-español': {
            'nombre': 'CNN en Español 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UC_lEiu6917IJz03TnntWUaQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UC_lEiu6917IJz03TnntWUaQ" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> CNN en Español 🌍</a></div>'
                //        },
                //        'cnn-brasil': {
                //            'nombre': 'CNN Brasil 🌍',
                //            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://invidio.us/embed/live_stream?channel=UCvdwhh_fDyWccR42-rReZLw&autoplay=1&volume=0&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://www.youtube.com/channel/UCvdwhh_fDyWccR42-rReZLw" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> CNN Brasil 🌍</a></div>'
        },
        'el-tiempo': {
            'nombre': 'EL TIEMPO 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCe5-b0fCK3eQCpwS6MT0aNw&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UCe5-b0fCK3eQCpwS6MT0aNw" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> EL TIEMPO 🌍</a></div>'
        },
        'noti-caracol': {
            'nombre': 'Noticias Caracol 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UC2Xq2PK-got3Rtz9ZJ32hLQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UC2Xq2PK-got3Rtz9ZJ32hLQ" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Noticias Caracol 🌍</a></div>'
        },
        'globovision': {
            'nombre': 'Globovisión En Vivo 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCfJtBtmhnIyfUB6RqXeImMw&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UCfJtBtmhnIyfUB6RqXeImMw" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Globovisión En Vivo 🌍</a></div>'
        },
        'euronews-esp': {
            'nombre': 'euronews (Español) 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCyoGb3SMlTlB8CLGVH4c8Rw&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UCyoGb3SMlTlB8CLGVH4c8Rw" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> euronews (Español) 🌍</a></div>'
        },
        'euronews-eng': {
            'nombre': 'euronews (English) 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCSrZ3UV4jOidv8ppoVuvW9Q&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UCSrZ3UV4jOidv8ppoVuvW9Q" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> euronews (English) 🌍</a></div>'
        },
        'euronews-ru': {
            'nombre': 'euronews Русский 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCFzJjgVicCtFxJ5B0P_ei8A&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UCFzJjgVicCtFxJ5B0P_ei8A" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> euronews Русский 🌍</a></div>'
        },
        'dw': {
            'nombre': 'DW Español 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCT4Jg8h03dD0iN3Pb5L0PMA&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UCT4Jg8h03dD0iN3Pb5L0PMA" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> DW Español 🌍</a></div>'
        },
        'cronica-tv': {
            'nombre': 'Crónica TV 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCT7KFGv6s2a-rh2Jq8ZdM1g&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UCT7KFGv6s2a-rh2Jq8ZdM1g" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Crónica TV 🌍</a></div>'
                //        },
                //        'RT-español': {
                //            'nombre': 'RT en Español 🌍',
                //            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UC2mtXUpAYLYJIZ2deSPhlqw&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UC2mtXUpAYLYJIZ2deSPhlqw" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> RT en Español 🌍</a></div>'
        },
        'RT-español2': {
            'nombre': 'RT en vivo 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCEIhICHOQOonjE6V0SLdrHQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UCEIhICHOQOonjE6V0SLdrHQ" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> RT en vivo 🌍</a></div>'
        },
        'RT-News': {
            'nombre': 'RT News 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCpwvZwUam-URkxB7g4USKpg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UCpwvZwUam-URkxB7g4USKpg" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> RT News 🌍</a></div>'
        },
        'RT-america': {
            'nombre': 'RT America 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCczrL-2b-gYK3l4yDld4XlQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UCczrL-2b-gYK3l4yDld4XlQ" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> RT America 🌍</a></div>'
        },
        'MILENIO': {
            'nombre': 'MILENIO 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCFxHplbcoJK9m70c4VyTIxg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/user/MILENIO" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> MILENIO 🌍</a></div>'
        },
        'vpitv': {
            'nombre': 'VPItv 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCVFiIRuxJ2GmJLUkHmlmj4w&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://www.youtube.com/channel/UCVFiIRuxJ2GmJLUkHmlmj4w" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> VPItv 🌍</a></div>'
        },
        'canal-26-arg': {
            'nombre': 'Canal 26 Argentina 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCrpMfcQNog595v5gAS-oUsQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UCrpMfcQNog595v5gAS-oUsQ" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Canal 26 Argentina 🌍</a></div>'
        },
        'el-siete-tv': {
            'nombre': 'El Siete TV 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UC64ZNqX0FQHabP8iIkmnR3A&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UC64ZNqX0FQHabP8iIkmnR3A" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> El Siete TV 🌍</a></div>'
        },
        'a24': {
            'nombre': 'A24 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCR9120YBAqMfntqgRTKmkjQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UCR9120YBAqMfntqgRTKmkjQ" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> A24 🌍</a></div>'
        },
        'noticias-uno-colombia': {
            'nombre': 'NoticiasUnoColombia 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UC3NUgxBBl05tthfGBS6kPkA&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UC3NUgxBBl05tthfGBS6kPkA" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> NoticiasUnoColombia 🌍</a></div>'
                //        },
                //       'tv-publica-arg': {
                //            'nombre': 'TV Pública Argentina 🌍',
                //            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://invidio.us/embed/live_stream?channel=UCs231K71Bnu5295_x0MB5Pg&autoplay=1&volume=0&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://www.youtube.com/channel/UCs231K71Bnu5295_x0MB5Pg" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> TV Pública Argentina 🌍</a></div>'
        },
        'la-nacion': {
            'nombre': 'LA NACION 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCba3hpU7EFBSk817y9qZkiA&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UCba3hpU7EFBSk817y9qZkiA" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> LA NACION 🌍</a></div>'
        },
        'telesur-tv': {
            'nombre': 'teleSUR tv 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCbHFKMtqLYkIBRiPHJwxu_w&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UCbHFKMtqLYkIBRiPHJwxu_w" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> teleSUR tv 🌍</a></div>'
        },
        'france-24-esp': {
            'nombre': 'FRANCE 24 Español 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCUdOoVWuWmgo1wByzcsyKDQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://www.youtube.com/channel/UCUdOoVWuWmgo1wByzcsyKDQ" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> FRANCE 24 Español 🌍</a></div>'
        },
        'france-24-eng': {
            'nombre': 'FRANCE 24 English 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCQfwfsi5VrQ8yKZ-UWmAEFg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://www.youtube.com/channel/UCQfwfsi5VrQ8yKZ-UWmAEFg" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> FRANCE 24 English 🌍</a></div>'
                //        },
                //        'france-info': {
                //            'nombre': 'franceinfo 🌍',
                //            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://invidio.us/embed/live_stream?channel=UCO6K_kkdP-lnSCiO3tPx7WA&autoplay=1&volume=0&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://www.youtube.com/channel/UCO6K_kkdP-lnSCiO3tPx7WA" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> franceinfo 🌍</a></div>'
        },
        'sky-news': {
            'nombre': 'Sky News 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCoMdktPbSTixAyNGwb-UYkQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UCoMdktPbSTixAyNGwb-UYkQ" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Sky News 🌍</a></div>'
        },
        'trt-world': {
            'nombre': 'TRT World 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UC7fWeaHhqgM4Ry-RMpM2YYw&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UC7fWeaHhqgM4Ry-RMpM2YYw" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> TRT World 🌍</a></div>'
        },
        'al-jazeera': {
            'nombre': 'Al Jazeera English 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCNye-wNBqNL5ZzHSJj3l8Bg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UCNye-wNBqNL5ZzHSJj3l8Bg" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Al Jazeera English 🌍</a></div>'
        },
        'cna': {
            'nombre': 'CNA 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UC83jt4dlz1Gjl58fzQrrKZg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://www.youtube.com/channel/UC83jt4dlz1Gjl58fzQrrKZg" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> CNA 🌍</a></div>'
        },
        'abc7': {
            'nombre': 'ABC7 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCVxBA3Cbu3pm8w8gEIoMEog&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://www.youtube.com/channel/UCVxBA3Cbu3pm8w8gEIoMEog" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> ABC7 🌍</a></div>'
        },
        'abc7-swfl': {
            'nombre': 'ABC7 SWFL 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCq9e_hCv2jvgck8WowW1NXg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://www.youtube.com/channel/UCq9e_hCv2jvgck8WowW1NXg" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> ABC7 SWFL 🌍</a></div>'
        },
        'nbcla': {
            'nombre': 'NBCLA 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCSWoppsVL0TLxFQ2qP_DLqQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://www.youtube.com/channel/UCSWoppsVL0TLxFQ2qP_DLqQ" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> NBCLA 🌍</a></div>'
                //        },
                //        'abc-news': {
                //            'nombre': 'ABC News 🌍',
                //            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://invidio.us/embed/live_stream?channel=UCBi2mrWuNuyYy4gbM6fU18Q&autoplay=1&volume=0&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://www.youtube.com/channel/UCBi2mrWuNuyYy4gbM6fU18Q" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> ABC News 🌍</a></div>'
        },
        'nbc-news': {
            'nombre': 'NBC News 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCeY0bbntWzzVIaj2z3QigXg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UCeY0bbntWzzVIaj2z3QigXg" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> NBC News 🌍</a></div>'
                //        },
                //        'usa-today': {
                //            'nombre': 'USA TODAY 🌍',
                //            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCP6HGa63sBC7-KHtkme-p-g&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://www.youtube.com/channel/UCP6HGa63sBC7-KHtkme-p-g" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> USA TODAY 🌍</a></div>'
        },
        'record-news': {
            'nombre': 'Record News 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCuiLR4p6wQ3xLEm15pEn1Xw&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UCuiLR4p6wQ3xLEm15pEn1Xw" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Record News 🌍</a></div>'
        },
        'news-nigeria': {
            'nombre': 'TVC News Nigeria 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCgp4A6I8LCWrhUzn-5SbKvA&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UCgp4A6I8LCWrhUzn-5SbKvA" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> TVC News Nigeria 🌍</a></div>'
                //        },
                //        'HK-apple-daily': {
                //            'nombre': 'HK Apple Daily 🌍',
                //            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCeqUUXaM75wrK5Aalo6UorQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://www.youtube.com/channel/UCeqUUXaM75wrK5Aalo6UorQ" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> HK Apple Daily 🌍</a></div>'
                //        },
                //        'HK-cable-tv': {
                //            'nombre': 'CABLE TV & CABLE News 🌍',
                //            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UC_q7e5XYJB0JDGagcF0KW0w&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://www.youtube.com/channel/UC_q7e5XYJB0JDGagcF0KW0w" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> CABLE TV & CABLE News 🌍</a></div>'
        },
        'live-chino': {
            'nombre': '三立LIVE新聞 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UC2TuODJhC03pLgd6MpWP0iw&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UC2TuODJhC03pLgd6MpWP0iw" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> 三立LIVE新聞 🌍</a></div>'
        },
        'live-japones': {
            'nombre': 'ANNnewsCH 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCGCZAYq5Xxojl_tSXcVJhiQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UCGCZAYq5Xxojl_tSXcVJhiQ" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> ANNnewsCH 🌍</a></div>'
        },
        'live-taiwan': {
            'nombre': '民視直播 FTVN Live 53 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UClIfopQZlkkSpM1VgCFLRJA&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UClIfopQZlkkSpM1VgCFLRJA" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> 民視直播 FTVN Live 53 🌍</a></div>'
        },
        'live-chino-2': {
            'nombre': '三立iNEWS 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCoNYj9OFHZn3ACmmeRCPwbA&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UCoNYj9OFHZn3ACmmeRCPwbA" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> 三立iNEWS 🌍</a></div>'
        },
        'chilledCow': {
            'nombre': 'ChilledCow 🎵',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1&mute=0&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UCSJ4gkVC6NrvII8umztf0Ow" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> ChilledCow 🎵</a></div>'
        },
        'chillhop': {
            'nombre': 'Chillhop 🎵',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCOxqgCwgOqC2lMqC5PYz_Dg&autoplay=1&mute=0&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UCOxqgCwgOqC2lMqC5PYz_Dg" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Chillhop 🎵</a></div>'
        },
        'steezyasfuck': {
            'nombre': 'Steezyasfuck 🎵',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCsIg9WMfxjZZvwROleiVsQg&autoplay=1&mute=0&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UCsIg9WMfxjZZvwROleiVsQg" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Steezyasfuck 🎵</a></div>'
        },
        'relaxdaily': {
            'nombre': 'Relaxdaily 🎵',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCc9EzBNAtdnNiDrMw5CAxUw&autoplay=1&mute=0&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UCc9EzBNAtdnNiDrMw5CAxUw" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Relaxdaily 🎵</a></div>'
        },
        'imuc-radio-chile': {
            'nombre': 'IMUC Chile <img src="icons/chile.png"></img> 🎵',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCIIDtZoaK9UZi4FaGMmL_hw&autoplay=1&mute=0&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://www.youtube.com/channel/UCIIDtZoaK9UZi4FaGMmL_hw" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> IMUC Chile <img src="icons/chile.png"></img>🎵</a></div>'
        },
        'doom-radio': {
            'nombre': 'Doom Radio 🎵',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCR2D48i5MCMYwVKbgYIAftQ&autoplay=1&mute=0&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UCR2D48i5MCMYwVKbgYIAftQ" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Doom Radio 🎵</a></div>'
        },
        'radio-placeres': {
            'nombre': '📻 Radio Placeres 87.7 FM <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="radios-solo-audio/radio-placeres" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://www.radioplaceres.cl/sitio/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> 📻 Radio Placeres 87.7 FM <img src="icons/chile.png"></img></a></div>'
        },
        'cam-dipu-yutu': {
            'nombre': 'Cámara Diputados Señal Youtube <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCYd5k2TyOyOmUJNx0SH17KA&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://www.youtube.com/channel/UCYd5k2TyOyOmUJNx0SH17KA" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Cámara Diputados Señal Youtube <img src="icons/chile.png"></img></a></div>'
        },
        'cam-dipu-05-yutu': {
            'nombre': 'Cámara Diputados YT 05 <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UC0QKtI8NpeMObauDylsSUDA&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://www.youtube.com/channel/UC0QKtI8NpeMObauDylsSUDA" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Cámara Diputados YT 05 <img src="icons/chile.png"></img></a></div>'
        },
        'cam-dipu-06-yutu': {
            'nombre': 'Cámara Diputados YT 06 <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCspWzpGflwb6A8PZqWw49CQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://www.youtube.com/channel/UCspWzpGflwb6A8PZqWw49CQ" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Cámara Diputados YT 06 <img src="icons/chile.png"></img></a></div>'
        },
        'cam-dipu-07-yutu': {
            'nombre': 'Cámara Diputados YT 07 <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCyVjDDBZGDywVGrpGBvGEsw&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://www.youtube.com/channel/UCyVjDDBZGDywVGrpGBvGEsw" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Cámara Diputados YT 07 <img src="icons/chile.png"></img></a></div>'
        },
        'cam-dipu-08-yutu': {
            'nombre': 'Cámara Diputados YT 08 <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCCtDbZzh63vgU_BWHRGsbug&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://www.youtube.com/channel/UCCtDbZzh63vgU_BWHRGsbug" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Cámara Diputados YT 08 <img src="icons/chile.png"></img></a></div>'
        },
        'cam-dipu-11-yutu': {
            'nombre': 'Cámara Diputados YT 11 <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCYPKjGKq2yLbAnmth5rFZmQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://www.youtube.com/channel/UCYPKjGKq2yLbAnmth5rFZmQ" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Cámara Diputados YT 11 <img src="icons/chile.png"></img></a></div>'
        },
        'cam-dipu-12-yutu': {
            'nombre': 'Cámara Diputados YT 12 <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCVOWFY-sgbDglBsfOap9okg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://www.youtube.com/channel/UCVOWFY-sgbDglBsfOap9okg" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Cámara Diputados YT 12 <img src="icons/chile.png"></img></a></div>'
        },
        'cam-dipu-13-yutu': {
            'nombre': 'Cámara Diputados YT 13 <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UC33MG3YdoQ16a8a3wODh6lw&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://www.youtube.com/channel/UC33MG3YdoQ16a8a3wODh6lw" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Cámara Diputados YT 13 <img src="icons/chile.png"></img></a></div>'
                //        },
                //        'times-square': {
                //            'nombre': 'Times Square Live 4K 🌍',
                //            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://invidio.us/embed/live_stream?channel=UC6qrG3W8SMK0jior2olka3g&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://www.youtube.com/channel/UC6qrG3W8SMK0jior2olka3g" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> Times Square Live 4K 🌍</a></div>'
        },
        'nasa': {
            'nombre': '🔭 NASA Live 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="https://www.youtube.com/embed/21X5lGlDOfg?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/watch?v=21X5lGlDOfg" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> 🔭 NASA Live 🌍</a></div>'
        },
        'nasa1': {
            'nombre': '🔭 NASA ISS Live Stream 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="https://www.youtube.com/embed/EEIk7gwjgIM?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/watch?v=EEIk7gwjgIM" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> 🔭 NASA ISS Live Stream 🌍</a></div>'
        },
        'spacex': {
            'nombre': '🔭 SpaceX 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCtI0Hodo5o5dUb67FeUjDeA&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UCtI0Hodo5o5dUb67FeUjDeA" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> 🔭 SpaceX 🌍</a></div>'
        },
        'espacio-luna': {
            'nombre': '🔭 Lunar view from SELENE 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="https://www.youtube.com/embed/nX0sg1Gp-1w?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/watch?v=nX0sg1Gp-1w" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> 🔭 Lunar view from SELENE 🌍</a></div>'
        },
        'espacio-tierra': {
            'nombre': '🔭 Earth view from ISS 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="https://www.youtube.com/embed/XBPjVzSoepo?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/watch?v=XBPjVzSoepo" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> 🔭 Earth view from ISS 🌍</a></div>'
        },
        'corona-pagina': {
            'nombre': '🦠 COVID-19 Dashboard 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6" target="_blank" class="tooltip-test" title="Ir a la página oficial de este dashboard"> 🦠 COVID-19 Dashboard 🌍</a></div>'
        },
        'corona1': {
            'nombre': '🦠 COVID-19 1 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="https://www.youtube.com/embed/dRVwrgds0rI?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UCBilL350BkEKDa-zUrr_kEw" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> 🦠 COVID-19 1 🌍</a></div>'
        },
        'corona2': {
            'nombre': '🦠 COVID-19 2 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="https://www.youtube.com/embed/live_stream?channel=UClOfk9gsvf5dKLZXuctxTNA&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UClOfk9gsvf5dKLZXuctxTNA" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> 🦠 COVID-19 2 🌍</a></div>'
        },
        'corona3': {
            'nombre': '🦠 COVID-19 3 🌍',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCDGiCfCZIV5phsoGiPwIcyQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UCDGiCfCZIV5phsoGiPwIcyQ" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> 🦠 COVID-19 3 🌍</a></div>'
        },
        'corona-pag-chile': {
            'nombre': '🦠 COVID-19 Chile <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://bing.com/covid/local/chile" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://bing.com/covid/local/chile" target="_blank" class="tooltip-test" title="Ir a la página oficial de este dashboard"> 🦠 COVID-19 Chile <img src="icons/chile.png"></img></a></div>'
        },
        'vtrchile': {
            'nombre': '🦠 VTR TV Covid-19 <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCeeGISoikxCnbaLYgU4SAgA&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/channel/UCeeGISoikxCnbaLYgU4SAgA" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión">🦠 VTR TV Covid-19 <img src="icons/chile.png"></img></a></div>'
        },
        '31-minutos': {
            'nombre': '31 minutos - Todos los episodios <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/videoseries?list=PLVI9tQggdGtFXgCwpjTM_d2pdH6ABeRFL&autoplay=0&mute=0&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/playlist?list=PLVI9tQggdGtFXgCwpjTM_d2pdH6ABeRFL" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta serie"> 31 minutos - Todos los episodios <img src="icons/chile.png"></img></a></div>'
        },
        'diego-glot-s01': {
            'nombre': 'Diego y Glot - Temporada 1 <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/videoseries?list=PLnDONcPxnlq2s8zwIuJt8_JI4Tf3amd6u&autoplay=0&mute=0&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/watch?v=J3cLcZ1QhFE&list=PLnDONcPxnlq2s8zwIuJt8_JI4Tf3amd6u" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta serie"> Diego y Glot - Temporada 1 <img src="icons/chile.png"></img></a></div>'
        },
        'los-pulentos-s01': {
            'nombre': 'Los Pulentos - Temporada 1 <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/videoseries?list=PLnDONcPxnlq2gZlH-OAXCnIeyPwMpQuUb&autoplay=0&mute=0&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/playlist?list=PLnDONcPxnlq2gZlH-OAXCnIeyPwMpQuUb" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta serie"> Los Pulentos - Temporada 1 <img src="icons/chile.png"></img></a></div>'
        },
        'villa-dulce-s01': {
            'nombre': 'Villa Dulce - Temporada 1 <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/videoseries?list=PLnDONcPxnlq1V8zLL54a6luAy4Wp6ldK3&autoplay=0&mute=0&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><img class="rec" src="icons/rojo.png"></img><a class="nombre-color" href="https://www.youtube.com/playlist?list=PLnDONcPxnlq1V8zLL54a6luAy4Wp6ldK3" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta serie"> Villa Dulce - Temporada 1 <img src="icons/chile.png"></img></a></div>'
        },
        'tv-educa-cl': {
            'nombre': 'TV Educa Chile <img src="icons/chile.png"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="no" src="m3u/tv-educa" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre-barra"><a class="nombre-color" href="https://www.tvn.cl/envivo/tveducachile/" target="_blank" class="tooltip-test" title="Ir a la página oficial de esta emisión"> TV Educa Chile <img src="icons/chile.png"></img></a></div>'
                //        },
                //        'plebi': {
                //            'nombre': 'Conteo votos <img src="icons/chile.png"></img>',
                //            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe scrolling="yes" src="m3u/plebiscito" frameborder="0" hspace="0" vspace="0" marginheight="0" marginwidth="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'    
        }
    },
    add: function(canal) {
        if (App.channels[canal]) {
            var thisCanal = document.createElement("div");
            thisCanal.innerHTML = App.channels[canal].code;

            if (App.isMobile()) {
                thisCanal.classList.add("col-" + sizeMobile);
            } else {
                thisCanal.classList.add("col-" + size);
            }
            thisCanal.classList.add("stream");
            thisCanal.setAttribute("data-canal", canal);
            var losCanales = document.getElementById("los-canales");
            losCanales.appendChild(thisCanal);
            var n = document.querySelector('button[data-canal="' + canal + '"]');
            n.classList.remove("btn-outline-secondary");
            n.classList.add("btn-primary");
        }
    },
    remove: function(canal) {
        var findCanal = document.querySelector('div[data-canal="' + canal + '"]');
        var losCanales = document.getElementById("los-canales");
        if (findCanal != null) {
            losCanales.removeChild(findCanal);
            var n = document.querySelector('button[data-canal="' + canal + '"]');
            n.classList.remove("btn-primary");
            n.classList.add("btn-outline-secondary");
        }
    },
    isMobile: function() {
        var check = false;
        (function(a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    },

    seedModal: function() {
        for (const llave in App.channels) {
            let buttonTV;
            buttonTV = document.createElement("button");
            buttonTV.classList.add("btn");
            buttonTV.classList.add("btn-outline-secondary");
            buttonTV.setAttribute("data-canal", llave);
            buttonTV.innerHTML = App.channels[llave].nombre;
            let n = document.querySelector(".modal-body");
            n.appendChild(buttonTV);
            buttonTV.addEventListener("click", function() {
                if (buttonTV.getAttribute("class").includes("btn-outline-secondary")) {
                    App.add(llave);
                } else if (buttonTV.getAttribute("class").includes("btn-primary")) {
                    App.remove(llave);
                }
            })
        };
    },


    init: function() {
        App.seedModal();
        App.add("cima");
        if (!App.isMobile()) {
            App.add("tv-senado-yutu");
            App.add("cam-dipu-m3u-1");
            App.add("venticuatro");
            App.add("t13");
            App.add("meganoticias");
        }
    }
};

App.init();

function updateClock() {
    var now = new Date();
    localtime = now.toTimeString().slice(0, 8);
    utctime = now.toUTCString().slice(17, 25);
    var santiago = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDay(), now.getUTCHours() - 3, now.getUTCMinutes(), now.getUTCSeconds());
    santiagotime = santiago.toTimeString().slice(0, 8);
    document.getElementById("time").innerHTML = localtime;
    document.getElementById("UTCtime").innerHTML = utctime;
    document.getElementById("santiagotime").innerHTML = santiagotime;
    setTimeout(updateClock, 1000);
}

updateClock();

var modal = document.getElementById("custom-modal");
var btn = document.getElementById("custom-btn");
var span = document.getElementById("custom-close");
var span2 = document.getElementById("custom-close2");

btn.onclick = function() {
    modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

span.onclick = function() {
    modal.style.display = "none";
}

span2.onclick = function() {
    modal.style.display = "none";
}

var hue = document.getElementById("FormControlSelect1");

hue.onchange = function(event) {
    size = event.target.value
    sizeMobile = event.target.value
    let canal2 = document.querySelectorAll(".stream");
    for (let videos of canal2) {
        videos.classList.remove("col-12", "col-6", "col-4", "col-3", "col-2");
        videos.classList.add("col-" + event.target.value);
        console.log(videos)
    }
}

var anchoStreams = document.getElementById("formControlRange");

anchoStreams.oninput = function(event) {
        let streams2 = document.getElementById("los-canales");
        console.log(streams2)
        streams2.style.maxWidth = event.target.value + "%"
    }
    /////////////////////////////////////////////////////////

//////share buttons//////////
$('.share-button').on('click', function() {
    $(this).addClass('open');
})
$(".share-items").draggable({
    axis: "x",
    containment: ".share-items-wrapper"
});
$(".share-item").on('click', function() {
    $('.share-button').addClass('shared');
    setTimeout(function() {
        $('.share-button').addClass('thankyou');
    }, 800);
    setTimeout(function() {
        $('.share-button').removeClass('open');
        $('.share-button').removeClass('shared');
        $('.share-button').removeClass('thankyou');
    }, 2500);
});
