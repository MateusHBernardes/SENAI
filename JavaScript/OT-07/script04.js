console.log("4. Usando Métodos do Map: size, delete, has: No seu Map livros, use o método size para imprimir o número de livros, delete para remover um livro pelo título e has para verificar se um livro ainda está no Map.");
console.log("");

let livros = new Map();
livros.set("Dom Casmurro", "Machado de Assis");
livros.set("O Guarani", "José de Alencar");
livros.set("Memórias Póstumas de Brás Cubas", "Machado de Assis");

// Imprimir o número de livros
console.log(`Número de livros: ${livros.size}`);
console.log("");
// Remover um livro pelo título
livros.delete("O Guarani");
console.log("");
// Verificar se um livro ainda está no Map
console.log(`O livro "O Guarani" está no Map? ${livros.has("O Guarani") ? "Sim" : "Não"}`);
