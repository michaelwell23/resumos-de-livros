# CAPÍTULO 08: DICIONÁRIOS E HASHES

- Em um conjunto, estamos interessados no próprio valo como o elemento principal;
- Em dicíonário (ou mapas), armazenamaos valor em pares [chave, valor];
- O mesmo vale para os hashes, mas o modo como implementamos essas estruturas de dados é um pouco diferente, pois os dicionários podem armazenar apenas um valor único por chave;

---

## 8.1 - ESTRUTURA DE DADOS DE DICIONÁRIO

- Um dicionário é usado para armazenar pares [chave, valor];
- A chave pode ser utilizada para encontrar elementos em particular;
- Um dicionário é muito parecido com um conjunto; um conjunto armazena uma coleção de elementos [chave, chave], enquanto um dicionário armazena uma coleção de elementos [chave, valor];
- Um dicionário também é conhecido como `mapa`, `tabela de símbolos` e `array associativo`;
- Em ciência da computação, os diciomários são usados frequentemente para armazenar endereços de refereência de objetos;

---

## 8.2 - CRIANDO A CLASSE DICTIONARY

- A classe que implementaremos é baseada na implementação de `Map` da ECMAScript 2015. Podemos notar que ela é muito semelhante à classe `Set` (mas, em vez de armazenar um par [chave, chave], armazenaremos um par [chave, valor]);
- De modo semelhante à classe `Set`, também armazenaremos os elementos da classe `Dictionary` em uma instância de `Object`, em vez de usar um array;
- O JavaScript nos permite acessar a propriedade de um objeto usando colchetes ( [] ), passando o nome da propriedade como a “ posição ”. É por isso que ele é chamado de array associativo;
- Em um dicionário, o ideal seria armazenar chaves do tipo string e qualquer tipo de value;
- Como JavaScript não é uma linguagem fortemente tipada, não podemos garantir que `key` será uma string. Por esse motivo, precisamos transformar qualquer que seja o objeto passado como `key` em uma string para facilitar a busca e a obtenção dos valores da classe `Dictionary`;
- Precisamos de uma função para transformar `key` em uma string;
- A seguir, devemos declarar os métodos disponíveis em um mapa/dicionário; são eles:
  - `set(key, value)`: esse método adiciona um novo elemento ao dicionário. Se `key` já existir, seu valor será sobrescrito com o novo valor.
  - `remove(key)`: esse método remove `value` do dicionário usando `key` como o parâmetro de busca.
  - `hasKey(key)`: esse método devolve true se `key` estiver presente no dicionário, e false caso contrário.
  - `get(key)`: esse método devolve um `value` específico do dicionário usando `key` como o parâmetro de busca.
  - `clear()`: esse método remove todos os valores do dicionário.
  - `size()`: esse método devolve a quantidade de valores contida no dicionário. É semelhante à propriedade length da classe Array.
  - `isEmpty()`: esse método devolve true se size for igual a zero, e false caso contrário.
  - `keys()`: esse método devolve um array com todas as chaves contidas no dicionário.
  - `values()`: esse método devolve um array com todos os valores contidos no dicionário.
  - `keyValues()`: esse método devolve um array com todos os pares de valores [chave, valor] contidos no dicionário.
  - `forEach(callBackFn)`: esse método itera pelos valores (`value`) do dicionário. A função callbackFn tem dois parâmetros: `key` e `value`. Esse método também pode ser interrompido caso a função de callback devolva false (é semelhante ao método every da classe Array).

---

## 8.3 - VERIFICANDO SE UMA CHAVE ESTÁ PRESENTE NO DICIONÁRIO

- O primeiro método que precisa ser implementado é o método `hasKey(key)`, pois ele será usado em outros métodos, como `set`e `remove`;
- O JavaScript nos permite usar somente strings como key/propriedade dos objetos;
- Caso tenhamos um objeto complexo passado como key, será necessário transformá-lo em uma string;

---

## 8.4 - DEFININDO UMA CHAVE E UM VALOR NO DICIONÁRIO, E A CLASSE VALUEPAIR

