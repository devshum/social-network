import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';

import './App.css';
import { Route } from 'react-router-dom';

const App = props => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">

          <Route path="/profile" render={() => <ProfileContainer /> }  />
          <Route path="/dialogs" render={() => <DialogsContainer /> } />
          <Route path="/users" render={() => <UsersContainer /> } />

          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
};

export default App;

