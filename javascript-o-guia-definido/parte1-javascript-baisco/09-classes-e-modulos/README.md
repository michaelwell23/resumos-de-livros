# CAPÍTULO 09 - CLASSES E MÓDULOS

Em JavaScript, as classes se baseiam no mecanismo de herança baseando em protótipos da linguagem. Se dois objetos herdam propriedades do mesmo objeto protótipo, dizemos que eles são instências da mesma classe. Se dois objetos herdam o mesmo protótipo, normalmente isso significa que eles foram criados e inicializados pela mesma função construtora. Uma das características importantes das classes de JavaScript é que elas podem ser estendidas dinamicamente. Definir classes é uma maneira de escrever código reutilizável modular.

---

## 9.1 - CLASES E PROTÓTIPOS

Em JavaScript, uma classe é um conjunto de objetos que herdam proprieddes do mesmo objeto protótipo. Portanto, o objeto é o principal recurso de uma classe. Normalmente, as instâncias de uma classe exigem mais inicialização e é comum difinir uma função para criar e inicializar o novo objeto.

---

## 9.2 - CLASSES E CONSTRUTORAS

Uma construtora é uma função destinada à inicialização de objetos recém-criados. As construtoras são chamadas usando-se a palavra-chave `new`. As chamadas de contrutora que utilizam `new` criam o novo objeto automaticamente de modo que a construtora em si só precisa inicializar o estado desse novo objeto. A característica fundamental das chamadas de construtora é que a propriedade prototyoe da construtora é usada como protótipo do novo objeto. Isso significa que todos os objetos criados com a mesma contrutora herdam do mesmo objeto e, portanto, são membros da mesma classe.

### 9.2.1 - Contrutoras e identidade de classe

O objeto protótipo é fundamental para identidade de uma classe: dois objetos são instâncias da mesma classe se, e somente se, herdam do mesmo objeto protótipo. A função construtora que inicializa o estado de um novo objeto é fundamental: duas funções construtoras podem ter propriedades prototype que apontam para o mesmo onjeto protótipo. Então, as duas contrutoras podem ser usdas para criar instâncias da mesma classe. Mesmo a construtora não sendo tão fundamentias quanto os protótipos, a construtora serve como face pública de uma classe. Assim, o nome da função construtora normalmente é adotado como nome da classe. As construtoras são usadas com o operador instanceof ao se testar a participação de objeto como membros de uma classe. O operador instanceof não verifica se r foi inicializada pela construtora Range . Mas verifica se ela herda de Range.prototype.

### 9.2.2 - A propriedade constructor

Qualquer função de JavaScript pode ser usada como construtora e as chamadas de construtora precisam de uma propriedade prototype. Portanto, toda função de JavaScript( menos as funções de retorno do método Function.bind()) tem automaticamente uma propriedade prototype.O valor dessa propriedade é um objeto que tem uma única propriedade constructor não enumerável. O valor da propriedade constructor é o objeto função. A existência desse objeto protótipo predefinido com sua propriedade constructor significa que os objetos normalmente herdam uma propriedade constructor que se refere às suas construtoras.

---

## 9.3 - CLASSES ESTILO JAVA EM JAVASCRIPT

Um modo pelo qual JavaScript difere da linguagem Java é que suas funções são valores e não há distinção rígida entre métodos e campos. Se o valor de uma propriedade é uma função, essa propriedade define um método; caso contrário, é apenas uma propriedade ou “campo” normal. Apesar dessa diferença, podemos simular em JavaScript cada uma das quatro categorias de membros de classe da linguagem Java. Em JavaScript existem três objetos diferentes envolvidos em qualquer definição de classe e as propriedades desses três objetos atuam como diferentes tipos de membros de classe. Podemos reduzir o processo de definição de classe em JavaScript a um algoritmo de três etapas. Primeiramente, escreva uma função construtora que configure propriedades de instância em novos objetos. Segundo, defina métodos de instância no objeto prototype da construtora. Terceiro, definacampos e propriedades de classe na construtora em si.

---

## 9.4 - AUMENTANDO CLASSES

O mecanismo de herança baseado em protótipos de JavaScript é dinâmico: um objeto herda propriedades de seu protótipo, mesmo que as propriedades do protótipo mudem depois de criado o objeto. Isso significa que podemos aumentar as classes de JavaScript simplesmente adicionando novos métodos em seus objetos protótipos.

