let elementoBtn = document.getElementById("btn");
let elementoIdLeadra = document.getElementById("tecnica");
let novoElemento = document.createElement("a");
novoElemento.textContent = "Funk do patinho | Bento e Totó";
novoElemento.href = "https://www.youtube.com/watch?v=ZL9pTiY1RPg&list=RDZL9pTiY1RPg&start_radio=1";

elementoBtn.addEventListener("click", () => {
    // alert("Você clicou no botão");

    // elementoBtn.style.backgroundColor = "red";
    
    document.body.appendChild(novoElemento);
    // document.body.removeChild(elementoIdLeadra);
    // console.log(document.body.children);

document.body.children[2].removeChild(elementoIdLeadra)
})