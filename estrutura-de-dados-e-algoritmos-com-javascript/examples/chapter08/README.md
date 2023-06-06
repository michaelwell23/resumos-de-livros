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
