const form = document.getElementById('adicionaContato')
const contatos = []

let linhas = '<tr>'

form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionaLinhas()
    atualizaTabela()
})

function adicionaLinhas() {
    const nomeContato = document.getElementById('nomeContato')
    const numeroContato = document.getElementById('numeroContato')

    if (contatos.includes(nomeContato.value)) {
        alert('Esse contato já foi inserido')
    } else {
        contatos.push(nomeContato.value)

        linhas += '<th>'
        linhas += '<td>'+  (nomeContato.value) +'</td>'
        linhas += '</th>'
        linhas += '<th>'
        linhas += '<td>'+  (numeroContato.value) +'</td>'
        linhas += '</th>'
        linhas += '</tr>'

        numeroContato.value = ''
        nomeContato.value = ''
    }
}

function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}