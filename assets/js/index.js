$(document).ready(function () {
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
  $("#enviar").on("click", function () {
    alert("El mensaje fue enviado correctamente");
  });


  $(".embalse").on("click", function () {
    $("#embalse2").toggle();
  });
  $(".lago").on("click", function () {
    $("#lago2").toggle();
  });
  $(".salar").on("click", function () {
    $("#salar2").toggle();
  });



});
$(".bosque").on("click", function () {
  $("#bosque2").toggle();
});
$(function () {
  $('[data-toggle="popover"]').popover();
});
