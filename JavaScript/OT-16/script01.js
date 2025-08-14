/*
Crie uma variável qualquer, que receba um array com alguns valores
aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let arrayAleatorio = [42, "Mateus", true, 3.14, { cor: "azul" }];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornaArray(arr) {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retornaArray(arrayAleatorio)[2]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores;
e o
segundo, um número. A função deve retornar o valor de um índice do array
que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o
número passado no
segundo parâmetro.
*/
function retornaValorIndice(arr, indice) {
    return arr[indice];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let arrayVariado = ["livro", 99, false, { nome: "João" }, [1, 2, 3]];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
for (let i = 0; i < arrayVariado.length; i++) {
    console.log(retornaValorIndice(arrayVariado, i));
}

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome
do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
- `quantidadePaginas` - Number (quantidade de páginas)
- `autor` - String
- `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nomeDoLivro) {
    let livros = {
        "Senhor dos Anéis": {
            quantidadePaginas: 1178,
            autor: "J.R.R. Tolkien",
            editora: "HarperCollins"
        },
        "1984": {
            quantidadePaginas: 328,
            autor: "George Orwell",
            editora: "Companhia das Letras"
        },
        "Clean Code": {
            quantidadePaginas: 464,
            autor: "Robert C. Martin",
            editora: "Prentice Hall"
        }
    };

    return nomeDoLivro ? livros[nomeDoLivro] : livros;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro
qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
let nomeLivro1 = "1984";
console.log(`O livro ${nomeLivro1} tem ${book(nomeLivro1).quantidadePaginas} páginas!`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer,
usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
let nomeLivro2 = "Clean Code";
console.log(`O autor do livro ${nomeLivro2} é ${book(nomeLivro2).autor}.`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer,
usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
let nomeLivro3 = "Senhor dos Anéis";
console.log(`O livro ${nomeLivro3} foi publicado pela editora ${book(nomeLivro3).editora}.`);
