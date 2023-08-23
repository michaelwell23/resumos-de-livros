parent.history.back();
parent == self; // Para qualquer janela de nível superior

var iframeElement = document.getElementById('f1');
var childFrame = document.getElementById('f1').contentWindow;

var elt = document.getElementById('f1');
var win = elt.contentWindow;
win.frameElement === elt; // Sempre true para quadros
window.frameElement === null; // Para janelas de nível superior
