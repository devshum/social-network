import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
import StoreContext from './StoreContext';

const rerenderEntireTree = () => {
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <StoreContext.Provider value={store}>
            <App />
          </StoreContext.Provider>
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    );  
  };

rerenderEntireTree();

store.subscribe(() => {
  const state = store.getState();
  rerenderEntireTree(state);
});




