import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { HomePage } from './components/HomePage';
import { Navigation } from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookingPage from './components/BookingPage';

const router = createBrowserRouter([
  {
    element: <Navigation />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/booking',
        element: <BookingPage />
      }
    ]
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
