// Variáveis de controle para navegação entre as telas
let telaLogin = document.getElementById('tela-login');
let telaLoginUsuario = document.getElementById('tela-login-usuario');
let telaCadastro = document.getElementById('tela-cadastro');

// Variáveis de Botões
let entrarBtn = document.getElementById('entrarBtn');
let doadorBtn = document.getElementById('doadorBtn');
let beneficiarioBtn = document.getElementById('beneficiarioBtn');
let fazerCadastroBtn = document.getElementById('fazerCadastro');
let voltarLoginBtn = document.getElementById('voltarLogin');

// Mostrar tela de login após selecionar "Doador" ou "Beneficiário"
entrarBtn.addEventListener('click', () => {
  if (!doadorBtn.classList.contains('selected') && !beneficiarioBtn.classList.contains('selected')) {
    alert("Selecione se você é Doador ou Beneficiário");
    return;
  }
  telaLogin.style.display = 'none';
  telaLoginUsuario.style.display = 'block';
});

// Navegar para tela de cadastro
fazerCadastroBtn.addEventListener('click', () => {
  telaLoginUsuario.style.display = 'none';
  telaCadastro.style.display = 'block';
});

// Navegar de volta para tela de login
voltarLoginBtn.addEventListener('click', () => {
  telaCadastro.style.display = 'none';
  telaLoginUsuario.style.display = 'block';
});

// Marcar a seleção de "Doador" ou "Beneficiário"
doadorBtn.addEventListener('click', () => {
  doadorBtn.classList.add('selected');
  beneficiarioBtn.classList.remove('selected');
});

beneficiarioBtn.addEventListener('click', () => {
  beneficiarioBtn.classList.add('selected');
  doadorBtn.classList.remove('selected');
});
