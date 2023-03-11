import React from 'react';
import { NavLink} from "react-router-dom";



const Navbar = () => {


  return (

    <div className='nav'>

      <img src='https://cdn-icons-png.flaticon.com/512/188/188987.png?w=826&t=st=1678157891~exp=1678158491~hmac=e1cacb2ea3aa8336d293d759dc83675b9437e8316e8e04d78082418686990a7d' 
      className='logo' alt='imgpika'></img>
      <NavLink to="/" activeclassname="active" className="btn">Home</NavLink>
      <NavLink to="/pokemon" activeclassname="active" className="btn">Pokémon</NavLink>
     
  </div>
  )
}

export default Navbar