import { ThemeProvider } from 'styled-components';
import './styles/global.css';
import theme from './styles/theme';
import Test from './components/Test';
import { Icon16, Icon24 } from './shared/components/Icon';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Test />
      <div>
        <Icon24 iconName="Add" />
        <Icon16 iconName="Download" />
      </div>
    </ThemeProvider>
  );
}

export default App;
