import React, { useReducer, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const initializeState = () => ({
  date: '',
  time: '-- Select Time --',
  guests: 0,
  occasion: '',
  availableTimes: [
    '-- Select Time --',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ]
});

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATE':
      return { ...state, date: action.payload };
    case 'SET_TIME':
      return { ...state, time: action.payload };
    case 'SET_GUESTS':
      return { ...state, guests: action.payload };
    case 'SET_OCCASION':
      return { ...state, occasion: action.payload };
    default:
      throw new Error('Unknown action type');
  }
};

const BookingPage = () => {
  const [state, dispatch] = useReducer(reducer, initializeState());
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Hook from react-router-dom for navigation

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!state.date) {
      formErrors.date = 'Date is required';
      isValid = false;
    }

    if (state.time === '-- Select Time --') {
      formErrors.time = 'Please select a time';
      isValid = false;
    }

    if (state.guests <= 0) {
      formErrors.guests = 'Number of guests must be greater than 0';
      isValid = false;
    }

    if (!state.occasion) {
      formErrors.occasion = 'Occasion is required';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Redirect to booking confirmed page with state
      navigate('/booking/confirmed', { state });
    } else {
      console.log('Form has errors. Please correct them.');
    }
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
              value={state.date}
              onChange={(e) =>
                dispatch({ type: 'SET_DATE', payload: e.target.value })
              }
              isInvalid={!!errors.date}
            />
            <Form.Control.Feedback type='invalid'>
              {errors.date}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            controlId='res-time'
            className='mb-3'
          >
            <Form.Label>Choose time</Form.Label>
            <Form.Control
              as='select'
              value={state.time}
              onChange={(e) =>
                dispatch({ type: 'SET_TIME', payload: e.target.value })
              }
              isInvalid={!!errors.time}
            >
              {state.availableTimes.map((time, index) => (
                <option
                  key={index}
                  value={time}
                  disabled={index === 0}
                >
                  {time}
                </option>
              ))}
            </Form.Control>
            <Form.Control.Feedback type='invalid'>
              {errors.time}
            </Form.Control.Feedback>
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
              value={state.guests}
              onChange={(e) =>
                dispatch({
                  type: 'SET_GUESTS',
                  payload: parseInt(e.target.value, 10)
                })
              }
              isInvalid={!!errors.guests}
            />
            <Form.Control.Feedback type='invalid'>
              {errors.guests}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            controlId='occasion'
            className='mb-3'
          >
            <Form.Label>Occasion</Form.Label>
            <Form.Control
              as='select'
              value={state.occasion}
              onChange={(e) =>
                dispatch({ type: 'SET_OCCASION', payload: e.target.value })
              }
              isInvalid={!!errors.occasion}
            >
              <option value=''>Select Occasion</option>
              <option value='Birthday'>Birthday</option>
              <option value='Anniversary'>Anniversary</option>
            </Form.Control>
            <Form.Control.Feedback type='invalid'>
              {errors.occasion}
            </Form.Control.Feedback>
          </Form.Group>

          <Button
            variant='warning'
            type='submit'
          >
            Make Your Reservation
          </Button>
        </Form>
      </section>
    </Container>
  );
};

export default BookingPage;
