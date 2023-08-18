# CAPÍTULO 12 - JAVASCRIPT DO LADO DO SERVIDOR

Mas JavaScript é uma linguagem de uso geral rápida e competente, não havendo motivos para que não possa ser usada em outras tarefas de programação. Assim, antes de passarmos para JavaScript do lado do cliente, vamos ver rapidamente duas outras incorporações de JavaScript. O Rhino é um interpretador de JavaScript baseado em Java que fornece ao programas JavaScript acesso a API Java inteira. O Node é uma versão do interpretador JavaScript V8 do Google, com vínculos de baixo nível para a API POSIX (Unix) – arquivos, processos, fluxos, soquetes, etc. – e ênfase específica em E/S assíncrona, ligação em rede e HTTP. O título deste capítulo diz que ele fala sobre JavaScript “do lado do servidor”, sendo que o Node e o Rhino são ambos em geral usados para criar ou fazer scripts de servidores. Mas a expressão “do lado do servidor” também pode significar “algo fora do navegador Web”. Os programas Rhino podem criar interfaces gráficas com o usuário com a estrutura Swing da linguagem Java. E o Node pode executar programas JavaScript que manipulam arquivos como os scripts de shell.

---

## 12.1 SCRIPTS JAVA COM RHINO

O Rhino é um interpretador JavaScript escrito em Java e projetado para tornar fácil escrever programas JavaScript que alavancam o poder das APIs da plataforma Java. O Rhino faz automaticamente a conversão de primitivas JavaScript em primitivas Java e vice-versa; portanto, scripts JavaScript podem configurar e consultar propriedades Java e chamar métodos Java.

### 12.1.1 - Exemplo de Rhino

O script12.1.1 é um aplicativo Rhino simples que demonstra muitos dos recursos e técnicas descritos anteriormente. O exemplo usa o pacote de GUI javax.swing, o pacote de ligação em rede java.net, o pacote de E/S de streaming java.io e recursos de multithreading da linguagem Java para implementar um aplicativo gerenciador de downloads simples que baixa URLs em arquivos locais e exibe o andamento do download.

---

## 12.2 - E/S ASSÍNCRONA COM NODE

O Node é um interpretador JavaScript rápido, baseado em C++, com vínculos para as APIs Unix de baixo nível para trabalhar com processos, arquivos, soquetes de rede, etc., e também para cliente HTTP e APIs de servidor. A não ser por alguns métodos síncronos com nomes especiais, os vínculos do Node são todos assíncronos e, por padrão, os programas Node nunca são bloqueados, isso quer dizer que normalmente mudam bem de escala e lidam com cargas grandes de forma eficiente.

### 12.2.1 - Exemplo de Node: servidor de HTTP

O script12.2.1 é um servidor de HTTP simples em Node. Ele serve arquivos do diretório corrente e também implementa duas URLs de propósito especial que manipula de modo particular. Ele usa o módulo “http” do Node e também as APIs de arquivo e fluxo demonstradas anteriormente.

### 12.2.2 - Exemplo de Node: módulo de utilitário de cliente HTTP

O Exemplo 12-3 usa o módulo “http” para definir funções utilitárias para fazer pedidos HTTP GET e POST.
