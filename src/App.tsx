import { ThemeProvider } from 'styled-components';
import './styles/global.css';
import theme from './styles/theme';
import Test from './components/Test';
import Typography from './shared/components/Typography';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Test />
      <hr />
      <Typography fontStyle="display1">Display1 TEXT</Typography>
      <Typography fontStyle="h3">H3 TEXT</Typography>
    </ThemeProvider>
  );
}

export default App;
