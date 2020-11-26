import React, {useEffect, useState} from 'react'
import pokelogo from './pokelogo.svg'

import './pokedex.css'
const PokeApp = () => {
    const [pokemons, setPokemons] = useState([])
    const [idBtnClick, setIdBtnClick] = useState(1)
    
    //carichiamo l'API
    const getPokemons = async () => {
        const url = `https://pokeapi.co/api/v2/pokemon/${idBtnClick}`;
        const response = await fetch(url);
        const pokemon = await response.json();
        console.log(pokemons);
        setPokemons(pokemon);
    }
    
    useEffect( () => {
        getPokemons()
    }, [idBtnClick])
    
    /* handleChange = () =>{
        setIdBtnClick(idBtnClick + 1);
    } */
    
    const urlImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idBtnClick}.png`
    return (
        <div>
            <div className="container">
                <div className="cardContainer">
                    <div className="cardBody">
                    <div>
                        <img id="imgLogo" src={pokelogo}/>
                    </div>
                    <h2>Pokemon :</h2>
                    <h3>{pokemons.name}</h3>
                    <div>
                    <img id="imgPoke" src={urlImg}/>
                    </div>
                    <button 
                        style=
                        {{ backgroundColor:'blue', color:'yellow'}}
                        onClick={() => {setIdBtnClick(idBtnClick + 1)}}> Next Pokemon   &gt;&gt; </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokeApp


