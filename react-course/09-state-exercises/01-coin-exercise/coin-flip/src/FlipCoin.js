import React, {Component} from 'react';
import Coin from './Coin';
import { choice } from './helper';

class FlipCoin extends Component {
    static defaultProps = {
        coins: [
            { side: 'heads', imgSrc: 'https://tinyurl.com/react-coin-heads-jpg' },
            { side: 'tails', imgSrc: 'https://tinyurl.com/react-coin-tails-jpg' }
        ]
    }
    constructor(props) {
        super(props);
        this.state= {
            currCoin: null,
            numFlips: 0,
            numHeads: 0,
            numTails: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.flip()   
    }
    flip() {
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            return {
                currCoin: newCoin,
                numFlips: st.numFlips + 1,
                numHeads: st.numHeads + ( newCoin.side === 'heads' ? 1: 0 ),
                numTails: st.numTails + ( newCoin.side === 'tails' ? 1: 0 )
            };
        });
    }
    render() {
        return(
            <div className="FlipCoin">
                <h1>Let's Flip A Coin!</h1>
                {this.state.currCoin && <Coin info={ this.state.currCoin } />}
                <button onClick={this.handleClick}>Click Here To Flip The Coin</button>
                <p>Out of {this.state.numFlips} flips, there have been {this.state.numHeads} heads and {this.state.numTails} tails.</p>
            </div>
        );
    }
}

export default FlipCoin;