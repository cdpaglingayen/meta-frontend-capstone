import './App.css';
import { HomePage } from './components/HomePage';
import { Navigation } from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navigation />
      <HomePage />
    </>
  );
}

export default App;
