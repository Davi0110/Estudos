function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

let tentativas = 1;

function textoInicial() {
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', 'Escolha um número entre 1 e 10');
}

textoInicial();

function gerarNumeroSecreto() {
    return parseInt(Math.random() * 10) + 1;
}

let numeroSecreto = gerarNumeroSecreto();


function verificarChute() {
    let chute = document.querySelector('input').value;

    if (tentativas > 10) {
        exibirTexto('h1', 'Fim de jogo');
        exibirTexto('Você esgotou as suas 10 tentativas! Reinicie o joog.');
        document.getElementById('reiniciar').removeAttribute('disabled');
        return;
    }
        
    if (chute == numeroSecreto) {

        exibirTexto('h1', 'Acertou!');
        let palavraTentativa = tentativas == 1 ? 'tentativas':'tentativas';
        let msgTentativa = `Parabéns, você acertou o número secreto (${numeroSecreto}), com ${tentativas} ${palavraTentativa}.`;

        exibirTexto('p', msgTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('chute').setAttribute('disabled', true);
        document.querySelector('input').setAttribute('disabled', true);
    }
        else {
            tentativas++
            limparCampo();
            if (chute > numeroSecreto){
                exibirTexto('p', 'O número secreto é menor.');
            }else{
                exibirTexto('p', 'O número secreto é maior.');
        }
    }
}

function limparCampo() {
    chute = document.querySelector('input')
    chute.value = '';
}

function novoJogo() {
    textoInicial();
    numeroSecreto = gerarNumeroSecreto();
    document.getElementById('chute').removeAttribute('disabled');
    document.querySelector('input').removeAttribute('disabled');
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

console.log(numeroSecreto);