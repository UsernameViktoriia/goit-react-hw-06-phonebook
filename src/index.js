import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import './index.css';
import store, { persistedStor } from 'redux/store';
import { PersistGate } from 'redux-persist/es/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
