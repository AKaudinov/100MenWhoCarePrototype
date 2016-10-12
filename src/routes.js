import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/Home/HomePage';
import AboutPage from './components/About/AboutPage';
import ManageContactPage from './components/Contact/ManageContactPage';

export default (
  <Route path="/" component={App}>
  <IndexRoute component={HomePage}/>
      <Route path="about" component={AboutPage}/>
      <Route path="contact" component={ManageContactPage}/>
  </Route>
);