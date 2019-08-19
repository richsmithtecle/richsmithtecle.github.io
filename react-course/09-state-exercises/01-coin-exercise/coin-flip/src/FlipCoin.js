import React, {Component} from 'react';
import Coin from './Coin';

class FlipCoin extends Component {
    static defaultProps = [
        
    ];
    constructor(props) {
        super(props);
        this.state= {
            coinFace: 0,
            countFlips: 0,
            countHeads: 0,
            countTails: 0
        };
        const val = this.state.coinFace;
        const headsPic = '<img src="https://tinyurl.com/react-coin-heads-jpg" />'
        const tailsPic = '<img src="https://tinyurl.com/react-coin-tails-jpg" />'
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.flip()   
    }
    flip() {
        const rand = Math.round(Math.random() * 1);
        const updateFlips = this.state.countFlips + 1;
        this.setState({coinFace: rand, countFlips: updateFlips});
    }
    render() {
        return(
            <div className="FlipCoin">
                <h1>Let's Flip A Coin!</h1>
                <Coin face={this.state.coinFace}/>
                <button onClick={this.handleClick}>Click Here To Flip The Coin</button>
                <p>Out of {this.state.countFlips} flips, there have been {this.state.countTails} heads and {this.state.countTails} tails.</p>
            </div>
        );
    }
}

export default FlipCoin;