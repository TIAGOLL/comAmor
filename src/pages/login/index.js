import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import ContainerCard from './../../components/containerCard/index';
import { Titulo } from './style';
import { Centralizar } from './../pageInicial/style';

function Login() {
    return (
        <section>
            <Container>
                <Row>
                    <Col md={12}>
                        <ContainerCard class='align-middle'>
                            <Titulo>
                                <h4>Localizar Encomendas</h4>
                            </Titulo>
                            <Centralizar>
                                <label style={{paddingTop: '20px'}}><strong>Qual o número de protocolo de sua encomenda?</strong></label>
                                <input id='codEncomenda' name='codEncomenda' type='text' placeholder='CM102030' class='form-control' style={{marginBottom: '10px;', width: '500px;'}} />
                                <input class='btn btn-primary' id='btn-login' onclick='mostraMapa()' value='Localizar' style={{width: '20%;'}} readonly />
                            </Centralizar>

                            <div id='mapaEncomenda' style={{paddingTop: '20px;', color: 'white;'}}>

                            </div>
                        </ContainerCard>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Login;