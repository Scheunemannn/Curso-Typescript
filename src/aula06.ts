let numeros:Array<number> = [3,4,7,4,1,6]
//adiciona um novo elemento a posição final do array
numeros.push(2)
//adiciona um elemento a posicao inicial do array
numeros.unshift(5)
//organiza o array em ordem crescente, do maior para o menor
numeros.sort()
//retira um elemento da posicao final do array
numeros.pop()
//retira um elemento da posicao inicial do array
numeros.shift()

console.log(numeros)
//um tipo de array que serve somente para leitura, nao pode ser modificado por funcoes ou metodos de insercao e remocao
let numerosRo:ReadonlyArray<number> = [100,]

console.log(numerosRo)

