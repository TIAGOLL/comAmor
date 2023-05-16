function logar(){
    let output = document.getElementById('output-login')
    const login = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    if (login === 'teste@comamor.com' && senha === '123') {
        window.location.href = '/telas/login.html'
    } else {
        output.innerHTML = 'Senha ou e-mail inválidos'
    }
}

function mandaMSG() {
    let numero = parseInt(prompt("Digite o número de Whatsapp:"))
    window.location.href = `https://wa.me/${numero}?text=sua+encomenda+numero+esta+em+cidade`
}

function mostraMapa() {
    let mapa = document.getElementById('mapaEncomenda')

    mapa.innerHTML = '<h6 style="color: white;">Sua Encomenda está aqui:</h6><br><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.291840145036!2d-51.47092762572324!3d-25.395039931507263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ef362de5e5bd35%3A0x81b9e2b502c960d1!2sCorreios!5e0!3m2!1spt-PT!2sbr!4v1681777275449!5m2!1spt-PT!2sbr" width="600" height="450" style="border:0;" loading="lazy"></iframe><br><br><button class="btn btn-primary" onclick="mandaMSG()">Mandar informações via Whatsapp</button>'
}
