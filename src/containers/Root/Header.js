import React from "react";
import dorohedoro from '../../assets/dorohedoro.jpeg';

export default class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="Header">
        <header class="masthead" style={{backgroundImage: `url(${dorohedoro})`}}>
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-10 mx-auto">
                        <div class="site-heading">
                            <h1>Portfolio</h1>
                            <span class="subheading">Ryan Lawton</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
      </div>
    );
  }
}