
const elementoErro = document.getElementById('erro');

export function limparFeedbacks() {
        elementoErro.textContent = '';
        elementoErro.className = '';
}

export function preencherFormulario(dadosEndereco) {
    const campoCidade = document.getElementById('cidade');
    const campoEndereco = document.getElementById('endereco');
    const campoEstado = document.getElementById('estado');
    const campoBairro = document.getElementById('bairro');

    campoCidade.value = dadosEndereco.localidade;
    campoEndereco.value = dadosEndereco.logradouro;
    campoEstado.value = dadosEndereco.uf;
    campoBairro.value = dadosEndereco.bairro;
}

export function exibirSucesso(mensagem) {
        elementoErro.textContent = mensagem;
        elementoErro.className = 'alert alert-success';
    }

export function exibirErro(mensagem) {
        elementoErro.textContent = mensagem;
        elementoErro.className = 'alert alert-danger';
}