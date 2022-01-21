console.log("******função*********for in*********typeof*********keys****")
// Aqui a função, ela é também um conjunto de chaves e valores, ela tem uma chave depositar e o valor dela é uma função, ao invés de ser um dado primitivo, usamos aqui a sintaxe clássica de função do JavaScript function, passando aqui um parâmetro de valor, que é o valor que vamos receber para ser depositado.
// E aqui dentro do bloco da função, entre as chaves, estamos passando this.saldo, this é uma palavra reservada que se refere literalmente a isso
// for...in permite iterar sobre as propriedades de um objeto como um array, em um loop temos a flexibilidade de percorrer o objeto e executar uma série de comparações. Uma delas é usar o typeof e verificar o tipo da propriedade.

const cliente = {
    nome: "Alana",
    idade: "30",
    cpf: "1335566923",
    email: "Alana@gmail.com",
    fones: ["98962636", "989463135"],
    dependentes: [
        {
            nome: "Ana",
            parentesco: "filha",
            dataNasc: "20/03/2011"},
        {
            nome: 'Paula',
            parentesco: 'Filha',
            dataNasc: '04/01/2014'
        }

    ],
    saldo: 100,
    depositar:function(valor)
    {
        this.saldo += valor
    }
}
const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="20/03/2011")
console.log(`\nFilha mais nova da cliente: ${filhaMaisNova[0].nome}`) //se tirar o [0].nome ela passa todos os dados

let relatorio ="";
for ( let info in cliente)
{
    if (typeof cliente[info] === "object" || typeof cliente[info] === "function")
    {
        continue
    }
    else
    {
        relatorio += ` 
        ${info} ==> ${cliente[info]}` // += é recebe
    }
}
function oferecerSeguro(cliente){
    const propsCliente = Object.keys(cliente);
    if (propsCliente.includes("dependentes"))
    {
        console.log(`\nOferta seguro de vida para ${cliente.nome}`);
    }
}

cliente.depositar(30)
console.log(`\nRelatorio da cliente:\n${relatorio}`)
console.log(`\nSeu saldo com o deposito é ${cliente.saldo}`)
oferecerSeguro(cliente)



console.log("*******************table*************spread*****************")
// Na linha 90 onde esta a const listaDependentes, ele abriu um array, e dentro desse array ele espalhou, é literalmente isso que o spread operator faz (é os 3 pontinhos). Ele pegou todos os itens desse array e espalhou dentro do array listaDependentes.

const clientes = [
    {
      nome: "André",
      cpf: "12312312312",
      dependentes: [{
        nome: "Sara",
        parentesco: "filha",
        dataNasc: "20/03/2011"
       },
       {
        nome: "Samia",
        parentesco: "filha",
        dataNasc: "04/01/2014"
       }],
    },
    {
      nome: "Juliana",
      cpf: "56767867867",
      dependentes: [{
        nome: "Sophia",
        parentesco: "filha",
        dataNasc: "30/08/2020"
       }],
    } 
  ]
  
  const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]
  
  console.table(listaDependentes) // cria uma planilhazinha

