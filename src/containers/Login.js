import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//import axios from 'axios';
import "./Login.css";

export default function Login() {
  const [usernameV, setEmail] = useState("");
  const [passwordV, setPassword] = useState("");

  function validateForm() {
    return usernameV.length > 0 && passwordV.length > 0;
  }

  function handleSubmit(event) {
    console.log(event);
    const url = "/login";
    const postBody = {
      username: usernameV,
      password: passwordV
    };
    const requestMetadata = {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: JSON.stringify(postBody)
    } // FLASK NEEDS TO BE CHANGED TO SUPPORT JSON DATA INSTEAD OF FORM DATA
    fetch(url, requestMetadata)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
        }
      )
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="username"
            value={usernameV}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={passwordV}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}