---

## 9.5 - CLASSES E TIPOS

As subseções a seguir explicam três técnicas para determinar a classe de um objeto arbitrário: o operador instanceof , a propriedade constructor e o nome da função construtora. Entretanto, nenhuma dessas técnicas é inteiramente satisfatória. Assim, a seção termina com uma discussão sobre tipagem do pato, uma filosofia de programação que se concentra no que um objeto pode fazer (quais métodos ele tem) e não em qual é sua classe.

### 9.5.1 - O operador instaceof

O operando do lado esquerdo deve ser o objeto cuja classe está sendo testada e o operando do lado direito deve ser uma função construtora que dá nome a uma classe. A expressão o instanceof c é avaliada como true se o herda de c.prototype. A herança não precisa ser direta. Se o herda de um objeto que herda de um objeto que herda de c.prototype , a expressão ainda vai ser avaliada como true. As construtoras atuam como identidade pública
das classes, mas os protótipos são a identidade fundamental. Apesar do uso de uma função construtora com instanceof , esse operador na verdade está testando de quem um objeto herda e não a construtora que foi utilizada para criá-lo. Se quiser testar o encadeamento de protótipos de um objeto para um objeto protótipo específico e não quiser a função construtora como intermediária, você pode usar o método isPrototypeOf(). Uma deficiência do operador instanceof e do método isPrototypeOf() é que eles não nos permitem consultar a classe de um objeto, mas somente testar um objeto em relação a uma classe que especificamos.

### 9.5.2 - A propriedade constructor

Outra maneira de identificar a classe de um objeto é simplesmente usar a propriedade constructor. Essa técnica de usar a propriedade constructor está sujeita ao mesmo problema de instanceof. Nem sempre vai funcionar quando houver vários contextos de execução (como vários quadros
na janela de um navegador) que compartilham valores. Nessa situação, cada quadro tem seu próprio conjunto de funções construtoras: a construtora Array de um quadro não é a mesma construtora Array de outro. Além disso JavaScript não exige que todo objeto tenha uma propriedade constructor: essa é uma converção baseada no objeto protótipo padrão criado para cada função, mas é fácil omitir, acidental ou intencionalmente, a propriedade constructor no protótipo.

### 9.5.3 - O nome da construtora

O principal problema no uso do operador instanceof ou da propriedade constructor para determinar a classe de um objeto ocorre quando existem vários contexto de execução e, portanto, várias cópias das funções construtoras. Uma possível solução é usar o nome da função construtora como identificado da classe, em vez da própria função. A construtora Array de uma janela não é igual à construtora Array de outra janela, mas seus nomes são iguais. ALgumas implementações em JavaScript tornam o nome de uma função disponível por meio de uma propriedade não padronizada name do objeto função. Essa técnica de uso do nome da construtora para identificar a classe de um objeto tem o mesmo problema de usar a propriedade constructor : nem todos os objetos têm uma propriedade constructor.

### 9.5.4 - Tipagem do pato

Nenhuma das técnicas descritas anteriormente para determinar a classe de um objeto está livre de problemas, pelo menos em JavaScript do lado do cliente. Uma alternativa é evitar o problema: em vez de perguntar “qual é a classe desse objeto?”, perguntamos “o que esse objeto pode fazer?” Essa estratégia de programação é comum em linguagens como Python e Ruby e se chama tipagem do pato, por causa desta frase. Para programadores JavaScript, essa definição pode ser entendida como “se um objeto caminha, nada e grasna como um Pato, então podemos tratá-lo como um Pato, mesmo que não herde do objeto protótipo da classe Pato”. O método foreach() de nossa classe Range também não testa explicitamente o tipo dos pontos extremos do intervalo, mas o uso de Math.ceil() e do operador ++ significa que ela só funciona com pontos extremos numéricos. Uma estratégia para a tipagem do pato é laissez-faire: simplesmente supomos que nossos objetos de entrada implementam os métodos necessários e não fazemos verificação alguma. Se a suposição for inválida, vai ocorrer um erro quando nosso código tentar chamar um método inexistente. Outra estratégia faz a verificação dos objetos de entrada. Entretanto, em vez de verificar suas classes, ela verifica se eles implementam métodos com os nomes apropriados. Isso nos permite rejeitar más entradas mais cedo e pode resultar em mensagens de erro mais informativas. Existem duas coisas importantes a serem lembradas a respeito dessa função quacks(). Primeiramente, ela só testa se um objeto tem uma ou mais propriedades com valor de função com nomes especificados. A existência dessas propriedades não nos informa nada sobre o que essas funções fazem ou sobre quantos e quais tipos de argumentos elas esperam. Essa, no entanto, é a natureza da tipagem do pato.

