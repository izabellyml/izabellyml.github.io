// Quando a página carregar, começa a música
window.addEventListener('load', () => {
  //const audio = new Audio('assets/All Of It - Funk Tribu feat. Lucy Dye.mp3');
  //audio.play();
});
  
// Função para criar balões de smile aleatórios
function criarSmile() {
  const browser = document.getElementById('retro-browser');
  const smile = document.createElement('img');
  smile.src = 'assets/smiley.png';
  smile.style.position = 'fixed';
  smile.style.left = Math.random() * 100 + 'vw';
  smile.style.top = '100vh';
  smile.style.width = '40px';
  smile.style.zIndex = 999;
  smile.classList.add("smile");
  browser.appendChild(smile);

  let velocidade = Math.random() * 2 + 1;

  function animar() {
    smile.style.top = (parseFloat(smile.style.top) - velocidade) + 'px';
    if (parseFloat(smile.style.top) < -50) {
      smile.remove();
    } else {
      requestAnimationFrame(animar);
    }
  }

  animar();
}
  
// Cria um novo smile flutuante a cada 2 segundos
setInterval(criarSmile, 2000);
  
// Som nos cliques do browser
document.querySelectorAll('button').forEach(link => {
  link.addEventListener('click', () => {
    const clickSound = new Audio('assets/som-clique.mp3');
    clickSound.play();
  });
});
  