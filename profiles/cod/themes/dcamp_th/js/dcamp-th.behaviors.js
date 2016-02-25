// Inmediatamente después de tener el div,
// generamos su tamaño patra evitar el efecto de salto.
// coverRatio es el mismo que tiene la sección apuntado en el atributo "data-cover-ratio"
var el = document.getElementById("block-block-3");
if (el != null) {
  el.style.height = window.innerHeight - 61 + "px";
  el.style.overflow = "hidden";
}


(function ($) {
  $('.arrow-down').click(function () {
    var dest = $("#block-panels-mini-navigation").offset().top;
    $("html, body").animate({scrollTop: dest});
  });
})(jQuery);
