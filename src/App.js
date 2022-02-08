import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import Home from './components';
import ThemeContextComponent from './contexts/ThemeContext';
import {store, persistor} from './redux';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <ThemeContextComponent>
          <Home />
        </ThemeContextComponent>
      </PersistGate>
    </Provider>
  );
}

export default App;
