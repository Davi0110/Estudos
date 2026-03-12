alert("Bem-Vindo ao Jogo do Número Secreto");

let numeroMaximo = prompt("Escolha o Número Limite para o jogo.");
let numeroSecreto = parseInt(Math.random() * numeroMaximo) + 1;
let chute;
let tentativas = 1;

while (chute != numeroSecreto){

    let chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if (numeroSecreto == chute) {
        break;        
    }
        else { 
            tentativas++;
            if (chute > numeroSecreto){
                alert(`O número secreto é menor ${chute}`);
            }
            else {
                alert(`O número secreto é maior ${chute}`);
            }
        }
    }

    //operador ternario
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    
        alert(`Parabéns, você descobriu o Número Secreto ${numeroSecreto}, com ${tentativas} ${palavraTentativa}.`);

//estorei

console.log (numeroSecreto);