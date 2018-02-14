import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import About from './About';
import { Area } from "./Area";
import Home from './Home';
import Nav from './Nav';
import Footer from './Footer';
import Terms from './Terms'
import Privacy from './Privacy';
import Prime from './Prime';
import Payment from './Payment';
import FoodDetail from './FoodDetail'
import CartMain from './CartMain';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/area" component={Area} />
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/prime" component={Prime} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/cartmain" component={CartMain} />
        <Route exact path="/fooddetail" component={FoodDetail} />
        <Route exact path="/login" component={Login} />
        <Footer />
      </div>
    );
  }
}

export default App;
