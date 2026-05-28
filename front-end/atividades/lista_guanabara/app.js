function olaMundo(){
    alert('Olá, Mundo!');
}

function boasVindas(){
    let nome = document.getElementById('ex002').value;
    alert(`Olá ${nome}, é um prazer te conhecer!`);
}

function infoFuncionarios(){
    let nome = document.getElementById('ex003(1)').value;
    let salario = document.getElementById('ex003(2)').value;
    alert(`O funcionário(a) ${nome} tem um salário de R$${salario} em Junho.`);
}

function somaInteiros(){
    let num1 = parseInt(document.getElementById('ex004(1)').value);
    let num2 = parseInt(document.getElementById('ex004(2)').value);
    let num3 = parseInt(num1+num2);
    alert(`A soma entre ${num1} e ${num2} é ${num3}.`);
}

function mediaNumeros(){
    let num1 = parseInt(document.getElementById('ex005(1)').value);
    let num2 = parseInt(document.getElementById('ex005(2)').value);
    let num3 = [num1+num2]/2
    alert(`A média entre os números ${num1} e ${num2} é ${num3}.`);
}

function antecessorSucessor(){
    let num1 = document.getElementById('ex006').value;
    let sucessor = num1+1;
    let antecessor = num1-1;
    alert(`O sucessor de ${num1} é ${sucessor} e o antecessor é ${antecessor}.`);
}

function dobroTriplo(){
    let num1 = document.getElementById('ex007').value;
    let dobro = num1*2;
    let triplo = num1*3
    alert(`O dobro de ${num1} é ${dobro} e o triplo é ${triplo}.`)
}