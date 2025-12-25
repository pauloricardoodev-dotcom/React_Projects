var nome = "Paulo Ricardo ";
var sobrenome = "Rinaldi da Silva"

// não usar mais a concatenação "Meu nome é" ++ nome ++ " " ++ sobrenome;
document.getElementById('texto').innerHTML = `Olá meu nome é ${nome} ${sobrenome}`;