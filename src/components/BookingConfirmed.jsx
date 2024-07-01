import React, { useEffect, useState } from 'react';
import { Container, Card, Button, Spinner } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const BookingConfirmed = () => {
  const location = useLocation();
  const { state } = location;

  const [countdown, setCountdown] = useState(10);
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      if (countdown > 0) {
        setCountdown((prev) => prev - 1);
      } else {
        clearInterval(countdownTimer);
        window.location.href = '/'; // Redirect to home page after countdown
      }
    }, 1000);

    // Simulate data loading delay for 2 seconds (you can replace this with actual loading logic)
    setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 2000);

    return () => clearInterval(countdownTimer);
  }, [countdown]); // Include countdown in dependencies to trigger effect on countdown change

  if (loading) {
    return (
      <Container className='mt-5 d-flex justify-content-center align-items-center'>
        <Spinner
          animation='border'
          role='status'
        >
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      </Container>
    );
  }

  return (
    <Container className='mt-5 d-flex flex-column align-items-center'>
      <Card
        bg='warning'
        className='w-100 mb-4'
      >
        <Card.Body>
          <Card.Title className='mb-0'>Booking Confirmed!</Card.Title>
        </Card.Body>
      </Card>

      <Card className='w-100 mb-4'>
        <Card.Body>
          <Card.Title className='mb-4'>Booking Details</Card.Title>
          <Card.Text>
            <strong>Date:</strong> {state.date} <br />
            <strong>Time:</strong> {state.time} <br />
            <strong>Number of Guests:</strong> {state.guests} <br />
            <strong>Occasion:</strong> {state.occasion}
          </Card.Text>
        </Card.Body>
      </Card>

      <Container className='w-100 d-flex justify-content-center'>
        <Button
          variant='warning'
          className='w-100'
        >
          <Link
            to='/'
            className='text-dark text-decoration-none'
          >
            Book More
          </Link>
        </Button>
      </Container>

      <Container className='w-100 mt-4 text-center'>
        <Card className='w-100 mb-4 p-3'>
          <p className='my-auto'>
            Redirecting to home page in {countdown} seconds...
          </p>
        </Card>
      </Container>
    </Container>
  );
};

export default BookingConfirmed;
