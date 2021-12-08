const destinos = new Array (
    `São Paulo`,
    `Curitiba`,
    `Bahia`,
    `Peru`
);
const idade = 15;
const acompanhada = true;
let passagem = true;
const destino = "Peru";

console.log("\nDestinos possíveis\n");
console.log(destinos);

const podeComprar = idade >= 18 && passagem == true || acompanhada == true ;

let destinoExiste = false;
let contador = 0;
while( contador<4){
    if (destinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador += 1;
}
console.log(`Destino existe: ${destinoExiste}\n`);

if (podeComprar && destinoExiste == true){
    console.log("Boa viagem!")
}
else{
    console.log("Desculpe, tivemos um erro!")
}
for (let i = 0 ; i < 4; i += 1){
    if (destinos[i] == destino){
        destinoExiste = true;
        break;
    }
}

// if (idade >= 18 || acompanhada == true){
//     console.log(`Destino escolhido ${destinos[1,1]}.`);
// }
// else{
//     console.log("\nMenor de idade não pode comprar passagem!");
//     passagem = false;
// }

// console.log("\nEmbarque:\n");
// if (idade >= 18 && passagem == true || idade < 18 && acompanhada == true && passagem == true){
//     console.log("Liberada. Boa viagem!\n")
// }
// else {
//     console.log("Sem passagem. Não pode embarcar!\n")
// }