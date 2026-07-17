//Declaração e captura dos itens no HTML
const inputItem = document.getElementById('input-item');
const botaoAdicionar = document.getElementById('adicionar-item');
const listaDeCompras = document.getElementById('lista-de-compras');
let contador = 0;

//Fofoqueiro de eventos
botaoAdicionar.addEventListener('click', (evento) =>{
    evento.preventDefault();
    
    //Verifica se o usuário preencheu ou não o campo de input
    if (inputItem.value == ""){
        alert("Por favor, coloque algum item no campo");
        return
    }

    //Cria o LI do HTML
    const itemDaLista = document.createElement('li');

    //Cria a Div e inclua as classes
    const containerDaLista = document.createElement('div');
    containerDaLista.classList = ('lista-item-container');

    //Cria o 'input' do formulário e adiciona os atributos e ID
    const inputDaLista = document.createElement('input');
    inputDaLista.type = ('checkbox');
    inputDaLista.id = ('checkbox' + contador++);

    //Cria o parágrado na lista
    const nomeItemDaLista = document.createElement('p');
    nomeItemDaLista.innerText = inputItem.value,

    //Amarra os elementos herdados (pai - apendicite da Criança)
    containerDaLista.appendChild(inputDaLista);
    containerDaLista.appendChild(nomeItemDaLista);

    itemDaLista.appendChild(containerDaLista);
    listaDeCompras.appendChild(itemDaLista);
})