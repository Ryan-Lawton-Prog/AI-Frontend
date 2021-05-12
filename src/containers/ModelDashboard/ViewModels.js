import React from 'react';
import { withRouter } from 'react-router-dom';

class ViewModels extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };
      }

    render() {
        return (
            <p>ViewModels</p>
        );
    }
}

export default withRouter(ViewModels)