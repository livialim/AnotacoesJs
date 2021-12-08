console.log("\n***************Soma com function******************")
function x(texto){
    console.log(texto)
}

function soma (){
    return 2 + 2;
}

x(soma());

console.log("\n**************Exibe lista com for******************")

let listaFuncionarios = ['José', 'Ana', 'Luiza']
let listaIdades = [22,19,33]

const exibeLista = (lista, descricao) => {
    e = ''
        for (let i = 0; i < lista.length; i++){
            e += '\n'+ descricao + lista [i]
        }
    return e;
}

console.log(exibeLista(listaFuncionarios, 'Funcionário: '))
console.log(exibeLista(listaIdades, "Idades: "))

console.log("\n****************Retorna um nome********************")
console.log(nome())

function nome (){
    return "\nLiz";
}
{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29
    console.log(respostaDeTudo, idade, pi)//segue a ordem determinada

}

