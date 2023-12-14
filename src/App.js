import './App.css';
import Hero from './components/Hero';
import Navbar from './components/shared/Navbar';
import Routes from './components/Routes';

function App() {
  return (
    <div className=''>
      <Navbar />
      <Routes />
      <Hero />
    </div>
  );
}

export default App;
