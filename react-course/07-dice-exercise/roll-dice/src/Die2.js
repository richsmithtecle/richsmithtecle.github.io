import React, { Component } from 'react';
import './Die.css';

class Die2 extends Component {
    render() {
        return (
            <div className="Die">
                <i className={`fas fa-dice-${this.props.face2} fa-5x`}/>
            </div>
        );
    }
}

export default Die2;