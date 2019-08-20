import React, { Component } from 'react';
import Box from './Box';
import { randomChoice } from './helper';
import './Boxes.css';

class Boxes extends Component {
    static defaultProps = {
        numBoxes: 18,
        colors: [
            'red', 'green', 'blue', 'cyan', 'magenta', 'yellow', 'black', 'lightslategray', 'tomato', 'greenyellow', 'steelblue', 'slateblue', 'brown', 'whitesmoke', 'darkgoldenrod'
        ]
    }
    render() {
        const showBoxes = Array.from({ length: this.props.numBoxes }).map(() => (
            <Box colors={this.props.colors} />
        ));

        return(
            <div className="Boxes">{showBoxes}</div>
        );
    }
}

export default Boxes;