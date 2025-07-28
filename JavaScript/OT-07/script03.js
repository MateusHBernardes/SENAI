console.log("3. Iterar Sobre um Map: Use um loop for...of para iterar sobre o Map livros e imprimir todos os pares chave-valor.");
console.log("");

let livros = new Map();
livros.set("Dom Casmurro", "Machado de Assis");
livros.set("O Guarani", "José de Alencar");
livros.set("Memórias Póstumas de Brás Cubas", "Machado de Assis");

for (let [titulo, autor] of livros) {
    console.log(`Título: ${titulo}, Autor: ${autor}`);
}