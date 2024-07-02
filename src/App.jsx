import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { HomePage } from './components/HomePage';
import { Navigation } from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookingPage from './components/BookingPage';
import BookingConfirmed from './components/BookingConfirmed'; // Import BookingConfirmed component

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/booking'
          element={<BookingPage />}
        />
        <Route
          path='/booking/confirmed'
          element={<BookingConfirmed />}
        />
      </Routes>
    </Router>
  );
}

export default App;
