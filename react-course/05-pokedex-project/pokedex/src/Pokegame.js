import React, {Component} from 'react';
import Pokecard from './Pokecard';
import Pokedex from './Pokedex';
import './Pokegame.css';

class Pokegame extends Component {
    render() {
        return (
            <div className="Pokegame">
                <h1 className="Pokegame-title">Welcome to the Pokegame!</h1>
                <Pokedex />
                <Pokedex />
            </div>
        );
    }
}

export default Pokegame;