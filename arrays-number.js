console.log("**********************Array************************")

const notas = [10, 6.5, 8, 7.5]
//let media = (nota1 + nota2 + nota3 + nota4)/4
let media = (notas [0] + notas [1] + notas [2] + notas [3]) / notas.length
console.log(media)

console.log("*****************Array com push********************")

const notas = [10, 6, 8]
notas.push(7) //push() Adiciona um elemento na última posição.
console.log(notas)
let media = (notas[0] + notas[1] + notas [2] + notas [3]) / notas.length
console.log(media)

console.log("****************Array com pop**********************")

const notas = [10, 7, 8, 5, 10];
notas.pop(); //pop() Retira o último elemento do array.
console.log(notas);

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(`A media é ${media}`);

console.log("**********includes****************indexOf************")

const alunos = ["João", "Ana", "Julia", "Paula"];
const mediaAlunos = [10, 7, 8, 7];

let mediaLista = [alunos, mediaAlunos];

const exibeNotas = (nomeAluno) => {
    if (mediaLista[0].includes(nomeAluno)){   // includes -> booleano
        let indice = mediaLista[0].indexOf(nomeAluno)    //indexOf -> número do indíce
        return mediaLista[0][indice] + ', sua nota é ' + mediaLista[1] [indice];
    }
    else{
        return "Aluno não está cadastrado!"
    }
};

console.log(exibeNotas("Liz"))

console.log("****************Imprimir com for***********************")

//vai imprimir os números com os respectivos indíces
const nums = [100, 200, 300, 400, 500, 600];
// o loop vai acontecer enquanto o valor de i for menor que 6
for (let i = 0; i < nums.length; i++){  // ++ aumenta em 1 o valor da variável i (i = i + 1)
    console.log(i, nums[i]) 
}
//Explicação: condição de parada i <= 5 está correta, a variável i que faz o controle do loop começa em 0 e ao fim de cada ciclo do loop, é aumentada em 1 (i++). Quando o valor da variável de controle i chega a 6, depois de imprimir o número 5 no terminal, a comparação i <= 5 retorna false e isso encerra o loop.

for (let i = 0; i <= 5; i++){
    console.log(i)
}

console.log("***********************forEach************************")

const nums = [10, 6.5, 8, 7.5];
let soma = 0;
// nums.forEach(nota => {
//     soma += nota
// } )
nums.forEach(function(nota){ // no forEach temos uma função que recebe um elemento
    soma += nota
} )

let media = soma / nums.length 

console.log(`A media é ${media}`)

console.log("************************map*****************************")

const array = [10, 9, 8, 7, 6];

const atualizacao = array.map(nota => nota + 1) // map() atualiza a array "da novos valores"
console.log(atualizacao)

const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];
const upper = nomes.map(nomes => nomes.toUpperCase()); //toUpperCase é um método, métodos tem () vazio
console.log(upper) 

console.log("**************************filter***************************")

const nomes = ["Ana", "Pedro", "Maria", "Mauro"];
const notas = [7, 4.5, 8, 7.5];

const reprovados = nomes.filter((_, indice) => notas [indice] < 6); // "_" mostra que tem um parâmetro mas n está sendo usado
console.log(`Reprovados: ${reprovados}`)

console.log("*************************reduce***************************")
//método reduce() “reduzir” uma lista de números para um único valor.
const notas = [7, 4.5, 8, 7.5];
const media = notas.reduce((acum, atual) => atual + acum, 0) / notas.length
console.log(`A média é: ${media}`)