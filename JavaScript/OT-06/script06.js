console.log("6. Usando Métodos Avançados de Objeto: Dado um objeto, use o método Object.keys() para listar todas as chaves do objeto. Repita o processo com Object.values() para listar todos os valores.");
console.log("");

let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
};
let chaves = Object.keys(carro);
let valores = Object.values(carro);
console.log("Chaves do objeto carro:", chaves);
console.log("Valores do objeto carro:", valores);