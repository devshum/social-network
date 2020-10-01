import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

import './App.css';
import { Route } from 'react-router-dom';

const App = props => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">

          <Route path="/profile" render={() => <Profile store = {props.store} /> }  />
          <Route path="/dialogs" render={() => <DialogsContainer store = {props.store}/> } />

          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
};

export default App;

