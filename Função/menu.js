//1 
function conferirSequencia() {
   let primeironumero = parseInt(prompt("Digite o primeiro número da sua sequência "));
let segundonumero = parseInt(prompt("Digite o segundo número da sua sequência "));
let terceironumero = parseInt(prompt("Digite o terceiro número da sua sequência "));

if (primeironumero < segundonumero && segundonumero < terceironumero) {
     alert("Está em ordem crescente.");
}

// verificar o decrescente

if (primeironumero < segundonumero && segundonumero > terceironumero) {
     alert("Está em ordem decrescente")
     
}

// verificar o aleatório

else{
alert ("Os números estão em oredem aleatória.")
} 
}

//2
function descontoNaCompra() {
    let valorTotalCompra = parseFloat(prompt("Digite o valor total da compra: "));

    let desconto;

    if (valorTotalCompra <= 100) {
        desconto = 0;
    }
    
    // else if (valorTotalCompra > 100 && valorTotalCompra <= 200)
        else if (valorTotalCompra <= 200)
            {
                // desconto = 10/100;
                 desconto = 0.1;
    }

    else{
        // desconto = 20/100;
desconto = 0.2;
    }

    let valorFinal = valorTotalCompra - (valorTotalCompra*desconto);

    alert(valorFinal);
}
//3
function exibirNumerosPares() {
    for (let i = 2; i<=10; i= i+2){
console.log(i);
}
}

//4
function somarSequenciaDeNumeros() {
    let numero = 1; // variavel inicializadora
let soma = 0;

//Condição
while (numero <= 100) {
    soma = soma + numero; // Esta somando os numeros 
    numero++ //incremento de cada volta
}

alert("A soma dos numeros de 1 a 100 é: " + soma);
}

//5
function verificarNumeroDigitado() {
    let numeroEscolhido = prompt("Digite um número: ");

while (numeroEscolhido != 0) {
    numeroEscolhido = prompt("Por favor, digite novamente um número: ");
}
}