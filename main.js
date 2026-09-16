const desafios = [
    "Resolver um problema lógico",
    "Criar diferentes soluções",
    "Aprender novas funções",
    "Descobrir padrões",
    "Pensar em uma nova invenção"
];

function iniciarDesafio() {

    // Pega o nome digitado no HTML
    const nome = document.getElementById("nome").value;

    // Verifica se o aluno digitou o nome
    if (nome === "") {
        alert("Digite seu nome para começar!");
        return;

    const numeros = Math.floor(Math.randon() * desafios.length);
    const desafio = desafios[numeros];

    document.getElementById("resposta").innerHTML=`
    <h2> Olá ${name}</h2>
    <h2> Seu Desafio é: </h2>
    <h3> ${desafio} </h3>

    <label for="resposta"> 
    Qual o seu projeto para desenvolver este desafio? 
    </label>

    <br><br>

     <textarea
     id= "resposta"
     rows = "5"
     cols = "40"
     placeholder = "Digite aqui sua resposta ..."
     ></textarea>

    <br><br>

    <button onclick="avaliarResposta()">
        Enviar a resposta.
    </button>
    `;
   
}

function avaliarResposta(){

    //Criar as constantes que preciso
    const nome = document.getElementById("nome").value;
    const resposta = document.getElementById("resposta").value;
    const textoDesafio = document.getElementById("# resultado h3").innerHTML;


    if (resposta.trim() === "") {
        alert("Digite sua resposta para a avaliação!");
        return;
    }

    let pontos = 0;

// critérios avaliação
//Contagem de letras

    if (resposta.length >= 30){
        pontos += 30;
    }

//Incluir palavras chaves

    const texto = resposta.toLowerCase();

    if( texto.include("criar")||
        texto.include("desenvolver")||
        texto.include("elaborar") ){
        pontos +=30;
    }

    if( texto.include("pesquisa")||
        texto.include("estudo")||
        texto.include("projeto") ){
        pontos +=30;
    }

   const tempo = Math.floor(Math.randon() * 10)+1;  

   let nivel;

   if(pontos >=90){
    nivel = "Invertor de idéias"
   }

   else if(pontos >=60){
    nivel = "Desenvolvedor de idéias"
   }

   else if(pontos >=30){
    nivel = "Explorador de idéias"
   }

  else{ 
    nivel = "Pesquisador iniciante"
   }
}
       
    }
