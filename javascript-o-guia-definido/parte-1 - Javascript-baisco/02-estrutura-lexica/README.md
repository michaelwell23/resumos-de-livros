# CAPÍTILO 02 - ESTRUTURA LÉXICA

Estrutura léxicas de uma linguagem de programação é o conjunto de regras elementares que especificam o modo de escrever programas nessa linguagem. É a sintaxe de nível mais baixo de uma linguagem; especifica detalhes de como são os nomes de variáveis, os caracteres delimitadores para comentários e como uma instrução do programa é separada da seguinte.

---

## 2.1 - CONJUNTO DE CARACTERES

Os programas JavaScript são escritos com o conjunto de caracteres Unicode. Unicode é um superconjunto de ASCII e Latin-1 e suporta todos os idiomas escritos usados hoje no planeta.

---

### 2.1.1 - Diferencianção dee maiúsculas e minuscúlas

JavaScript é uma linguagem que diferencia letras maúsculas de minúsculas. Isso significa que palavras-chaves, variáveis, nomes de função e outros _identificadores_ da linguagem sempre devem ser digitados com a composição compatível da letra.

### 2.1.2 - Espaço em branco, quebras de linha e caracteres de controle de formato

JavaScript ignora os espaços que aparecem entre sinais em programas. De modo geral, JavaScript também ignora quebras de linha (mas consulte a Seção 2.5 para ver uma exceção). Como é possível usar espaços e novas linhas livremente em seus programas, você pode formatar e endentar os programas de um modo organizado e harmonioso, que torne o código fácil de ler e entender.

### 2.1.3 - Sequêcias de escape Unicode

Alguns componentes de hardware e software de computador não conseguem exibir ou introduzir o conjunto completo de caracteres Unicode. Para ajudar os programadores que utilizam essa tecnologia mais antiga, JavaScript define sequências especiais de seis caracteres ASCII para representar qualquer código Unicode de 16 bits. Esses escapes Unicode começam com os caracteres \u e são seguidos por exatamente quatro dígitos hexadecimais (usando as letras A–F maiúsculas ou minúsculas).

### 2.1.4 - Normalização

O Unicode permite mais de uma maneira de codificar o mesmo caractere. O padrão Unicode define a codificação preferida para todos os caracteres e especifica um procedimento de normalização para converter texto em uma forma canônica conveniente para comparações. JavaScript presume que o código-fonte que está interpretando já foi normalizado e não tenta normalizar identificadores, strings nem expressões regulares.

---

## 2.2 - COMENTÁRIOS

JavaScript aceita dois estilos de comentários. Qualquer texto entre _//_ e o final de uma linha é tratado como comentário e é ignorado por JavaScript. Qualquer texto entre os caracteres _/\*_ e _\*/_ também é tratado como comentário; esses comentários podem abranger várias linhas, mas não podem ser aninhados.

---

## 2.3 LITERAIS

Um _literal_ é um valor de dados que aparece diretamente em um programa.

---

## 2.4 - IDENTIFICADORES E PALAVRAS RESERVADAS

Um identificador é simplesmente um nome. Em JavaScript, os identificadores são usados para dar nomes a variáveis e funções e para fornecer rótulos para certos laços no código JavaScript.

### 2.4.1 - Palavras Reservadas

JavaScript reserva vários identificadores como palavras-chave da própria linguagem e essas palavras não podem ser utilizadas como identificadores em seus programas.

---

## 2.5 - PONTO E VÍRGULA OPCIONAIS

Assim como muitas linguagens de programação, JavaScript usa o ponto e vírgula (;) para separar instruções (consulte o Capítulo 5). Isso é importante para tornar claro o significado de seu código: sem um separador, o fim de uma instrução pode parecer ser o início da seguinte ou vice-versa. Em JavaScript, você normalmente pode omitir o ponto e vírgula entre duas instruções, caso essas instruções sejam escritas em linhas separadas. (Você também pode omitir um ponto e vírgula no final de um programa ou se o próximo sinal do programa for uma chave de fechamento _}_.)
