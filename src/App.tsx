import { ThemeProvider } from 'styled-components';
import './styles/global.css';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>HELLO WORLD</div>
    </ThemeProvider>
  );
}

export default App;
