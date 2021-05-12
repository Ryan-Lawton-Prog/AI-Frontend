import React from 'react';
import { withRouter } from 'react-router-dom';

class ViewModels extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            file_names: []
        };
    }

    render() {
        return (
            <p>ViewModels</p>
        );
    }
}

export default withRouter(ViewModels)