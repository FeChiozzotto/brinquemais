import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import img from '../assets/brinquedo.png'

function Cabecalho() {
  return (
    <>
      <Navbar bg="danger" variant="danger">
        <Container>
        <div className="caixa">
      <span className="navbar-brand">
          <img src={img} alt="Logo" style={{ width: '150px', marginRight: '10px' }} />
      </span>
    </div>
        </Container>
        
      </Navbar>
    </>
  );
}

export default Cabecalho;