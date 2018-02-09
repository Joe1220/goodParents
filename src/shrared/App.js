import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import About from '../client/components/About';
import Home from '../client/components/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </div>
    );
  }
}

export default App;
