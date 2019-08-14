import React, {Component} from 'react';

class Clicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.setState({ num: Math.floor(Math.random() * 10) + 1});
    };
    render() {
        return(
            <div>
                <h2>Number is {this.state.num}</h2>
                <h1>{this.state.num === 7 ? 'You Win!!' : <button onClick={this.handleClick}>Update Number</button> }</h1>
            </div>
        );
    }
}
export default Clicker;