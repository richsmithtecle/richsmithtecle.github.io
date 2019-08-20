import React, { Component } from 'react';
import './Box.css';
import { randomChoice } from './helper';

class Box extends Component {
    // static defaultProps = {
    //     colors: [
    //         'red', 'green', 'blue', 'cyan', 'magenta', 'yellow', 'black', 'lightslategray', 'tomato', 'greenyellow', 'steelblue', 'slateblue', 'brown', 'whitesmoke', 'darkgoldenrod'
    //     ]
        
    // }
    constructor(props) {
        super(props);
        this.state={
            fill: randomChoice(this.props.colors)
        }
        this.handleClick = this.handleClick.bind(this);
    }
    //Update with new color - used "do" "while" to prevent same color appearing on click
    changeColor() {
        let newFill;
        do {
            newFill = randomChoice(this.props.colors);
        } while (newFill === this.state.color);
        
        this.setState({fill: newFill});
        
    }
    handleClick() {
        this.changeColor();
    }    
    render() {
        return(
            <div className="Box" style={{backgroundColor: this.state.fill}} onClick={this.handleClick}>

            </div>
        )
    }
}

export default Box;