# MÓDULOS

Módulos dividem programas em blocos de código, que por alguma critério pertecem a ama mesma unidade. Podemos explora alguns dos benefícios que estes agrupamentos forneceme mostrar algumas técnicas para construção de módulos em JavaScript.

---

## ORGANIZAÇÃO

O benefício de dividir um programa em vários arquivos ou módulos, ajudam as pessoas que não estão familarizadas com o código a achar o que elas buscam, e ajudam o programador a colocar coisas semelhantes juntas. Alguns progrmas são organizados seguindo o modelo de um texto tradicional, com uma ordem bem definida que encoraja o leitor a percorrer, e muito falatório fornecendo uma descrição coerente do código. Como regra geral, organização tem um custo, e é nos estágios iniciais do projeto, quando não sabemos com certeza aonde vamos e que tipo de módulos o programas precisará. Apenas coloque tudo em um simples arquivo até que o código esteja estabilizado. Dessa maneira, você não estará se sobrecarregando pensando em organização enquanto tem pouca informação, não perderá tempo fazendo e desfazendo coisas, e não irá acidentalmente travar-se em uma estrutura que não serve realmente para seu programa.

---

## NAMESPACES

Embora JavaScript não possua a criação de módulos nativamente, objetos podem ser usados para criar subnamespaces publicamente acessíveis, e funções podem ser usadas para criar um namespaces privado dentr de um módulo. Podemos ver tecnicas que permite construir módulos namespace isolados bem convinientes.

---

## REUSO

Uma vez que você tenha muitos pedaços de código compartilhadose duplicados. Você vai se encontrar perdendp uma grande quantidade de tempo e energia organizá-los e mantê-los atualizados. Quando partes de funcionálidade que são imdependentes são colocadas em arquivos e módulos separados, elas podem ser rastreadas mais facilmente, atualizadas quando uma nova versão for criada, ou até mesmo comparilhadas, tendo várias partes do código que desejam usá-las carregando o mesmo arquivo. Essa ideia fica ainda mais poderosa quando as relações entre os módulos são explicitamente especificados. Você pod então automatizar o processo de instalação e atualização de módulos externos. Imagine um serviçõ online que rastreia e distribui centenas de milhares de módulos, permitindo buscar pela funcionalidade desejada, permitindo a configuração em seu projeto para ser baixada automaticamente. Esse serviço existe, é chamado de `NPM`. Ele consiste em um banco de dados online de módulos, e uma ferramenta para download e atualização dos módulos que seu programa depende. Ele cresceu com o Node.js o ambiente _JavaScript browser-less_, mas também pode ser usado quando programando para o navegador.

---

## DESACOPLANDO

Outro importante papel dos módulos é os de isolar partes de código um do outro, da mesma forma que as interfaces dos objetos no capítulo 6 fazem. Um módulo bem desenvolvido fornece uma interface para uso de códigos externos, e mesmo que o módulo continue sendo trabalhado a interface existente permanece estável, assim outro módulos podem usar uma nova e melhorada versão sem qualquer alteração neles mesmos. Uma interface estável não significa que novos elementos não são adicionados. Isso apenas significa que elementos existentes não serão removidos ou seus significados não serão alterados. Construir a interface de um módulo que permite que este cresça sem quebras na antiga interface significa
encontrar um balanço entre expor a menor quantidade de conceitos internos ao mundo exterior quanto possível, e
ainda assim criar uma "linguagem" exposta pela interface que seja poderosa e flexível o suficiente para ser
aplicada em uma vasta variedade de situações.
