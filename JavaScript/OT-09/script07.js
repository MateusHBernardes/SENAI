console.log("7. Criar um Set a Partir de um Array: Crie um array com alguns valores duplicados. Em seguida, crie um Set a partir desse array para remover as duplicatas.");
console.log("");

let numeros = [1, 2, 2, 3, 4, 4, 5];
let numerosUnicos = new Set(numeros); // Cria um Set a partir do array, removendo duplicatas
console.log(numerosUnicos); // Exibe o Set com os números únicos