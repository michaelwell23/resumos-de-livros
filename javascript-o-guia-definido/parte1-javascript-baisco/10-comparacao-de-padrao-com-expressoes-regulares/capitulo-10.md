# CAPÍTULO 10 - COMPARAÇÃO DE EXPRESSÕES COM EXPRESSÕES REGULARES

Uma expressão regular é um objeto que descreve um padrão de caracteres. A classe RegExp de JavaScript representa as expressões regulares, e tanto String quanto RegExp definem métodos que utilizam expressões regulares para executar funções poderosas de comparação de padrões e de localização e substituição em texto.

---

## 10.1 - DEFININDO EXPRESSÕES REGULARES

Em JavaScript, as expressões regulares são representadas por objetos RegExp. Os objetos RegExp podem ser criados com a construtora RegExp(), claro, mas são mais frequentemente criados com o uso de uma sintaxe literal especial. Assim como as strings literais são especificadas como caracteres entre aspas, as literais de expressão regular são especificadas como caracteres entre duas barras normais (/). As especificações de padrão de expressões regulares consistem em uma série de caracteres. A maioria dos caracteres, incluindo todos os alfanuméricos, simplesmente descreve os que devem coincidir literalmente. Assim, a expressão regular /java/ corresponde a qualquer string que contenha a substring “java”. Outros caracteres em expressões regulares não coincidem literalmente, mas têm significado especial.

### 10.1.1 - Caracteres literias

Todos os caracteres alfabéticos e dígitos coincidem com eles mesmos literalmente em expressões regulares. A sintaxe de expressão regular de JavaScript também aceita certos caracteres não alfabéticos, por meio de sequências de escape que começam com uma barra invertida (\). A baixo lista esses caracteres

|       Caractere        | Corresponde a                                                                                       |
| :--------------------: | :-------------------------------------------------------------------------------------------------- |
| Caractere alfanúmerico | Ele mesmo                                                                                           |
|           \0           | O caractere NUL (\u0000)                                                                            |
|           \t           | Tabulação (\u0009)                                                                                  |
|           \n           | Nova linha (\u000A)                                                                                 |
|           \v           | Tabulação vetical (\u000B)                                                                          |
|           \f           | Alimentação de página (\u000C)                                                                      |
|           \r           | Retorno de carro (\u000D)                                                                           |
|         \x nn          | O caractere latino especificado pelo número hexadecimal nn; por exemplo, \x0A é o mesmo que \n      |
|        \u xxxx         | O caractere Unicode especificado pelo número hexadecimal xxxx; por exemplo, \u0009 é o mesmo que \t |
|          \c X          | O caractere de controle ^ X; por exemplo, \cJ é equivalente ao caractere de nova linha \n           |

Vários caracteres de pontuação têm significados especiais em expressões regulares. São eles:

```regexp
^ $ . * + ? = ! : | \ / ( ) [ ] { }
```

Os significados desses caracteres vão ser discutidos nas seções a seguir. Alguns desses caracteres têm significado especial somente dentro de certos contextos de uma expressão regular e são tratados literalmente em outros contextos.

### 10.1.2 - Classes de caracteres

Os caracteres literais individuais podem ser combinados em classes de caracteres colocando-os dentro de colchetes. Uma classe de caracteres corresponde a qualquer caractere que esteja contido dentro dela. Assim, a expressão regular /[abc]/ corresponde a qualquer uma das letras a, b ou c. Também podem ser definidas classes de caracteres negadas; elas correspondem a qualquer caractere, exceto àqueles contidos nos colchetes. Uma classe de caracteres negada é especificada pela colocação de um acento circunflexo ( ^ ) como o primeiro caractere dentro do colchete esquerdo. A expressão regular /[^abc]/ corresponde a qualquer caractere que não seja a, b ou c. Classes de caracteres podem usar um hífen para indicar um intervalo de caracteres. Para corresponder a qualquer caractere minúsculo do alfabeto latino, use /[a-z]/ ; e para corresponder a qualquer letra ou dígito do alfabeto latino, use /[a-zA-Z0-9]/. Como certas classes de caracteres são utilizadas comumente, a sintaxe de expressão regular de JavaScript inclui caracteres especiais e sequências de escape para representar essas classes comuns. Por exemplo, \s corresponde ao caractere de espaço, ao caractere de tabulação e a qualquer outro caractere Unicode de espaço em branco; \S corresponde a qualquer caractere Unicode que não seja espaço em branco. A tabela aseguir lista esses caracteres e resume a sintaxe de classe de caracteres.

