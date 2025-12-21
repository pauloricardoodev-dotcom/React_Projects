//function entrar

function entrar(){
    var area = document.getElementById('area');
    var texto = prompt('Digite seu nome!');

    if(texto === '' || texto == null){
        alert('por favor digite seu nome novamente');
        area.innerHTML = "Bem Vindo" + texto;
    }else{
        area.innerHTML = "Bem Vindo " + texto;
    }
}
    
function entrar2(nome){
    var area2 = document.getElementById('area');
    var texto = prompt('Digite seu sobrenome!');
    area.innerHTML = nome + "" + texto;
}