- O método `Set` recebe `key` e `value` como parâmetros. Se `key` e `value` não forem _undefined_ ou _null_, é gerado uma string que representa `key` e
  cria um par de valores, atribuindo-o à propriedade formada pela string da chave (`tableKey`) no objeto table;
- Se `key` e `value` forem válidos, `true` é devolvido para informar que o dicionário foi capaz de armazená-los; caso contrário, devolvemos `false`.- Esse método pode ser usado para adicionar um novo valor ou atualizar um valor existente;
- Como estamos transformando `key` em uma string para armazenar `value` no dicionário, armazenaremos também a `key` original para informação. Por esse motivo, em vez de simplesmente armazenar `value` no dicionário, armazenaremos os dois valores: a `key` original e `value`;

---

## 8.5 - REMOVENDO UM VALOR DO DICIONÁRIO

- O método `remove` é muito semelhante ao remove da classe `Set`; a única diferença é que buscaremos inicialmente a key (em vez de value);
- Em seguida, usamos o operador delete de JavaScript para remover a key (transformada em uma string) do objeto table. Caso possamos remover
  value do dicionário, também devolvemos true; caso contrário, devolveremos false.

---

## 8.6 - OBTENDO UM VALOR DO DICIONÁRIO

- O método `get` obtém o objeto armazenado na propriedade `key` specificada. Se o objeto com o par de valores existir, é devolvido o seu `value`, caso contrário é devolvido `undefined`;
- Uma outra maneira de implementar esse mesmo método seria verficar se um determinado `value` existe. Se o resultado for positivo, o objeto `table` é acessado e devolvido o valor desejado;
- Mas esa segunda abordagem, estáriamos obtendo a string para `key` e acessando o objeto `table` duas vezes; a primeira no método `hasKey` e a segunda, dentro da intrução `if`. É um pequeno detalhe, mas a primeira abordagem tem um custo menor de processamento;

---

## 8.7 - MÉTODOS KEYS, VALUES E VALUEPAIRS

- O método `valuePairs` devolve um array com todos os objetos `ValuesPair` presentes no dicionário;
- O código é bem simples, chamamos o método embutido `values` da classe Object d JavaScript;
- Precisamos iterar por todoas aas propriedades do objeto `table`, para garantir que `key` existe, usando a função `hasKey` para essa verificação e, então, adicionamos o `ValuePair` do objeto `table` no resultante;
- Nesse método, como já estamos acessando a propredade do objeto `table` diretamente, não precisamos tranformar em uma string com a função `toStrFn`;
- O próximo método que criaremos é o método `Keys`, o qual devolve todas as chaves (as originais) usadas para identificar um valor na classe
  `Dictionary`;
- Chamamos o método `keyValues` que criamos, o qual devolve um array de instâncias de `ValuePair`. Então iteramos por elas. Como estamos interessados somente na propriedade `key` de `ValuePair`, devolvemos apenas a sua `key`
- De modo semelhante ao método `keys`, temos também o método values. Esse método devolve um array com todos os valores armazenados no dicionário. O seu código é muito parecido com o código do método `keys`; contudo, em vez de devolver a propriedade `key` da classe `ValuePair`, devolvemos a propriedade value;

---

## 8.8 - ITERANDO PELOS VALUESPAIRS DO DICIONÁRIO COM FOREACH

- Implementaremos o método forEach para a classe Dictionary;
- Inicialmente obtemos o array de `ValuePairs` do dicionário;
- Em seguida, iteramos por cada `ValuePair` e chamamos a função `callbackFn` passada como parâmetro para o método forEach, além de armazenar o seu resultado;
- Caso a função de callback devolva false, interrompemos a execução do método forEach, saindo do laço for que faz a iteração por `valuePairs`;

---

## 8.9 - MÉTODO CLEAR, SIZE, ISEMPTY E TO STRING

