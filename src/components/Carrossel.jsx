import Carousel from 'react-bootstrap/Carousel';

function Carrossel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 h-60"
          src="https://img.freepik.com/fotos-gratis/tres-ursinhos-de-pelucia-sentados-um-ao-lado-do-outro-em-um-fundo-azul_1340-36121.jpg?w=900&t=st=1699356754~exp=1699357354~hmac=d828b0161e1415f552d7e6662baea8b3828ab854b10e9242acc7a60c2c7e0f3b"
          alt="imagem 1"
        />
        <Carousel.Caption>
          <h3 class='text-carrosel'>Conheça os nossos produtos</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-60"
          src="https://img.freepik.com/fotos-gratis/jogue-fundo-de-massa-com-polvo-fofo_23-2149700403.jpg?w=740&t=st=1699356812~exp=1699357412~hmac=aa738dde33680dd3b20edfa0faf1da329f43cf41c9392448c7b054eb58e0cb7a"
          alt="imagem 2"
        />

        <Carousel.Caption>
        <h3 class='text-carrosel'>Conheça os nossos produtos</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-60"
          src="https://img.freepik.com/fotos-gratis/brinquedo-de-aviao-em-um-espaco-de-copia-de-fundo-azul_169016-21362.jpg?w=740&t=st=1699356841~exp=1699357441~hmac=ada6a6afdedf92f2c1514bea17e54b6b5f1a52ee5481ffa680cbc61f8bef9eea"
          alt="imagem 3"
        />

        <Carousel.Caption>
        <h3 class='text-carrosel'>Conheça os nossos produtos</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrossel;