// Dados
const proffys = [
   {
    name: "nicholas cabral",
    avatar: "https://avatars2.githubusercontent.com/u/63978033?s=460&u=364469401b6738dab1abdfe473b0b3f0df34f6c1&v=4",
    whatsapp: "82736454",
    bio: "blablablablalalalallllllllllllllaaaaaaaaa",
    subject: "matematica",
    cost: "20",
    weekday: [0],
    time_from: [720],
    time_to: [1220]
   },
   {
    name: "nicholas cabral",
    avatar: "https://avatars2.githubusercontent.com/u/63978033?s=460&u=364469401b6738dab1abdfe473b0b3f0df34f6c1&v=4",
    whatsapp: "82736454",
    bio: "blablablablalalalallllllllllllllaaaaaaaaa",
    subject: "matematica",
    cost: "20",
    weekday: [0],
    time_from: [720],
    time_to: [1220]
   },
   {
    name: "nicholas cabral",
    avatar: "https://avatars2.githubusercontent.com/u/63978033?s=460&u=364469401b6738dab1abdfe473b0b3f0df34f6c1&v=4",
    whatsapp: "82736454",
    bio: "blablablablalalalallllllllllllllaaaaaaaaa",
    subject: "matematica",
    cost: "20",
    weekday: [0],
    time_from: [720],
    time_to: [1220]
   }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]

// Funcionalidades 

function getSubject(subjectNumber) {
    const Position = +subjectNumber - 1
    return subjects[Position]
} 

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query

    const isNotEmpty = Object.keys(data).length > 0
    // adicionar data a lista de proffys
    if (isNotEmpty) {

        data.subject = getSubject(data.subject)

        proffys.push(data)

        return res.redirect("/study")
    }

    return res.render("give-classes.html", { subjects, weekdays })
}

// Servidor 
const express = require('express')
const server = express()

//configurar nunjucks (Template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true, 
})

// Inicio da Configuração do servidor
server
// configurando arquivos estaticos (css, scripts, imagens)
.use(express.static("public")) 
// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
// Start do servidor
.listen(5600, () => {
    console.log("servidor iniciado/reiniciado...")
})