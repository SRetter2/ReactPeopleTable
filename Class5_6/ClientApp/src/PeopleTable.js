import React from 'react';
import PersonForm from './PersonForm';
import PersonRow from './PersonRow';

class PeopleTable extends React.Component {

    state = {
        people:[],
        firstName: '',
        lastName: '',
        age: '',
    }
    onFirstNameChange = e => {
        this.setState({firstName: e.target.value});
    }
    onLastNameChange = e => {
        this.setState({ lastName:e.target.value});
    }
    onAgeChange = e => {
            this.setState({age: e.target.value});
    }
    onAddClick=()=>{
        const pplCopy = [...this.state.people];
        const person = { 
           firstName : this.state.firstName,
            lastName:this.state.lastName,
            age:this.state.age
        };
        pplCopy.push(person);
        this.setState({ people: pplCopy, firstName: '', lastName: '', age: '' });
    }
    onClearClick = () => {       
        this.setState({ people: [], firstName: '', lastName: '', age: '' });
    }

    render() {
        return (
            <div className="container" style={{ marginTop: 60 }}>
                <PersonForm
                    onFirstNameChange={this.onFirstNameChange}
                    firstNameValue={this.state.firstName}
                    onLastNameChange={this.onLastNameChange}
                    lastNameValue={this.state.lastName}
                    onAgeChange={this.onAgeChange}
                    ageValue={this.state.age}
                    onAddClick={this.onAddClick}
                    onClearClick={this.onClearClick}
                />
                <table className="table table-hover table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                        </tr>
                    </thead> 
                    <tbody>  
                        {this.state.people.map((p, i) => <PersonRow person={p} key={i} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default PeopleTable;