- O método `size` devolve quantos valores estão armazenados no dicionário. Podemos obter todas as keys do objeto table usando o método `Object.keys`;
- Para verificar se o dicionário está vazio, podemos obter o seu tamanho (size) e conferir se é igual a zero. Se size for zero, é sinal de que o dicionário está vazio. Essa lógica é implementada no método `isEmpty`;
- Para limpar o dicionário, basta atribuir uma nova instância de objeto a `table`;
- Por fim, criaremos também o método toString;
- No método toString, se o dicionário estiver vazio, devolvemos uma string vazia. Caso contrário, adicionamos o seu primeiro ValuePair na string resultante chamando o método toString de ValuePair. Então, se houver algum value no array, ele também será adicionado à stringresultante; essa string será devolvida no final do método;

---

## 8.10 - USANDO A CLASSE DICTIONARY

- Para usar a classe Dictionary, inicialmente devemos criar uma instância e, em seguida, adicionaremos três emails a ela;
- Como removemos um value, a instância dictionary agora contém somente dois tipos de value. A linha em destaque exemplifica o modocomo o objeto table está estruturado internamente;

---

## 8.11 - TABELA HASH

- Nesta seção, conheceremos a classe HashTable, também conhecida como `HashMap`: uma implementação com hash da classe Dictionary;
- O hashing consiste em encontrar um valor em uma estrutura de dados o mais rápido possível;
- Quando usamos uma função de hash, já sabemos em que posição o valor se encontra, portanto, podemos simplesmente o acessar. Uma função de hash é uma função que, dada uma key, devolve o endereço em que o valor está na tabela;
- Em ciência da computação, a tabela hash tem vários casos de uso. Ela pode ser usada como arrays associativos, pois é uma implementação do dicionário, e também pode ser usada para indexar um banco de dados;
- Outro uso muito comum é a utilização de tabelas hash para representar objetos. A linguagem JavaScript usa uma tabela hash internamente para representar cada objeto;
- . A função de hash que será usada é a função mais comum existente, chamada de função de `hash lose-lose`, emque simplesmente somamos os valores ASCII de cada caractere da chave;

---

## 8.12 - CRIANDO UMA CLASSE HASHTABLE

- Usaremos também um array associativo (objeto) para representar a nossa estrutura de dados;
- Depois, estruturamos a classe;
- Em seguida, devemos acrescentar alguns métodos:
  - put(key,value): esse método adiciona um novo item à tabela hash (ou
    pode atualizá-la também);
  - remove(key): esse método remove o value da tabela hash usando key.
  - get(key): esse método devolve um value específico encontrado com
    key;

---

## 8.13 - CRIANDO UMA FUNÇÃO DE HASH

- O primeiro método que implementaremos antes desses três métodos é`hashCode`;
- Esse métodp simplemente chama o método `loseloseHashCode passando` a `key` como parâmetro;
- No método `loseloseHashCode`, inicialmente verificamos se key é um number;
- Se for, ele será apenas devolvido com return. Na sequência, geramos um número baseado na soma do valor de cada caractere ASCII que compõe a key.
- Assim, em primeiro lugar, temos de transformar key em uma string caso ela seja um objeto, e não uma string;
- Iniciamos a variável hash que armazenará a soma. Então iteramos pelos caracteres de key e somamos o valor ASCII do caractere correspondente na tabela ASCII na variável hash;
- Para isso, podemos usar o método charCodeAt da classe String de JavaScript. Por fim, devolvemos o valor de hash. Para trabalhar com números menores, devemos usar o resto da divisão (%) do número de hash utilizando um número arbitrário – isso evitará correr o risco de trabalhar com
  números grandes, que não caibam em uma variável numérica;

---

## 8.14 - INSERINDO UMA CHAVE E UM VALOR NA TABELA HASH

- Agora que temos a nossa função `hashCode`, podemos implementar o método put;
- Em primeiro lugar, verificamos se key e value são válidos; caso não sejam, devolvemos false para informar que o valor não foi adicionado
  (nem atualizado). Para o parâmetro key especificado, devemos encontrar uma posição na tabela usando a função `hashCode` que criamos;
- Então, tudo que temos a fazer é criar uma instância de ValuePair com key e value;
- De modo semelhante à classe `Dictionary`, armazenaremos também a key original para informação;

---

## 8.15 - OBTENDO UM VALOR DA TABELA HASH

