import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
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

          <Route path="/profile" render={() => <Profile 
                                                  profilePage = {props.state.profilePage} 
                                                  addPost = {props.addPost} updateNewPostText = {props.updateNewPostText} /> }  />
          <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage} /> } />

          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
};

export default App;

