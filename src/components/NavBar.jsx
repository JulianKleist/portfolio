import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import './Navbar.css';

function NavBar() {

    const menuData = [
        {
            path:'/',
            name:"HOME"
        },
        {
            path:'/services',
            name:"SERVICES"
        },
        {
            path:'/about',
            name:"ABOUT"
        },
        {
            path:'/skills',
            name:"SKILLS"
        },
        {
            path:'/portfolio',
            name:"PORTFOLIO"
        },
        {
            path:'/contact',
            name:"CONTACT"
        }
    ];
    return (
        <Navbar className="main_container py-3">
            <Container className="main_container">
                <Navbar.Brand className='text-white' href="#home">LOGO</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className='ms-auto'>
                        {
                            menuData.map((item) => (
                                <Nav.Link to={item.path} key={item.name}>
                                    <div className='list_item text-white'>{item.name}</div>
                                </Nav.Link>
                            ))
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;