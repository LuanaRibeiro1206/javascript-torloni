let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
let num3 = parseFloat(prompt("Digite o terceiro número:"));


if (num1 < num2 && num2 < num3) {
    alert("Os números estão em ordem crescente.");
} 

if (num1 > num2 && num2 > num3) {
    alert("Os números estão em ordem decrescente.");
}

else{
    alert("Os números estão em ordem aleatória");
}