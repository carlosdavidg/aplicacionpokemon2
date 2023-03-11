import { useEffect, useState } from "react";
import SelectPokemon from "./SelectPokemon";
import { useParams } from "react-router-dom";



const DetallePokemon = () => {

  const [pokemonDetails, setPokemonDetails] = useState({});
  const {name} = useParams();
  const [cargando, setCargando] = useState(true);


  async function getPokemon() {

   const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
   const data = await res.json()
   setPokemonDetails(data)  
   setCargando(false)

  }

useEffect(() => {
  getPokemon()}, [pokemonDetails])


  return (
    cargando ? <p>Cargando Datos...</p> :
    <div>
      <div className="cardContainer">
      <SelectPokemon/>
        <div className="card">
          <h2>{pokemonDetails.name}</h2>
          <img src={pokemonDetails.sprites.other.dream_world.front_default} alt="imagen-pokemon"></img>
          <p>ID:{pokemonDetails.id}</p>
          <p>Peso: {pokemonDetails.weight}kg</p>
          <p>Tipo: {pokemonDetails.types[0].type.name}</p>
          <p>Habilidad principal: {pokemonDetails.abilities[0].ability.name}</p>
        </div>

      </div>
    </div>
  )
}

export default DetallePokemon