- Obter um value da instância de HashTable também é simples. Implementaremos o método get para isso;
- Em primeiro lugar, obtemos a posição do parâmetro key especificado, usando a função `hashCode` que criamos. Essa função devolverá a posição
  de value, e tudo que temos de fazer é acessar essa posição no array table e devolver o seu value;

---

## 8.16 - REMOVENDO UM VALOR DA TABELA HASH

- O último método que implementaremos para HashTable é o método remove;
- Para remover um value da HashTable, inicialmente devemos saber qual posição devemos acessar, portanto, obtemos o hash usando a função
  `hashCode`;
- Lemos o `valuePair` armazenado na posição hash e, caso ele não seja null nem undefined, nós o removemos usando o operador delete de JavaScript;
- Também devolveremos true se a remoção for bem-sucedida, e false caso contrário;

---

## 8.17 - USANDO A CLASSE HASHTABLE

- Podemos testar a classe `HashTable` usando alguns exemplos;
- Se inspecionarmos o conteúdo da tabale hash depois de executar o código, veremos três elementos como resultado;
- Testando o método `get`, Gandalf é uma `key` presente na HashTable, o método `get` devolverá o seu value no primeiro teste. Pelo fato de Loiane não ser uma key existente, se tentarmos acessar a sua posição no array;
- Depois tentamos remover `Gandalf` da `HashTable`. O método `hash.get('Gandalf')` devolverá undefined como saída no console, pois `Gandalf` não está mais presente na tabela;

---

## 8.18 - TABELA HASH VERSUS CONJUNTO HASH

- Uma tabela hash é o mesmo que um mapa hash;
- Em algumas linguagens de programação, também temos a implementação de conjunto hash (hash set). A estrutura de dados de um conjunto hash é composta de um conjunto;
- Podemos reutilizar todo o código que implementamos neste capítulo em um conjunto hash; a diferença é que, em vez de adicionar um par chave-valor, apenas o valorserá inserido, e não a chave;

---

## 8.19 - TRATANDO COLISÕES NAS TABLEAS HASH

- Às vezes, chaves diferentes podem ter o mesmo valor de hash. Chamaremos a isso de `colisão`, pois tentaremos atribuir diferentes pares chave-valor à mesma posição na instância de `HashTable`;
- A ideia de usar uma estrutura de dados para armazenar todos esses valores obviamente não é perdê-los, mas preservá-los de alguma forma. Por esse motivo, devemos lidar com essa situação quando ela ocorrer. Há algumas técnicas para tratar colisões: encadeamento separado (separate chaining),sondagem linear (linear probing) e hashing duplo (double hashing).

---

## 8.20 - ENCADEAMENTO SEPARADO

- A técnica de encadeamento separado (separate chaining) consiste em criar uma lista ligada para cada posição da tabela e armazenar aí os elementos.
- É a técnica mais simples que há para tratar colisões; no entanto, ela exige memória extra, além daquela ocupada pela instância de HashTable.
- No encadeamento separado e na sondagem linear, será necessário substituir três métodos: put, get e remove. Esses três métodos serão diferentes para cada técnica distinta;

---

## 8.21 - MÉTODO PUT

- Vamos implementar o primeiro método – o método `put`;
- Nesse método, verificamos se a posição na qual estamos tentando adicionar o valor já contém outros valores;
- Se essa for a primeira vez que estamos adicionando um elemento nessa posição, vamos inicializá-la com uma instância da classe LinkedList;
- Então adicionamos a instância de ValuePair à instância de LinkedList usando o método push;

---

## 8.22 - MÉTODO GET

- A seguir, implementaremos o método `get` para obter um valor, dada uma chave;
- A primeira verificação que devemos fazer é conferir se há algum value na posição desejada;
- Para isso, acessamos a linkedList na position do hash e verificamos se há uma instância de linkedList ou se ela está vazia;
- Se não houver nenhum value, devolvemos undefined para informar que o valor não foi encontrado na instância de HashTable ({8}). Se houver
  um valor em position, saberemos que a instância desse objeto é uma instância de LinkedList;
