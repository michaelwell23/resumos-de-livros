// Caracteres, posições de código e strings em JavaScript
var p = 'π'; // π é 1 caractere com posição de código de 16 bits 0x03c0
var e = 'e'; // e é 1 caractere com posição de código de 17 bits 0x1d452
p.length; // => 1: p consiste em 1 elemento de 16 bits
e.length; // => 2: a codificação UTF-16 de e são 2 valores de 16 bits: "\ud835\"
