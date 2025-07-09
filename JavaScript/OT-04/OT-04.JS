console.log("1) Classificação por Idade: Escreva um programa que classifica uma pessoa em categorias de idade: 'criança' (menos de 13 anos), 'adolescente' (entre 13 e 17 anos), 'adulto' (entre 18 e 64 anos) e 'idoso' (65 anos ou mais). Use a estrutura if/else/else if.");
console.log("");

let idade = 0;

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
console.log("2) Jogo de Adivinhação com Switch: Desenvolva um jogo simples de adivinhação onde o usuário tenta adivinhar um número entre 1 e 5. Use switch para verificar a escolha e imprimir se acertou ou não.");
console.log("");


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numeroAleatorio = Math.floor(Math.random() * 5) + 1;

rl.question("Tente adivinhar o número entre 1 e 5: ", (resposta) => {
  const palpite = parseInt(resposta);

  switch (palpite) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      if (palpite === numeroAleatorio) {
        console.log(`🎉 Parabéns! Você acertou! O número era ${numeroAleatorio}.`);
      } else {
        console.log(`❌ Que pena! Você errou. O número era ${numeroAleatorio}.`);
      }
      break;
    default:
      console.log("⚠️ Número inválido. Digite um valor entre 1 e 5.");
      break;
  }

  rl.close();
});

console.log("");
console.log("3) Avaliação de Notas: Crie um programa que, dada uma nota de um aluno, classifica a nota como 'Reprovado' (menos de 6), 'Recuperação' (entre 6 e 7), ou 'Aprovado' (mais de 7). Use switch.");
console.log("");

let nota = 0; // altere aqui para testar diferentes notas

switch (true) {
  case (nota < 6):
    console.log("Reprovado");
    break;
  case (nota >= 6 && nota <= 7):
    console.log("Recuperação");
    break;
  case (nota > 7):
    console.log("Aprovado");
    break;
  default:
    console.log("Nota inválida");
}
