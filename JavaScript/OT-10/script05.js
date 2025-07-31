console.log("5. Jogo Simples com Classe: Crie uma classe Jogo com um método estático que gera um número aleatório e permite ao usuário adivinhar. O método retorna se o usuário acertou ou não.");
console.log("");

class Game{
    static #generateRandomNumber(){
        return Math.floor(Math.random() * 5) + 1;
    }

    static play(number){
        const randomNumber = this.#generateRandomNumber();
        console.log(`Resultado do jogo: ${randomNumber}`);
        
        number === randomNumber ? console.log("Parabéns, você ganhou!") : console.log("Que pena, você perdeu!");
    }
}

let number = 3;
Game.play(number);