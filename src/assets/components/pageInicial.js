import 'bootstrap/dist/css/bootstrap.min.css';
import imgCard1 from '../imagens/foto-noticiascomamor1.jpg';
import imgCard2 from '../imagens/foto-noticiascomamor2.jpg';
import imgCard3 from '../imagens/foto-noticiascomamor3.jpg';
import imgCard4 from '../imagens/foto-noticiascomamor4.jpg';
import diaDeCampo from '../imagens/diadecampo.jpeg';
import Banner1 from '../imagens/banner1.png';
import Banner2 from '../imagens/banner2.png';

function PageInicial() {
    return (<>

        <section id='home' class='d-flex'>
            <div class='container'>
                <div class='row'>
                    <div class='col-md-12 capa'>
                        <div id='carousel-coamo' class='carousel slide' data-ride='carousel'>

                            <div class='carousel-inner'>
                                <div class='carousel-item active imagem'>
                                    <img src={Banner1} alt='Banner Novidades da coamo' class='img-fluid' />
                                    <a class='button-nav' className='btn-banner' data-scroll-to='login'>
                                        <span class='span-nav'>Saiba mais</span>
                                    </a>
                                </div>


                                <div class='carousel-item imagem'>
                                    <img src={Banner2} alt='Banner 2' class='img-fluid' />
                                    <a class='button-nav' className='btn-banner' href='#'>
                                        <span class='span-nav'>Saiba mais</span>
                                    </a>
                                </div>
                            </div>
                            <a href='#carousel-coamo' class='carousel-control-prev' data-slide='prev'>
                                <i class='fas fa-angle-left fa-3x'></i>
                            </a>

                            <a href='#carousel-coamo' class='carousel-control-next' data-slide='next'>
                                <i class='fas fa-angle-right fa-3x'></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section >

        <section>
            <div class='container'>
                <div class='row'>
                    <div class='col-md-8'>
                        <div class='container-card container-fluid'>
                            <div class='row'>
                                <div class='col-md-4'>
                                    <div class='card'>
                                        <img src={imgCard1} alt='Foto do primeiro encontro doa CEMF'
                                            class='card-img-top' width='220px' height='150px' />
                                        <div class='card-body'>
                                            <h6 class='card-text'>Aplicativo Coamo alcança 18 mil cooperados</h6>
                                        </div>
                                    </div>
                                </div>

                                <div class='col-md-4'>
                                    <div class='card'>
                                        <img src={imgCard2} alt='Imagem do informativo coamo' class='card-img-top' width='220px' height='150px' />
                                        <div class='card-body'>
                                            <h6 class='card-text'>Dia Nacional da Conservação de Solo</h6>
                                        </div>
                                    </div>
                                </div>

                                <div class='col-md-4'>
                                    <div class='card'>
                                        <img src={imgCard3} alt='Imagem do encontro das Coordenadoras da Comissão Estadual de Mulheres da FAEP' width='220px' height='150px' class='card-img-top' />
                                        <div class='card-body'>
                                            <h6 class='card-text'>Coamo investe 250 Milhões em armazéns</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class='col-md-4'>
                        <div class='container-card container-fluid' style={{ padding: '10px;' }}>
                            <div class='titulo'>
                                <h4>Login</h4>
                            </div>

                            <div>
                                <form class='form-login' data-scroll='login'>
                                    <div class='mb-3'>
                                        <label>
                                            <h5>Login</h5>
                                        </label>
                                        <input type='email' class='form-control' id='email' name='email'
                                            placeholder='teste@comamor.com' />
                                    </div>
                                    <div class='mb-3'>
                                        <label>
                                            <h5>Senha</h5>
                                        </label>
                                        <input type='password' class='form-control' id='senha' name='senha'
                                            placeholder='123' />
                                    </div>
                                    <h5 id='output-login'><br /></h5>
                                    <div style={{ textAlign: 'center;' }}>
                                        <input class='btn btn-primary' id='btn-login' onclick='logar()' value='Logar'
                                            readonly />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class='container'>
                <div class='row'>
                    <div class='col-md-8'>
                        <div class='container-card '>
                            <div class='titulo'>
                                <h4>Variação do preço</h4>
                            </div>

                            <div id='grafico-preco' data-scroll='preco-dia'>
                                <iframe loading='lazy'
                                    className='img-graficoPreco'
                                    src='https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFfKJYxltY&#x2F;view?embed'></iframe>
                            </div>
                        </div>
                    </div>

                    <div class='col-md-4'>
                        <div class='container-card'>
                            <div class='titulo'>
                                <h4>Preço do dia</h4>
                            </div>

                            <div id='conteudo-preco'>
                                <table class='table table-striped table-condensed'>
                                    <thead>
                                        <tr>
                                            <th class='alinhamento-1'>Produto</th>
                                            <th class='alinhamento-1'>Data</th>
                                            <th class='alinhamento-1'>R$</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td class='alinhamento-1'>Soja</td>
                                            <td class='alinhamento-2'>04/04/2023 13:33</td>
                                            <td class='alinhamento-1'>R$&nbsp;141,00</td>
                                        </tr>

                                        <tr>
                                            <td class='alinhamento-1'>Milho</td>
                                            <td class='alinhamento-2'>04/04/2023 13:33</td>
                                            <td class='alinhamento-1'>R$&nbsp;69,00</td>
                                        </tr>

                                        <tr>
                                            <td class='alinhamento-2'>Trigo Pão Tipo 1</td>
                                            <td class='alinhamento-2'>04/04/2023 13:33</td>
                                            <td class='alinhamento-1'>R$&nbsp;84,00</td>
                                        </tr>

                                        <tr>
                                            <td class='alinhamento-1'>Café</td>
                                            <td class='alinhamento-2'>04/04/2023 13:33</td>
                                            <td class='alinhamento-1'>R$&nbsp;16,72</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <section>

            <div class='container'>
                <div class='row'>
                    <div class='col-md-12'>
                        <div class='container-card'>
                            <div class='titulo'>
                                <h4>Resumo do Último Dia de Campo</h4>
                            </div>
                            <div data-scroll='dia-de-campo'>
                                <img class='img-preto img-fluid'
                                    src={diaDeCampo} className='imgDiaDeCampo' />
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