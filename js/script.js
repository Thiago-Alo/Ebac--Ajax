const url = 'https://api.github.com/users';
const main = document.getElementById('main');
console.log(main)
// let user = ''
// let text = '';

function getUser(user) {
    console.log('Obtendo dados do usuário:', user)

    let text = '';

    console.log('Variável "text" inicializada:', text)

    fetch(`${url}/${user}`, {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Dados do usuário:', data)

        text += `<p>${data.name} possui ${data.public_repos} repositórios públicos no GitHub como ${data.login}</p><br>`
        console.log('Conteúdo do texto:', text)

        main.innerHTML = text
        console.log('Conteúdo do elemento main:', main.innerHTML)
    })
    .catch((error) => console.error('Erro: ', error.message || error))
}


const userInput = document.getElementById('username')

userInput.addEventListener('focusout', function(event){
    console.log('Evento focusout acionado!')
    getUser(event.target.value)
})

