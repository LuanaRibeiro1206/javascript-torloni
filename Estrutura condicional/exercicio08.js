let peso = Number(prompt("Digite seu peso em kg:"));
let altura = Number(prompt("Digite sua altura em metros:"));

let imc = peso / (altura * altura);
let classificacao = "";

if (imc < 18.5) {
    classificacao = "Abaixo do peso";
} else if (imc < 24.9) {
    classificacao = "Peso normal";
} else if (imc < 29.9) {
    classificacao = "Sobrepeso";
} else if (imc < 34.9) {
    classificacao = "Obesidade grau 1";
} else if (imc < 39.9) {
    classificacao = "Obesidade grau 2";
} else {
    classificacao = "Obesidade grau 3";
}

alert("IMC: " + imc.toFixed(2) + "\nClassificação: " + classificacao);
