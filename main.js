const numeroSenha = document.querySelector('.Parametro-Senha-Texto');
let tamanhoSenha = 10; 
numeroSenha.textContent = tamanhoSenha;
const botoes = document.querySelectorAll('.Parametro-Senha-Botao');const CampoSenha = document.querySelector('#campo-senha');
const letrasMaiusculas = "QWERTYUIOPASDFGHJKLÇZXCVBNMÀÉÁ";



botoes[0].onclick = aumentarTamanho;
geraSenha();
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
    function geraSenha(){
        for (let i=0; i<tamanhoSenha; i++){
        let numeroAleatorio = Math.random()*letrasMaiusculas.length;
        numeroAleatorio = Math.floor(numeroAleatorio); 
        senha = senha + letrasMaiusculas [numeroAleatorio];

} 
    campoSenha.value = senha;               
}
