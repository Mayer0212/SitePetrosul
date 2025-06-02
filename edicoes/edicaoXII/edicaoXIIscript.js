const imagens = ["edicaoXIIassests/XII1.png", "edicaoXIIassests/XII2.png", "edicaoXIIassests/XII3.png"];
let indexAtual = 0;

function abrirLightbox(indice) {
  indexAtual = indice;
  document.getElementById("imagemAtual").src = imagens[indexAtual];
  document.getElementById("lightbox").style.display = "flex";
}

function fecharLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function mudarImagem(direcao) {
  indexAtual += direcao;
  if (indexAtual < 0) indexAtual = imagens.length - 1;
  if (indexAtual >= imagens.length) indexAtual = 0;
  document.getElementById("imagemAtual").src = imagens[indexAtual];
}
