import React from 'react';
import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

const Books = ({ match }) => {
  console.log('HI I am Match of Books: ', match)
    return (
      <div>
        <div className="jumbotron">
            <h1 className="display-3">My Books</h1>
        </div>
        <div className='container'>
          <div className='row'>
            <div className="col-md-3">
              <ul>
                <li><Link to={`${match.url}/html`}>HTML</Link></li>
                <li><Link to={`${match.url}/CSS`}>CSS</Link></li>
                <li><Link to={`${match.url}/React`}>React</Link></li>
              </ul>
            </div>
            <div className="col-md-9">
              <Route path={`${match.path}/html`} render={({ match }) => {console.log('nested Match of books', match); return (<h1>HTML by Ducket book</h1>) }}/>
              <Route path={`${match.path}/CSS`} render={({ match }) => { console.log('nested Match of books', match); return (<h1>CSS by Racheal Andrews</h1>) }}/>
              <Route path={`${match.path}/React`} render={({ match }) => { console.log('nested Match of books', match); return (<h1>React by Fullstack.io book</h1>) }}/>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Books;