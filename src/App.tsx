import { AppRouter } from '@pages/AppRouter';
import { store } from '@store/store';
import { GlobalStyles } from '@styles/GlobalStyles';
import { theme } from '@styles/theme';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppRouter />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
