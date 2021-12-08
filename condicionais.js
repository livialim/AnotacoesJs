const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);
const idade = 21;
const acompanhada = true;
const passagem = true;

console.log("Destinos possíveis");
console.log(listaDestinos);

// if (idade >= 18){
//     console.log("Comprador maior de idade.")
//     listaDestinos.splice(1,1);
// }
// else{
//     if(acompanhada){
//         console.log("Está acompanhada, pode comprar.");
//         listaDestinos.splice(1,1);
//     }
//     else{
//         console.log("Não é maior de idade.");
//     }
// }
// console.log(listaDestinos);

if (idade >= 18 || acompanhada == true){
    console.log("Comprador maior de idade.");
    listaDestinos.splice(2,1);
}
else{
    console.log("Não é maior de idade.");
}
console.log("\nEmbarque: \n");
if(idade >= 18 && passagem){
    console.log("Boa viagem!");
}
else{
    console.log("Não pode viajar!");
}

