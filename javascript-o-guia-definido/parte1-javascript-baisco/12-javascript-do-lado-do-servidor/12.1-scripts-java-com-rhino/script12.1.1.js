// O exemplo usa o pacote de GUI javax.swing, o pacote de ligação em rede java.net, o pacote de E/S de streaming java.io e recursos de multithreading da linguagem Java para implementar um aplicativo gerenciador de downloads simples que baixa URLs em arquivos locais e exibe o andamento do download.

/*
 * Um aplicativo gerenciador de downloads com uma GUI Java simples
 */
// Importa os componentes da GUI Swing e algumas outras classes
importPackage(javax.swing);
importClass(javax.swing.border.EmptyBorder);
importClass(java.awt.event.ActionListener);
importClass(java.net.URL);
importClass(java.io.FileOutputStream);
importClass(java.lang.Thread);

// Cria alguns widgets de GUI
var frame = new JFrame('Rhino URL Fetcher'); // A janela do aplicativo
var urlfield = new JTextField(30); // Campo de entrada de URL
var button = new JButton('Download'); // Botão para iniciar o download
var filechooser = new JFileChooser(); // Um diálogo de seleção de arquivo
var row = Box.createHorizontalBox(); // Uma caixa para campo e botão
var col = Box.createVerticalBox(); // Para as linhas & as barras de progresso
var padding = new EmptyBorder(3, 3, 3, 3); // Preenchimento para linhas

// Reúne tudo e exibe a GUI
row.add(urlfield); // O campo de entrada entra na linha
row.add(button); // O botão entra na linha
col.add(row); // A linha entra na coluna
frame.add(col); // A coluna entra no quadro
row.setBorder(padding); // Adiciona algum preenchimento na linha
frame.pack(); // Configura o tamanho míni
frame.visible = true; //Torna a janela visível

// Quando qualquer coisa acontecer na janela, chama esta função.
frame.addWindowListener(function (e, name) {
  // Se o usuário fecha a janela, sai do aplicativo.
  if (name === 'windowClosing')
    // O Rhino adiciona o argumento name
    java.lang.System.exit(0);
});
// Quando o usuário clica no botão, chama esta função
button.addActionListener(function () {
  try {
    // Cria um java.net.URL para representar o URL de origem.
    // (Isso verifica se a entrada do usuário está bem formada)
    var url = new URL(urlfield.text);
    // Pede ao usuário para selecionar um arquivo onde vai salvar o conteúdo do URL.
    var response = filechooser.showSaveDialog(frame);
    // Sai agora, se ele clicou em Cancel
    if (response != JFileChooser.APPROVE_OPTION) return;
    // Caso contrário, obtém o java.io.File que representa o arquivo de destino
    var file = filechooser.getSelectedFile();
    // Agora inicia uma nova thread para baixar o url
    new java.lang.Thread(function () {
      download(url, file);
    }).start();
  } catch (e) {
    // Exibe uma caixa de diálogo se tudo der errado
    JOptionPane.showMessageDialog(
      frame,
      e.message,
      'Exception',
      JOptionPane.ERROR_MESSAGE
    );
  }
});

// Usa java.net.URL, etc. para baixar o conteúdo do URL e usa
// java.io.File etc. para salvar esse conteúdo em um arquivo. Exibe o andamento
// do download em um componente JProgressBar. Isso vai ser chamado em uma nova thread.
function download(url, file) {
  try {
    // Sempre que baixamos um URL, adicionamos uma nova linha na janela
    // para exibir o url, o nome de arquivo e o andamento do download
    var row = Box.createHorizontalBox();
    // Cria a linha
    row.setBorder(padding);
    // Fornece a ela algum preenchimento
    var label = url.toString() + ': ';
    // Exibe o URL
    row.add(new JLabel(label));
    // em um JLabel
    var bar = new JProgressBar(0, 100);
    // Adiciona uma barra de progresso
    bar.stringPainted = true;
    // Exibe o nome do arquivo na
    bar.string = file.toString();
    // barra de progresso
    row.add(bar);
    // Adiciona a barra nessa nova linha
    col.add(row);
    // Adiciona a linha na coluna
    frame.pack();
    // Redimensiona a janela
    // Ainda não sabemos o tamanho do URL, de modo que a barra apenas inicia a animação
    bar.indeterminate = true;
    // Agora conecta o servidor e obtém o comprimento do URL, se possível
    var conn = url.openConnection();
    // Obtém java.net.URLConnection
    conn.connect();
    // Conecta e espera pelos cabeçalhos
    var len = conn.contentLength;
    // Verifica se temos o comprimento do URL
    if (len) {
      // Se o comprimento é conhecido, então
      bar.máximo = len;
      // configura a barra para exibir
      bar.indeterminate = false;
      // a porcentagem baixada
    }
    // Obtém fluxos de entrada e saída
    var input = conn.inputStream;
    // Para ler bytes do servidor
    var output = new FileOutputStream(file); // Para gravar bytes no arquivo
    // Cria um array de 4k bytes como buffer de entrada
    var buffer = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 4096);
    var num;
    while ((num = input.read(buffer)) != -1) {
      // Lê e itera até EOF
      output.write(buffer, 0, num);
      // Grava bytes no arquivo
      bar.value += num;
      // Atualiza a barra de progresso
    }
    output.close();
    // Fecha os fluxos ao terminar
    input.close();
  } catch (e) {
    // Se algo der errado, exibe erro na barra de progresso
    if (bar) {
      bar.indeterminate = false;
      // Para a animação
      bar.string = e.toString();
      // Substitui o nome do arquivo pelo erro
    }
  }
}
