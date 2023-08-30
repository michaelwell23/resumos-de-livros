var divs = $('div');
$('p.details').css('background-color', 'yellow').show('fast');

$('.clicktohide').click(function () {
  $(this).slideUp('slow');
});
