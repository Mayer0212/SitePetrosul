// Exemplo: alerta ao clicar no botão
document.querySelector("button").addEventListener("click", () => {
  alert("Você clicou no botão!");
});

function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('show');
}

