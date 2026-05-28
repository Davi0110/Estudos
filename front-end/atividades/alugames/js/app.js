let jogo
let id_jogo
let botão1
let botao2
let botao3

function alterarStatus() {
     let botao = document.getElementById('btn-reiniciar');
    //verifica se na lista de classes
    if(botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }

}