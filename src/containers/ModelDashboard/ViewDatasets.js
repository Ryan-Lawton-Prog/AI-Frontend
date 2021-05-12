import React from 'react';
import { withRouter } from 'react-router-dom';

class ViewDatasets extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            file_names: []
        };
    }

    componentDidMount() {
        fetch("/get_datasets", {method: 'GET'})
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
                var files = [];
                for (var key in result) {
                    result[key]['_id'] = key;
                    files.push(result[key]);
                }
                this.setState({file_names: [...this.state.file_names, ...files]})
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                console.log(error)
                this.props.history.push('/login');
            }
        )
    }

    render() {
        return (
            <div className="viewDatasets">
                <p>ViewDatasets</p>
                { this.state.file_names.map(fileName => {
                    return(
                        <p>{fileName.name}</p>
                    )
                })}
            </div>
        );
    }
}

export default withRouter(ViewDatasets)