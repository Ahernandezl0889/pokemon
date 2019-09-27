import React from "react";
import '../Pokecard.css';

// getting the Api for the images
const Poke_Api = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"
// function padToThree takes a number, if is greater than 999 return number
// slice and return the 3 digits(0023-slice = 023)
let padTothree = (number) =>(number <= 999 ? `00${number}`.slice(-3) : number)


export default class Pokecard extends React.Component{
    //render is a function
    render(){
        const {name, type, exp, id} = this.props;
        
        // interpolate Poke_Api
        // return to as an string that contains a props of 00
        let imgSrc = `${Poke_Api}${padTothree(id)}.png`;

        // return is like a view(is what we are gonna see through the render method)
        return(
            <div className= 'Pokecard'>
                {/* passing the props */}
                    <h1 className="Pokecard-title">{name}</h1>
                    <div className="Pokecard-image">
                    <img src= {imgSrc} alt ={name}/>
                    </div>
                    <div className="Pokercard-data">Type: {type}</div>
                    <div className="Pokercard-data">Exp: {exp}</div>

            </div>
        )
    }
}