- Agora, tudo que temos a fazer é procurar o element que queremos encontrar fazendo uma iteração pela lista;
- Para isso, é necessário obter a referência à cabeça (head) da lista, que é o primeiro element da linkedList, e, em seguida, podemos iterar por ela até encontrarmos o final da lista;
- Para acessar a propriedade key do Node da LinkedList, podemos usar current.element.key e compará-lo para ver se é a key que estamos procurando. Se for o mesmo atributo key, devemos devolver o valor de Node; se não for, continuaremos iterando pela lista, acessando o próximo element. Essa lógica nos permite procurar todos os atributos key em qualquer posição da LinkedList.
- Outra abordagem para esse algoritmo é esta: em vez de fazer a busca de key no método get, poderíamos instanciar a LinkedList no método put, passando um equalsFn personalizado para o construtor de LinkedList, o qual comparará somente a propriedade key do elemento;

---

## 8.23 - MÉTODO REMOVE

- Remover um valor da instância de HashTableSeparateChaining é umpouco diferente;
- No método remove, fazemos o mesmo que fizemos no método get para encontrar o element que estamos procurando;
- Ao iterar pela instância de LinkedList, se o element de current na lista for a chave que estamos procurando, usaremos o método remove para removê-lo da LinkedList;
- Então, faremos uma validação adicional: se a lista estiver vazia, removeremos position de table usando o operador delete, de modo que possamos pular essa position sempre que procurarmos um element;
- Por fim, devolveremos true para informar que o elemento foi removido, ou devolveremos false no final para informar que o element não estava presente em HashTableSeparateChaining;
- Se não for o elemento que estávamos procurando, faremos uma iteração para o próximo elemento da LinkedList, como foi feito no método get;

---

## 8.24 - SONDAGEM LINEAR

- Outra técnica de resolução de colisão é a sondagem linear;
- É chamada de linear porque a colisão é tratada de modo que os valores serão armazenados diretamente na tabela, e não em uma estrutura de
  dados separada;
- Ao tentar adicionar um novo elemento, se a position do hash já estiver ocupada, tentaremos usar position + 1. Se position + 1 estiver
  ocupada, tentaremos position + 2, e assim sucessivamente, até que uma posição livre seja encontrada na tabela hash;
- Quando removemos uma chave-valor da tabela hash, não será suficiente simplesmente remover o elemento da position, conforme implementamos
  nas estruturas de dados anteriores neste capítulo. Se somente removermos o elemento, isso poderá fazer com que uma posição vazia seja encontradaquando buscamos outro elemento com o mesmo hash (position), resultando em um bug no algoritmo;
- Há duas opções na técnica de sondagem linear:
  - A primeira é a abordagem da remoção soft (soft delete). Usamos um valor especial (flag) para sinalizar que a chave-valor foi apagada (remoção preguiçosa [lazy] ou soft), em vez de realmente apagar o elemento.
  - A segunda abordagem exige verificar se é necessário mover um ou mais elementos uma position para trás. Ao procurar uma chave, essa abordagem evita encontrar uma posição vazia, mas, se for necessário mover elementos, significa que precisaremos deslocar as chaves-valores na tabela hash;

---

## 8.25 - MÉTODO PUT

- Vamos prosseguir e implementar os três métodos que devemos sobrescrever. O primeiro será o método put;
- Como sempre, começaremos obtendo a position do hash gerada pelo método hashCode. Em seguida, vamos conferir se a position contém um
  elemento;
- Se não contiver (esse é o cenário mais simples), adicionaremos o elemento ( – que é uma instância da classe ValuePair) nesse local.
  Se a position já estiver ocupada, devemos encontrar a próxima position livre (position é undefined ou null); desse modo, criamos uma variável
  index e lhe atribuímos position + 1;
- Em seguida, verificamos se a position está ocupada e, em caso afirmativo, incrementamos index, até encontrarmos uma position que não esteja ocupada. Depois do laço while, o index apontará para uma posição livre. Então tudo que precisaremos fazer é atribuir o valor desejado a essa position;

---

## 8.26 - MÉTODO GET

