//----------------------------OBJETOS--------------------------------

const pessoa = {
    nome: "Paulo",
    idade: 19,
    funcao: "Frontend",
    cargo: "Estudante"
};

document.getElementById('texto').innerHTML=`
    Nome: ${pessoa.nome}<br>
    Idade: ${pessoa.idade}<br>
    Função: ${pessoa.funcao}<br>
    Cargo: ${pessoa.cargo}
`;


//criando varíavél para receber o elemento do objeto
let{nome} = pessoa;

document.getElementById('texto2').innerHTML = `
    <br>
    <hr>
    Apenas o nome: ${nome}
    <br>
    <br>
    `;

//criar mais de uma varável de desconstrução
let{idade, funcao} = pessoa;

//reatribuindo o nome da variavel cargo
let{cargo:maestria} = pessoa;


//----------------------------ARRAYS--------------------------------

let areas = ['Frontend', 'Backend', 'Fullstack'];

//criando varíavél para receber o elemento da Array 
let [primeiroNome, segundoNome, terceiroNome] = areas;
 
document.getElementById('texto3').innerHTML= `
    primeira area: ${primeiroNome}<br>
    segunda area: ${segundoNome}<br>
    terceira area: ${terceiroNome}<br> `;
    
document.getElementById('texto4').innerHTML = `
    <br> 
    <hr>
    Apenas o primeiro nome: ${primeiroNome} 
    <br>
    <br>
    `;
