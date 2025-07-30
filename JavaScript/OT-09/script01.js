console.log("1. Criar e Adicionar Valores ao Set: Crie um Set chamado frutas e adicione nele três frutas diferentes. Depois, tente adicionar uma fruta que já está no Set.");
console.log("");

let frutas = new Set();
frutas.add("maçã");
frutas.add("banana");
frutas.add("laranja");
frutas.add("maçã"); // Tentativa de adicionar uma fruta já existente
console.log("Frutas no Set:", frutas);