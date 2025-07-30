console.log("6. Iterar Sobre um Set: Use um loop for...of para iterar sobre o seu Set e imprimir cada valor.");
console.log("");

let frutas = new Set();
frutas.add("caqui");
frutas.add("banana");
frutas.add("laranja");

for (let qtdFrutas of frutas) {
    console.log(qtdFrutas); // Imprime cada fruta no Set
}