---

## 9.6 - TÉCNICAS ORIENTADAS A OBJETO EM JAVASCRIPT

Nesta seção, trocamos de marcha e demonstramos várias técnicas práticas (embora não fundamentais) para programar com classes em JavaScript. Começamos com dois exemplos de classes não triviais que por si sós são interessantes, mas que também servem como pontos de partida para as discussões que se seguem.

### 9.6.1 - Exemplo: uma classe Set

Os objetos em JavaScript são basicamente conjuntos de nomes de propriedade, com valores associados a cada nome. Portanto, é simples usar um objeto com um conjunto de strings. O Exemplo implementa uma classe Set mais geral em JavaScript. Ela funciona mapeando qualquer valor de JavaScript em uma string exclusiva e, então, usando essa string como um nome de propriedade. Os objetos e as funções não têm uma representação de string concisa e exclusiva, de modo que a classe Set precisa definir uma propriedade identificadora em qualquer objeto ou função armazenada no conjunto.

### 9.6.2 - Exemplo: tipos enumeração

Um tipo enumeração é um tipo com um conjunto finito de valores que são listados (ou “enumerados”) quando o tipo é definido. O Exemplo consiste em uma única função enumeration() . Contudo, essa não é uma função
construtora: ela não define uma classe chamada “enumeration”. Em vez disso, essa é uma função fábrica: cada chamada cria e retorna uma nova classe. O objetivo do exemplo é demonstrar que as classes de JavaScript são muito mais flexíveis e dinâmicas do que as classes estáticas de linguagens como C++ e Java.

### 9.6.3 - Métodos de conversão padrão

O primeiro e mais importante método é toString(). O objetivo desse método é retornar uma representação de string de um objeto. JavaScript chama esse método automaticamente, caso seja utilizado um objeto onde é esperada uma string – como um nome de propriedade. O método toLocaleString() é estreitamente relacionado a toString() : ele deve converter um objeto em uma string compatível com a localidade. Por padrão, os objetos herdam um método toLocaleString() que simplesmente chama seus métodos toString(). Alguns tipos internos têm métodos toLocaleString() úteis que retornam strings compatíveis com a localidade. O terceiro método é valueOf() . Sua tarefa é converter um objeto em um valor primitivo. O método valueOf() é chamado automaticamente quando um objeto é usado em um contexto numérico, com operadores aritméticos (exceto + ) e com os operadores relacionais.
O quarto método é toJSON(), que é chamado automaticamente por JSON.stringify(). O formato JSON se destina à serialização de estruturas de dados e pode manipular valores primitivos, arrays e objetos comuns de JavaScript. Ele não conhece classes e, ao serializar um objeto, ignora o protótipo e a construtora do objeto.

### 9.6.4 - Métodos de comparação

Os operadores de igualdade de JavaScript comparam objetos por referência, e não por valor. Isto é, dadas duas referências do objeto, eles verificam se ambas são para o mesmo objeto. Esses operadores não verificam se dois objetos diferentes têm os mesmos nomes de propriedade e valores. Para permitir que instâncias de sua classe sejam testadas quanto à igualdade, defina um método de instância chamado equals(). Ele deve receber um único argumento e retornar true se esse argumento for igual ao objeto em que é chamado. O método compareTo() deve aceitar um único argumento e compará-lo com o objeto no qual o método é chamado. Se o objeto this for menor do que o argumento, compareTo() deve retornar um valor menor do que zero. Se o objeto this for maior do que o objeto argumento, o método deve retornar um valor maior do que zero.

### 9.6.5 - Emprestando métodos

Uma única função pode até ser usada como método de mais de uma classe. A maioria dos métodos internos da classe Array, por exemplo, é definida genericamente e se você define uma classe cujas instâncias são objetos semelhantes a um array, pode copiar funções de Array.prototype no objeto protótipo de sua classe. Não são apenas os métodos de Array que podem ser emprestados: podemos escrever nossos próprios métodos genéricos.

