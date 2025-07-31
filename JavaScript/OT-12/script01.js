console.log("1. Criando uma Lista de Compras: Use o operador spread para combinar dois arrays de itens de supermercado em uma lista de compras.");
console.log("");

let list1 = ["Banana", "Maçã", "Laranja"];
let list2 = ["Manteiga", "Presunto", "Pão"];

let list3 = [...list1, ...list2];
console.log(list3);