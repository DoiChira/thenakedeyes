import './App.css';
import Navbar from './components/shared/Navbar';
import Routes from './components/Routes';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/index';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
