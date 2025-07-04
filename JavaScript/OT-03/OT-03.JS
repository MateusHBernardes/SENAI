console.log("1. Criando um loop: Crie um loop for que imprima números de 0 a 10.");
console.log("");

let variavel

for(let i = 0; i<10;i++){
    console.log(i+1);
}

console.log("");
console.log("2. Loop com condição: Crie um loop for que imprima somente números ímpares de 0 a 20.");
console.log("");

for(let i = 0; i<20;i++){
    
    if(i % 2 == 0){
        console.log(i + " é par");
    }
}

console.log("");
console.log("3. Usando while: Crie um loop while que imprima números de 0 a 10.");
console.log("");

let i = 0; while (i < 10) {
    console.log(i + 1);
    i++;
}

console.log("");
console.log("4. Interrompendo um loop: Crie um loop for que imprima números de 0 a 100, mas interrompa a execução quando chegar ao número 50.");
console.log("");


let ii = 0; while (ii < 100) {
    
    if(ii === 50){
        break;
    }

    console.log(ii);
    ii++;
}

console.log("");
console.log("5. Pulando uma iteração: Crie um loop for que imprima números de 0 a 20, mas pule a impressão do número 13.");
console.log("");

for(let i = 0; i < 20; i++){
    if(i === 13){
        continue;
    }
    
    console.log(i);

}
console.log("");
console.log("6. Iterando um Array: Crie um array de nomes e use um loop for...of para imprimir cada nome do array.");
console.log("");

let nomes = ["Mateus", "Maria", "Pedro"];
for(let tripa of nomes){
    console.log(tripa);
}