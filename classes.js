class Cliente {
    constructor(nome, signo, filhote, saldo) { // Atributos
        this.nome = nome 
        this.signo = signo
        this.filhote = filhote
        this.saldo = saldo
    }
    depositar(valor) // Método
    {
        this.saldo += valor
    }
    ExibirSaldo()
    {
        console.log(this.saldo) 
    }
}    
const gabi = new Cliente("Gabriel", "Leão", "Lissa", 500) // Objetos
console.table(gabi)

class ClientePoupanca extends Cliente{ // herança de classe com extends para criar objetos a partir de modelos específicos.
    constructor(nome, signo, filhote, saldo, saldoPoup){ 
        super(nome, signo, filhote, saldo)
        this.saldoPoup = saldoPoup
    }
    depositarPoup(valor){
        this.saldoPoup += valor
    }
}
const liz = new ClientePoupanca("Liz", "Libra", "Lissa", 500, 10000) 
// liz.ExibirSaldo()
console.table(liz)
