var percent_loaded = Math.floor((song.buffered.end(0) / song.duration) * 100);

if (song.readyState === song.HAVE_ENOUGH_DATA) song.play();

if (song.error.code == song.error.MEDIA_ERR_DECODE)
  alert("Can't play song: corrupt audio data.");
