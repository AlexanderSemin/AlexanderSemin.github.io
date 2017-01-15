$(document).ready(function() {
  $(".ball").on("click", function() {
    ball();
    //alert( $( "#res" ).text() );

  });
});

function ball() {
  //$('#res').html("Подожди, дай подумать!").fadeIn(1000).fadeOut(2000);
  var arr = [
    "абсолютно точно",
    "должно быть так",
    "не надейся",
    "мне кажется, да",
    "спроси посже",
    "мало шансов",
    "без сомнений",
    "звезды говорят нет",
    "не могу сказать",
    "безусловно",
    "спроси снова",
    "вряд ли",
    "нет",
    "похоже что да",
    "да" ];

  var res = Math.floor(Math.random() * 14);
  var message = '';
  var res_message = arr[res].toUpperCase();
  $('#res').text(res_message).fadeToggle(1000);
  res_message = "";
}