interface dadosSerios {
    nome: string;
    idade:number;
    status: string;
    saudacao: Function;
    infoName: Function;
}

const dados:dadosSerios={
    nome:'Eduardo Scheunemann',
    idade: 22,
    status: 'solteiro',
    saudacao: () => {console.log('mamei o negao onti')},
    infoName: (x:any) => {console.log(x)},
}

console.log(typeof(dados))
console.log(dados.nome)

dados.saudacao()
dados.infoName(dados.idade)