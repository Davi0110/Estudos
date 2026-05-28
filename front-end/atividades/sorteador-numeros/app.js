function sortear() {

    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {

        let numero = gerarNumeroAleatorio(de, ate);

        while(sorteados.includes(numero)) {
            numero = gerarNumeroAleatorio(de, ate);
        }
        
        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;


    alterarStatusDoBotão();
    solucao();
}

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusDoBotão() {
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

function reiniciar() {
    let quantidade = document.getElementById('quantidade').value = '';
    let de = document.getElementById('de').value = '';
    let ate = document.getElementById('ate').value = '';
    resultado.innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusDoBotão();
}