/* Modal Descargo de responsabilidad para que carge al inicar la página junto a crear cookie para que no vuelva a salir 
https://coderwall.com/p/gnqdpg/dismiss-bootstrap-modal-forever-with-jquery-cookie-on-click */
$(document).ready(function () {
  if (document.cookie.indexOf("ModalShown=true") < 0) {
      $("#modalabout").modal("show");
      $("#myModalClose").click(function () {
          $("#modalabout").modal("hide");
      });
      document.cookie = "ModalShown=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
  }
});

// referencias cruzadas (aparecen en distintas secciones a la vez)
let size = 4;
let sizeMobile = 12;
const losCanales = document.getElementById('los-canales');
//-------------------------------------------------------------

/*
               _ _    _  _____ _______       _____    _______       __  __           /\/|  ____  
     /\       | | |  | |/ ____|__   __|/\   |  __ \  |__   __|/\   |  \/  |   /\    |/\/_ / __ \ 
    /  \      | | |  | | (___    | |  /  \  | |__) |    | |  /  \  | \  / |  /  \  | \ | | |  | |
   / /\ \ _   | | |  | |\___ \   | | / /\ \ |  _  /     | | / /\ \ | |\/| | / /\ \ |  \| | |  | |
  / ____ \ |__| | |__| |____) |  | |/ ____ \| | \ \     | |/ ____ \| |  | |/ ____ \| |\  | |__| |
 /_/    \_\____/ \____/|_____/   |_/_/    \_\_|  \_\    |_/_/    \_\_|  |_/_/    \_\_| \_|\____/ 
*/
// https://codepen.io/nosurprisethere/pen/KJxwQz 
const settings = { fill: "#fd7e14", background: "#1f1f1f" },
  sliders = document.querySelectorAll(".range-slider");

Array.prototype.forEach.call(sliders, (slider) => {
  slider.querySelector("input").addEventListener("input", (event) => {
    slider.querySelector("span").innerHTML = event.target.value;
    applyFill(event.target);
  });
  applyFill(slider.querySelector("input"));
});

function applyFill(slider) {
  let percentage = (100 * (slider.value - slider.min)) / (slider.max - slider.min);
  let bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage + 0.1}%)`;
    slider.style.background = bg;
}

let streamxfila = document.getElementById('transmision-por-fila');
    streamxfila.onchange = (event) => {
      size = event.target.value;
      sizeMobile = event.target.value;
      let canal2 = document.querySelectorAll('.stream');
      for (let videos of canal2) {
        videos.classList.remove('col-12', 'col-6', 'col-4', 'col-3', 'col-2');
        videos.classList.add(`col-${event.target.value}`);
      }
    }

let anchoStreams = document.getElementById('tamaño-streams');
    anchoStreams.oninput = (event) => {
      losCanales.style.maxWidth = `${event.target.value}%`;
    }

/*
   _____          _   _          _      ______  _____ 
  / ____|   /\   | \ | |   /\   | |    |  ____|/ ____|
 | |       /  \  |  \| |  /  \  | |    | |__  | (___  
 | |      / /\ \ | . ` | / /\ \ | |    |  __|  \___ \ 
 | |____ / ____ \| |\  |/ ____ \| |____| |____ ____) |
  \_____/_/    \_\_| \_/_/    \_\______|______|_____/                                                                                                   
*/
const fragmentCanal = document.createDocumentFragment();

function barra_nombre(nombre, fuente){
  const fragment = document.createDocumentFragment();
    const a = document.createElement('a');
      a.innerHTML = nombre;
      a.setAttribute('title','Ir a la página oficial de esta transmisión');
      a.setAttribute('href', fuente);
      a.setAttribute('rel', 'noopener nofollow noreferrer');
    const divBarra = document.createElement('div');
      divBarra.classList.add('nombre-barra');
      divBarra.append(a);
  fragment.append(divBarra);
  return fragment;
};

