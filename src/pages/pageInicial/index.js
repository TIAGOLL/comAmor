import imgCard1 from '../../assets/imagens/foto-noticiascomamor1.jpg';
import imgCard2 from '../../assets/imagens/foto-noticiascomamor2.jpg';
import imgCard3 from '../../assets/imagens/foto-noticiascomamor3.jpg';
import imgCard4 from '../../assets/imagens/foto-noticiascomamor4.jpg';
import diaDeCampo from '../../assets/imagens/diadecampo.jpeg';
import Banner1 from '../../assets/imagens/banner1.png';
import Banner2 from '../../assets/imagens/banner2.png';

import CardNoticias from '../../components/cardsNoticias'
import ContainerCard from '../../components/containerCard'

import { Container, Row, Col } from 'reactstrap';

function PageInicial() {
    return (<>

        <section home d-flex>
            <Container>
                <Row>
                    <Col md={12} className="capa">
                        <div id="carousel-coamo" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active imagem">
                                    <img src={Banner1} alt="Banner Novidades da coamo" className="img-fluid" />
                                    <a className="button-nav btn-banner" data-scroll-to="login">
                                        <span className="span-nav">Saiba mais</span>
                                    </a>
                                </div>

                                <div className="carousel-item imagem">
                                    <img src={Banner2} alt="Banner 2" className="img-fluid" />
                                    <a className="button-nav btn-banner" href="#">
                                        <span className="span-nav">Saiba mais</span>
                                    </a>
                                </div>
                            </div>
                            <a href="#carousel-coamo" className="carousel-control-prev" data-slide="prev">
                                <i className="fas fa-angle-left fa-3x"></i>
                            </a>

                            <a href="#carousel-coamo" className="carousel-control-next" data-slide="next">
                                <i className="fas fa-angle-right fa-3x"></i>
                            </a>
                        </div>
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
                                    <CardNoticias img={imgCard4} tittle={'Agora a revista coamo esta na versão digital'} btnText={'Conferir'} />
                                    
                                </Col>
                            </Row>
                        </ContainerCard>
                    </Col>

                    <Col md={4}>
                        <div className="container-card container-fluid" style={{ padding: '10px;' }}>
                            <div className="titulo">
                                <h4>Login</h4>
                            </div>

                            <div>
                                <form className="form-login" data-scroll="login">
                                    <div className="mb-3">
                                        <label>
                                            <h5>Login</h5>
                                        </label>
                                        <input type="email" className="form-control" id="email" name="email"
                                            placeholder="teste@comamor.com" />
                                    </div>
                                    <div className="mb-3">
                                        <label>
                                            <h5>Senha</h5>
                                        </label>
                                        <input type="password" className="form-control" id="senha" name="senha"
                                            placeholder="123" />
                                    </div>
                                    <h5 id="output-login"><br /></h5>
                                    <div style={{ textAlign: 'center' }}>
                                        <input className="btn btn-primary" id="btn-login" onclick="logar()" value="Logar"
                                            readonly />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="container-card ">
                            <div className="titulo">
                                <h4>Variação do preço</h4>
                            </div>

                            <div id="grafico-preco" data-scroll="preco-dia">
                                <iframe loading="lazy"
                                    style={{ position: 'absolute;', width: '100%;', height: '100%;', top: '0;', left: '0;', border: 'none;', padding: '0;', margin: '0;' }}
                                    className='img-graficoPreco'
                                    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFfKJYxltY&#x2F;view?embed"></iframe>
                            </div>
                        </div>
                    </div>

                    <Col md={4}>
                        <div className="container-card">
                            <div className="titulo">
                                <h4>Preço do dia</h4>
                            </div>

                            <div id="conteudo-preco">
                                <table className="table table-striped table-condensed">
                                    <thead>
                                        <tr>
                                            <th className="alinhamento-1">Produto</th>
                                            <th className="alinhamento-1">Data</th>
                                            <th className="alinhamento-1">R$</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td className="alinhamento-1">Soja</td>
                                            <td className="alinhamento-2">04/04/2023 13:33</td>
                                            <td className="alinhamento-1">R$&nbsp;141,00</td>
                                        </tr>

                                        <tr>
                                            <td className="alinhamento-1">Milho</td>
                                            <td className="alinhamento-2">04/04/2023 13:33</td>
                                            <td className="alinhamento-1">R$&nbsp;69,00</td>
                                        </tr>

                                        <tr>
                                            <td className="alinhamento-2">Trigo Pão Tipo 1</td>
                                            <td className="alinhamento-2">04/04/2023 13:33</td>
                                            <td className="alinhamento-1">R$&nbsp;84,00</td>
                                        </tr>

                                        <tr>
                                            <td className="alinhamento-1">Café</td>
                                            <td className="alinhamento-2">04/04/2023 13:33</td>
                                            <td className="alinhamento-1">R$&nbsp;16,72</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Col>
                </div>
            </div>
        </section>
        <section>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="container-card">
                            <div className="titulo">
                                <h4>Resumo do Último Dia de Campo</h4>
                            </div>
                            <div data-scroll="dia-de-campo">
                                <img className="img-fluid" width="1089px" height="2px"
                                    src={diaDeCampo} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default PageInicial;