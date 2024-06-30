import { Button, Col, Row, Image, Container } from 'react-bootstrap';
export const Header = () => {
  return (
    <>
      <section className='p-5'>
        <Container>
          <Row
            xs={1}
            md={2}
          >
            <Col>
              <h1>Little Lemon</h1>
              <h4>Chicago</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Button
                className='mb-3'
                variant='warning'
              >
                Reserve a Table
              </Button>
            </Col>
            <Col className='d-flex justify-content-center'>
              <Image
                src='./src/assets/restauranfood.jpg'
                width={400}
                height={400}
                fluid
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
