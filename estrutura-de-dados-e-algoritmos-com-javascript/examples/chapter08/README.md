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
