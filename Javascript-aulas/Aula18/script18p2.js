let nomes = ['Paulo', 'Paulo'];

let buscador = prompt("Insira o nome que deva ser encontrado todas as vezes: ");
let encontrou = nomes.every(nomes => nomes === buscador);

if(encontrou === true){
    document.getElementById("texto").innerHTML = `o nome ${buscador} é encontrado todas as vezes`
}else{
    document.getElementById("texto").innerHTML = `o nome ${buscador} não é encontrado`
}