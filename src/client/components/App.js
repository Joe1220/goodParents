import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import About from './About';
import Home from './Home';
import Nav from './Nav';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        <Footer />
      </div>
    );
  }
}

export default App;
