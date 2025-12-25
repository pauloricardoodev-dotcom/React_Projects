let nome = 'Paulo';

let buscador = prompt("Insira a letra que finaliza o nome: ");
let encontrar = nome.endsWith(buscador);

if(encontrar === true){
    document.getElementById("texto").innerHTML = ` a letra ${buscador} finaliza o nome ${nome}`
}else{
    document.getElementById("texto").innerHTML = ` a letra ${buscador} não finaliza o nome ${nome}`
}