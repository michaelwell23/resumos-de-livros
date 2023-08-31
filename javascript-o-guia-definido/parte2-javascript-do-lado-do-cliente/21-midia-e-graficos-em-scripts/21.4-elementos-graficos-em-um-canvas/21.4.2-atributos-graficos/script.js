// Reverte para o último estado gráfico salvo, mas não retira da pilha.
CanvasRenderingContext2D.prototype.revert = function () {
  this.restore(); // Restaura o estado gráfico antigo.
  this.save();
  // Salva-o novamente para que possamos voltar a ele.
  return this;
  // Permite encadeamento de métodos.
};
// Configura os atributos gráficos especificados pelas propriedades do objeto o.
// Ou, se nenhum argumento é passado, retorna os atributos atuais como um objeto.
// Note que isso não manipula a transformação nem a região de recorte.
CanvasRenderingContext2D.prototype.attrs = function (o) {
  if (o) {
    // Para cada propriedade em o
    for (var a in o) this[a] = o[a];
    // A configura como um atributo gráfico
    return this;
    // Habilita o encadeamento de métodos
  } else
    return {
      fillStyle: this.fillStyle,
      font: this.font,
      globalAlpha: this.globalAlpha,
      globalCompositeOperation: this.globalCompositeOperation,
      lineCap: this.lineCap,
      lineJoin: this.lineJoin,
      lineWidth: this.lineWidth,
      miterLimit: this.miterLimit,
      textAlign: this.textAlign,
      textBaseline: this.textBaseline,
      shadowBlur: this.shadowBlur,
      shadowColor: this.shadowColor,
      shadowOffsetX: this.shadowOffsetX,
      shadowOffsetY: this.shadowOffsetY,
      strokeStyle: this.strokeStyle,
    };
};
