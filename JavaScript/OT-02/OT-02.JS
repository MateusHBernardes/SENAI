let animais = [];

animais.push("Macaco");
animais.push("Cachorro");
animais.push("Gato");

for (let i = 0; i < animais.length; i++) {

    console.log(animais[i]);
    
    
    
}

animais.shift();

animais.push("Cavalo");

console.log("")

animais[1] = "Tigre";

animais.unshift("Tubarão");
animais.unshift("Peixe");

for (let i = 0; i < animais.length; i++) {

    console.log(animais[i]);

}

console.log("")


animais[1] = "Girafa";

for (let i = 0; i < animais.length; i++) {

    console.log(animais[i]);

}

console.log("")

let frutas= ["Maçã", "Banana", "Laranja"];


for (let i = 0; i < frutas.length; i++) {

    console.log(frutas[i]);
    
}

console.log("")


let totalFrutas = frutas.length;

console.log(totalFrutas);