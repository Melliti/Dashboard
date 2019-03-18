import React, { Component } from 'react';
import { BrowserRouter as Router, Route, /*Link*/ } from "react-router-dom";
import Widgets from './widgets/Widgets';
import Nav from './Nav'
import Auth from './Auth'

class App extends Component {

  state = {
    
  }

componentDidMount() {
}

  render() {
    return (
        <div>
          <Nav />

          <Router>
            <div>
              <Route exact path="/" component={Widgets} />
              <Route path="/login" component={Auth} />

            </div>

          </Router>
        </div>
    );
  }
}

export default App;
