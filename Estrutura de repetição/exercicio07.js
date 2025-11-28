// 7. Faça um programa que receba um número do usuário e mostre
// no console a contagem regressiva até 0.s

let numeroEscolhido = prompt("Digite um número positivo: ");


while (numeroEscolhido > -1) {
    //So entra no while se a condicao for verdadeira

    console.log(numeroEscolhido); 
    // numeroEscolhido = numeroEscolhido -1;
    numeroEscolhido--; //decrementa o valor escolhido, ou seja, faz a contagem regressiva
}