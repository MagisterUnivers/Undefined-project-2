import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import './index.css';
import { persistor, store } from 'redux/store';
// import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import GlobalStyles from 'components/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
      {/* <BrowserRouter basename="/goit-react-hw-08-phonebook"> */}
      <GlobalStyles />
      <App />
      {/* </BrowserRouter> */}
    </Provider>
  </PersistGate>
);
