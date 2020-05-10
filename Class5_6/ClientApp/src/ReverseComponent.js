import React from 'react';

class ReverseComponent extends React.Component {

    state = {
        text:''
    }

    reverseText = e => {
        let text = e.target.value;
        text = text.split('').reverse().join('');
        this.setState({ text});
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.reverseText} />
                <h2>{this.state.text}</h2>
            </div>
        );
    }

}
export default ReverseComponent;