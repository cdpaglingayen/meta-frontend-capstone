import { Button, Card, Col, Container, Row } from 'react-bootstrap';

export default function Specials() {
  return (
    <>
      <section>
        <Container>
          <div className='d-flex justify-content-between mb-5'>
            <h2>Specials</h2>
            <Button variant='warning'>Online Menu</Button>
          </div>
          <Row
            xs={1}
            md={3}
          >
            <Col>
              <Card>
                <Card.Img
                  variant='top'
                  src='./src/assets/greek salad.jpg' // Adjusted image path
                  style={{ height: '300px', objectFit: 'cover' }} // Set desired height and object-fit
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant='warning'>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  variant='top'
                  src='./src/assets/bruchetta.svg'
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant='warning'>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  variant='top'
                  src='./src/assets/lemon dessert.jpg' // Adjusted image path
                  style={{ height: '300px', objectFit: 'cover' }} // Set desired height and object-fit
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant='warning'>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