### 9.6.6 - Estado privado

Na programação orientada a objetos clássica, frequentemente é um objetivo encapsular ou ocultar o estado de um objeto dentro do objeto, permitindo o acesso a esse estado somente por meio dos métodos do objeto, possibilitando assim que as variáveis de estado importantes sejam lidas ou gravadas
diretamente. Java permite a declaração de campos de instência "privados" de uma classe, que são acessíveis somente para o método de instância da classe e não podem ser vistos fora dela. Podemos ter algo próximo aos campos privados de instância usando variáveis (ou argumentos) capturadas na closure da chamada de construtora que cria uma instância. Para fazer isso, definimos funções dentro da construtora (para que elas tenham acesso aos argumentos e às variáveis da construtora) e atribuímos essas funções às propriedades do objeto recém-criado.

### 9.6.7 - SObrecarga de construtora e métodos de fábrica

Às vezes queremos permitir que os objetos sejam inicializados de mais de uma maneira. Talvez queiramos criar um objeto Complex inicializado com um raio e um ângulo (coordenadas polares), em vez dos componentes real e imaginário, por exemplo, ou queiramos criar um Set cujos membros são os elementos de um array, em vez dos argumentos passados para a construtora. Um modo de fazer isso é sobrecarregar a construtora e fazê-la realizar diferentes tipos de inicialização, dependendo dos argumentos passados. Definir a construtora Set() dessa maneira nos permite listar explicitamente os membros do conjunto na chamada da construtora ou passar um array de membros para a construtora. Contudo, a construtora tem uma infeliz ambiguidade: não podemos utilizá-la para criar um conjunto que tenha um array como seu único membro. A vantagem dos métodos de fábrica aqui é que você pode dar a eles o nome que quiser, e métodos com nomes diferentes podem fazer diferentes tipos de inicialização. No entanto, como as constru-
toras servem como identidade pública de uma classe, normalmente existe apenas uma construtora por classe.

---

## 9.7 - SUBCLASSES

Na programação orientada a objetos, uma classe B pode estender ou fazer uma subclasse de outra classe A. Dizemos que A é a superclasse e B é a subclasse. As instâncias de B herdam todos os métodos de instância de A. A classe B pode definir seus próprios métodos de instância, alguns dos quais podem anular métodos de mesmo nome definidos pela classe A. Se um método de B anula um método de A, o método de B às vezes pode chamar o método anulado de A: isso é chamado de encadeamento de métodos. Da mesma forma, a construtora da subclasse B() às vezes pode chamar a construtora da superclasse A() . Isso é chamado de encadeamento de construtoras. As próprias subclasses podem ter subclasses e ao se trabalhar com hierarquias de classes, às vezes é útil definir classes abstratas. Uma classe abstrata é aquela que define um ou mais métodos sem uma implementação. A implementação desses métodos abstratos é deixada para as subclasses concretas da classe abstrata. O segredo da criação de subclasses em JavaScript é a inicialização correta do objeto protótipo. Se a classe B estende A, então B.prototype deve ser herdeira de A.prototype . Assim, as instâncias
de B herdam de B.prototype que, por sua vez, herda de A.prototype.

### 9.7.1 - Definindo uma subclasse

Os objetos de JavaScript herdam propriedades (normalmente métodos) do objeto protótipo de suas classes. Se um objeto O é uma instância de uma classe B e B é uma subclasse de A, então O também deve herdar propriedades de A. Providenciamos isso garantindo que o objeto protótipo de B herde do objeto protótipo de A.

### 9.7.2 - Encadeamento de contrutoras e de métodos

Quando definimos uma subclasse, queremos apenas aumentar ou modificar o comportamento de nossos métodos de superclasse e não substituí-los completamente. Para fazer isso, a construtora e os métodos da subclasse chamam a (ou encadeiam para a) construtora da superclasse e os métodos
da superclasse.

### 9.7.3 - Composição VS subclasses

Um princípio bastante conhecido no projeto orientado a objetos é “prefira a composição em vez da herança”. Nesse caso, podemos usar composição definindo uma nova implementação de conjunto que “empacota” outro objeto conjunto e encaminha pedidos para ele, após filtrar os membros proibidos.

### 9.7.4 - Hierarquia de classe e classes abstratas

