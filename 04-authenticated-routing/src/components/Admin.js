import React from 'react'

const Admin = (props) => {
  console.log('Admin props: ', props)
  return (
    <div className="jumbotron">
      <h3 className="display-3">Admin Access granted</h3>
    </div>
  );
}

export default Admin