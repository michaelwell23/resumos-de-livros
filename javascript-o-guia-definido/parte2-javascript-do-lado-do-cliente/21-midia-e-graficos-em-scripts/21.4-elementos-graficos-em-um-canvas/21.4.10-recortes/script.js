// Define alguns atributos de desenho
c.font = 'bold 60pt sans-serif'; // Fonte grande
c.lineWidth = 2;
// Linhas estreitas
c.strokeStyle = '#000';
// Linhas pretas
// Contorna um retângulo e algum texto
c.strokeRect(175, 25, 50, 325);
// Uma faixa vertical no meio
c.strokeText('<canvas>', 15, 330); // Note strokeText(), em vez de fillText()

// Define um caminho complexo com um interior que está fora.
polygon(c, 3, 200, 225, 200);
// Triângulo grande
polygon(c, 3, 200, 225, 100, 0, true); // Triângulo menor invertido dentro
// Torna esse caminho a região de recorte.
c.clip();

// Traça o caminho com uma linha de 5 pixels, inteiramente dentro da região de corte.
c.lineWidth = 10;
// Metade dessa linha de 10 pixels será cortada
c.stroke();

// Preenche as partes do retângulo e o texto que estão dentro da região de recorte
c.fillStyle = '#aaa';
// Cinza-claro
c.fillRect(175, 25, 50, 325);
// Preenche a faixa vertical
c.fillStyle = '#888';
// Cinza mais escuro
c.fillText('<canvas>', 15, 330);
// Preenche o texto
