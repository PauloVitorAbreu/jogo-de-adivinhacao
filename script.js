const formulario = document.getElementById('formulario');
const campoPalpite = document.getElementById('palpite');
const botaoChutar = document.getElementById('chutar');
const mensagem = document.getElementById('mensagem');
const textoTentativas = document.getElementById('tentativas');
const botaoReiniciar = document.getElementById('reiniciar');

const maximoTentativas = 10;
let numeroSecreto;
let tentativasRestantes;
let jogoEncerrado;

function iniciarJogo() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  tentativasRestantes = maximoTentativas;
  jogoEncerrado = false;
  campoPalpite.value = '';
  campoPalpite.disabled = false;
  botaoChutar.disabled = false;
  botaoReiniciar.hidden = true;
  mensagem.textContent = 'Digite um número para começar.';
  textoTentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;
}

function encerrarJogo() {
  jogoEncerrado = true;
  campoPalpite.disabled = true;
  botaoChutar.disabled = true;
  botaoReiniciar.hidden = false;
  botaoReiniciar.focus();
}

// Cada envio do formulário representa uma tentativa, sem bloquear a página com loops.
formulario.addEventListener('submit', function (evento) {
  evento.preventDefault();
  if (jogoEncerrado) return;

  const valor = campoPalpite.value.trim();
  const palpite = Number(valor);

  // Palpites inválidos não gastam tentativas. Number evita truncar números decimais.
  if (valor === '' || !Number.isInteger(palpite) || palpite < 1 || palpite > 100) {
    mensagem.textContent = 'Digite um número inteiro válido entre 1 e 100.';
    campoPalpite.focus();
    return;
  }

  tentativasRestantes--;
  textoTentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;

  if (palpite === numeroSecreto) {
    mensagem.textContent = 'Você acertou!';
    encerrarJogo();
  } else if (tentativasRestantes === 0) {
    mensagem.textContent = `Você perdeu! O número secreto era ${numeroSecreto}`;
    encerrarJogo();
  } else {
    if (palpite < numeroSecreto) {
      mensagem.textContent = 'O número secreto é maior';
    } else {
      mensagem.textContent = 'O número secreto é menor';
    }
    campoPalpite.value = '';
    campoPalpite.focus();
  }
});

botaoReiniciar.addEventListener('click', function () {
  iniciarJogo();
  campoPalpite.focus();
});

iniciarJogo();
