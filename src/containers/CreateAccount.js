import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//import axios from 'axios';
import "./Login.css";

export default class CreateAccount extends React.Component {
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
    } // FLASK NEEDS TO BE CHANGED TO SUPPORT JSON DATA INSTEAD OF FORM DATA
    fetch(url, requestMetadata)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.props.history.push('/login');
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
          console.log("test")
          this.handleChange({errorMessage:true})
        }
      )
    event.preventDefault();
  }

  handleChange(event) {
      this.setState({value: event.target.value});
      if (this.states.username.length > 0 && this.state.password.length > 0){
          this.setState({validForm: true});
      }else{
          this.setState({validForm: false});
      }
  }

  return() {
    <div className="CreateAccount">
      {this.state.errorMessage &&
          <h1>Username already exists</h1>
      }
      <Form onSubmit={this.handleSubmit}>
        <Form.Group size="lg" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!this.state.validForm}>
          Create Account
        </Button>
      </Form>
    </div>
  }
}