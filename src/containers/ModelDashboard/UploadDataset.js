import React from 'react';
import { withRouter } from 'react-router-dom';

class UploadDataset extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };
      }

    render() {
        return (
            <div className="UploadDataset">
                <p>UploadDataset</p>
            </div>
        );
    }
}

export default withRouter(UploadDataset)