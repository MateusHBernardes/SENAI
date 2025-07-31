console.log("5. Mesclando Objetos com Informações Complementares: Crie dois objetos, um com informações básicas de um filme (título e diretor) e outro com informações complementares (ano e gênero). Use o operador spread para mesclar esses objetos em um único objeto filme.");
console.log("");

let movie = {
    title: "Até o Último Homem",
    director: "Mel Gibson"
}

let movieAditionalAttributes = {
    ...movie,
    year: 2016,
    genre: "Guerra"
}

console.log(movie);
console.log(movieAditionalAttributes);