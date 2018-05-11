import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { fakedAuth } from './Login'

const PrivateRoute = ({ component: Component, ...rest }) => {
  // console.log('PrivateRoute:', Component, '2', ...rest)
  return (
    <Route {...rest} render={props => (
      fakedAuth.isAuthenticated ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}/>
      )
    )}/>
  )
}

// NOTE: The React Router Docs under the <Route> render: func explain this process much clearer. 

export default PrivateRoute