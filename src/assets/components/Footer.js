import Logo from '../imagens/logoCoamo.png'
import logoFacebook from '../imagens/facebook.png'
import logoInstagram from '../imagens/instagram.png'
import logoLinkedin from '../imagens/linkedin.png'
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <footer>
            <div class='container'>
                <div class='row'>
                    <div class='col-md-3'>
                        <nav>
                            <a href='index.html'><img src={Logo} alt='Logo Coamo'
                                class='img-fluid' /></a>
                        </nav>
                    </div>
                    <div class='col-md-5'>
                        <ul className='ul-media'>
                            <li>
                                <a target='_blank' href='https://www.facebook.com/coamo.agroindustrial.cooperativa'
                                    style={{ color: 'white;' }}><img src={logoFacebook}
                                        className='logoMedia' /><strong> Facebook</strong></a>
                            </li>
                            <li>
                                <a target='_blank' href='https://www.instagram.com/coamocooperativa'
                                    style={{ color: 'white;' }}><img src={logoInstagram}
                                        className='logoMedia' /><strong> Instagram</strong></a>
                            </li>
                            <li>
                                <a target='_blank' href='https://www.linkedin.com/company/coamo-agroindustrial-cooperativa/mycompany/' style={{ color: 'white;' }}><img src={logoLinkedin}
                                    className='logoMedia' /><strong> Linkedin</strong></a>
                            </li>

                            <div className='direitos-reservados'>
                                <p style={{ color: 'white;', paddingTop: '50px' }}><strong>Todos os direitos reservados.</strong></p>
                            </div>
                        </ul>
                    </div>

                    <div class='col-md-4'>
                        <ol>
                            <br />
                            <li>
                                <a href='' data-scroll-to='preco-dia' class='aFooter'><strong>Preço do dia</strong></a>
                            </li>

                            <br /><br />

                            <li>
                                <a href='' data-scroll-to='login' class='aFooter'><strong>Login</strong></a>
                            </li>

                            <br />
                            <br />

                            <li>
                                <a href='' data-scroll-to='dia-de-campo' class='aFooter'><strong>Dia de Campo</strong></a>
                            </li>

                            <br />
                        </ol>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;