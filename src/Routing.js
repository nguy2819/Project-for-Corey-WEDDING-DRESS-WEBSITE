import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './Components/Home';
import Bridal from './Components/Bridal';
import Azul from './Components/Azul';
import Evening from './Components/Evening';
import Accessories from './Components/Accessories';
import Stores from './Components/Stores';
import Events from './Components/Events';
import Press from './Components/Press';
import About from './Components/About';
import Contact from './Components/Contact';


const Routing = () => (
    <Router>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/bridal" component={Bridal}/>
        <Route path="/azul" component={Azul}/>
        <Route path="/evening" component={Evening}/>
        <Route path="/accessories" component={Accessories}/>
        <Route path="/stores" component={Stores}/>
        <Route path="/events" component={Events}/>
        <Route path="/press" component={Press}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
    </Router>
  )

  export default Routing