let App = {
    // llamar variable con canales primero
    channels,
    add: (canal) => {
      if (App.channels[canal]) {
        let thisCanal = document.createElement('div');
        if (App.channels[canal].code !== undefined && App.channels[canal].m3u === undefined) {
          const divIframe = document.createElement('div');
          divIframe.classList.add('embed-responsive', 'embed-responsive-16by9');
          const iframevideo = document.createElement('iframe');
          iframevideo.setAttribute('src', App.channels[canal].code);
          iframevideo.setAttribute('allowFullScreen', '');
          divIframe.append(iframevideo);
          thisCanal.classList.add('stream');
          thisCanal.setAttribute('data-canal', canal);
          App.isMobile() ? thisCanal.classList.add(`col-${sizeMobile}`) : thisCanal.classList.add(`col-${size}`);
          thisCanal.append(divIframe, barra_nombre(App.channels[canal].name, App.channels[canal].source));
          fragmentCanal.append(thisCanal);
          losCanales.append(fragmentCanal);
        } else if (App.channels[canal].code === undefined && App.channels[canal].m3u !== undefined) {
          const divM3u = document.createElement('div');
          divM3u.classList.add('m3u-stream');
          const m3uvideo = document.createElement('video');
          m3uvideo.setAttribute('data-canal-m3u', canal);
          m3uvideo.classList.add('m3u-player', 'video-js', 'vjs-16-9', 'vjs-fluid');
          m3uvideo.toggleAttribute('controls');
          divM3u.append(m3uvideo);
          thisCanal.classList.add('stream');
          thisCanal.setAttribute('data-canal', canal);
          App.isMobile() ? thisCanal.classList.add(`col-${sizeMobile}`) : thisCanal.classList.add(`col-${size}`);
          thisCanal.append(divM3u, barra_nombre(App.channels[canal].name, App.channels[canal].source));
          fragmentCanal.append(thisCanal);
          losCanales.append(fragmentCanal);
          // CARGA ENLACE M3U UNA VEZ QUE YA SE INSERTO DIV "divM3u" en losCanales (DOM)
          let m3uplayer = videojs(document.querySelector('video[data-canal-m3u="' + canal + '"]'));
          m3uplayer.src({
            src: App.channels[canal].m3u,
            controls: true,
          });
          m3uplayer.autoplay('muted');
        };
        let n = document.querySelector('button[data-canal="' + canal + '"]');
        n.classList.remove('btn-outline-secondary');
        n.classList.add('btn-primary');
      }
    },
    remove: (canal) => {
      let findCanal = document.querySelector('div[data-canal="' + canal + '"]');
      if (findCanal != null) {
        losCanales.removeChild(findCanal);
        let n = document.querySelector('button[data-canal="' + canal + '"]');
        n.classList.remove('btn-primary');
        n.classList.add('btn-outline-secondary');
      }
    },
    isMobile: () => {
      let check = false;
      ((a) => {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
          check = true;
      })(navigator.userAgent || navigator.vendor || window.opera);
      return check;
    },
    seedModal: () => {
      for (const llave in App.channels) {
        let buttonTV = document.createElement('button');
        buttonTV.classList.add('btn', 'btn-outline-secondary');
        buttonTV.setAttribute('data-canal', llave);
        buttonTV.innerHTML = App.channels[llave].name;
        let n = document.querySelector('.modal-body-btns');
        n.append(buttonTV);
        buttonTV.addEventListener('click', function () {
          if (buttonTV.getAttribute('class').includes('btn-outline-secondary')) {
            App.add(llave);
          } else if (buttonTV.getAttribute('class').includes('btn-primary')) {
            App.remove(llave);
          }
        });
      };
    },
    
    init: () => {
      App.seedModal();
      App.add('galeria-cima');
      if (!App.isMobile()) {
        App.add('24-horas-m3u');
        App.add('t13');
        App.add('meganoticias');
        App.add('bbtv');
        App.add('adn');
      }
    }
};

App.init();

/* 
   ____ _______ _____   ____   _____           _ 
  / __ \__   __|  __ \ / __ \ / ____|         | |
 | |  | | | |  | |__) | |  | | (___   __  ____| |
 | |  | | | |  |  _  /| |  | |\___ \  \ \/ / _` |
 | |__| | | |  | | \ \| |__| |____) |  >  < (_| |
  \____/  |_|  |_|  \_\\____/|_____/  /_/\_\__,_|
*/                                               
/* filtro de canales 
https://www.w3schools.com/bootstrap/bootstrap_filters.asp 
https://es.stackoverflow.com/questions/195813/c%C3%B3mo-ignorar-acentos-en-b%C3%BAsqueda-filtro-usando-javascript 
https://es.stackoverflow.com/questions/62031/eliminar-signos-diacr%C3%ADticos-en-javascript-eliminar-tildes-acentos-ortogr%C3%A1ficos
 */
$(document).ready(() => {
    $("#mifiltro").on("keyup", function () {
      var t = $(this).val().toLowerCase();
      $("#por-filtrar *").filter(function () {
        $(this).toggle(
          $(this)
            .text()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .indexOf(t) > -1
        );
      });
    });
  });

/* copiar enlace a portapapeles y alerta copiado 
https://www.w3schools.com/howto/howto_js_copy_clipboard.as
https://codepen.io/lancebush/pen/zdxLE */
$("#success").click(() => {
    let e = document.getElementById("myInput");
    e.select();
    e.setSelectionRange(0, 99999) /*For mobile devices*/;
    navigator.clipboard.writeText(e.value);

    $(".notify").toggleClass("active");
    $("#notifyType").toggleClass("success");

    setTimeout(function () {
      $(".notify").removeClass("active");
      $("#notifyType").removeClass("success");
    }, 2000);
  });

///nombre transmisiones on/off
$(document).ready(() => {
    $(".btn-nombres-transmisiones").click(function () {
      $(".nombre-barra").toggle();
    });
  });
