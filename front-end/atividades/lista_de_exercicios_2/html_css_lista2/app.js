//ex001
function textoDesafio () {
let titulo = document.querySelector('h1');
h1.innerHTML = 'Hora do desafio.';
}

//ex002
function exibirConsole() {
    console.log('O botão foi clicado.');
}

//ex003
function alertaUsuario() {
    alert("Eu amo JS.");
}

//ex004
function cidadeBrasil() {
    let cidade = prompt("Insira o nome de uma cidade no Brasil");
    alert(`Estive em ${cidade} e lembrei de você.`);
}

//ex005
function somaInt() {
    let num1 = parseInt(prompt("Insira um número"));
    let num2 = parseInt(prompt("Insira outro número"));
    let resultado = num1+num2;
    alert(`A soma entre os números ${num1} e ${num2} resulta em ${resultado}.`);
}

//ex006
function olaMundo() {
    console.log("Olá, mundo!");
}

//ex007
function exibirNome() {
    let msgNome = document.getElementById('inputExSete').value;
    alert(`Olá, ${msgNome}`);
    
}

//ex008
function numDobro() {
    let num1 = parseInt(document.getElementById('inputNumber2').value);
    let num2 = parseInt(document.getElementById('inputNumber3').value);
    let resultado = num1 * num2;
    let msg = document.getElementById('resultadoex08');
    msg.textContent = (`O resultado da multiplicação é ${resultado}`);
}

//ex009
function mediaNum() {
    let num1 = parseInt(document.getElementById('inputNumber3').value);
    let num2 = parseInt(document.getElementById('inputNumber4').value);
    let num3 = parseInt(document.getElementById('inputNumber5').value);
    let media = document.getElementById('resultadoex009');
    media.innerHTML = parseInt((num1+num2+num3)/3);
}

//ex010
function maiorNum() {
    let campo = document.getElementById('resultadoex010');
    let num1 = parseInt(document.getElementById('inputNumber6').value);
    let num2 = parseInt(document.getElementById('inputNumber7').value);
    if(num1>num2) {
        campo.innerHTML = `O maior número é ${num1}`;
    }else{
        campo.innerHTML = `O maior número é ${num2}`;
    }
}

//ex011
function numQuadrado() {
    let num1 = document.getElementById('inputNumber8').value;
    let numResultado = document.getElementById('resultadoex011');
    numResultado.innerHTML = num1**2;
}

//ex012
function indiceMassaCorporal() {
    let peso = document.getElementById('inputNumber9').value;
    let altura = document.getElementById('inputNumber10').value;
    let imc = document.getElementById('resultadoex012');
    imc.innerHTML = parseInt(peso/(altura**2));
}

//ex013
function fatorial() {
    let num1 = document.getElementById('inputNumber11').value;
    let multi = 1;
    //inicio ; parada; incremento
    //o usuário escreve um número qualquer no campo, a variável num1 é a que recebe o valor inserido pelo usuário no campo, a variavel multi recebe 1, pq ela é a que começa multiplicando, não pode ser 0 pq todo número*0 = 0, o for tem a variavel i, que recebe inicialmente 1, enquanto o i for menor ou igual ao num1 o for vai fazer uma verificação, caso essa condição seja verdadeira o i aumenta em 1, e no final o resultado do fatorial aparece no campo de resultado.
    for(let i=1; i<=num1; i++){   
        let fatorial = multi*=i;//resultado = resultado*contador;
        let resultado = document.getElementById('resultadoex013');
        resultado.innerHTML = fatorial
    }

    
}

//ex014
function conversao() {
    let dolar = document.getElementById('inputNumber12').value;
    let real = document.getElementById('resultadoex014');
    let valorConvertido = dolar*4.80;
    real.innerHTML = `R$ ${valorConvertido}`;
}

//ex015
function medidasRetangulo() {
    let altura = document.getElementById('inputNumber13').value;
    let base = document.getElementById('inputNumber14').value;
    area = base*altura;
    perimetro = altura*2 + base*2;
    resultado = document.getElementById('resultadoex015');
    resultado.innerHTML = `A área do retângulo é ${area}cm² e o perímetro é ${perimetro}cm.`;
}

//ex016
function medidasCirculo() {
    let raio = document.getElementById('inputNumber15').value;
    let resultado = document.getElementById('resultadoex016');
    let pi = 3.14
    let area = pi*raio**2;
    let perimetro = 2*pi*raio;
    resultado.innerHTML = `A medida de área do círculo é ${area}cm² e o perímetro é ${perimetro}cm`;

}

//ex017
function numTabuada() {
    let numero = document.getElementById('inputNumber16').value;
    let tabuada = document.getElementById('resultadoex017');
    let num1 = document.getElementById('tabuada01').value;
}

//ex018
function listaGenerica(){
    let listaGenerica = [];
    let resultado = document.getElementById('resultado_exercicios');
    resultado.innerHTML = listaGenerica;
}



//ex019
let linguagensProg = [];
function linguagemProg1(){
     let linguagensProg = ["JavaScript", "C", "C++", "Kotlin", "Python"];
     let resultado = document.getElementById('resultado_exercicios');
     resultado.innerHTML = linguagensProg;
}
   

//ex020
function linguagemProg2(){
     let linguagensProg = ["JavaScript", "C", "C++", "Kotlin", "Python"];
     let add = document.getElementById('input_exercicios').value;
     let resultado = document.getElementById('resultado_exercicios');
     linguagensProg.push(add);
     resultado.textContent = linguagensProg;
}
     
//ex021
function listaPedro(){
    let tresElementos = ['Pedro', 'Tiago', 'João'];
    console.log(tresElementos[0])
}

//ex022
function listaTiago(){
    let tresElementos = ['Pedro', 'Tiago', 'João'];
    console.log(tresElementos[1]);
}

//ex023
function listaJoao(){
    let tresElementos = ['Pedro', 'Tiago', 'João'];
    console.log(tresElementos[2]);
}

//ex024
let contadorPalavras = [];
function adicionar(){
    let campoAdd = document.getElementById('palavra-ex24').value;
    contadorPalavras.push(campoAdd);
    contadorPalavras.length;
    document.getElementById('contador-ex24').textContent = contadorPalavras.length;
    

}
function reiniciar(){
    contadorPalavras = [];
    document.getElementById('palavra-ex24').value = '';
    document.getElementById('contador-ex24').textContent = contadorPalavras.length;
}

//ex025
function primeiroNome(){
    let campoNome = document.getElementById('nome-completo-ex25').value;
    let primeiroNome = document.getElementById('resultado-ex25');
    primeiroNome.textContent = campoNome.split(" ")[0];
}

//ex026
let precoProduto = [];
let nomeProduto = [];
function adicionar(){
    let precoTotal = 0;
    let campoProduto = document.getElementById('produto-ex26').value;
    let campoPreco = Number(document.getElementById('preco-ex26').value);
    precoProduto.push(campoPreco);
    nomeProduto.push(campoProduto);
    let lista = document.getElementById('lista-produtos-ex26');
    let total = document.getElementById('total-ex26');
    lista.textContent =  nomeProduto;

    for(let i=0; i < precoProduto.length; i++){
        precoTotal += precoProduto[i];
    }
    console.log(i);
}

function reiniciar(){
    let lista = document.getElementById('lista-produtos-ex26');
    let total = document.getElementById('total-ex26');
    lista.textContent = nomeProduto.length = '';
}
