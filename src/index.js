import React from 'react';
import store from './Redux/redux-store';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// addPost('JS blab-bla');

let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode >,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState());

// store.subscribe(rerenderEntireTree);
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});
