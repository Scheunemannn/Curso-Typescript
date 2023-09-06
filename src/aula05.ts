//array de strings
let nomes:string[] = ['Eduardo', 'Henrique', 'Francisco']

//variavel com os tipos string, number e boolean, ao invés de criar uma variavel designando varios tipos pra ela, é melhor colocar que ela tem o tipo any, que é para qualquer tipo
let macaco:string|number|boolean

macaco = 'banana'
macaco = 1
macaco = true

nomes.push('manoel')

nomes.sort()

console.log(macaco)
