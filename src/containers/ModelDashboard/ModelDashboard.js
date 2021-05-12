import React from 'react';
import { withRouter } from 'react-router-dom';

class ModelDashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };
      }

    render() {
        return (
            <p>ModelDashboard</p>
        );
    }
}

export default withRouter(ModelDashboard)