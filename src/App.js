import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route,Link , Switch } from 'react-router-dom';


 import Main from './components/main';
 import Data from './components/Data';
 import Specific from './components/Specific';

class App extends Component {
  state = {  
    isAuthintication: true
  }

  render() {
 

    return (
    <React.Fragment>
      <Router>
       <Switch>SpecificData
        <Route exact  path="/"  component={ Main }   />
        <Route exact  path="/Data/:id" component={ Data } />
        <Route exact  path="/Specific/:login" component={ Specific } />

        <Route path="*" component={()=> "404 NOT FOUND"} />
       </Switch>
     </Router>
    </React.Fragment>
  )
   }

}


export default App;
