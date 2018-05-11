import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'

import About from  './AboutComponent'
import Books from  './BooksComponent'
import Hello from  './HelloComponent'
import Home from './HomeComponent'

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
          </ul>
            <hr/>
            <Switch>
              <Route path='/' exact={true} component={Home}/>
              <Route path='/hello' component={Hello} />
              <Route path='/hello/goodmorning' render={() => { return ( <h1>Goodmorning</h1> ) } } />
              <Route path='/about' component={About} />
              <Route path='/books' component={Books} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;