import { ThemeProvider } from 'styled-components';
import './styles/global.css';
import theme from './styles/theme';
import Test from './components/Test';
import { Icon16, Icon24 } from './shared/components/Icon';
import NotificationIcon from './shared/components/NotificationIcon';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Test />
      <div>
        <Icon24 iconName="Add" />
        <Icon16 iconName="Download" />
      </div>
      <div>
        <NotificationIcon size="24" type="default" />
        <NotificationIcon size="24" type="error" />
        <NotificationIcon size="24" type="success" />
        <NotificationIcon size="24" type="caution" />
        <NotificationIcon size="24" type="information" />
        <NotificationIcon size="16" type="error" />
        <NotificationIcon size="16" type="success" />
        <NotificationIcon size="16" type="caution" />
        <NotificationIcon size="16" type="information" />
      </div>
    </ThemeProvider>
  );
}

export default App;
