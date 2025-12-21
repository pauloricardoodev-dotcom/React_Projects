let nome = 'Paulo';

let buscador = prompt("Insira a letra que inicia o nome: ");
let encontrar = nome.startsWith(buscador);

if(encontrar === true){
    document.getElementById("texto").innerHTML = ` a letra ${buscador} inicia o nome ${nome}`
}else{
    document.getElementById("texto").innerHTML = ` a letra ${buscador} não inicia o nome ${nome}`
}