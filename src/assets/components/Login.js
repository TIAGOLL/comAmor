import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    return (
        <section>
            <div class='container'>
                <div class='row'>
                    <div class='col-md-12'>
                        <div class='container-card align-middle'>
                            <div class='titulo'>
                                <h4>Localizar Encomendas</h4>
                            </div>
                            <div>
                                <label style={{paddingTop: '20px'}}><strong>Qual o número de protocolo de sua encomenda?</strong></label>
                                <input id='codEncomenda' name='codEncomenda' type='text' placeholder='CM102030' class='form-control' style={{marginBottom: '10px;', width: '500px;'}} />
                                <input class='btn btn-primary' id='btn-login' onclick='mostraMapa()' value='Localizar' style={{width: '20%;'}} readonly />
                            </div>

                            <div id='mapaEncomenda' style={{paddingTop: '20px;', color: 'white;'}}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;