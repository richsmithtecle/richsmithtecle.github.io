import React, {Component} from 'react';

               
// When your event handlers reference the keyword <em>this</em>, be careful! You will lose the <em>this</em> context when you pass a function as a handler.
// There are at least three ways to fix this:
// 1. Use <em>bind</em> inline: <br /> <div className="WiseSqaure" onMouseEnter={this.dispenseWisdom = this.dispenseWisdom.bind(this)}></div>

// 2. Use an arrow function: <br /> <div className="WiseSquare" onMouseEnter={() => this.dispenseWisdom()} ></div>

// 3. Method bind in the constructor (Considered by some as best practice. (A) Unlike options 1 and 2, Don't need to bind multiple times if we want to pass the function to multiple components. (B) More performant. Options 1 and 2 will create a new function on EVERY render.
// constructor(props) {
//     super(props);
//     this.dispenseWisdom = this.dispenseWisdom.bind(this);
// }
             

class WiseSquareWithProps extends Component {
    constructor(props) {
        super(props);
        this.dispenseWisdom = this.dispenseWisdom.bind(this);
    }
    static defaultProps = {
        messages: [
            "A fool thinks himself to be wise, but a wise man knows himself to be a fool.",
            "Educating the mind without educating the heart is no education at all.",
            "Not everything that is faced can be changed, but nothing can be changed until it is faced."
        ]
    };
    dispenseWisdom() {
        let messages = this.props.messages;
        let rIndex = Math.floor(Math.random() * messages.length);
        console.log(messages[rIndex]);
    }
    render() {
        return (
            <div className="WiseSquare" onMouseEnter={this.dispenseWisdom}>
                😀
                </div>
        );

    }
}

export default WiseSquareWithProps;
