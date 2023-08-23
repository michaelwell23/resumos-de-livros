# CAPÍTULO 14 - O OBJETO WINDOW

Este capítulo aborda as propriedades e os métodos do objeto Window. Essas propriedades definem várias APIs diferentes, apenas algumas das quais estão realmente relacionadas às janelas do navegador para as quais o objeto Window foi nomeado.

---

## 14.1 - CRONÔMETROS

setTimeout() e setInterval() permitem registrar uma função para ser chamada uma vez ou repetidamente, após decorrida uma quantidade de tempo especificada. Essas são funções globais importantes de JavaScript do lado do cliente e, portanto, são definidas como métodos de Window, mas são funções de uso geral e na verdade não têm nada a ver com a janela. O método setTimeout() do objeto Window agenda a execução de uma função para depois de decorrido um número especificado de milissegundos. setTimeout() retorna um valor que pode ser passado para clearTimeout() a fim de cancelar a execução da função agendada. setInterval() é como setTimeout() , exceto que a função especificada é chamada repetidamente em intervalos do número de milissegundos especificado.

---

## 14.2 - LOCALIZAÇÃO DO NAVEGADOR E NAVEGAÇÃO

A propriedade location do objeto Window se refere a um objeto Location, o qual representa o URL corrente do documento exibido na janela, e também define métodos para fazer a janela carregar um novo documento. A propriedade location do objeto Document também se refere ao objeto Location:

```js
window.location === document.locatioN; // sempre true
```

O objeto Document também tem uma propriedade URL que é uma string estática que contém o URL do documento quando foi carregado pela primeira vez.

### 14.2.1 - Analisando URLs

