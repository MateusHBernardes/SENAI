console.log("Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! 😄");
console.log("");
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

function soma(a, b) {
  return a + b;
}

console.log("");
// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.

let resultadoSoma = soma(10, 5) + 5;

console.log("");
// Qual o valor atualizado dessa variável?

console.log("O valor atualizado da variável é 20, pois a função soma(10, 5) retorna 15, e somando 5, o resultado final é 20.");
console.log(resultadoSoma); // 20

console.log("");
// Declare uma nova variável, sem valor.

let valorVariavel;

console.log("");
/*
Crie uma função que adicione um valor à variável criada acima, e retorne a
string:
O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/

function atualizarVariavel(novoValor) {
  valorVariavel = novoValor;
  return `O valor da variável agora é ${valorVariavel}.`;
}

console.log("");
// Invoque a função criada acima.

console.log(atualizarVariavel(30)); 

console.log("");
// Qual o retorno da função? (Use comentários de bloco).

// O valor da variável agora é 30.

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função
deve retornar a string:
Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando
`2` ao resultado da multiplicação.
*/

function multiplicarEAdicionar(a, b, c) {
  if (a === undefined || b === undefined || c === undefined) {
    return "Preencha todos os valores corretamente!";
  }
  return (a * b * c) + 2;
}

console.log("");
// Invoque a função criada acima, passando só dois números como argumento.

console.log(multiplicarEAdicionar(2, 3));

console.log("");
// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

// O resultado da invocação acima é "Preencha todos os valores corretamente!", pois apenas dois argumentos foram passados.

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.

console.log(multiplicarEAdicionar(2, 3, 4));

console.log("");
// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

// O resultado da invocação acima é 26, pois (2 * 3 * 4) + 2 = 24 + 2 = 26.

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o
segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function manipularArgumentos(arg1, arg2, arg3) {
    if (arg1 === undefined && arg2 === undefined && arg3 === undefined) {
        return false; // Nenhum argumento passado
    } else if (arg1 !== undefined && arg2 === undefined && arg3 === undefined) {
        return arg1; // Somente um argumento passado
    } else if (arg1 !== undefined && arg2 !== undefined && arg3 === undefined) {
        return arg1 + arg2; // Dois argumentos passados
    } else if (arg1 !== undefined && arg2 !== undefined && arg3 !== undefined) {
        return (arg1 + arg2) / arg3; // Três argumentos passados
    } else {
        return null; // Nenhuma das condições acima atendidas
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

console.log(manipularArgumentos()); // false - Nenhum argumento passado
console.log(manipularArgumentos(5)); // 5 - Somente um argumento passado