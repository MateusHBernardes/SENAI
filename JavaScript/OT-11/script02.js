console.log("2. Diário de Bordo: Escreva um pequeno diário de bordo usando template literals, incluindo data, local e uma descrição do que aconteceu no dia.");
console.log("");

const date = "26/05/2025";
const place = "Home Office";
const description = "Hoje aprendi sobre template literals em JavaScript e como usá-los para criar textos dinâmicos.";

const diary = `
Diário de Bordo
Data: ${date}
Local: ${place}
Descrição: ${description}
`;

console.log(diary);