import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './App.css';

const Links = () => (
  <nav>
    <Link to='/?id=123'>Inline</Link>
    <Link to={{pathname:'', search:'id=789'}}>Object</Link>
  </nav>
);

const App = (props) => (
  <Router>
    <div>
      <Links />
      <Route
        path="/" render={({match, location}) => (
          <div>
            <p>root</p>
            <p>{JSON.stringify(match, '', 4)}</p>
            <p>{JSON.stringify(location, '', 4)}</p>
            <p>{new URLSearchParams(location.search).get('id')}</p>
          </div>
        )} />
    </div>
  </Router>
);

export default App;