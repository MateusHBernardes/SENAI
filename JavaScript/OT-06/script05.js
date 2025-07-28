console.log("5. Entendendo Referências de Objetos: Crie um objeto livro com propriedades como titulo e autor. Em seguida, crie outra variável que referencie o objeto livro e modifique a propriedade titulo. Verifique se o objeto original foi alterado.");
console.log("");

let livro = {
    titulo: "1984",
    autor: "George Orwell",
};
let referenciaLivro = livro;
referenciaLivro.titulo = "Animal Farm";
console.log(livro.titulo); // Deve imprimir "Animal Farm"