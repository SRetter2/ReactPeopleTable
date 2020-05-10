import React from 'react';

class PersonRow extends React.Component {


    render() {
        return (<tr key={this.props.key} className={this.props.person.age  >= 65 ? "danger" : ""}>
                <td>{this.props.person.firstName}</td>
                <td>{this.props.person.lastName}</td>
            <td>{this.props.person.age}</td>
            </tr>
        );
    }
}
export default PersonRow;