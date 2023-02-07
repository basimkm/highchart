import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Provider } from 'react-redux';
import Store from './redux/Store';

const take = document.getElementById('root');
const root = ReactDOM.createRoot(take);

root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);
