// scripts.js

function exibirMensagem() {
  alert('Bem-vindo à minha página!');
}

function alternarImagem() {
  var imagem = document.getElementById('imagem-exemplo');
  
  if (imagem) {
    var imagens = [
      'dist/images/image1.jpg',
      'dist/images/image2.jpg',
      'dist/images/image3.jpg',
      'dist/images/image4.png',
      'dist/images/image5.jpg',
      'dist/images/image6.jpg'
    ];

    // Obtém apenas o nome do arquivo da URL atual da imagem
    var nomeArquivoAtual = imagem.src.split('/').pop();

    // Encontra o índice da imagem atual no array
    var indiceAtual = imagens.indexOf('dist/images/' + nomeArquivoAtual);

    // Se o índice não for encontrado ou for o último, volta para a primeira imagem
    var proximoIndice = (indiceAtual === -1 || indiceAtual === imagens.length - 1) ? 0 : indiceAtual + 1;

    // Define a nova imagem
    imagem.src = imagens[proximoIndice];
  } else {
    console.error("Elemento imagem não encontrado");
  }
}


function trocarCorFundo() {
  var container = document.querySelector('.container');
  var novaCor = gerarCorAleatoria();
  container.style.backgroundColor = novaCor;
}

function gerarCorAleatoria() {
  var letras = '0123456789ABCDEF';
  var cor = '#';
  for (var i = 0; i < 6; i++) {
    cor += letras[Math.floor(Math.random() * 16)];
  }
  return cor;
}
