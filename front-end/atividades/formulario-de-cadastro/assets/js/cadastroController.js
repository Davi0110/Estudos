import { buscarEnderecoPorCep } from './viaCepService.js';

// Importa as funções responsáveis pela manipulação visual da página (UI/View)
import {
    limparFeedbacks,
    preencherFormulario,
    exibirSucesso,
    exibirErro
} from './casdastroView.js';

// Seleciona o elemento de input do CEP na árvore do DOM
const inputCep = document.getElementById('cep');

inputCep.addEventListener('focusout', async () => {
    const valorCep = inputCep.value;

    limparFeedbacks();

    try {
        const dadosEndereco = await buscarEnderecoPorCep(valorCep);

        preencherFormulario(dadosEndereco);

        exibirSucesso('Endereço localizado com sucesso!');

    } catch (erro) {

        if (erro.message === 'CEP não encontrado.') {
            exibirErro('CEP não encontrado.');
        } else {
            exibirErro('CEP inválido.');
        }
    }
}
);