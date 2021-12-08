// console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const riodeJaneiro = `Rio de Janeiro`;
const listaDestinos = new Array(
    `Salvador`,
    ` São Paulo`,
    ` Rio de Janeiro`,
    ` Curitiba`
);
//listaDestinos.push(`Curitiba`); //adicionando um item a lista, apagar depois de rodar
console.log(`Destinos possíveis:\n ${listaDestinos}\n`);

listaDestinos.splice(1,1); //excluindo um item (São Paulo)
console.log(`Passagens para São Paulo estão esgotadas!\n ${listaDestinos}\n`); 
console.log(`Seu destino é "${listaDestinos [0]}". Boa viagem!`); // "[]" imprime um item da lista