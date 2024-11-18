const numeroSenha = document.querySelector('.Parametro-Senha-Texto');
let tamanhoSenha = 10; 
numeroSenha.textContent = tamanhoSenha;
const botoes = document.querySelectorAll('.Parametro-Senha-Botao');

botoes[0].onclick = aumentarTamanho;
botoes[1].onclick = diminuirTamanho;

function diminuirTamanho(){
    if(tamanhoSenha>6){
    tamanhoSenha = tamanhoSenha - 1;
    numeroSenha.textContent = tamanhoSenha;
    }
}

function aumentarTamanho(){
    if(tamanhoSenha<15){
    tamanhoSenha = tamanhoSenha + 1;
    numeroSenha.textContent = tamanhoSenha;
    }
}
