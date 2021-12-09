//Alice quer viajar, ela tem 16 anos e seus pais prometeram que se ela tirasse uma média 9 na escola eles dariam a viagem para onde ela escolhece. 
//A companhia aerea não aceita menores de idade sem acompanhantes
//Para embarque precisa ter passagem

const notas = [9, 8, 9, 10]
const media = notas.reduce((acum, atual) => atual + acum, 0) / notas.length
console.log(`\nSaiu o resultado da média da Alice\nSua nota foi ${media}!\nAlice vai poder viajar! 🎉🥳`)

const lista = new Array(
    `Pêru`,
    `Chile`,
    `França`,
    `Espanha`,
    `Suiça`,
    `Japão`
);

console.log("\nAlice foi pesquisar os destinos disponíveis, e os que ela teve interrese são:")
console.log(lista)

console.log("\nA idade mínima para comprar a passagem é 18, logo ela precisa de um acompanhante para poder viajar. Sua mãe concordou em ir com ela.")
const idade = 18;
const acompanhada = true;
const passagem = true;

if (idade <= 18 && passagem === true && acompanhada === true){
    console.log("\nPassagem comprada!")
}
else {
    console.log("\nNão pode viajar. Passagem negada!")
}
console.log(`O destino que ela escolheu foi: ${lista[3]} ✈`)
