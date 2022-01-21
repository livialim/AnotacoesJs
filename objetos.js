// A estrutura de um objeto literal no JavaScript é composta por pares de chave: valor separados por vírgula, dentro de chaves { };

console.log("**********************objeto**********************")
const cliente = { //objeto cliente
    nome: "Liz",
    idade: 20,
    cpf: "123456789",
    email: "liz@gmail.com",
    plantas: ["Ophelia", "Petunia", "Pinho"]
}
// cliente.plantas.forEach(plantas => console.log(plantas)) // Para mais de uma string

console.log(`Meu nome é ${cliente.nome}, eu tenho ${cliente.idade} anos, meu CPF é ${cliente.cpf.substring(0,3)}******. Para contato meu email é ${cliente.email}`) //substring retorna o tanto de string que definirmos

// const chaves = ["nome", "idade", "cpf", "email"]
// chaves.forEach(info => console.log(cliente[info])) // as chaves para acessar variável

cliente.fone = "99894613"
console.log(cliente)

// Para o JavaScript, identificar/acessar uma chave de objeto utilizando uma VARIÁVEL, seja direto uma string ou seja uma posição em um array, precisamos utilizar a notação de colchete. "console.log(cliente[nome])"

console.log("***************delete*********create***************")

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
}
   delete objPersonagem.aliado //delete remove do objeto o valor da propriedade, assim como a chave.

   const objPersonagem2 = Object.create(objPersonagem) //objetos podem ser criados através do método Object.create():
   objPersonagem2.nome = "Hobbit"

console.log(objPersonagem)
console.log(`Novo personagem ${objPersonagem2.nome}. Aliado do Gandalf: ${objPersonagem.aliado}`)


console.log("********************desafio************************")
//Crie um objeto Peter Parker no Javascript de acordo com o que fizemos no vídeo.

const hero = {
    nome: "Peter Parker 🕸",
    idade: 35,
    altura: 1.77,
    frase: "Nós somos quem escolhemos ser 🧠",
    inimigos: {
        arqui_inimigo: "Duende Verde 🍀",
        as_vezes: "Deadpool 🐱‍👤"
    }
}
//deletar altura e adicionar signo, printar tudo
delete hero.altura
hero.signo = "Leão 🦁"
console.log(hero)


