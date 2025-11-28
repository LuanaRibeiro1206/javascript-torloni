let informesuaidade = parseInt(prompt("Qual é a sua idade?"))

while (informesuaidade < 18) {
    
    informesuaidade = parseInt(prompt("Qual é sua idade?"))
}

if(informesuaidade >= 18){
    alert("você é maior de 18 anos!!")
}