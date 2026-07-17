const inputItem = document.getElementById('input_item');
const botao = document.getElementById('adicionar_Button');
const listaDeFilmes = document.getElementById('lista_de_filmes');

function adicionarFilme(event) {

    event.preventDefault();

    // Boa prática: usar ===
    if (inputItem.value === '') {
        alert('Por favor, digite um filme!');
        return;
    }

    const li = document.createElement('li');
    li.textContent = inputItem.value;
    listaDeFilmes.appendChild(li);

    inputItem.value = '';
}

botao.addEventListener('click', adicionarFilme);

inputItem.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        adicionarFilme(event);
    }
});

