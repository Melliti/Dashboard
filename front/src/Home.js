import React, { Component } from 'react';
import { BrowserRouter as Router, Route, /*Link*/ } from "react-router-dom";
import Widgets from './widgets/Widgets';

class App extends Component {

  state = {
    
  }

componentDidMount() {
}

  render() {
    return (
        <div>
          <Router>
            <Route path="/" component={Widgets} />

          </Router>
        </div>
    );
  }
}

export default App;
