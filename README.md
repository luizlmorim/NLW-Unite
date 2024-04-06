#Objeto javascript 

const participante = {
   nome: "Luiz Filipe",
   email: "luiz@gmail.com",
   dataInscricao: new Date(2024, 2, 22, 19, 20),
   dataCheckin: new Date(2024, 2, 25, 22, 20)
} //Estrutura de dados 

#Lista em javascrit 

let participantes = [
    {
        nome: "Luiz Filipe",
        email: "luiz@gmail.com",
        dataInscricao: new Date(2024, 2, 22, 19, 20),
        dataCheckin: new Date(2024, 2, 25, 22, 20)
    },
    {
        nome: "Maria Clara",
        email: "clara@gmail.com",
        dataInscricao: new Date(2024, 2, 24, 14, 15),
        dataCheckin: new Date(2024, 2, 13, 21, 20)
    },
    {
        nome: "João Silva",
        email: "joao.silva@gmail.com",
        dataInscricao: new Date(2024, 2, 20, 10, 30),
        dataCheckin: new Date(2024, 2, 28, 12, 0)
    },
    {
        nome: "Ana Paula",
        email: "ana.paula@gmail.com",
        dataInscricao: new Date(2024, 2, 19, 8, 45),
        dataCheckin: new Date(2024, 2, 26, 9, 0)
    },
    {
        nome: "Pedro Henrique",
        email: "pedro.henrique@gmail.com",
        dataInscricao: new Date(2024, 2, 18, 15, 10),
        dataCheckin: new Date(2024, 2, 23, 18, 30)
    },
    {
        nome: "Carla Santos",
        email: "carla.santos@gmail.com",
        dataInscricao: new Date(2024, 2, 17, 11, 20),
        dataCheckin: new Date(2024, 2, 20, 9, 45)
    },
    {
        nome: "Gabriel Oliveira",
        email: "gabriel.oliveira@gmail.com",
        dataInscricao: new Date(2024, 2, 15, 16, 5),
        dataCheckin: new Date(2024, 2, 18, 18, 20)
    },
    {
        nome: "Mariana Costa",
        email: "mariana.costa@gmail.com",
        dataInscricao: new Date(2024, 2, 14, 13, 40),
        dataCheckin: new Date(2024, 2, 21, 15, 30)
    },
    {
        nome: "Rafael Oliveira",
        email: "rafael.oliveira@gmail.com",
        dataInscricao: new Date(2024, 2, 12, 9, 0),
        dataCheckin: new Date(2024, 2, 19, 11, 15)
    },
    {
        nome: "Juliana Rodrigues",
        email: "juliana.rodrigues@gmail.com",
        dataInscricao: new Date(2024, 2, 10, 20, 30),
        dataCheckin: new Date(2024, 2, 15, 22, 0)
    }
];

Aqui estamos uamos uma biblioteca dayjs para organizar as datas de inscrição e chekin:

https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js"
"https://cdn.jsdelivr.net/npm/dayjs@1/plugin/relativeTime.js"
scriptdayjs.extend(window.dayjs_plugin_relativeTime)

// evento
onsubmit="adicionarParticipante(event)
esse evente indica que as informações do formulariom serão usadas 

 //Verificando se existe uma data de checkin
    if(participante.dataCheckin == null){
       dataCheckin = `
        //<//button onclick="FazerCheckIn(event)" data-email="${////participante.email}">
            Confirmar check-in
        //<///button>
       `
    }//