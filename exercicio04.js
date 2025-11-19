// Função para calcular e exibir a média
function calcularMedia() {
    // Recebe as 4 notas do aluno
    let nota1 = parseFloat(prompt("Digite a primeira nota:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota:"));
    let nota3 = parseFloat(prompt("Digite a terceira nota:"));
    let nota4 = parseFloat(prompt("Digite a quarta nota:"));

    // Calcula a média aritmética
    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    // Exibe a média
    alert(`A média do aluno é: ${media.toFixed(2)}`);

    // Verifica a situação do aluno com base na média
    if (media >= 7.0) {
        alert("APROVADO");
    } else if (media >= 5.0) {
        alert("RECUPERAÇÃO");
    } else {
        alert("REPROVADO");
    }
}

// Chama a função para rodar o programa
calcularMedia();