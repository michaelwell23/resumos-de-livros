var box = e.getBoundingClientRect(); // Obtém a posição da janela de visualização em coordenadas
var offsets = getScrollOffsets(); // Função utilitária definida acima
var x = box.left + offsets.x; // Converte em coordenadas do documento
var y = box.top + offsets.y;

var box = e.getBoundingClientRect();
var w = box.width || box.right - box.left;
var h = box.height || box.bottom - box.top;
