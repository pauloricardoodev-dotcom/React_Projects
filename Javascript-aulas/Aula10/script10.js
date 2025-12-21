/* var nome = prompt("Qual seu nome? : ");


localStorage.setItem("nome", nome);

alert("Entendi seu nome é " + localStorage.getItem("nome"));
*/

var nome = '';

if( typeof localStorage.nome == 'undefined'){
    localStorage.nome = prompt("Digite seu nome");
}

nome = localStorage.nome;

document.getElementById('nome').ineerHTML = nome;