import imgCard1 from '../../assets/imagens/foto-noticiascomamor1.jpg';
import imgCard2 from '../../assets/imagens/foto-noticiascomamor2.jpg';
import imgCard3 from '../../assets/imagens/foto-noticiascomamor3.jpg';
import imgCard4 from '../../assets/imagens/foto-noticiascomamor4.jpg';
import diaDeCampoimg from '../../assets/imagens/diadecampo.jpeg';
import Banner1 from '../../assets/imagens/banner1.png';
import Banner2 from '../../assets/imagens/banner2.png';

import CardNoticias from '../../components/cardsNoticias'
import ContainerCard from '../../components/containerCard'

import { Container, Row, Col, Carousel, Form, Button, Alert, Table } from 'react-bootstrap';
import { Centralizar, Imagem, Titulo } from './style';
import '../../components/header'

function PageInicial() {
    return (<>

        <section home d-flex>
            <Container>
                <Row>
                    <Col md={12} className="capa">
                        <Carousel>
                            <Carousel.Item>
                                <Imagem
                                    className="d-block w-100"
                                    src={Banner1}
                                    alt="Novidades para vendedores"
                                    sty
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Imagem
                                    className="d-block w-100"
                                    src={Banner2}
                                    alt="Condições especiais para semeadoras de inverno"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </section>


        <section>
            <Container>
                <Row>
                    <Col md={8}>
                        <ContainerCard>
                            <Row>
                                <Col md={3}>
                                    <CardNoticias img={imgCard1} tittle={'Aplicativo Coamo alcança 18 mil cooperados'} btnText={'Saiba mais'} />

                                </Col>
                                <Col md={3}>
                                    <CardNoticias img={imgCard2} tittle={'Dia Nacional da Conservação de Solo'} btnText={'Saiba mais'} />

                                </Col>
                                <Col md={3}>
                                    <CardNoticias img={imgCard3} tittle={'Coamo investe 250 Milhões em armazéns'} btnText={'Saiba mais'} />

                                </Col>
                                <Col md={3}>
                                    <CardNoticias img={imgCard4} tittle={'Agora a revista coamo esta na versão digital'} btnText={'Saiba mais'} />

                                </Col>
                            </Row>
                        </ContainerCard>
                    </Col>

                    <Col md={4}>
                        <ContainerCard>
                            <Titulo>Login</Titulo>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>E-mail</Form.Label>
                                    <Form.Control type="email" placeholder="teste@comamor.com" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Alert.Link href="" style={{ fontWeight: 'normal' }}>Esqueci minha senha</Alert.Link>
                                <Centralizar style={{ padding: '30px 0px' }}>
                                    <Button variant="primary" type="submit" style={{ padding: '7px 100px', fontWeight: 'bold', fontSize: 17 }}>
                                        Logar
                                    </Button>
                                </Centralizar>
                            </Form>
                        </ContainerCard>
                    </Col>
                </Row>
            </Container>
        </section>

        <section>
            <Container>
                <Row>
                    <Col md={8}>
                        <ContainerCard>
                            <Titulo>
                                <h4>Variação do preço</h4>
                            </Titulo>

                            <Centralizar id="grafico-preco">
                                <iframe loading="lazy"
                                    className='img-graficoPreco'
                                    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFfKJYxltY&#x2F;view?embed"></iframe>
                            </Centralizar>
                        </ContainerCard>
                    </Col>

                    <Col md={4}>
                        <ContainerCard>
                            <Titulo>
                                <h4>Preço do dia</h4>
                            </Titulo>

                            <Centralizar style={{ padding: '20px' }}>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Produto</th>
                                            <th>Data</th>
                                            <th>R$</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>Soja</td>
                                            <td>04/04/2023 13:33</td>
                                            <td>R$&nbsp;141,00</td>
                                        </tr>

                                        <tr>
                                            <td>Milho</td>
                                            <td>04/04/2023 13:33</td>
                                            <td>R$&nbsp;69,00</td>
                                        </tr>

                                        <tr>
                                            <td>Trigo Pão Tipo 1</td>
                                            <td>04/04/2023 13:33</td>
                                            <td>R$&nbsp;84,00</td>
                                        </tr>

                                        <tr>
                                            <td>Café</td>
                                            <td>04/04/2023 13:33</td>
                                            <td>R$&nbsp;16,72</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Centralizar>
                        </ContainerCard>
                    </Col>
                </Row>
            </Container>
        </section>


        <section>
            <Container>
                <Row>
                    <Col md={12}>
                        <ContainerCard>
                            <Titulo>
                                <h4>Resumo do Último Dia de Campo</h4>
                            </Titulo>
                            <Centralizar style={{ padding: '20px 10px 10px 10px' }} data-scroll="dia-de-campo">
                                <Imagem fluid width={'100%'}
                                    src={diaDeCampoimg} alt='Imagem do dia de campo' />
                            </Centralizar>
                        </ContainerCard>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
    )
}

export default PageInicial;