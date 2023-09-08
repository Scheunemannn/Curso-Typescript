"use strict";
const dados = {
    nome: 'Eduardo Scheunemann',
    idade: 22,
    status: 'solteiro',
    saudacao: () => { console.log('mamei o negao onti'); },
    infoName: (x) => { console.log(x); },
};
console.log(typeof (dados));
console.log(dados.nome);
dados.saudacao();
dados.infoName(dados.idade);
