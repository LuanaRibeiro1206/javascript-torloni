// DOM é a arvore/fluxo do meu documento HTML
// Ele serve para que o js consiga manipular (visualizar, editar, criar e excluir)
//DOM torna os elementos HTML em Objetos para que o js consiga acessar de fato

//let elementobody = document.getElementsByTagName("body");

//console.log(elementobody)

//acessar pela tag h1 

//let elementoh1 = document.getElementsByTagName("h1");

//acessando o elemento pela sua posição
//console.log(elementoh1[0].textContent = "Pera");

//teste
//let elementop = document.getElementsByTagName("p")

//elementop [0].textContent = "doce"

//console.log()




// exibe id tecnica
let exibeId = document.getElementById("tecnica")


//exibe os elementos que possuem a class jogador

let exibeClass = document.getElementsByClassName("jogador")

console.log(exibeClass);


//exibe o item 4 dos elementos que possuem a class jogador



console.log(exibeClass[3]);

//muda o texto do conteudo do item da 3 posicao dos elementos que possuem a class jogador 

exibeClass[3].textContent = "macarrão"

//mude a cor da fonte do item 3 posicaodos elementos que possuem a class jogador 

exibeClass[3].style.color = "blue";