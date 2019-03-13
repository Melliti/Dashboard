import React, { Component } from 'react';
import { BrowserRouter as Router, Route, /*Link*/ } from "react-router-dom";
import Widgets from './widgets/Widgets';
import Nav from './Nav'

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
            <Route path="/" component={Widgets} />

          </Router>
        </div>
    );
  }
}

export default App;
