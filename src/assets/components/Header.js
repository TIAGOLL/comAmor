import Logo from '../imagens/logoCoamo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'
import { Button, Input, Nav, Div } from 'reactstrap';

function Header() {
    return (
        <header>
            <Nav className='navbar navbar-expand-md fixed-top navbar-header'>
                <div className='container'>
                    <a href='index.html' className='navbar-brand'>
                        <img src={Logo} alt='Logo Coamo' width='250px' />
                    </a>
                    <div>
                        <ul className='ml-auto'>
                            <li className='nav-item liheader'>
                                <Button className='button-nav' data-scroll-to='preco-dia'> <span className='span-nav'>Preços do
                                    dia</span>
                                </Button>
                            </li>
                            <li className='nav-item liheader'>
                                <Button className='button-nav' data-scroll-to='login'> <span className='span-nav'>Login</span>
                                </Button>
                            </li>
                            <li className='nav-item liheader'>
                                <Button className='button-nav' data-scroll-to='dia-de-campo'> <span className='span-nav'>Dia de
                                    Campo</span>
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </Nav>
        </header>
    )
}

export default Header;