Na seção anterior você foi estimulado a “preferir a composição em vez da herança”. Mas para ilustrarmos esse princípio, criamos uma subclasse de Set. Fizemos isso para que a classe resultante fosse instanceof Set e para que ela pudesse herdar os métodos auxiliares úteis de Set, como toString() e equals() . Esses são motivos pragmáticos válidos, mas ainda teria sido ótimo fazer composição de conjunto sem fazer a subclasse de uma implementação concreta como a classe Set. Pode-se dizer algo semelhante a respeito de nossa classe SingletonSet do Exemplo 9-12 – essa classe é uma subclasse de Set, de modo que poderia herdar os métodos auxiliares, mas sua implementação seria completamente diferente de sua superclasse SingletonSet não é uma versão especializada da classe Set, mas um tipo de Set completamente diferente. SingletonSet deve ser irmã de Set na hierarquia de classes, não uma descendente. Nas linguagens OO clássicas bem como em JavaScript, a solução é separar a interface da implementação. Suponha que definamos uma classe AbstractSet que implementa os métodos auxiliares, como toString() , mas não implementa os métodos básicos, como foreach(). Então, nossas implementações de conjunto, Set, SingletonSet e FilteredSet, podem ser todas subclasses de AbstractSet. FilteredSet e SingletonSet não serão mais subclasses de uma implementação não relacionada.

---

## - 9.8 - CLASSES EM ECMASCRIPT 5

ECMAScript 5 adiciona métodos para especificar atributos de propriedade (getters, setters, capacidade de enumeração, de gravação e de configuração) e para restringir a capacidade de estender objetos.

### 9.8.1 - Tornando propriedades não enumeráveis

A classe Set do Exemplo 9-6 usou um truque para armazenar objetos como membros de conjunto: ela definiu uma propriedade “identificação do objeto” em todo objeto adicionado ao conjunto. Posteriormente, se outro código utilizar esse objeto em um laço for/in , essa propriedade adicionada vai ser retornada. ECMAScript 5 nos permite evitar isso, tornando as propriedades não enumeráveis.

### 9.8.2 - Definindo classes imutávies

Object.defineProperty() e Object.defineProperties() podem ser usados para criar novas propriedades já existentes. Quando usados para definir novas propriedades, os atributos omitidos são false por padrão. Entretanto, quando usados para alterar propriedades já existentes, os atributos omitidos ficam inalterados. Na função hideProps() anterior, por exemplo, especificamos somente o atributo enumerable , pois esse é o único que queremos modificar. Com essas funções utilitárias definidas, podemos aproveitar os recursos de ECMAScript 5 para escrever uma classe imutável sem alterar substancialmente a maneira de escrevermos classes.

### 9.8.3 - Encapsulando o estado do objeto

ECMAScript 5 nos permite encapsular nossas variáveis de estado de modo mais robusto, definindo métodos getter e setter de propriedades que não podem ser excluídos.

### 9.8.4 - Impedindo extensões de classe

Normalmente considera-se uma característica de JavaScript as classes poderem ser estendidas dinamicamente pela adição de novos métodos no objeto protótipo. ECMAScript 5 permite evitar isso, caso se queira. Object.preventExtensions() torna um objeto não extensível (Seção 6.8.3), ou seja,
nenhuma propriedade nova pode ser adicionada nele. Object.seal() leva isso um passo adiante: impede a adição de novas propriedades e também transforma todas as propriedades atuais em não configuráveis, de modo que não podem ser excluídas. Outro recurso dinâmico de JavaScript é a capacidade de substituir (ou fazer “monkey-patch”) métodos de um objeto. Esse tipo de alteração pode ser evitado transformando-se os métodos de instância em somente para leitura. A função utilitária freezeProps() definida anteriormente é uma maneira de fazer isso. Outra é com Object.freeze(), que faz tudo que Object.seal() faz, mas também transforma todas as propriedades em somente para leitura e não configuráveis. Existe uma característica das propriedades somente para leitura que é importante entender ao se trabalhar com classes. Se um objeto o herda uma propriedade somente para leitura p, uma tentativa de atribuir em o.p vai falhar e não vai criar uma nova propriedade em o . Se quiser anular uma propriedade somente de leitura herdada, você tem de usar Object.defineProperty() ou Object. defineProperties() ou Object.create() para criar a nova propriedade. Isso significa que, se você transforma em somente para leitura os métodos de instância de uma classe, torna-se significativamente mais difícil as subclasses anularem esses métodos.

