// Utilitários de sistema de arquivos usando a API síncrona em uma thread worker
var filesystem = requestFileSystemSync(PERSISTENT, 10 * 1024 * 1024);

function readTextFile(name) {
  // Obtém um File de um FileEntry do DirectoryEntry raiz
  var file = filesystem.root.getFile(name).file();
  // Usa a API FileReader síncrona para lê-lo
  return new FileReaderSync().readAsText(file);
}

function appendToFile(name, contents) {
  // Obtém um FileWriter de um FileEntry do DirectoryEntry raiz
  var writer = filesystem.root.getFile(name, { create: true }).createWriter();
  writer.seek(writer.length); // Começa no final do arquivo
  var bb = new BlobBuilder(); // Constrói o conteúdo do arquivo em um Blob
  bb.append(contents);
  writer.write(bb.getBlob()); // Agora grava o blob no arquivo
}
function deleteFile(name) {
  filesystem.root.getFile(name).remove();
}
function makeDirectory(name) {
  filesystem.root.getDirectory(name, { create: true, exclusive: true });
}
function listFiles(path) {
  var dir = filesystem.root;
  if (path) dir = dir.getDirectory(path);
  var lister = dir.createReader();
  var list = [];
  do {
    var entries = lister.readEntries();
    for (var i = 0; i < entries.length; i++) {
      var name = entries[i].name;
      if (entries[i].isDirectory) name += '/';
      list.push(name);
    }
  } while (entries.length > 0);
  return list;
}
// Permite que a thread principal use esses utilitários enviando uma mensagem
onmessage = function (e) {
  // Esperamos que a mensagem seja um objeto como segue:
  // { function: "appendToFile", args: ["test", "testing, testing"]}
  // Chamamos a função especificada com os args especificados e
  // postamos a mensagem de volta
  var f = self[e.data.function];
  var result = f.apply(null, e.data.args);
  postMessage(result);
};
