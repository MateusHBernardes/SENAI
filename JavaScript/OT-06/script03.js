console.log("3. Criar um Método em um Objeto: Crie um objeto chamado calculadora com um método soma que aceite dois números e retorne a soma deles.");
console.log("");

let calculadora = {
    somar: function(a, b) {
        return a + b;
    },
};

let resultado = calculadora.somar(5, 3);
console.log(resultado); 