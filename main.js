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

const numeros = Math.floor(Math.randon() * desafios.length);
    const desafio = desafios[numeros];

    document.getElementById("resposta").innerHTML=`
    <h2> Olá ${name}</h2>`
    `<h2> Seu Desafio é: ${desafio}</h2>`

function avaliarResposta() {

    const nome = document.getElementById("nome").value;
    const resposta = document.getElementById("resposta").value;

    // Recupera o desafio que estava na tela
    const desafioTexto = document.querySelector("#resultado h3").innerText;

    // Verifica se existe resposta
    if (resposta.trim() === "") {
        alert("Digite uma resposta antes de enviar!");
        return;
    }

    let pontos = 0;

    // Critério 1:
    // Resposta com 20 caracteres ou mais
    if (resposta.length >= 20) {
        pontos += 30;
    }

    // Transforma a resposta em letras minúsculas
    const texto = resposta.toLowerCase();

    // Critério 2:
    // Palavras relacionadas a estudo e desenvolvimento
    if (
        texto.includes("estudar") ||
        texto.includes("praticar") ||
        texto.includes("pesquisar")
    ) {
        pontos += 20;
    }

    // Critério 3:
    // Palavras relacionadas à criação e resolução
    if (
        texto.includes("criar") ||
        texto.includes("resolver") ||
        texto.includes("aprender")
    ) {
        pontos += 20;
    }

    // Gera um tempo aleatório
    const tempo = Math.floor(Math.random() * 10) + 1;

    // Define o nível
    let nivel;

    if (pontos >= 70) {
        nivel = "🏆 Inventor de Ideias";
    } 
    else if (pontos >= 50) {
        nivel = "🚀 Criador";
    } 
    else if (pontos >= 30) {
        nivel = "🧠 Desenvolvedor";
    } 
    else {
        nivel = "🌱 Explorador";
    }
