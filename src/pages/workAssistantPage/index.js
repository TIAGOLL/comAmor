import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, InputGroup, Row, Form, Button, Alert } from 'react-bootstrap';
import ContainerCard from '../../components/containerCard/index';
import { Titulo } from './style';
import MapaEncomenda from '../../components/mapaEncomenda/index';
import { useMemo, useState } from 'react';
import { validationCod } from '../../utils/codEncomendaValidation';
import BarraProgresso from '../../components/progressBar';

function Login() {

    const [visualProgressBar, setVisualProgressBar] = useState(false)

    const [isRequest, setIsRequest] = useState(false)
    const [mostraMapa, setMostraMapa] = useState(false)
    const [codEncomenda, setCodEncomenda] = useState('')
    const [error, setError] = useState(false)
    const [successValidationCod, setsuccessValidationCod] = useState(false)

    const search = () => {
        setIsRequest(true)
        setVisualProgressBar(true)
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
                setVisualProgressBar(false)
            })
            .finally(() => {
                setIsRequest(false)
                setVisualProgressBar(false)
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
                                <label className='text-light' style={{ paddingTop: '20px', paddingBottom: '10px' }}>
                                    <strong >Qual o número de protocolo de sua encomenda?</strong>
                                </label>

                                <InputGroup className="mb-3" style={{ width: '50%' }}>
                                    <InputGroup.Text>CM</InputGroup.Text>
                                    <Form.Control placeholder="000000" type='text' value={codEncomenda} onChange={codEncomendaManipulate} />
                                </InputGroup>
                                {visualProgressBar && <BarraProgresso delay={150} className={'progressBarCodEnco'}/>}
                                {successValidationCod && <Alert className='messageInfo' key={'success'} variant={'success'}>{successValidationCod.message}</Alert>}
                                {error && <Alert className='messageInfo' key={'danger'} variant={'danger'}>{error.message}</Alert>}

                                <Button disabled={!!isRequest} onClick={search} variant="primary" id='btn-login' readonly>
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