A propriedade location de uma janela é uma referência a um objeto Location; ela representa o URL atual do documento que está sendo exibido nessa janela. A propriedade href do objeto Location é uma string que contém o texto completo do URL. O método toString() do objeto Location retorna
o valor da propriedade href ; portanto, nos contextos que chamam toString() implicitamente, pode-se escrever apenas location , em vez de location.href. Outras propriedades desse objeto – protocol , host , hostname , port , pathname , search e hash – especificam as diversas partes individuais do URL. Elas são conhecidas como propriedades de “decomposição de URL” e também são suportadas por objetos Link. As propriedades hash e search do objeto Location são interessantes. A propriedade hash retorna a parte do “identificador de fragmento” do URL, caso haja um: um sinal numérico (#) seguido de uma identificação de elemento. A propriedade search é semelhante. Ela retorna a parte do URL que começa com um ponto de interrogação: frequentemente algum tipo de string de consulta.

### 14.2.2 - Carregando novos documentos

O método assign() do objeto Location faz a janela ser carregada e exibe o documento do URL especificado. O método replace() é semelhante, mas remove o documento corrente do histórico de navegação antes de carregar o novo documento. Além dos métodos assign() e replace() , o objeto Location também define reload() , que faz o navegador recarregar o documento. Uma maneira mais tradicional de fazer o navegador ir para uma nova página é simplesmente atribuir o novo URL diretamente à propriedade location. Um identificador de fragmento simples é um tipo especial de URL relativo que não faz o navegador carregar um novo documento, mas simplesmente rolar para exibir uma nova seção do documento. O identificador #top é um caso especial: se nenhum elemento do documento tem a identificação “top”, ele faz o navegador pular para o início do documento.

---

## 14.3 - HISTÓRICO DE NAVEGAÇÃO

A propriedade history do objeto Window se refere ao objeto History da janela. O objeto History modela o histórico de navegação de uma janela como uma lista de documentos e estados de documento. A propriedade length do objeto History especifica o número de elementos na lista do histórico de navegação, mas por motivos de segurança os scripts não podem acessar os URLs armazenados. O objeto History tem métodos back() e forward() que se comportam como os botões Voltar e Avançar do navegador: eles fazem o navegador retroceder ou avançar um passo no histórico de navegação. Um terceiro método, go(), recebe um argumento inteiro e pode pular qualquer número de páginas para frente (para argumentos positivos) ou para trás (para argumentos negativos) na lista do histórico.

---

## 14.4 - INFORMAÇÕES DO NAVEGADOR E DA TELA

Às vezes, os scripts precisam obter informações sobre o navegador Web no qual estão sendo executados ou sobre a área de trabalho na qual o navegador aparece. Esta seção descreve as propriedades navigator e screen do objeto Window. Essas propriedades se referem aos objetos Navigator e Screen, respectivamente, e esses objetos fornecem informações que permitem a um script personalizar seu comportamento com base em seu ambiente.

### 14.4.1 - O objeto Navigator

A propriedade navigator de um objeto Window se refere a um objeto Navigator que contém informações sobre o fornecedor e o número da versão do navegador. O objeto Navigator recebe esse nome por causa do antigo navegador Navigator da Netscape, mas também é suportado por todos os outros navegadores. O objeto Navigator tem quatro propriedades que fornecem informações sobre o navegador que está sendo executado e elas podem ser usadas para ferejar o navegador:

- `appName`: O nome completo do navegador Web. No IE é “Microsoft Internet Explorer”. No Firefox essa propriedade é “Netscape”. Por compatibilidade com código de farejamento de navegador já existente, outros navegadores frequentemente também informam o nome “Netscape”.
- `appVersion`: Essa propriedade normalmente começa com um número e segue a isso uma string detalhada contendo informações do fornecedor e da versão do navegador. O número no início dessa string em geral é 4.0 ou 5.0, para indicar compatibilidade genérica com navegadores de quarta e de quinta geração. Não há um formato padrão para a string appVersion , de modo que não é possível analisá-la de modo independente de navegador.
- `userAgent`: A string enviada pelo navegador em seu cabeçalho HTTP USER-AGENT . Essa propriedade normalmente contém todas as informações de appVersion e pode conter mais detalhes. Assim como appVersion , não existe um formato padrão. Como essa propriedade contém o máximo e informações, o código de farejamento de navegador costuma utilizá-lo.
- `platform`: Uma string que identifica o sistema operacional (e possivelmente o hardware) no qual o nave-
  gador está sendo executado.

### 14.4.2 - O objeto screen

A propriedade screen de um objeto Window se refere a um objeto Screen que fornece informações sobre o tamanho da tela do usuário e o número de cores disponíveis. As propriedades width e height especificam o tamanho da tela em pixels. As propriedades availWidth e availHeight especificam o tamanho da tela realmente disponível; elas excluem o espaço exigido por recursos como uma barra de tarefas na área de trabalho.

---

## 14.5 - CAIXAS DE DIÁLOGO

O objeto Window fornece três métodos para exibir caixas de diálogo simples para o usuário. alert() exibe uma mensagem para o usuário e espera que ele a feche. confirm() exibe uma mensagem, espera que o usuário clique em um botão OK ou Cancelar e retorna um valor booleano. E prompt() exibe uma mensagem, espera que o usuário digite uma string e retorna essa string. Embora os métodos alert() , confirm() e prompt() sejam muito fáceis de usar, o bom projeto impõe utilizá-los moderadamente, se é que devem ser usados. Caixas de diálogo como essas não são um recurso comum na Web e a maioria dos usuários vai achar que as caixas de diálogo produzidas por esses métodos atrapalham a experiência de navegação. Atualmente, o único uso comum para esses métodos é na depuração: os programadores JavaScript às vezes inserem métodos alert() em código que não está funcionando na tentativa de diagnosticar o problema.

---

## 14.6 - TRATAMENTO DE ERROS

A propriedade onerror de um objeto Window é uma rotina de tratamento de evento chamada quando uma exceção não capturada se propaga até o início da pilha de chamada e uma mensagem de erro está para ser exibida na console JavaScript do navegador. Se uma função é atribuída a essa propriedade, a função é chamada quando um erro JavaScript ocorre nessa janela: a função atribuída se torna uma rotina de tratamento de erro para a janela. A rotina de tratamento onerror é remanescente dos primórdios de JavaScript, quando a linguagem básica não incluía a instrução de tratamento de exceção try/catch . Em código moderno ela é raramente utilizada. Durante o desenvolvimento, contudo, você pode definir uma rotina de tratamento de erro como esta para notificá-lo explicitamente quando um erro ocorrer.

---

## 14.7 - ELEMENTOS DE DOCUMENTO COMO PROPRIEDADES DE WINDOWS

Se você nomeia um elemento em seu documento HTML usando o atributo id e se o objeto Window ainda não tem uma propriedade com esse nome, o objeto Window recebe uma propriedade não enumerável cujo nome é o valor do atributo id e cujo valor é o objeto HTMLElement que representa esse elemento do documento. Conforme já mencionamos, o objeto Window serve como objeto global no topo do encadeamento de escopo em JavaScript do lado do cliente; portanto, isso significa que os atributos id utilizados em seus documentos HTML se tornam variáveis globais acessíveis para seus scripts. Se seu documento inclui o elemento `<button id="okay"/>` , você pode se referir a esse elemento usando a variável global okay.

---

## 14.8 - VÁRIAS JANELAS E QUADROS

Uma única janela de navegador Web em sua área de trabalho pode conter várias guias (ou abas). Cada guia é um contexto de navegação independente. Cada uma tem seu próprio objeto Window e cada uma é isolada de todas as outras. Os scripts em execução em uma guia normalmente não têm nenhuma maneira nem mesmo de saber que as outras guias existem, muito menos de interagir com seus objetos Window ou manipular o conteúdo de seus documentos. Se você usa um navegador Web que não aceita guias ou se está com as guias desativadas, pode ter muitas janelas de navegador Web abertas simultaneamente em sua área de trabalho. Assim como acontece com as guias, cada janela da área de trabalho tem seu próprio objeto Window e cada uma em geral é independente e isolada de todas as outras. Como Window é o objeto global de JavaScript do lado do cliente, cada janela ou quadro tem um
contexto de execução JavaScript separado. Contudo, o código JavaScript de uma janela pode (sujeito às restrições da mesma origem) usar os objetos, propriedades e métodos definidos nas outras janelas. Quando a política da mesma origem impede que os scripts de duas janelas distintas interajam diretamente, HTML5 fornece uma API de passagem de mensagens baseada em eventos para comunicação indireta.

### 14.8.1 - Abrindo e fechando janelas

Quando a política da mesma origem impede que os scripts de duas janelas distintas interajam diretamente, HTML5 fornece uma API de passagem de mensagens baseada em eventos para comunicação indireta. O primeiro argumento de open() é o URL do documento a ser exibido na nova janela. Se esse
argumento for omitido (ou for uma string vazia), será usado o URL de página em branco especial about:blank. O segundo argumento de open() é uma string especificando um nome de janela. O terceiro argumento opcional de open() é uma lista separada por vírgulas de atributos de tamanho e de recursos da nova janela a ser aberta. Se você omitir esse argumento, a nova janela vai receber um tamanho padrão e vai ter um conjunto completo de componentes de interface com o usuário: uma barra de menus, linha de status, barra de ferramentas, etc. Em navegadores com guias, isso normalmente resulta na criação de uma nova guia. O quarto argumento de open() só é útil quando o segundo argumento nomeia uma janela já existente. Esse quarto argumento é um valor booleano que indica se o URL especificado como primeiro argumento deve substituir a entrada atual no histórico de navegação da janela ( true ) ou criar uma nova entrada no histórico de navegação da janela (false). Omitir esse argumento é o mesmo que passar false.

#### 14.8.1.1 - Fechando janelas

Assim como o método open() abre uma nova janela, o método close() fecha. Se você cria um objeto
Window w , pode fechá-lo com:

```js
w.close();
```

O método close() de um objeto Window que representa um quadro, em vez de uma janela ou guia nível superior, não faz nada: não é possível fechar um quadro (em vez disso, você excluiria o iframe de seu documento contêiner). Um objeto Window continua a existir depois que a janela que representa foi fechada. Uma janela fechada vai ter a propriedade closed configurada como true , document vai ser null e seus métodos normalmente não vão mais funcionar.

### 14.8.2 - Relacionamentos entre quadros

Como vimos, o método open() de um objeto Window retorna um novo objeto Window que tem uma propriedade opener se referindo à janela original. Desse modo, as duas janelas podem se referir uma à outra e cada uma pode ler propriedades e chamar métodos da outra. Algo semelhante é possível com quadros. Um código em execução em uma janela ou quadro pode se referir à janela ou quadro contêiner e aos quadros filhos aninhados, usando as propriedades descritas a seguir.

### 14.8.3 - JavaScrio em janelas que interagem

Cada janela ou quadro é seu próprio contexto de execução JavaScript, com um objeto Window como seu objeto global. Mas se o código de uma janela ou quadro pode se referir a outra janela ou quadro (e se a política da mesma origem não impedir isso), os scripts de uma janela ou quadro podem interagir com os scripts da outra (ou outro).
