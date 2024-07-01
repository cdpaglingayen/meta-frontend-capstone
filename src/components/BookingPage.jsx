import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default function BookingPage() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  const [availableTimes] = useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ date, time, guests, occasion });
  };

  return (
    <>
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
                onChange={(e) => setDate(e.target.value)}
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
                onChange={(e) => setTime(e.target.value)}
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
                onChange={(e) => setGuests(e.target.value)}
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
                onChange={(e) => setOccasion(e.target.value)}
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
    </>
  );
}
