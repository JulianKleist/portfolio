import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';

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
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className='ms-auto'>
                        {
                            menuData.map((item) => (
                                <Nav.Link to={item.path} key={item.name}>
                                    <div className='list_item'>{item.name}</div>
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