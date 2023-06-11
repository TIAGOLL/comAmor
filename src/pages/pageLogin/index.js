import { Col, Container, FloatingLabel, Form, Row, Button, Alert } from "react-bootstrap";
import ContainerCard from './../../components/containerCard/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Titulo } from "../pageInicial/style";
import { useState } from "react";
import { login } from "../../utils/loginValidation";


export default function PageLogin(props) {
    const delay = 2000;

    //hooks de controle do login
    const [successValidationCod, setSuccessValidationCod] = useState(null)
    const [isRequest, setIsRequest] = useState(false)
    const [error, setError] = useState(null)

    const loginValidation = () => {
        setSuccessValidationCod(null)
        setError(null)
        setIsRequest(true)
        const values = {email: email, password: password}

        login(values)
        .then((successValidationCod) => {
            setSuccessValidationCod(successValidationCod)
            setTimeout(() => {props.toPageWorkAssistant(true)}, delay)
        })
        .catch((error) => {
            setError(error)
        })
        .finally(() => {
            setIsRequest(false)
        })
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const passwordManipulate = (event) => {
        const { value } = event.target
        setPassword(value)
    }
    const emailManipulate = (event) => {
        const { value } = event.target
        setEmail(value)
    }

    return (
        <section>
            <Container id='loginContainer'>
                <Row>
                    <Col md={4} className="centered">
                        <ContainerCard>
                            <Titulo>Login</Titulo>

                            {successValidationCod && <Alert  key={'success'} variant={'success'}>{successValidationCod.message}</Alert>}
                            {error && <Alert key={'danger'} variant={'danger'}>{error.message}</Alert>}

                            <FloatingLabel label="Email address" className="mb-3 labelLogin">
                                <Form.Control type="email" placeholder="name@example.com" className="mb-3" value={email} onChange={emailManipulate} />
                            </FloatingLabel>

                            <FloatingLabel label="Password" className="labelLogin">
                                <Form.Control type="password" placeholder="Password" value={password} onChange={passwordManipulate} />
                            </FloatingLabel>

                            <Button disabled={!!isRequest || !email || !password} className="mt-4" onClick={loginValidation} variant="primary" type="submit" style={{ padding: '8px 50px', fontWeight: 'bold', fontSize: 17 }}>
                                Logar
                            </Button>
                        </ContainerCard>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}