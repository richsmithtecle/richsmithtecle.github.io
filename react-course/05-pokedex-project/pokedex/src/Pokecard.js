import React, {Component} from 'react';
import './Pokecard.css';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
    render() {
        const { id, name, type, base_experience } = this.props;
        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`
        return (
            <div className="Pokecard Pokecard-grow">
                <h1 className="Pokecard-title">{name}</h1>
                <img src={imgSrc} alt={name}/>
                <div className="Pokecard-data">Type: {type}</div>
                <div className="Pokecard-data">Exp: {base_experience}</div>
                
            </div>
        );
    }
}

export default Pokecard;

