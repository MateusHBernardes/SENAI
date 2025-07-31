console.log("4. Clonando um Array de Músicas: Dado um array de músicas, crie uma cópia do array usando o operador spread. Altere um elemento no array copiado e verifique se o array original permanece inalterado.");
console.log("");

let music1 = ["Rehab", "Another One Bites The Dust", "Bohemian Rhapsody"];

let music2 = [...music1, "Callifornication"];

console.log(music1);
console.log(music2);