const respostas = [
    "Sim",
    "Não",
    "Talvez",
    "Se concentre mais",
    "Chances favoráveis",
]



function perguntar(){
  
    const totalRespostas = respostas.length
    const numeroAleatorio = Math.floor(Math.random()*totalRespostas)
    const elementoResposta = document.querySelector("#resposta")
    elementoResposta.innerHTML = respostas[numeroAleatorio]

}



