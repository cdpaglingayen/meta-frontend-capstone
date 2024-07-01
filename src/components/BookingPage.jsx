import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default function BookingPage({ state, dispatch }) {
  if (!state) {
    return <div>Loading...</div>;
  }

  const { date, time, guests, occasion, availableTimes } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ date, time, guests, occasion });
  };

  return (
    <Container>
      <section className='mt-5'>
        <Form
          onSubmit={handleSubmit}
          style={{ maxWidth: 'auto', margin: '0 auto' }}
        >
          <Form.Group
            controlId='res-date'
            className='mb-3'
          >
            <Form.Label>Choose date</Form.Label>
            <Form.Control
              type='date'
              value={date}
              onChange={(e) =>
                dispatch({ type: 'SET_DATE', payload: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group
            controlId='res-time'
            className='mb-3'
          >
            <Form.Label>Choose time</Form.Label>
            <Form.Control
              as='select'
              value={time}
              onChange={(e) =>
                dispatch({ type: 'SET_TIME', payload: e.target.value })
              }
            >
              {availableTimes.map((time) => (
                <option
                  key={time}
                  value={time}
                >
                  {time}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group
            controlId='guests'
            className='mb-3'
          >
            <Form.Label>Number of guests</Form.Label>
            <Form.Control
              type='number'
              placeholder='1'
              min='1'
              max='10'
              value={guests}
              onChange={(e) =>
                dispatch({ type: 'SET_GUESTS', payload: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group
            controlId='occasion'
            className='mb-3'
          >
            <Form.Label>Occasion</Form.Label>
            <Form.Control
              as='select'
              value={occasion}
              onChange={(e) =>
                dispatch({ type: 'SET_OCCASION', payload: e.target.value })
              }
            >
              <option value=''>Select Occasion</option>
              <option value='Birthday'>Birthday</option>
              <option value='Anniversary'>Anniversary</option>
            </Form.Control>
          </Form.Group>

          <Button
            variant='warning'
            type='submit'
          >
            Make Your reservation
          </Button>
        </Form>
      </section>
    </Container>
  );
}
