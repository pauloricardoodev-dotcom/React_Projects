// o Rest operator é adicionadoa aos parêmetros da função
function cadastrar(usuarios, ...novosUsuarios){
    let totalUsuarios = [
        ...usuarios,
        ...novosUsuarios
    ];


    document.getElementById("texto").innerHTML = `Aperte Cntrl + Shift + C para ver o console [${totalUsuarios}]`;
    return console.log(totalUsuarios);
};

let usuarios = ["Matheus", "Joao"];

let novosUsuarios = cadastrar(usuarios, "Henrique", "Lucas");