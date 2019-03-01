// SCRIPT CHE PERMETTE LA COMPARSA E LA SCOMPARSA DELL'HAMBURGER MENU

$(".hamb-menu").click(function() {
  $(".hidden-nav").toggle(1000);
});

// FACCIO SCOMPARIRE L'HAMBURGER MENU IN CASO L'UTENTE NON CLICCA
// SULL'ICONCINA E INGRANDISCE LA SCHERMATA;

$(window).resize(function(){
  $(".hidden-nav").css("display", "none");
});
