import React from 'react';
import { withRouter } from 'react-router-dom';

class ProcessModel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <p>ProcessModel</p>
        );
    }
}

export default withRouter(ProcessModel)