| Caractere | Corresponde a                                                                                     |
| :-------: | :------------------------------------------------------------------------------------------------ |
|   [...]   | Qualquer caractere entre os colchetes.                                                            |
|  [^...]   | Qualquer caractere que não esteja entre os colchetes.                                             |
|     .     | Qualquer caractere, exceto nova linha ou outro finalizador de linha Unicode.                      |
|    \w     | Qualquer caractere alfabético em ASCII. Equivalente a [a-zA-Z0-9_] .                              |
|    \W     | Qualquer caractere que não seja um caractere alfabético em ASCII. Equivalente a [^a-zA-Z0-9_] .   |
|    \s     | Qualquer caractere Unicode de espaço em branco.                                                   |
|    \S     | Qualquer caractere Unicode que não seja espaço em branco. Note que \w e \S não são a mesma coisa. |
|    \d     | Qualquer dígito ASCII. Equivalente a [0-9] .                                                      |
|    \D     | Qualquer caractere que não seja um dígito ASCII. Equivalente a [^0-9] .                           |
|   [\b]    | Um backspace literal (caso especial).                                                             |

### 10.1.3 - Repetição

Os caracteres que especificam repetição sempre seguem o padrão no qual estão sendo aplicados. Como certos tipos de repetição são muito utilizados, existem caracteres especiais para representar esses casos. Por exemplo, + corresponde a uma ou mais ocorrências do padrão anterior. A Tabela abaixo
resume a sintaxe da repetição.

| Caractere | Corresponde a                                                                                                      |
| :-------: | :----------------------------------------------------------------------------------------------------------------- |
| { n , m } | Corresponde ao item anterior pelo menos n vezes, mas não mais do que m vezes.                                      |
|  { n ,}   | Corresponde ao item anterior n ou mais vezes.                                                                      |
|   { n }   | Corresponde a exatamente n ocorrências do item anterior.                                                           |
|     ?     | Corresponde a zero ou a uma ocorrência do item anterior. Isto é, o item anterior é opcional. Equivalente a {0,1} . |
|     +     | Corresponde a uma ou mais ocorrências do item anterior. Equivalente a {1,}.                                        |
|    \*     | Corresponde a zero ou mais ocorrências do item anterior. Equivalente a {0,}.                                       |

#### 10.1.3.1 - Reperição não gananciosa

Os caracteres de repetição listados na Tabela 10-3 correspondem quantas vezes possível, enquanto ainda permitem que qualquer parte seguinte da expressão regular seja correspondida. Dizemos que essa repetição é “gananciosa”. Também é possível especificar que a repetição deve ocorrer de forma não gananciosa. Basta colocar um ponto de interrogação após o caractere (ou caracteres) de repetição: ??, +?, \*? ou mesmo {1,5}?. O uso de repetição não gananciosa nem sempre produz os resultados esperados. Considere o padrão /a+b/, que corresponde a uma ou mais letras a, seguidas da letra b. Quando aplicado na string “aaab”, ele corresponde à string inteira. Agora vamos usar a versão não gananciosa: /a+?b/ . Isso deve corresponder à letra b, precedida pelo menor número de letras a possível. Quando aplicada à mesma string “aaab”, você poderia esperar que correspondesse a apenas uma letra a e à última letra b. Na verdade, contudo, esse padrão corresponde à string inteira, exatamente como sua versão gananciosa. Isso acontece porque a comparação de padrões de expressões regulares é feita localizando a primeira posição na string na qual uma correspondência é possível.

### 10.1.4 - Alterando, agrupamento e referência

A gramática de expressões regulares inclui caracteres especiais para especificar alternativas, agrupar subexpressões e fazer referência a subexpressões anteriores. O caractere | separa alternativas. Por exemplo, /ab|cd|ef/ corresponde à string “ab” ou à string “cd” ou à string “ef ”. E /\d{3}|[a-z]{4}/ corresponde a três dígitos ou a quatro letras minúsculas.Note que as alternativas são consideradas da esquerda para a direita até que uma correspondência seja encontrada. Se a alternativa da esquerda corresponder, a da direita é ignorada, mesmo que produza uma correspondência “melhor”. Assim, quando o padrão /a|ab/ é aplicado à string “ab”, ele corresponde somente à primeira letra. Os parênteses têm vários propósitos nas expressões regulares. Um deles é agrupar itens separados de uma subexpressão para que possam ser tratados como uma unidade por | , \* , + , ? , etc. Outro objetivo dos parênteses nas expressões regulares é definir subpadrões dentro do padrão completo. Quando uma expressão regular coincide com uma string procurada, é possível extrair as partes da string que corresponderam a qualquer subpadrão em particular colocado nos parênteses. Um uso relacionado de subexpressões entre parênteses é permitir a referência a uma subexpressão anterior, posteriormente na mesma expressão regular. Isso é feito colocando-se um ou mais dígitos depois do caractere \. Uma referência a uma subexpressão anterior de uma expressão regular não se refere ao padrão usado para essa subexpressão, mas sim ao texto que correspondeu ao padrão. Assim, as referências podem
ser usadas para impor a restrição de separar as partes de uma string que contenham exatamente os mesmos caracteres. A Tabela a seguir resume os operadores de alternação, agrupamento e referência de expressões regulares.

