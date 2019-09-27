import React from "react";
import '../Pokedex.css';
import Pokecard from "./Pokecard"

export default class Pokedex extends React.Component{
    // to set the default props for the class
   

    render(){
        let title;
        if(this.props.isWinner){
            title=<h1 className="Pokedex-winner">Winning Hand</h1>

        }else {
            title = <h1 className="Pokedex-loser">Loser Hand</h1>
        }
        return(
            <div className="Pokedex">
                <h1>Pokedex!</h1>
                {/* it will show the experience */}
                <h4>Total Experience: {this.props.exp}</h4>
                {/* <p>{this.props.isWinner ? 'Winner!' : 'Loser!'}</p> */}
                {/* pokemon object defined as a default props */}
                {title}
                <div className="Pokedex-cards">
                    {/* iterate */}
                    {this.props.pokemon.map((eachPokemon)=>(
                     //we want to return a pokecard with the individual name,exp,etc
                    <Pokecard id={eachPokemon.id} name={eachPokemon.name} type={eachPokemon.type} exp={eachPokemon.base_experience}/>
                     ))}
                </div>
            </div>
        )
    }
}