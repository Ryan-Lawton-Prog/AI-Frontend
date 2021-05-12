import React from "react";
import { withRouter } from 'react-router-dom';
import Nav from './Nav.js';
import Header from './Header.js';
import Body from './Body.js';
import Footer from './Footer.js';
import './Root.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="Root">
        <Nav/>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(Home)