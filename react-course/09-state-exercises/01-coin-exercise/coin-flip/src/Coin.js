import React, { Component } from 'react';
import './Coin.css'

class Coin extends Component {
    render() {
        return(
            <div className="Coin">
                {/* {<img src="https://tinyurl.com/react-coin-heads-jpg" />} */}
                {this.props.face === 0 ? this.props.headsPic : this.props.headsPic }
                {/* {this.props.face === 0 ? <img src="https://tinyurl.com/react-coin-heads-jpg" /> : <img src="https://tinyurl.com/react-coin-tails-jpg" />} */}
                <h1>{this.props.face}</h1>
            </div>
        );
    }
}

export default Coin;