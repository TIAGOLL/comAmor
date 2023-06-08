import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, InputGroup, Row, Form, Button, Alert, success } from 'react-bootstrap';
import ContainerCard from '../../components/containerCard/index';
import { Titulo } from './style';
import { Centralizar } from '../pageInicial/style';
import MapaEncomenda from '../../components/mapaEncomenda/index';
import { useState } from 'react';
import { validationCod } from '../../utils/codEncomendaValidation';

function Login() {

    const [mostraMapa, setMostraMapa] = useState(null)
    const [codEncomenda, setCodEncomenda] = useState('')
    const [error, setError] = useState(null)
    const [successValidationCod, setsuccessValidationCod] = useState(null)

    const search = () => {
        setMostraMapa(false)
        setsuccessValidationCod(false)
        setError(false)

        validationCod(codEncomenda)
            .then((successValidationCod) => {
                setMostraMapa(true)
                setsuccessValidationCod(successValidationCod)
            })
            .catch((error) => {
                setError(error)
            })
            .finally(() => {

            })
    }

    const codEncomendaManipulate = (event) => {
        const { value } = event.target
        setCodEncomenda(value)
    }

    return (
        <section>
            <Container>
                <Row>
                    <Col md={12}>
                        <ContainerCard>
                            <Titulo>
                                Localizar Encomendas
                            </Titulo>
                            <div>
                                <label style={{ paddingTop: '20px', paddingBottom: '10px' }}>
                                    <strong>Qual o número de protocolo de sua encomenda?</strong>
                                </label>

                                <InputGroup className="mb-3" style={{ width: '50%' }}>
                                    <InputGroup.Text>CM</InputGroup.Text>
                                    <Form.Control placeholder="000000" type='text' value={codEncomenda} onChange={codEncomendaManipulate} />
                                </InputGroup>

                                {successValidationCod && <Alert className='messageInfo' key={'success'} variant={'success'}>{successValidationCod.message}</Alert>}
                                {error && <Alert className='messageInfo' key={'danger'} variant={'danger'}>{error.message}</Alert>}

                                <Button onClick={search} variant="primary" id='btn-login' readonly>
                                    Buscar
                                </Button>
                                <br /><br />
                                {mostraMapa && <MapaEncomenda />}
                            </div>

                        </ContainerCard>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Login;