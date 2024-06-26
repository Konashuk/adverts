import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { GlobalStyles } from 'components/helpers/globalStyled';
import App from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/adverts">
    <React.StrictMode>
      <Provider store={store}>
        <App />
        <GlobalStyles />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
