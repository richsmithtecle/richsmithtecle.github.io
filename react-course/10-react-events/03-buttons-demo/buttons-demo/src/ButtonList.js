import React, { Component } from 'react';
import './ButtonList.css';

class ButtonList extends Component {
    static defaultProps = {
        colors : ['red', 'green', 'steelblue', 'Black']
    };
    constructor(props) {
        super(props);
        this.state = {
            color: "whitesmoke"
        }
        
    }
    changeColor(newColor) {
        console.log(`newColor is: ${newColor}`);
        this.setState({ color: newColor })
    }
    render() {
        return(
            <div className="ButtonList" style={{ backgroundColor: this.state.color }}>
                {this.props.colors.map(c => {
                    const colorObj = { backgroundColor: c };
                    return (
                        <button style={colorObj} onClick={() => this.changeColor(c)}>Click On Me!</button>
                    )
                })}
            </div>
        );
    }
}

export default ButtonList;

