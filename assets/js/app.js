function logar(){
    let output = document.getElementById('output-login')
    const login = document.getElementById('email')
    const senha = document.getElementById('senha')

    if (login.value === 'teste@comamor.com' && senha.value === '123') {
        window.location.href = '/telas/login.html'
    } else {
        output.innerHTML = 'Senha ou e-mail inválidos'
        login.style.borderColor = 'red'
        senha.style.borderColor = 'red'
    }
}

function mostraMapa() {

    const encomenda = {
        nomeCooperado: 'João',
        cpfCooperado: '000.111.222-33',
        numeroTelefone: '42999001122',
        codigoEncomenda: 'CM102030',
        matriculaCooperado: '12.290-7'
    }

    const mapa = document.getElementById('mapaEncomenda')
    const codEncomenda = document.getElementById('codEncomenda')

    if (codEncomenda.value === 'CM102030') {
        window.location.href = '../../telas/rastreamentoEncomenda.html'

} else {
    mapa.innerHTML = 'Código inválido'
    codEncomenda.style.borderColor = 'red'
}
}
