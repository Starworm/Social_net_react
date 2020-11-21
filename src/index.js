import React from 'react';
import state, { subscribe } from './Redux/state';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addMessage, addPost, updateNewMessage, updateNewPostText } from './Redux/state'
import { BrowserRouter } from 'react-router-dom';

// addPost('JS blab-bla');

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          addPost={addPost} updateNewPostText={updateNewPostText}
          addMessage={addMessage} updateNewMessage={updateNewMessage} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
