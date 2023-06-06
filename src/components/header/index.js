import Logo from '../../assets/imagens/logoCoamo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../pages/pageInicial'

import { Navbar, Button, Nav, NavDropdown, Form, Container } from 'react-bootstrap';
import { Centralizar, Imagem } from '../../pages/pageInicial/style';

function Header() {

    return (
        <Navbar id='navbar-header' navbar navbar-expand-md fixed-top navbar-header>
            <Container fluid>
                <Navbar.Brand href='index.html' style={{paddingLeft: '300px'}}>
                    <Imagem src={Logo} alt='Logo Coamo' width='250px' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className='me-auto my-2 my-lg-0'
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    />
                </Navbar.Collapse>
                <Centralizar>
                    <ul className='ml-auto' style={{paddingRight: '250px'}}>
                        <li className='nav-item liheader'>
                            <Button className='button-nav'> <span className='span-nav'>Preços do
                                dia</span>
                            </Button>
                        </li>
                        <li className='nav-item liheader'>
                            <Button className='button-nav'> <span className='span-nav'>Login</span>
                            </Button>
                        </li>
                        <li className='nav-item liheader'>
                            <Button className='button-nav'> <span className='span-nav'>Dia de
                                Campo</span>
                            </Button>
                        </li>
                    </ul>
                </Centralizar>
            </Container>
        </Navbar>
    )
}

export default Header;