import React from 'react'
import { useContext } from "react"
import MyContext from "../context/MyContext";
import { useNavigate } from 'react-router-dom';



const SelectPokemon = () => {


  const {namePokemon, setNamePokemon, arrayPrincipal} = useContext(MyContext);
  const navigate = useNavigate();


  const verDetalle = () => {

    navigate(`/pokemon/${namePokemon}`)

  }


  return (

    <div className='selectview'>
      <div className='selectcontainer'>
        <select onChange={(event)=>{setNamePokemon(event.target.value)}}>
          <option value="">Selecciona a tu Pokémon</option> 
          {arrayPrincipal.map((pokemon)=> { return  <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>})}      
        </select>
        <button onClick={()=>verDetalle()}>Ver más</button>
      </div> 
      <div className='setview'></div>

      
    </div>
  )
}

export default SelectPokemon