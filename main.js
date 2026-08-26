const desafios =[
    "Resolver problemas lógicos", 
    "Aprender funções novas", 
    "Encontrar padrões", 
    "Criar novas soluções", 
    "Analisar erros"
];

function iniciarDesafio(){
     const name = document.getElementById("name").value;

     if (name === ""){
        alert("Digite seu nome antes de começar")
        return;
     }
}