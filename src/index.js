import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import state, { observer } from './redux/state';
import {addPost, updateNewPostText} from './redux/state';

const rerenderEntireTree = state => {
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <App state = {state} addPost = {addPost} updateNewPostText = {updateNewPostText} />
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    );  
  };

rerenderEntireTree(state);

observer(rerenderEntireTree);




