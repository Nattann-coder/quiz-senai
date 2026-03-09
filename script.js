const personagens = [

"imagens/sonic-character.png",
"imagens/knuckles-character.png",
"imagens/tails-character.png"

]

const perguntas = [

{
q:"Quantos estados formam a região Nordeste?",
a:["7","8","9","10"],
c:2
},

{
q:"Qual bioma predomina no Nordeste?",
a:["Caatinga","Amazônia","Pantanal","Pampa"],
c:0
},

{
q:"Qual rio é chamado de Velho Chico?",
a:["Parnaíba","Jaguaride","São Francisco","Capibaribe"],
c:2
},

{
q:"Qual festa cultural movimenta o Nordeste?",
a:["Oktoberfest","Natal","Carnaval de Veneza","Festa Junina"],
c:3
},

{
q:"Qual dança típica nordestina?",
a:["Forró","Tango","Flamenco","Rock"],
c:0
},

{
q:"Qual comida típica da Bahia?",
a:["Acarajé","Pizza","Hambúrguer","Sushi"],
c:0
},

{
q:"Qual estado possui mais municípios no Nordeste?",
a:["Ceará","Bahia","Piauí","Alagoas"],
c:1
},

{
q:"Qual literatura popular nordestina?",
a:["Cordel","Mangá","HQ","Romance"],
c:0
},

{
q:"Qual dança famosa de Pernambuco?",
a:["Frevo","Hip Hop","Samba","Valsa"],
c:0
},

{
q:"Qual região agrícola exporta frutas?",
a:["Vale do São Francisco","Vale do Itajaí","Vale do Paraíba","Vale do Ribeira"],
c:0
},

{
q:"Qual música típica do Nordeste?",
a:["Forró","Reggae","Jazz","Blues"],
c:0
},

{
q:"Qual instrumento comum no forró?",
a:["Sanfona","Guitarra","Violino","Piano"],
c:0
},

{
q:"Qual estado tem Jericoacoara?",
a:["Bahia","Ceará","Pernambuco","Paraíba"],
c:1
},

{
q:"Qual estado tem Porto de Galinhas?",
a:["Pernambuco","Ceará","Bahia","Rio Grande do Norte"],
c:0
},

{
q:"Qual fenômeno natural afeta o sertão?",
a:["Neve","Seca","Furacão","Tornado"],
c:1
},

{
q:"Qual atividade econômica cresce com turismo?",
a:["Serviços","Mineração","Metalurgia","Tecnologia nuclear"],
c:0
},

{
q:"Qual animal comum na pecuária do sertão?",
a:["Caprinos","Pandas","Alces","Camelos"],
c:0
},

{
q:"Qual dança afro-brasileira surgiu na Bahia?",
a:["Capoeira","Balé","Tango","Valsa"],
c:0
},

{
q:"Qual estado NÃO faz parte do Nordeste?",
a:["Bahia","Pernambuco","Minas Gerais","Ceará"],
c:2
},

{
q:"Qual região do Brasil tem forte tradição de cordel?",
a:["Nordeste","Sul","Centro-Oeste","Norte"],
c:0
}

]

let atual = 0
let pontos = 0
let respondido = false

const question = document.getElementById("question")
const answers = document.getElementById("answers")
const nextBtn = document.getElementById("nextBtn")
const score = document.getElementById("score")
const characterImg = document.getElementById("characterImg")

function mostrarPergunta(){

respondido = false

let p = perguntas[atual]

question.innerText = p.q

answers.innerHTML = ""

characterImg.src = personagens[Math.floor(Math.random()*personagens.length)]

p.a.forEach((resposta,i)=>{

let btn = document.createElement("button")

btn.innerText = resposta

btn.onclick = () => responder(i)

answers.appendChild(btn)

})

let progresso = ((atual)/perguntas.length)*100
document.getElementById("progressBar").style.width = progresso+"%"

}

function responder(i){

if(respondido) return

respondido = true

let p = perguntas[atual]

if(i === p.c){

document.getElementById("correctSound").play()
alert("✅ Correto!")
pontos++

}else{

document.getElementById("wrongSound").play()
alert("❌ Errado!")

}

}

nextBtn.onclick = () => {

atual++

if(atual >= perguntas.length){

document.querySelector(".game").innerHTML =

`
<h1>🏆 Fim do Jogo</h1>
<h2>Sua pontuação: ${pontos}/20</h2>
<p>Parabéns por aprender sobre o Nordeste!</p>
<button onclick="location.reload()">Jogar novamente</button>
`

return

}

mostrarPergunta()

}


mostrarPergunta()
