document.write("<br> Peça o valor de X! <br>");

function pedir() {

   let x = prompt("O que deseja pedir? : ");

    switch (x){
        case "0":
            alert("O x vale 0!");
            break;
        case "1":
            alert("O x vale 1!");
            break;
        case "2":
            alert("O x vale 2!");
            break;
    }
}