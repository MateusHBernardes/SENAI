console.log("2. Atualizando um Perfil de Usuário: Crie um objeto usuario com propriedades como nome e email. Use o operador spread para criar um novo objeto com os dados do usuário e uma propriedade adicional status.");
console.log("");

let user = {
    name: "João",
    email: "joao@gmail.com"
};

let userWithStatus = {
    ...user,
    status: "active"
};

console.log(userWithStatus);