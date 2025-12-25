//Usei Spread Operator dentro da função para herdar as informações
function cadastroPessoa(info){
    let novosDados = {
        ...info,
        cargo: 'Programador',
        código: '12345',
        status: 1
    };

    document.getElementById("texto").innerHTML = " Aperte Cntrl + Shift + C para ver o console" + novosDados;
    return novosDados;
};

console.log(cadastroPessoa({nome: 'Paulo', sobrenome: ' Rinalidi', anoAniversário: 2005}));

