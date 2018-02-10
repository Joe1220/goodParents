import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import '../public/style/App.css'

import About from './About';
import Home from './Home';
import Nav from './Nav';
import Footer from './Footer';
import Terms from './Terms'
import Privacy from './Privacy';


class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/privacy" component={Privacy} />
        <Footer />
      </div>
    );
  }
}

export default App;