- Agora que adicionamos os nossos elementos, vamos implementar a função get para que possamos obter os seus valores;
- Para obter o valor de uma chave, inicialmente devemos verificar se a key existe. Se não existir, é sinal de que o valor não está na tabela hash, portanto podemos devolver undefined;
- Se existir, devemos verificar se o valor que estamos procurando é aquele que está na position original do hash. Se for, basta devolver o seu valor;
- Caso contrário, iteramos pelos elementos de HashTableLinearProbing, começando pela próxima position do hash. Continuaremos procurando nas próximas posições da instância de HashTableLinearProbing até encontrar uma posição que contenha o elemento que estamos procurando, ou até que uma posição vazia seja localizada;
- Ao sair do laço while, verificamos se a key do elemento coincide com a key que estamos procurando; em caso afirmativo, devolveremos o seu value. Se, depois de iterar pela table, a posição index for undefined ou null, é sinal de que a chave não existe, e devolveremos undefined;

---

## 8.27 - MÉTODO REMOVE

- O método remove é muito parecido com o método get;
- No método get, quando encontramos a key que estamos procurando, devolvemos o seu valor. No método remove, apagamos o elemento da tabela hash com delete. Podemos encontrar o elemento diretamente na position original do hash ou em uma posição diferente caso tenha havido um tratamento de colisão;

---

## 8.28 - CRIANDO FUNÇÕES MELHORES DE HASH

- A função de hash lose-lose que implementamos não é uma boa função de hash, conforme podemos concluir;
- Uma boa função de hash apresenta determinados fatores: o tempo para inserir e acessar um elemento (desempenho), além de uma baixa probabilidade de colisões;
- Depois de transformar a chave em uma string , o método djb2HashCode inicializa a variável hash com um número primo; em seguida, iteramos pelos caracteres da string que representa a key, multiplicamos o valor do hash por 33 (usado como um número mágico) e somamos com o valor ASCII do caractere;
- Por fim, usamos o resto da divisão do total por outro número primo aleatório, maior que o tamanho que achamos que a instância de HashTable poderá ter;

---

## 8.29 - CLASSE MAP DA ES2015

- A ECMAScript 2015 introduziu uma classe Map como parte da API de JavaScript. Desenvolvemos a nossa classe Dictionary com base na classe Map da ES2015;
- A diferença entre a nossa classe Dictionary e a classe Map da ES2015 está no fato de os métodos values e keys devolverem um Iterator (que
  conhecemos no Capítulo 3, Arrays) em vez de devolver o array com os valores ou as chaves;
- Outra diferença é que desenvolvemos um método size para devolver o número de valores armazenados no mapa. A classe Map da ES2015 tem uma propriedade chamada size;

---

## 8.30 - CLASSE WEAKMAP E WEAKSET DA ES2015

- Junto com as duas novas estruturas de dados Set e Map, a ES2015 introduziu também uma versão dessas classes com tipos fracos: WeakMap e
  WeakSet. Basicamente, a única diferença entre as classes Map ou Set e suas versões fracas são:
  - As classes WeakSet ou WeakMap não têm os métodos entries, keys e
    values.
  - É possível usar somente objetos como chaves.
- O motivo para a criação e o uso dessas duas classes tem a ver comdesempenho. Como WeakSet e WeakMap têm tipos fracos (usam objetos como chave), não há nenhuma referência forte para as chaves. Esse comportamento permite que o coletor de lixo de JavaScript limpe uma entrada completa do mapa ou do conjunto.
- Outra vantagem das versões fracas é que só poderemos obter um valor se tivermos a sua chave. Como essas classes não têm os métodos iteradores(entries, keys e values), não há maneiras de obter um valor, a menos que você saiba qual é a chave;

---

## RESUMO

Neste capítulo, conhecemos os dicionários e os métodos para adicionar, remover e acessar os elementos, entre outros. Também vimos a diferença
entre um dicionário e um conjunto.

Descrevemos o hashing, discutimos como criar uma estrutura de dados de tabela hash (ou mapa hash), vimos como adicionar, remover e acessar elementos, e como criar funções de hash. Aprendemos a lidar com colisõesem uma tabela hash usando duas técnicas diferentes.

Também discutimos o uso da classe Map da ES2105, assim como das classes WeakMap e WeakSet. No próximo capítulo, veremos a técnica da recursão.
