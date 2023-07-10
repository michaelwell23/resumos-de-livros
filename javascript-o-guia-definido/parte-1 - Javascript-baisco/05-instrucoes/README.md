# CAPÍTULO 5: RESUMO DAS INTRUÇÕES JAVASCRIPT

Este capítulo apresentou cada uma das instruções da linguagem JavaScript. A Tabela 5-1 as resume,
listando a sintaxe e o objetivo de cada uma.

| Intrução | Sintaxe                                                                                              | Objetivo                                                               |
| -------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| break    | break [rótulo];                                                                                      | Sai do laço ou switch mais interno ou da instrução circundante nomeada |
| case     | case expressão:                                                                                      | Rotula uma instrução dentro de um switch                               |
| continue | continue [rótulo];                                                                                   | Começa a próxima iteração do laço mais interno ou do laço nomeado      |
| debugger | debugger;                                                                                            | Ponto de interrupção de depurador                                      |
| default  | default:                                                                                             | Rotula a instrução padrão dentro de um switch                          |
| do/while | do instrução while (expressão);                                                                      | Uma alternativa para o laço while                                      |
| empty    | ;                                                                                                    | Não faz nada                                                           |
| for      | for(inic; teste; incr) instrução                                                                     | Um laço fácil de usar                                                  |
| for/in   | for (var in objeto) instrução                                                                        | Enumera as propriedades de objeto                                      |
| function | function nome([parâm[,...]]) { corpo }                                                               | Declara uma função chamada nome                                        |
| if/else  | if (expr) instrução1 [else instrução2]                                                               | Executa instrução1 ou instrução2                                       |
| label    | rótulo: instrução                                                                                    | Dá à instrução o nome rótulo                                           |
| return   | return [expressão];                                                                                  | Retorna um valor de uma função                                         |
| switch   | switch (expressão) { instruções }                                                                    | Ramificação de múltiplos caminhos para rótulos case ou default:        |
| throw    | throw expressão;                                                                                     | Lança uma exceção                                                      |
| try      | try { instruções } [catch { instruções de rotina de tratamento }] [finally { instruções de limpeza}] | Trata exceções                                                         |
| use      | strict "use strict";                                                                                 | Aplica restrições do modo restrito em um script ou função              |
| var      | var nome [ = expr] [ ,... ];                                                                         | Declara e inicializa uma ou mais variáveis                             |
| while    | while (expressão) instrução                                                                          | Uma construção de laço básica                                          |
| with     | with (objeto) instrução                                                                              | Amplia o encadeamento de escopo (proibida no modo restrito)            |
