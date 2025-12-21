let nomes = ['Pedro', 'João', 'Paulo'];

let buscador = prompt("Insira o quie deve ser buscado: ");
let encontrar = nomes.includes(buscador);

if(encontrar === true){
    document.getElementById("texto").innerHTML = `${buscador} está presente na lista`
}else{
    document.getElementById("texto").innerHTML = `${buscador} não existe na lista`
}