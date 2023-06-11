import Logo from '../../assets/imagens/logoCoamo.png'
import logoFacebook from '../../assets/imagens/facebook.png'
import logoInstagram from '../../assets/imagens/instagram.png'
import logoLinkedin from '../../assets/imagens/linkedin.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Imagem } from './../../pages/pageInicial/style';

function Footer() {
    return (
        <footer>
            <Container style={{paddingTop: '50px'}}>
                <Row>
                    <Col md={3}>
                        <nav>
                            <a href='index.html'><Imagem src={Logo} alt='Logo Coamo'
                                className='fluid' /></a>
                        </nav>
                    </Col>
                    <Col md={5}>
                        <ul className='ul-media'>
                            <li>
                                <a target='_blank' href='https://www.facebook.com/coamo.agroindustrial.cooperativa'
                                    style={{ color: 'white' }}><Imagem src={logoFacebook}
                                        className='logoMedia' /><strong> Facebook</strong></a>
                            </li>
                            <li>
                                <a target='_blank' href='https://www.instagram.com/coamocooperativa'
                                    style={{ color: 'white' }}><Imagem src={logoInstagram}
                                        className='logoMedia' /><strong> Instagram</strong></a>
                            </li>
                            <li>
                                <a target='_blank' href='https://www.linkedin.com/company/coamo-agroindustrial-cooperativa/mycompany/' style={{ color: 'white' }}><Imagem src={logoLinkedin}
                                    className='logoMedia' /><strong> Linkedin</strong></a>
                            </li>

                            <div className='direitos-reservados'>
                                <p style={{ color: 'white', paddingTop: '50px' }}><strong>Todos os direitos reservados.</strong></p>
                            </div>
                        </ul>
                    </Col>

                    <Col md={4}>
                        <ol>
                            <br />
                            <li>
                                <a href='' data-scroll-to='preco-dia' className='aFooter'><strong>Preço do dia</strong></a>
                            </li>

                            <br /><br />

                            <li>
                                <a href='' data-scroll-to='login' className='aFooter'><strong>Login</strong></a>
                            </li>

                            <br />
                            <br />

                            <li>
                                <a href='' data-scroll-to='dia-de-campo' className='aFooter'><strong>Dia de Campo</strong></a>
                            </li>

                            <br />
                        </ol>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;