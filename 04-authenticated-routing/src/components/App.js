import React, { Component } from 'react';
import '../styles/App.css';

import Admin from './Admin'
import About from './AboutComponent';
import Books from './BooksComponent';
import Hello from './HelloComponent';
import Home from './HomeComponent';
import { fakedAuth ,Login } from './Login'
import PrivateRoute from './PrivateRoute'




// import route Components here
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <div className="container">
            <ul>
              <li><Link to="/hello">Hello</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/books">Books</Link></li>
              <li><Link to="/admin">Data DashBoard</Link></li>
            </ul>
            <hr/>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/hello" component={Hello} />
            <Route path="/books" component={Books} />
            <Route path='/login' component={Login}/>
            <PrivateRoute authed={fakedAuth.isAuthenticated} path='/admin' component={Admin} />
          </Switch>

          </div>
        </div>
      </Router>
    );
  }
}


export default App;
