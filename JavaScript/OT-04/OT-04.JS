const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function input(prompt) {
    return new Promise((resolve) => {
        rl.question(prompt, resolve);
    });
}

async function main() {
    console.log("1) Classificação por Idade:");
    console.log("");

    let idade = await input("Digite sua idade: ");
    idade = Number(idade);

    if (idade < 13) {
        console.log("Criança");
    } else if (idade >= 13 && idade < 18) {
        console.log("Adolescente");
    } else if (idade >= 18 && idade < 65) {
        console.log("Adulto");
    } else {
        console.log("Idoso");
    }

    console.log("");
    console.log("2) Jogo de Adivinhação com Switch:");
    console.log("");

    const sorteado = Math.floor(Math.random() * 5) + 1;
    let tentativa = await input("Tente adivinhar o número entre 1 e 5: ");

    switch (tentativa) {
        case sorteado.toString():
            console.log("Você acertou!");
            break;
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
            console.log(`Você errou! O número correto era ${sorteado}.`);
            break;
        default:
            console.log("Número inválido.");
    }

    console.log("");
    console.log("3) Avaliação de Notas:");
    console.log("");

    let nota = await input("Digite a nota do aluno (0 a 10): ");
    nota = Number(nota);

    switch (true) {
        case (nota < 6):
            console.log("Reprovado");
            break;
        case (nota >= 6 && nota <= 7):
            console.log("Recuperação");
            break;
        case (nota > 7 && nota <= 10):
            console.log("Aprovado");
            break;
        default:
            console.log("Nota inválida");
    }

    rl.close();
}

main();
