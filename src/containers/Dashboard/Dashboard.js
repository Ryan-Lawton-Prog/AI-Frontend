import React from "react";
import { withRouter } from 'react-router-dom';
import UploadDataset from '../ModelDashboard/UploadDataset';
import ProcessModel from '../ModelDashboard/ProcessModel';
import ViewModels from '../ModelDashboard/ViewModels';
import ViewDatasets from '../ModelDashboard/ViewDatasets';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import ModelDashboard from "../ModelDashboard/ModelDashboard";

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };
      }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/dashboard/uploaddata" component={UploadDataset}/>
                    <Route path="/dashboard/processmodel" component={ProcessModel}/>
                    <Route path="/dashboard/viewmodels" component={ViewModels}/>
                    <Route path="/dashboard/viewmdatasets" component={ViewDatasets}/>
                    <Route path="/dashboard/*" exact component={ModelDashboard}/>
                    <p>{localStorage.getItem('user')}</p>
                </Switch>
            </Router>
        );
    }
}

export default withRouter(Dashboard)