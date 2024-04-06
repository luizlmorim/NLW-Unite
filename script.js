// Lista de objetos 
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
        dataCheckin: null
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
        dataCheckin: null
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
        dataCheckin: null
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
        dataCheckin: null
    }
];


// funcões arrow function

const criarNovoParticipante = (participante) => {
   
    const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)

    let dataCheckin = dayjs(Date.now()).to(participante.dataCheckin)

    //Verificando se existe uma data de checkin
    if(participante.dataCheckin == null){
       dataCheckin = `
        <button onclick="FazerCheckIn(event)" data-email="${participante.email}">
            Confirmar check-in
        </button>
       `
    }


    return `
<tr>
    <td>
        <strong>
            ${participante.nome}
        </strong>
        <br>
        <small>
            ${participante.email}
        </small>
    </td>
    <br>
    <td>
        ${dataInscricao}
    </td>
    <td>
        ${dataCheckin}
    </td>
    </tr>
  `
}

const atualizarLista = (participantes) => {
    let output = ""
    // estrutura de repetição para perccorer a lista 
    for(let participante of participantes){
        output += criarNovoParticipante(participante)
    }

    // Substituindo informações no HTML 
    document.querySelector('tbody').innerHTML =  output
}



const adicionarParticipante = (event) => {
    event.preventDefault()
  
    const dadosDoFormulario = new FormData(event.target)
  
    const participante = {
      nome: dadosDoFormulario.get('nome'),
      email: dadosDoFormulario.get('email'),
      dataInscricao: new Date(),
      dataCheckIn: null  
    }
  
    // verificar se o particpante já existe
    const participanteExiste = participantes.find(
      (p) => {
        return p.email == participante.email
      }
    )
  
    if(participanteExiste) {
      alert('Email já cadastrado!')
      return
    }
    
    //Adicona a lista novo...lista
    participantes = [participante, ...participantes]
    atualizarLista(participantes)
  
    // limpar o formulario
    event.target.querySelector('[name="nome"]').value = ""
    event.target.querySelector('[name="email"]').value = ""
  }


const FazerCheckIn = (event) => {
    //Confirmar se realmente quer fazer o check-in 
    const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in?'
    
    if (confirm(mensagemConfirmacao) == false ){
        return
    }

    //encontrar o participante dentro da Lista
    const participante = participantes.find( (p) => {
        return p.email == event.target.dataset.email 
    })

    //atualizar o check-in do participante
    participante.dataCheckin = new Date()

    //Atualizar lista de participantes
    atualizarLista(participantes)
}


// Usando o objeto - chamando a função

atualizarLista(participantes)
//localStorage.save