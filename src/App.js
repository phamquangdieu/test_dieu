import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import Home from './components';
import {store, persistor} from './redux';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Home />
      </PersistGate>
    </Provider>
  );
}

export default App;
