//Um array é uma estrutura de dados que segue uma sequência não ordenada.
//Os elementos ficam em um lugar isolado e o acesso é realizado a partir de índices na primeira posição de cada item.
//Eles têm a funcionalidade de armazenar uma lista de itens dentro deles e esses itens podem ser de quaisquer formato ou tipo. let myArray = [];

console.log("\n*************************splice****************************")
                 //0     //1     //2      //3  ...
const lista = ["João", " Ana", " Caio", " Lara", " Marjoire", " Leo"];
//lista.splice(1, 2, " Rodrigo"); //remove e insere rodrigo
lista.splice(2,0,' Livia'); //adiciona livia antes do 2 indíce

console.log(`Lista de chamada: ${lista}\n`);

console.log("Exemplo de como funciona:")

const animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠')
animaisDoAquario.splice(3,2,'🐟')

console.log(animaisDoAquario)

console.log("\n**********push*************pop**************slice************")

const comidas = ['🍔', '🌭', '🍕', '🍏', '🥗', '🍳'];
const comidasRuim = comidas.slice(0, comidas.length/2);
const comidasBoas = comidas.slice(comidas.length/2);
console.log(`São ${comidas.length} tipos de comidas`)
console.log(`São comidas gordurosas: ${comidasRuim}`);
console.log(`São comidas saudáveis: ${comidasBoas}`)

const jantarDeHoje = ['🍔', '🌭', '🍕']

jantarDeHoje.pop()
jantarDeHoje.pop()

jantarDeHoje.push('🍳')
jantarDeHoje.push('🥗')
jantarDeHoje.push('🍏')

console.log(`Jantar de hoje ${jantarDeHoje}`)