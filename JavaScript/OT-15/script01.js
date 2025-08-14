/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que
recebe um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
let isTruthy = function(value) {
    // Verifica se o valor é truthy ou falsy e retorna o resultado.
    return !!value;
};

console.log("");
// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log(isTruthy(false)); // false
console.log(isTruthy(0)); // false
console.log(isTruthy("")); // false
console.log(isTruthy(null)); // false
console.log(isTruthy(undefined)); // false
console.log(isTruthy(NaN)); // false

console.log("");
/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
console.log(isTruthy(true)); // true
console.log(isTruthy(1)); // true
console.log(isTruthy("Hello")); // true
console.log(isTruthy([])); // true
console.log(isTruthy({})); // true
console.log(isTruthy(function() {})); // true
console.log(isTruthy(Infinity)); // true
console.log(isTruthy(Symbol())); // true
console.log(isTruthy(new Date())); // true
console.log(isTruthy("0")); // true

console.log("");
/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades
*/
let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    placa: "ABC-1234",
    ano: 2020,
    cor: "Preto",
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0,

    mudarCor: function(novaCor) {
        // Atualiza a cor
        this.cor = novaCor;
    },

    obterCor: function() {
        // Retorna a cor atual
        return this.cor;
    },

    obterModelo: function() {
        // Retorna o modelo
        return this.modelo;
    },

    obterMarca: function() {
        // Retorna a marca
        return this.marca;
    },

    obterMarcaModelo: function() {
        // Retorna marca + modelo
        return `Esse carro é um ${this.obterMarca()} ${this.obterModelo()}`;
    },

    adicionarPessoas: function(numeroPessoas) {
        if (this.quantidadePessoas >= this.assentos) {
            return "O carro já está lotado!";
        }
        const pessoasRestantes = this.assentos - this.quantidadePessoas;
        if (numeroPessoas > pessoasRestantes) {
            return pessoasRestantes === 1
                ? "Só cabe mais 1 pessoa!"
                : `Só cabem mais ${pessoasRestantes} pessoas!`;
        }
        this.quantidadePessoas += numeroPessoas;
        return `Já temos ${this.quantidadePessoas} pessoas no carro!`;
    },

    removerPessoas: function(numeroPessoas) {
        if (this.quantidadePessoas === 0) {
            return "O carro já está vazio!";
        }
        if (numeroPessoas >= this.quantidadePessoas) {
            this.quantidadePessoas = 0;
            return "O carro agora está vazio!";
        }
        this.quantidadePessoas -= numeroPessoas;
        return `Agora temos ${this.quantidadePessoas} pessoas no carro!`;
    }
};

console.log("");
// Qual a cor atual do carro?
console.log(carro.obterCor());

console.log("");
// Mude a cor do carro para vermelho.
carro.mudarCor("Vermelho");

console.log("");
// E agora, qual a cor do carro?
console.log(carro.obterCor());

console.log("");
// Mude a cor do carro para verde musgo.
carro.mudarCor("Verde Musgo");

console.log("");
// E agora, qual a cor do carro?
console.log("Cor após mudança:", carro.obterCor());

console.log("");
// Qual a marca e modelo do carro?
console.log("Marca e modelo:", carro.obterMarcaModelo());

console.log("");
// Adicione 2 pessoas no carro.
console.log(carro.adicionarPessoas(2));

console.log("");
// Adicione mais 4 pessoas no carro.
console.log(carro.adicionarPessoas(4));

console.log("");
// Faça o carro encher.
console.log(carro.adicionarPessoas(4));

console.log("");
// Tire 4 pessoas do carro.
console.log(carro.removerPessoas(4));

console.log("");
// Adicione 10 pessoas no carro.
console.log(carro.adicionarPessoas(10));

console.log("");
// Quantas pessoas temos no carro?
console.log("Quantidade final de pessoas no carro:", carro.quantidadePessoas);
