// Selecionar todas as telas e botões
const telas = document.querySelectorAll('.tela');
const botoes = document.querySelectorAll('.btn');

// Função para trocar de tela
function trocarTela(proximaTelaId) {
  telas.forEach(tela => tela.classList.remove('ativa'));
  document.getElementById(proximaTelaId).classList.add('ativa');
}

// Adicionar eventos aos botões
botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    const proximaTela = botao.getAttribute('data-next');
    trocarTela(proximaTela);
  });
});

// Mostrar a primeira tela (login) ao carregar
trocarTela('tela-login');