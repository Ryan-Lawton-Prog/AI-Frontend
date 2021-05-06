import React from "react";
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
    render={(props) => 
        fetch("/auth_user", {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({'token':authed})}
          )
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
                <Component/>
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                <Redirect to={{pathname: '/login', state: {from: props.location}}} />
            }
        )
    }
    />
  )
}

export default PrivateRoute