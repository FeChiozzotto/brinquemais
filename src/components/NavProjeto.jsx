import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-bootstrap';
import "../App.css";

function NavProjeto() {
  return (
    <>
      <Navbar bg="danger" variant="danger">
        <Container>
        <NavLink className='TituloNav' href="/">BrinqueMais</NavLink>
          <Nav className="ms-auto">
            <Nav.Link href="/Sobre">Sobre</Nav.Link>
            <Nav.Link href="/Usuario">Usuario</Nav.Link>
            <Nav.Link href="/ProdutoBrinquedo">Produto Brinquedo</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavProjeto;