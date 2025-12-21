
function acao() {
   document.getElementById("saida").innerHTML += "Pensando... <br>";
}

var timer = setInterval(acao, 2000); // --> executa de tempo em tempo!

function stop(){
    clearInterval(timer);
}

function stopAftter3(){
    setTimeout(acao, 3000); // --> executa uma vez após 3 segundo e encerra
}
