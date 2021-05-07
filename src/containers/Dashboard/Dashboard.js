import React from "react";
import { withRouter } from 'react-router-dom'

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };
      }

    render() {
        return (
            <p>{localStorage.getItem('user')}</p>
        );
    }
}

export default withRouter(Dashboard)