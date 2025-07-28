console.log("5. Map com Tipos de Chaves Diferentes: Crie um Map chamado colecao que contém diferentes tipos de chaves (como string, number, object) e seus respectivos valores.");
console.log("");

let colecao = new Map();
colecao.set("Livro", "Dom Casmurro");
colecao.set(42, "Número 42");
colecao.set({ nome: "Objeto" }, "Valor do Objeto");
// Imprimindo os pares chave-valor do Map colecao
for (let [chave, valor] of colecao) {
    console.log(`Chave: ${chave}, Valor: ${valor}`);
}
