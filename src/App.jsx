import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';
import './App.css';
import { HomePage } from './components/HomePage';
import { Navigation } from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookingPage from './components/BookingPage';
import { useReducer } from 'react';

const initializeState = () => ({
  date: '',
  time: '',
  guests: 1,
  occasion: '',
  availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
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
    case 'UPDATE_TIMES':
      return { ...state, availableTimes: initializeState().availableTimes };
    default:
      throw new Error('Unknown action type');
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initializeState());

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Navigation />}>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/booking'
          element={
            <BookingPage
              state={state}
              dispatch={dispatch}
            />
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
