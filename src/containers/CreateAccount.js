import React from "react";
import "./Login.css";
import { withRouter } from 'react-router-dom'

function handleErrors(response) {
  if (!response.ok) {
      throw Error(response.statusText);
  }
  return response;
}

class CreateAccount extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        errorMessage: false,
        username: '',
        password: '',
        validForm: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    console.log(event);
    const url = "/add_user";
    const postBody = {
      username: this.state.username,
      password: this.state.password
    };
    const requestMetadata = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(postBody)
    }
    fetch(url, requestMetadata)
      .then(handleErrors)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          localStorage.setItem('user', result.token);
          this.props.history.push('/dashboard');
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
          console.log("test");
          this.setState({errorMessage: true});
        }
      )
    event.preventDefault();
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value
    });
    if (this.state.username && this.state.username.length > 0 && 
        this.state.password && this.state.password.length > 0){
        this.setState({validForm: true});
    }else{
        this.setState({validForm: false});
    }
  }

  render() {
    return (
      <div className="CreateAccount">
        {this.state.errorMessage &&
            <h1>Username already exists</h1>
        }
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Username
              <input
                name="username"
                autoFocus
                type="text"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <div className="form-group">
            <label>Password
              <input
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <button className="btn btn-primary btn-block" type="submit" disabled={!this.state.validForm}>
            Create Account
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(CreateAccount)