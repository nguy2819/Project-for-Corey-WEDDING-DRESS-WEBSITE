import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import ContactUs from './Components/ContactUs';
import Test from './Components/TestComponent';
import LookBook from './Components/LookBook';

function Routing(){
  return (<Router>
    <Switch>
      <Route exact path="/" render={() => <div>Home</div>}/>
      <Route path="/contact-us" render={() => <ContactUs />}/>
      <Route path="/look-book" render={() => <LookBook />}/>
        
        
        
      {/* TODO REMOVE this */}
      <Route path="/test" render={() => <Test />} />
    </Switch>
  </Router>
  );
}

export default Routing;