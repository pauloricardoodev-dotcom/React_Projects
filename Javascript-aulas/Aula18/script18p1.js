let nomes = ['João', 'Paulo', 'Lucas'];

let buscador = prompt("Insira o nome que deva ser encontrado ao menos 1 vez: ");
let encontrou = nomes.some(nomes => nomes === buscador);

if(encontrou === true){
    document.getElementById("texto").innerHTML = `o nome ${buscador} é encontrado ao menos 1 vez`
}else{
    document.getElementById("texto").innerHTML = `o nome ${buscador} não é encontrado nenhuma vez`
}