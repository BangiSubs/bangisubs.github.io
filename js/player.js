// WHEN A SONG IS CLICKED
$('.cols-10').click(function () {
  var music = $(this).attr('ml');
  var title = $(this).text();
  $('#play').attr('src', "https://tlgur.com/d/" + music);
  $('#now').text(title);
  var container = $('#player');
  var content = container.html();
  container.html(content);
});