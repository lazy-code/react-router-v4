import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

const App = (props) => (
  <Router>
    <div>
      <Route
        path="/:a(\d{2}-\d{2}-\d{4}):b(\.[a-z]+)"
        render={({match}) => (
          <h1>
            param a: {match.params.a}<br />
            param b: {match.params.b}
          </h1>
        )} />
    </div>
  </Router>
);

export default App;