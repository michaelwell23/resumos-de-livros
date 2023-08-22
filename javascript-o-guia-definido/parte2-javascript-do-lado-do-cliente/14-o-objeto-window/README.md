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
