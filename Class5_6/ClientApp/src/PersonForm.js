import React from 'react';

class PersonForm extends React.Component {
    render() {

        return (
            <div className="row">
                <div className="col-md-3">
                    <input
                        value={this.props.firstNameValue}
                        onChange={this.props.onFirstNameChange}
                        className="form-control"
                        placeholder="First Name"
                        type="text"
                    />
                
                    <input
                        value={this.props.lastNameValue}
                        onChange={this.props.onLastNameChange}
                        className="form-control"
                        placeholder="Last Name"
                        type="text"
                    />
                
                    <input
                        value={this.props.ageValue}
                        onChange={this.props.onAgeChange}
                        className="form-control"
                        placeholder="Age"
                        type="text"
                    />
                </div>
                <div className="col-md-6">
                    <button
                        onClick={this.props.onAddClick}
                        className="btn btn-primary"
                    >Add Person</button>
                
                    <button
                        onClick={this.props.onClearClick}
                        className="btn btn-success"
                    >Clear Table</button>
                </div>
            </div>
        );
    }

}

export default PersonForm;