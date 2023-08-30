$('form').attr('action');
$('#icon').attr('src', 'icon.gif');
$('#banner').attr({
  src: 'banner.gif',
  alt: 'Advertisement',
  width: 720,
  height: 64,
});
$('a').attr('target', '_blank');
$('a').attr('target', function () {
  if (this.host == location.host) return;
  else return '_blank';
});
$('a').attr({
  target: function () {
    '...';
  },
});
$('a').removeAttr('target');
