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
