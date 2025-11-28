let mercedes = {
    modelo: "G63", 
    ano: 2025,
    fabricante: "mercedes",
    cor: "preto fosco",
    acelerar(){
        console.log("Acelerando...vrum...vrum...");
    },
    freiar(){
        console.log("Freiando...");
        
    }
};

console.log(mercedes.modelo);
console.log(mercedes.acelerar());

//Criar um objeto professor Tadeu ou Jonas
//3 propriedades nome, nif, salario
//2 comportamentos 
// De escolha propria uma propriedade e comportamento

let professorTadeu = {
    Nome: "Felipe Tadeu",
    NIF: 2874058,
    Salário: 10.500,
    Datadenascimento: new Date(1998, 6, 30),
    hobbies: ["Jogar de madrugada", "Fazer codigos"],

   atribuirNota() { },
   baterPonto() {
    let horariobatido = new Date(2025, 10, 28 ,17, 5);

    console.log(horariobatido);

   }
};

console.log(professorTadeu.hobbies);
console.log(professorTadeu.Nome);
console.log(professorTadeu.NIF);


