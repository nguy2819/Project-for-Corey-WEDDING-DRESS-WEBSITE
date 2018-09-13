import React, { Component } from 'react';
import Test from './Components/TestComponent';
// import express from 'express';

// const app = express();

// //Set up View Engine
// app.set('view engine', 'ejs');

// //Create Home route
// app.get('/', (req, res) => {
//   res.render('home');
// });

// app.listen(3000, () => {
//   console.log('app now listening for request on port 3000');
// });

class App extends Component {
  render() {
    return (
      <div> 
        <Test/>
      </div>
    );
  }
}

export default App;
