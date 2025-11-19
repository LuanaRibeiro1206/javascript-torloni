let valorCompra = Number(prompt("Digite o valor total da compra:"));

let desconto = 0;

if (valorCompra <= 100) {
    desconto = 0;
} else if (valorCompra <= 200) {
    desconto = valorCompra * 0.10;
} else {
    desconto = valorCompra * 0.20;
}

let valorFinal = valorCompra - desconto;

alert("Valor final da compra: R$ " + valorFinal.toFixed(2));
