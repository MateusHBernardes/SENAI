console.log("3. Festa de Aniversário: Crie uma função que aceita um número variável de nomes e os imprime como lista de convidados para uma festa de aniversário, usando o operador spread para coletar os nomes.");
console.log("");

function birthdayPartyGuests(...names) {
    console.log("Lista de convidados para a festa de aniversário:");
    names.forEach((name, index) => {
        console.log(`${index + 1}. ${name}`);
    });
}

birthdayPartyGuests("Ana", "Carlos", "Beatriz", "João");