import imgCard1 from '../../assets/imagens/foto-noticiascomamor1.jpg';
import imgCard2 from '../../assets/imagens/foto-noticiascomamor2.jpg';
import imgCard3 from '../../assets/imagens/foto-noticiascomamor3.jpg';
import imgCard4 from '../../assets/imagens/foto-noticiascomamor4.jpg';
import imgCard5 from '../../assets/imagens/foto-noticiascomamor5.jpg';
import imgCard6 from '../../assets/imagens/foto-noticiascomamor6.jpg';
import diaDeCampoimg from '../../assets/imagens/diadecampo.jpeg';
import Banner1 from '../../assets/imagens/banner1.png';
import Banner2 from '../../assets/imagens/banner2.png';

import CardNoticias from '../../components/cardsNoticias'
import ContainerCard from '../../components/containerCard'

import { Container, Row, Col, Carousel, Table } from 'react-bootstrap';
import { Centralizar, Imagem, Titulo } from './style';
import '../../components/header'

function PageInicial(props) {

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
                    <Col md={12}>
                        <ContainerCard>
                            <Titulo>Principais notícias</Titulo>
                            <Row>
                                <Col md={2}>
                                    <CardNoticias img={imgCard1} tittle={'Aplicativo Coamo alcança 18 mil cooperados'} btnText={'Saiba mais'} />

                                </Col>
                                <Col md={2}>
                                    <CardNoticias img={imgCard2} tittle={'Dia Nacional da Conservação de Solo'} btnText={'Saiba mais'} />

                                </Col>
                                <Col md={2}>
                                    <CardNoticias img={imgCard3} tittle={'Coamo investe 250 Milhões em armazéns'} btnText={'Saiba mais'} />

                                </Col>
                                <Col md={2}>
                                    <CardNoticias img={imgCard4} tittle={'Agora a revista coamo esta na versão digital'} btnText={'Saiba mais'} />

                                </Col>
                                <Col md={2}>
                                    <CardNoticias img={imgCard5} tittle={' Semana do Meio Ambiente'} btnText={'Saiba mais'} />

                                </Col>
                                <Col md={2}>
                                    <CardNoticias img={imgCard6} tittle={'Copa Coamo de cooperados 2023'} btnText={'Saiba mais'} />

                                </Col>
                            </Row>
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
                                Variação do preço
                            </Titulo>

                            <Centralizar id="grafico-preco">
                                <iframe loading="lazy"
                                    className='img-graficoPreco'
                                    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFfKJYxltY&#x2F;view?embed"
                                    title='Gráfico dos preços'></iframe>
                            </Centralizar>
                        </ContainerCard>
                    </Col>

                    <Col md={4}>
                        <ContainerCard>
                            <Titulo>
                                <h4>Preço do dia</h4>
                            </Titulo>

                            <Centralizar>
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
                            <Centralizar data-scroll="dia-de-campo">
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