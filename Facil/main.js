const numeroSenha = document.querySelector('.Parametro-Senha-Texto');
let tamanhoSenha = 5000; 
numeroSenha .textContent = tamanhoSenha;
const botoes = document.querySelector('.Parametro-Senha-Botoes');
botoes[0].onclick = diminuirTamanho;