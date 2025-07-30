console.log("2. Classe Veículo com Método de Velocidade: Desenvolva uma classe Veiculo com propriedades como marca, modelo e velocidadeMaxima. Adicione um método descrever que imprime uma descrição do veículo.");
console.log("");

class veiculo {
    constructor(marca, modelo, velocidadeMaxima) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
    }
    descrever() {
        console.log(`Veículo: ${this.marca} ${this.modelo}, Velocidade Máxima: ${this.velocidadeMaxima} km/h`);

    }
}