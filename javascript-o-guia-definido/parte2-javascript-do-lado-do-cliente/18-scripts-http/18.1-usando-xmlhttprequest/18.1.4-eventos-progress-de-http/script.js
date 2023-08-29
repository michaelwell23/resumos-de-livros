if ('onprogress' in new XMLHttpRequest()) {
  // Eventos progress são suportados
}

request.onprogress = function (e) {
  if (e.lengthComputable)
    progress.innerHTML = Math.round((100 * e.loaded) / e.total) + '% Complete';
};
