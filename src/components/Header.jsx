import React from 'react';
import { Button, Col, Row, Image, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

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
              <Link to='/booking'>
                {' '}
                {/* Use Link component with 'to' prop */}
                <Button
                  className='mb-3'
                  variant='warning'
                >
                  Reserve a Table
                </Button>
              </Link>
            </Col>
            <Col className='d-flex justify-content-end'>
              <Image
                src='./src/assets/restaurantfood.jpg'
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
