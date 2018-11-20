import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';

import 'styles/reset.css'
// import store from './store'

ReactDOM.render(
  // <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  // </Provider>,
  document.getElementById('root'));

serviceWorker.unregister();
