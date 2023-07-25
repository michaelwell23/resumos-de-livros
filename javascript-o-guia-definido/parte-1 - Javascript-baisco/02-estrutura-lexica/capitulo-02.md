# CAPÍTULO 02 - ESTRUTURA LÉXICA

A estrutura léxica de uma linguagem de programação é um conjunto de regras elementares que especificam o modo de escrever programas. É a sintaxe de nível mais baixo, especifica detalhes de como são os nomes de variáveis, os caracteres delimitadores para comentários e como uma instruções de programa é separada da seguinte.

---

## 2.1 - CONJUNTO DE CARACTERES

Os programas JavaScript são escritos com o conjunto de caracteres Unicode. Unicode é um superconjunto de ASCII e Latin-1 e suporta praticamente todos os idiomas escritos usados hoje no planeta. Cada versão do ECMAScript exige a implementação de suporte Unicode em versões diferentes.

### 2.1.1 - Diferenciação de maiúscula e minúscula

JavaScript é uma linguagem que diferencia letras maiúsculas de minúsculas. Isso significa que palavras-chaves, nomes de função e outros identificadores da linguagem sempre devem ser digitados com a composição compatível de letras.

### 2.1.2 - Espaço em branco, quebra de linha e caracteres de controle de formato

JavaScript ignora os espaços que aparecem entre sinais em programas. De modo geral, JavaScript também ignora quebras de linha (mas consulte a Seção 2.5 para ver uma exceção). Como é possível usar espaços e novas linhas livremente em seus programas, você pode formatar e endentar os programas de um modo organizado e harmonioso, que torne o código fácil de ler e entender. Além do caractere de espaço normal ( \u0020 ), JavaScript também reconhece os seguintes caracteres como espaço em branco: tabulação ( \u0009 ), tabulação vertical ( \u000B ), avanço de página ( \u000C ), espaço não separável ( \u00A0 ), marca de ordem de byte ( \uFEFF ) e qualquer caractere unicode da categoria Zs.

## 2.1.3 - Sequências de escape Unicode

Para ajudar os programadores que utilizam essa tecnologia mais antiga, JavaScript define sequências especiais de seis caracteres ASCII para representar qualquer código Unicode de 16 bits. Esses escapes Unicode começam com os caracteres \u e são seguidos por exatamente quatro dígitos hexadecimais. Os escapes Unicode podem aparecer em strings literais, expressões regulares literais e em identificadores JavaScript (mas não em palavras-chave da linguagem).

## 2.1.4 - Normalização

O Unicode permite mais de uma maneira de codificar o mesmo caractere. A string “é”, por exemplo, pode ser codificada como o caractere Unicode \u00E9 ou como um caractere ASCII “e” normal, seguido da marca de combinação de acento agudo \u0301 . Essas duas codificações podem parecer exatamente a mesma quando exibidas por um editor de textos, mas têm diferentes codificações binárias e são consideradas diferentes pelo computador.

---

## 2.2 - COMENTÁRIOS

JavaScript aceita dois estilos de comentários. Qualquer texto entre `//` e o final de uma linha é tratado como comentário e é ignorado por JavaScript. Qualquer texto entre os caracteres `/*` e `*/` também é tratado como comentário; esses comentários podem abranger várias linhas, mas não podem ser aninhados.

---

## 2.3 - LITERAIS

Um literal é um valor de dados que aparece diretamente em um programa.

---

## 2.4 - IDENTIFICADORES E PALAVRAS RESERVADAS

Um identificador é simplesmente um nome. Em JavaScript, os identificadores são usados para dar nomes a variáveis e funções e para fornecer rótulos para certos laços no código JavaScript. Um identificador JavaScript deve começar com uma letra, um sublinhado (\_) ou um cifrão ($). Os caracteres subsequentes podem ser letras, dígitos, sublinhados ou cifrões.

### 2.4.1 - Palavras reservadas

JavaScript reserva vários identificadores como palavras-chave da própria linguagem. Você não pode usar essas palavras como identificadores em seus programas. JavaScript reserva vários identificadores como palavras-chave da própria linguagem. Você não pode usar essas palavras como identificadores em seus programas. Também possui palavras que são reservdas no modo restrito.

---

## 2.5 - PONTO E VÍRGULAS OPCIONAIS

JavaScript usa o ponto e vírgula (;) para separar instruções (consulte o Capítulo 5). Isso é importante para tornar claro o significado de seu código: sem um separador, o fim de uma instrução pode parecer ser o início da seguinte ou vice-versa.
Em JavaScript, você normalmente pode omitir o ponto e vírgula entre duas instruções, caso essas instruções sejam escritas em linhas separadas. Muitos programadores JavaScript (e o código deste livro) utilizam pontos e vírgulas para marcar explicitamente os finais de instruções, mesmo onde eles não são obrigatórios. Outro estilo é omitir os pontos e vírgulas quando possível, utilizando-os nas poucas situações que os exigem.
