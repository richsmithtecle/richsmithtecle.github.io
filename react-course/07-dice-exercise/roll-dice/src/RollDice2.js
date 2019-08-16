import React, {Component} from 'react';
import Die2 from './Die2';
import './RollDice.css';

class RollDice2 extends Component {
    static defaultProps = {
        faces: ['one', 'two', 'three', 'four', 'five', 'six']
    };
    constructor(props) {
        super(props);
        this.state = { dice3: "one", dice4: "one"}
        this.roll2 = this.roll2.bind(this);
    }
    roll2() {
        const newDie3 = this.props.faces[Math.floor(Math.random() * this.props.faces.length)]
        const newDie4 = this.props.faces[Math.floor(Math.random() * this.props.faces.length)]

        this.setState({ dice3: newDie3, dice4: newDie4 });
    }
    render() {
        return (
            <div className="RollDice">
                <Die2 face2={this.state.dice3}/>
                <Die2 face2={this.state.dice4}/>
                <button onClick={this.roll2}>Roll Dice!</button>

            </div>
        );
    }
}

export default RollDice2;