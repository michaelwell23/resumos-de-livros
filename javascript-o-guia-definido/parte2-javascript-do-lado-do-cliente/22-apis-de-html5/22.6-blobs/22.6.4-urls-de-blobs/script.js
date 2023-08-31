var getBlobURL =
  (window.URL && URL.createObjectURL.bind(URL)) ||
  (window.webkitURL && webkitURL.createObjectURL.bind(webkitURL)) ||
  window.createObjectURL;
