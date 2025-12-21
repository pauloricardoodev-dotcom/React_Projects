const  lista = [1,2,3,4,5,6]; 

const novaLista = lista.map(function(item, index){
    return item + index;
});

document.getElementById("texto").innerHTML = `.map Somou número a posição [${novaLista}]`;

const soma = lista.reduce(function(total, proximo){
    return total + proximo;
});

document.getElementById("texto2").innerHTML = `.reduce Somou número a posição [${soma}]`;

const find = lista.find(function(item){
    return item === 3;
});

document.getElementById("texto3").innerHTML = `.find encontrou o número [${find}]`;
