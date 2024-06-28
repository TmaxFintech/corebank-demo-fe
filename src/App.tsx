import { ThemeProvider } from 'styled-components';
import './styles/global.css';
import theme from './styles/theme';
import Test from './components/Test';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Test />
    </ThemeProvider>
  );
}

export default App;
