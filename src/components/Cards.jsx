import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from '../assets/bicho.jpg';

function Cards() {
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} alt="bicho de pelucia" />
      <Card.Body>
        <Card.Title>Ursinho de pelúcia </Card.Title>
        <Card.Text>
        R$ 199,90
        </Card.Text>
        <Button variant="danger">Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;