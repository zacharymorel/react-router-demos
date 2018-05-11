import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      redirectToReferrer: false
    }
  }

  login = () => {
    fakedAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })
  }

  render() {
    console.log('this.props.location.state: ', this.props.location.state)
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state;
    if (redirectToReferrer) 
      return (
        <Redirect to={from} />
      )

    return (
      <div className="jumbotron">
          <h1 className="display-3">Login required</h1>
          <p className="lead">You must log in to view the page at {from.pathname}.</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" onClick={this.login} role="button">Login</a>
          </p>
      </div>
    )
  }
}

/* A fake authentication function */
export const fakedAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
     setTimeout(cb, 100)
  },
}