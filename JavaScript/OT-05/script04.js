console.log("4. IMC: Escreva uma função que calcula o Índice de Massa Corporal (IMC)");
console.log("");

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

console.log("IMC para peso 70kg e altura 1.75m: " + calcularIMC(60, 1.72)); // 20.281233098972418
console.log("IMC para peso 70kg e altura 1.75m: " + calcularIMC(60, 1.72).toFixed(2)); // 20.28