// Obtendo um sistema de arquivo de forma síncrona. Passa a vida útil e o tamanho do
// sistema de arquivos.
// Retorna um objeto sistema de arquivo ou lança uma exceção.
var fs = requestFileSystemSync(PERSISTENT, 1024 * 1024);

// A versão assíncrona usa funções callback para sucesso e erro
requestFileSystem(
  TEMPORARY,
  // vida útil
  50 * 1024 * 1024,
  // tamanho: 50Mb
  function (fs) {
    // chamada com o objeto filesystem
    // Usa fs aqui
  },
  function (e) {
    // chamada com um objeto de erro onerror
    console.log(e);
    // Ou a manipula de algum outro modo
  }
);

// Lê o arquivo de texto "hello.txt" e registra seu conteúdo.
// A API assíncrona aninha funções a quatro níveis de profundidade.
// Este exemplo não inclui qualquer função callback de erro.
requestFileSystem(PERSISTENT, 10 * 1024 * 1024, function (fs) {
  // Obtém o sistema de arquivo
  fs.root.getFile('hello.txt', {}, function (entry) {
    // Obtém FileEntry
    entry.file(function (file) {
      // Obtém File
      var reader = new FileReader();
      reader.readAsText(file);
      reader.onload = function () {
        // Obtém o conteúdo do
        // arquivo
        console.log(reader.result);
      };
    });
  });
});

/*
* Estas funções foram testadas no Google Chrome 10.0 dev.
* Talvez seja preciso lançar o Chrome com as seguintes opções:
* --unlimited-quota-for-files
: permite acesso ao sistema de arquivo
* --allow-file-access-from-files
: permite testar URLs file://
*/
// Muitas das funções assíncronas que usamos aceitam uma função callback de erro
// opcional.
// Esta apenas registra o erro.
function logerr(e) {
  console.log(e);
}
// requestFileSystem() obtém um sistema de arquivo local em caixa de areia, acessível
// somente aos aplicativos desta origem. Podemos ler e gravar arquivos à vontade, mas
// não podemos sair da caixa de areia para acessar o restante do sistema.
var filesystem; // Presume que isto é inicializado antes que as funções a seguir sejam
// chamadas.
requestFileSystem(
  PERSISTENT,
  // Ou TEMPORARY para arquivos em cache
  10 * 1024 * 1024,
  // Gostaríamos de 10 megabytes, por favor
  function (fs) {
    // Ao terminar, chama esta função
    filesystem = fs; // Apenas salva o sistema de arquivo em
  },
  // uma variável global.
  logerr
);
// Chama isto, caso ocorra um erro
// Lê o conteúdo do arquivo especificado como texto e passa para a função callback.
function readTextFile(path, callback) {
  // Chama getFile() para encontrar o FileEntry para o nome de arquivo especificado
  filesystem.root.getFile(
    path,
    {},
    function (entry) {
      // Esta função é chamada com o FileEntry do arquivo

      // Agora chamamos o método FileEntry.file()
      entry.file(function (file) {
        var reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function () {
          callback(reader.result);
        };
        reader.onerror = logerr;
      }, logerr);
    },
    logerr
  );
}

// Anexa o conteúdo especificado no arquivo, no caminho especificado, criando
// um novo arquivo, caso ainda não exista nenhum com esse nome. Chama a função callback
// ao terminar.
function appendToFile(path, contents, callback) {
  // filesystem.root é o diretório-raiz.
  filesystem.root.getFile(
    // Obtém um objeto FileEntry
    path,
    // O nome e o caminho do arquivo desejado
    { create: true },
    // Cria-o, caso ainda não exista
    function (entry) {
      // Chama isto quando ele for encontrado
      entry.createWriter(
        // Cria um objeto FileWriter para o arquivo
        function (writer) {
          // Chama esta função quando criado
          // Por padrão, um writer começa no início do arquivo.
          // Queremos começar a gravar no final do arquivo
          writer.seek(writer.length); // Move para o final do arquivo
          // Converte o conteúdo do arquivo em um Blob. O argumento contents
          // pode ser uma string, um Blob ou um ArrayBuffer.
          var bb = new BlobBuilder();
          bb.append(contents);
          var blob = bb.getBlob();
          // Agora grava o blob no arquivo
          writer.write(blob);
          writer.onerror = logerr;
          // Registra erros de write()
          if (callback)
            // Se houver uma função callback
            writer.onwrite = callback; // a chama em caso de sucesso
        },
        logerr
      );
    },
    logerr
  );
  // Registra erros de createWriter()
  // Registra erros de getFile()
}
// Exclui o arquivo nomeado, chamando a função callback opcional ao terminar
function deleteFile(name, callback) {
  filesystem.root.getFile(
    name,
    {}, // Obtém FileEntry para o arquivo nomeado
    function (entry) {
      // Passa o FileEntry aqui
      entry.remove(
        callback,
        // Exclui o FileEntry
        logerr
      );
      // Ou registra erro de remove()
    },
    logerr
  ); // Registra um erro de getFile()
}

// Cria um novo diretório com o nome especificado
function makeDirectory(name, callback) {
  filesystem.root.getDirectory(
    name,
    // Nome do diretório a criar
    {
      // Opções
      create: true,
      // Cria, caso não exista
      exclusive: true,
      // Erro se não existir
    },
    callback,
    // Chama isto ao terminar
    logerr
  );
  // Registra qualquer erro
}

// Lê o conteúdo do diretório especificado e o passa como um array
// de strings para a função callback especificada
function listFiles(path, callback) {
  // Se nenhum diretório for especificado, lista o diretório-raiz. Caso contrário,
  // pesquisa o diretório nomeado e lista-o (ou registra um erro ao pesquisá-lo).
  if (!path) getFiles(filesystem.root);
  else filesystem.root.getDirectory(path, {}, getFiles, logerr);
  function getFiles(dir) {
    var reader = dir.createReader();
    var list = [];
    reader.readEntries(handleEntries, logerr);

    // Ler diretórios pode ser um processo de várias etapas. Temos de continuar
    // chamando readEntries() até obtermos um array vazio. Então, terminamos
    // e podemos passar a lista completa para a função callback do usuário.
    function handleEntries(entries) {
      if (entries.length == 0) callback(list);
      // Terminamos
      else {
        // Caso contrário, adiciona essas entradas na lista e solicita mais
        // O objeto semelhante a um array contém objetos FileEntry e
        // precisamos obter o nome de cada um.
        for (var i = 0; i < entries.length; i++) {
          var name = entries[i].name;
          // Obtém o nome da entrada
          if (entries[i].isDirectory) name += '/'; // Marca diretórios
          list.push(name);
          // Adiciona na lista
        }
        // Agora obtemos o próximo lote de entradas
        reader.readEntries(handleEntries, logerr);
      }
    }
  }
}
