console.log("6. Criando um Menu de Restaurante Variável: Faça uma função criarMenu que aceita vários itens (entradas, pratos principais, sobremesas) como arrays e usa o operador spread para criar um único array de menu");
console.log("");

function menu(...foods) {
    console.log("Cardápio:");
    foods.forEach((name, index) => {
        console.log(`${index + 1}. ${name}`);
    });
}

menu("Pizza", "Hambúrguer", "Salada", "Sushi");