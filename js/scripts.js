///barra tamaño https://codepen.io/nosurprisethere/pen/KJxwQz
const settings = {
  fill: "#ce6102",
  background: "#1f1f1f",
};

const sliders = document.querySelectorAll(".range-slider");

Array.prototype.forEach.call(sliders, (slider) => {
  slider.querySelector("input").addEventListener("input", (event) => {
    slider.querySelector("span").innerHTML = event.target.value;
    applyFill(event.target);
  });
  applyFill(slider.querySelector("input"));
});

function applyFill(slider) {
  const percentage =
    (100 * (slider.value - slider.min)) / (slider.max - slider.min);
  const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${
    settings.background
  } ${percentage + 0.1}%)`;
  slider.style.background = bg;
}
///filtro de canales https://www.w3schools.com/bootstrap/bootstrap_filters.asp y https://es.stackoverflow.com/questions/195813/c%C3%B3mo-ignorar-acentos-en-b%C3%BAsqueda-filtro-usando-javascript (ROTO, encuentra resultados sin tildes pero si se digita con tilde no)
$(document).ready(function () {
  $("#mifiltro").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#PorFiltrar *").filter(function () {
      $(this).toggle($(this).text().normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase().indexOf(value) > -1);
    });
  });
});
///copiar enlace a portapapeles//////////////////////////
function copiarEnlace() {
  var copyText = document.getElementById("myInput");

  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  document.execCommand("copy");

  alert("Copiado exitoso!: " + copyText.value);
}
///nombre transmisiones on/off https://www.w3schools.com/jquery/jquery_hide_show.asp/////////
$(document).ready(function () {
  $(".btn1-nombres-stream").click(function () {
    $(".nombre-barra").toggle();
  });
});
