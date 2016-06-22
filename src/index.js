import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { parseHash, makeDefaultState } from './constants/app';

import makeStore from './store';

// "Views"
import App from './views/App';

// Import styles
import './styles/main.scss';

let incoming = parseHash();

const defaultState = makeDefaultState(incoming);

// Create store
const store = makeStore(defaultState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
