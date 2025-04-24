import { AppRouter } from '@pages/AppRouter';
import { store } from '@store/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />;
    </Provider>
  );
};

export default App;
