console.log("2. Acessar Valor no Map: Acesse o valor associado a uma das chaves no Map livros que você criou e imprima o nome do autor.");
console.log("");

let livros = new Map();
livros.set("Dom Casmurro", "Machado de Assis");
livros.set("O Guarani", "José de Alencar");
livros.set("Memórias Póstumas de Brás Cubas", "Machado de Assis");

console.log(livros.get("Dom Casmurro"));
