let valortotalcompra = parseFloat(prompt("Digite o valor da compra 💵:"));

let desconto;

if (valortotalcompra <= 100) {
    desconto = 0;
}

else if(valortotalcompra <= 200)
{
    desconto = 0.1;
}

else{
    desconto = 0.2;
}

let valorfinal = valortotalcompra - (valortotalcompra*desconto);

alert(valorfinal);