### 9.8.5 - Subclasses e ECMAScript 5

O Exemplo 9-22 demonstra como fazer subclasses usando recursos de ECMAScript 5. Ele define uma classe StringSet como uma subclasse da classe AbstractWritableSet do Exemplo 9-16. A principal característica desse exemplo é o uso de Object.create() para criar um objeto protótipo que herda do protótipo da superclasse e também define as propriedades do objeto recém-criado. A dificuldade dessa estratégia, conforme mencionado anteriormente, é que ela exige o uso de descritores de propriedade complicados. Outro ponto interessante a respeito desse exemplo é que ele passa null para Object.create() a fim de criar um objeto que não herda nada. Esse objeto é usado para armazenar os membros do conjuntoe o fato de não ter protótipo nos permite utilizar o operador in com ele, em vez do método hasOwnProperty().

### 9.8.6 - Descritores de propriedade

Concluímos esta seção sobre ECMAScript 5 com um exemplo estendido que vai demonstrar muitas operações nas propriedades de ECMAScript 5. O Exemplo adiciona um método properties() (não enumerável, é claro) em Object.prototype. O valor de retorno desse método é um objeto que representa uma lista de propriedades e define métodos úteis para exibir as propriedades e os atributos (útil para depuração), para obter descritores de propriedade (útil quando se quer copiar propriedades junto com seus atributos) e para configurar atributos nas propriedades (alternativas úteis às funções hideProps() e freezeProps() , definidas anteriormente).

---

## 9.9 - MÓDULOS

Uma razão importante para organizar código em classes é torná-lo mais modular e conveniente para reutilização em uma variedade de situações. Contudo, as classes não são o único tipo de código modular. Normalmente, um módulo é um único arquivo de código JavaScript. Um arquivo de módulo
poderia conter uma definição de classe, um conjunto de classes relacionadas, uma biblioteca de funções utilitárias ou apenas um script de código para executar. Qualquer trecho de código JavaScript pode ser um módulo, desde que seja escrito de forma modular. JavaScript não define nenhuma
construção da linguagem para trabalhar com módulos (no entanto, reserva as palavras-chave imports e exports para versões futuras), isso quer dizer que escrever código JavaScript modular é, em grande parte, uma questão de seguir certas convenções de codificação. O objetivo dos módulos é permitir que programas grandes sejam montados com código de fontes muito diferentes e que todo esse código seja executado corretamente, mesmo na presença de código que os autores do módulo não previram. Para que isso funcione, os vários módulos devem evitar alterações no ambiente de execução global, a fim de que os módulos subsequentes possam ser executados no ambiente puro (ou quase puro) que esperam. Na prática, isso significa que os módulos devem minimizar o número de símbolos globais que definem – de preferência, nenhum módulo deve definir mais de um.

### 9.9.1 - Objetos como namespaces

Uma maneira de um módulo evitar a criação de variáveis globais é usar um objeto como seu espaço de nome. Em vez de definir funções e variáveis globais, ele armazena as funções e os valores como propriedades de um objeto (o qual pode ser referenciado por uma variável global).

### 9.9.2 - Escopo de função como namespace privado

Os módulos têm uma API pública que exportam: são as funções, classes, propriedades e métodos destinados a serem usados por outros programadores. Frequentemente, contudo, as implementações de módulo exigem mais funções ou métodos não destinados a uso fora do módulo. Podemos fazer isso definindo nosso módulo (a classe Set, nesse caso) dentro de uma função. Conforme descrito na Seção 8.5, as variáveis e funções definidas dentro de outra função são locais para essa função e invisíveis fora dela. Na verdade, podemos usar o escopo de uma função (às vezes chamado de “função módulo”) como um espaço de nomes privado para nosso módulo.
As estruturas que definem sistemas de carregamento de módulo podem ter outros métodos para exportar a API de um módulo. Pode haver uma função provides() para os módulos registrarem a API ou um objeto exports no qual os módulos devem armazenar a API. Até que JavaScript tenha seus próprios recursos de gerenciamento de módulo, você deve escolher o sistema de criação e exportação de módulos que funcione melhor com a estrutura ou kit de ferramentas que utiliza.
