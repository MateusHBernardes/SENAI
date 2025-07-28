console.log("4. Iterar Sobre as Propriedades de um Objeto: Dado um objeto, use um loop for...in para iterar sobre todas as suas propriedades e imprimir cada uma delas.");
console.log("");

let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
}

for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}