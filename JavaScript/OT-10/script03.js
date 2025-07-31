console.log("3. Classe Estudante com Notas: Amplie a classe Estudante para incluir um array de notas. Adicione um método calcularMedia que retorna a média das notas.");
console.log("");

class Estudante {
    constructor(notas = []) {
        this.notas = notas;
    }

    calcularMedia() {
        const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
        return soma / this.notas.length;
    }
}

// Exemplo de uso:
const estudante = new Estudante([8, 7.5, 9, 10]);
console.log(`Média: ${estudante.calcularMedia()}`);