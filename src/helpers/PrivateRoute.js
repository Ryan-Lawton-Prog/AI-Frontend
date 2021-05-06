import React from "react";
import { withRouter } from 'react-router-dom'

class Login extends React.Component {
  constructor(props){
    super(props);
    this.component = props.component;
    this.state = {
        loading: true
    };
  }

  componentDidMount() {
    fetch("/auth_user", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({'token':localStorage.getItem('user')})}
      )
    .then(res => res.json())
    .then(
        (result) => {
            console.log(result);
            this.setState({loading: false})
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
            console.log(error)
            this.props.history.push('/login');
        }
    )
  }

  render() {
    return (
      <div className="PrivateRoute">
        {this.state.loading && <h1>Loading</h1>}
        {!this.state.loading && <this.component/>}
      </div>
    );
  }
}


export default withRouter(Login)