import React from 'react';
import { withRouter } from 'react-router-dom';

class UploadDataset extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            file: null,
            fileName: null,
            isFileSelected: false,
            loaded: 0,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        if (this.state.isFileSelected) {
            const url = "/ai/upload_dataset";

            const data = new FormData();
            data.append('file', this.state.file, this.state.file.name);

            const requestMetadata = {
                method: 'POST',
                body: data
            }
            
            fetch(url, requestMetadata
            )
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.props.history.push('/dashboard/viewdatasets');
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log(error);
                }
            )
        }
        
        event.preventDefault();
    }

    handleChange(event) {
        const target = event.target;
        this.setState({isFileSelected: true, 
                       file: target.files[0],
                       fileName: target.value});
    }

    render() {
        return (
            <div className="UploadDataset">
                <p>UploadDataset</p>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <div className="pad">
                        <input name="fileName"
                            type="file"
                            value={this.state.fileName}
                            onChange={this.handleChange}
                            />
                        </div>

                        <button type="submit">
                            Upload
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(UploadDataset)