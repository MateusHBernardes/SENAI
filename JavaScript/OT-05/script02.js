console.log("2. Função para Verificar Número Par: Faça uma função que recebe um número e retorna true se for par e false se for ímpar.");
console.log("");

function isEven(number) {
    return number % 2 === 0;
}

console.log("Número 4 é par? " + isEven(4)); // true
console.log("Número 5 é par? " + isEven(5)); // false
