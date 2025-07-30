console.log("2. Verificar Valores no Set: Use o método has para verificar se uma fruta específica está no seu Set frutas.");
console.log("");

let frutas = new Set();
frutas.add("caqui");
frutas.add("banana");
frutas.add("laranja");
frutas.add("caqui"); // Tentativa de adicionar uma fruta já existente

console.log(frutas.has("caqui"));
console.log(frutas.has("maçã"));