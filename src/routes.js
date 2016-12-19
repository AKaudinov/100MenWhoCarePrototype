import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/Home/HomePage';
import AboutPage from './components/About/AboutPage';
import ContactPage from './components/Contact/ContactPage'; //eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
  <IndexRoute component={HomePage}/>
      <Route path="about" component={AboutPage}/>
      <Route path="contact" component={ContactPage}/>
  </Route>
);