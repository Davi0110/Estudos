const botaoRegistrar = document.getElementById('btn_registrar');
const containerHistorico = document.getElementById('container_historico');

botaoRegistrar.addEventListener('click', (evento) =>{
    evento.preventDefault();

    const elementosContainer = document.createElement('p');
    const dataAtual = new Date();
    const dataFormatada = dataAtual.toLocaleString('pt-BR');
    elementosContainer.textContent = `Ação registrada em ${dataFormatada}`;
    containerHistorico.appendChild(elementosContainer);
});