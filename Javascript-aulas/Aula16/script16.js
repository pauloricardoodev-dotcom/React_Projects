let numeros = [1,2,3,4,5,6];

/*function adcionar(...numeros){
    let soma = numeros.reduce(function(total, proximo){
    return total + proximo;
});

document.getElementById("texto").innerHTML = `.reduce antigo [${soma}]`;
} */

document.getElementById("lista").innerHTML = `Vetor: [${numeros}]`;

function adicionar(...numeros){
    let soma = numeros.reduce((total, proximo) => total + proximo);

document.getElementById("texto").innerHTML = `.reduce novo [${soma}]`;
}