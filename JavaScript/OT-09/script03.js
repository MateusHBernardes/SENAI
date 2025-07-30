console.log("3. Remover Valores do Set: Use o método delete para remover uma fruta do seu Set frutas.");
console.log("");

let frutas = new Set();
frutas.add("caqui");
frutas.add("banana");
frutas.add("laranja");

frutas.delete("banana"); // Remove a fruta "banana"
console.log(frutas); // Exibe o Set após a remoção