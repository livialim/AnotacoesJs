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

const nums = [100, 200, 300, 400, 500, 600];
// o loop vai acontecer enquanto o valor de i for menor que 6
for (let i = 0; i < nums.length; i++){  // ++ aumenta em 1 o valor da variável i (i = i + 1)
    console.log(i, nums[i]) 
}

console.log("\nExplicação:\ncondição de parada i <= 5 está correta, a variável i que faz o controle do loop começa em 0 e ao fim de cada ciclo do loop,\né aumentada em 1 (i++). Quando o valor da variável de controle i chega a 6, depois de imprimir o número 5 no terminal,\na comparação i <= 5 retorna false e isso encerra o loop.\n")

for (let i = 0; i <= 5; i++){
    console.log(i)
}

