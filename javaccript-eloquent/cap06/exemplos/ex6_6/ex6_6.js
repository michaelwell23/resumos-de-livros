var pile = {
  elements: ['eggshell', 'orange peel', 'worm'],
  get height() {
    return this.elements.length;
  },
  set height(value) {
    console.log('Ignoring attempt to set height to', value);
  },
};
console.log(pile.height); // → 3
pile.height = 100; // → Ignoring attempt to set height to 100

//=============================

Object.defineProperty(TextCell.prototype, 'heightProp', {
  get: function () {
    return this.text.length;
  },
});
var cell = new TextCell('no\nway');
console.log(cell.heightProp); // → 2
cell.heightProp = 100;
console.log(cell.heightProp); // → 2