| Caractere | Corresponde a                                                                                                                                                                                                                                                                                                                          |
| :-------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    \|     | Alternação. Corresponde à subexpressão da esquerda ou à subexpressão da direita.                                                                                                                                                                                                                                                       |
|   (...)   | Agrupamento. Agrupa itens em uma única unidade que pode ser usada com \*, +, ?, \|, etc. Lembra também dos caracteres que correspondem a esse grupo para uso com referências posteriores.                                                                                                                                              |
|  (?:...)  | Somente agrupamento. Agrupa itens em uma única unidade, mas não lembra dos caracteres que correspondem a esse grupo.                                                                                                                                                                                                                   |
|    \n     | Corresponde aos mesmos caracteres que coincidiram quando o grupo número n foi encontrado pela primeira vez. Grupos são subexpressões dentro de parênteses (possivelmente aninhados). Os números de grupo são atribuídos contando-se os parênteses esquerdos, da esquerda para a direita. Os grupos formados com (?: não são numerados. |

### 10.1.5 - Especificando a posição da correspondência

Conforme descrito anteriormente, muitos elementos de uma expressão regular correspondem a um único caractere em uma string. Por exemplo, \s corresponde a um único caractere de espaço em branco. Outros elementos de expressões regulares correspondem às posições entre os caracteres, em
vez dos caracteres em si. \b , por exemplo, corresponde a um limite de palavra – o limite entre um \w (caractere alfabético em ASCII) e um \W (caractere não alfabético), ou o limite entre um caractere de palavra ASCII e o início ou final de uma string 2 . Elementos como \b não especificam qualquer caractere a ser usado em uma string coincidente; o que eles especificam, no entanto, são as posições válidas em que uma correspondência pode ocorrer. Às vezes esses elementos são chamados de âncoras de expressão regular, pois ancoram o padrão em uma posição específica na string de busca. mentos de âncora mais comumente usados são ^ , que prende o padrão ao início da string, e $, que ancora o padrão no final da string.

| Caractere | Corresponde a                                                                                                                                                                                                                 |
| :-------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     ^     | Corresponde ao início da string e, em pesquisas de várias linhas, ao início de uma linha.                                                                                                                                     |
|     $     | Corresponde ao final da string e, em pesquisas de várias linhas, ao final de uma linha.                                                                                                                                       |
|    \b     | Corresponde a um limite de palavra. Isto é, corresponde à posição entre um caractere \w e um caractere \W ou entre um caractere \w e o início ou o final de uma string. (Note, entretanto, que [\b] corresponde a backspace.) |
|    \B     | Corresponde a uma posição que não é um limite de palavra.                                                                                                                                                                     |
|  (?= p)   | Uma declaração de leitura antecipada positiva. Exige que os caracteres seguintes correspondam ao padrão p , mas não inclui esses caracteres na correspondência.                                                               |
|  (?! p)   | Uma declaração de leitura antecipada negativa. Exige que os caracteres seguintes não correspondam ao padrão p                                                                                                                 |

### 10.1.6 - Flags

Há um último elemento da gramática de expressões regulares. Os flags de expressão regular especificam regras de comparação de padrões de alto nível. Ao contrário do restante da sintaxe de expressão regular, os flags são especificados fora dos caracteres / ; em vez de aparecerem dentro das barras normais, eles aparecem após a segunda barra. JavaScript suporta três flags. O flag i especifica que a comparação de padrões não deve diferenciar letras maiúsculas e minúsculas. O flag g especifica que a comparação de padrões deve ser global – isto é, todas as correspondências dentro da string pesquisada devem ser encontradas. O flag m faz comparação de padrões no modo de várias linhas. Nesse modo, se a string a ser pesquisada contém novas linhas, as âncoras ^ e $ correspondem ao início e ao final de uma linha, além de corresponderem ao início e ao final de uma string.

---

## 10.2 - MÉTODOS DE STRING PARA COMPARAÇÃO DE PADRÕES

As strings suportam quatro métodos que utilizam expressões regulares. O mais simples é search(). Esse método recebe uma expressão regular como argumento e retorna a posição do caractere do início da primeira substring coincidente ou −1 se não houver correspondência.Se o argumento de search() não é uma expressão regular, ele é primeiramente convertido em uma, por passá-lo para a construtora RegExp. search() não suporta pesquisas globais; ele ignora o flag g de seu argumento de expressão regular. O método replace() executa uma operação de busca e substituição. Ele recebe uma expressão regular como primeiro argumento e uma string para substituição como segundo argumento. O método procura correspondências com o padrão especificado na string na qual é chamado. Se a expressão regular tem o flag g ativo, o método replace() substitui todas as correspondências na string pela string para substituição; caso contrário, substitui apenas a primeira correspondência encontrada. Se o primeiro argumento de replace() é uma string e não uma expressão regular, o método procura essa string literalmente, em vez de convertê-la em uma expressão regular com a construtora RegExp(), como acontece com search(). O método match() é o mais geral dos métodos de expressões regulares de String. Ele recebe uma expressão regular como único argumento (ou converte seu argumento em uma expressão regular, passando-o para a construtora RegExp() ) e retorna um array contendo os resultados da correspondência. Se a expressão regular tem o flag g ativo, o método retorna um array com todas as correspondências que aparecem na string. O último dos métodos de expressões regulares do objeto String é split(). Esse método divide a string na qual é chamado em um array de substrings, usando o argumento como separador.

---

## 10.3 - O OBJETO REGEXP

A construtora RegExp() recebe um ou dois argumentos de string e cria um novo objeto RegExp. O primeiro argumento dessa construtora é uma string que contém o corpo da expressão regular – o texto que apareceria dentro de barras normais em uma expressão regular literal. Note que tanto as
strings literais como as expressões regulares usam o caractere \ para sequências de escape; portanto, ao se passar uma expressão regular para RegExp() como uma string literal, deve-se substituir cada caractere \ por \\ . O segundo argumento de RegExp() é opcional. Se for fornecido, ele indica os flags da expressão regular. Deve ser g , i , m ou uma combinação dessas letras.

### 10.3.1 - Propriedade de RegExp

Cada objeto RegExp tem cinco propriedades. A propriedade source é uma string somente de leitura que contém o texto da expressão regular. A propriedade global é um valor booleano somente de leitura que especifica se a expressão regular tem o flag g . A propriedade ignoreCase é um valor booleano somente de leitura que especifica se a expressão regular tem o flag i. A propriedade multiline é um valor booleano somente de leitura que especifica se a expressão regular tem o flag m. A última propriedade é lastIndex , um inteiro de leitura/gravação. Para padrões com o flag g , essa propriedade armazena a posição na string em que a próxima busca deve começar. Ela é usada pelos métodos exec() e test() , descritos a seguir.

### 10.3.2 - Métodos de RegExp

Os objetos RegExp definem dois métodos que executam operações de comparação de padrões; eles têm comportamento semelhante aos métodos de String descritos anteriormente. O principal método de comparação de padrões de RegExp é exec(). Ele é semelhante ao método match() de String,
descrito na Seção 10.2, exceto que é um método de RegExp que recebe uma string, em vez de um método de String que recebe uma expressão regular. O método exec() executa uma expressão regular na string especificada. Isto é, ele procura uma correspondência na string. Se não encontra, ele retor-
na null. No entanto, se encontra, ele retorna um array exatamente como o array retornado pelo método match() para pesquisas não globais.O outro método de RegExp é test(). test() é um método muito mais simples do que exec(). Ele recebe uma string e retorna true se a string contém uma correspondência para a expressão regular. Os métodos de String search(), replace() e match() não usam a propriedade lastIndex, como acontece com exec() e test() . Na verdade, os métodos de String simplesmente configuram lastIndex como 0. Se você utiliza exec() ou test() em um padrão que tem o flag g ativo e está pesquisando várias strings, deve localizar todas as correspondências em cada string para que lastIndex seja configurada como zero automaticamente (isso acontece quando a última busca falha) ou deve configurar a propriedade lastIndex como 0 explicitamente.
