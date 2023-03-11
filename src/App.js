import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/views/Home.jsx";
import SelectPokemon from "./components/views/SelectPokemon.jsx";
import DetallePokemon from "./components/views/DetallePokemon.jsx";
import Footer from "./components/Footer.jsx";
import MyContext from "./components/context/MyContext.jsx";
import { useState, useEffect } from 'react'


function App() {


  const [namePokemon, setNamePokemon] = useState("");
  const [arrayPrincipal, setArrayPrincipal] = useState([]);
  const global = {namePokemon,setNamePokemon,arrayPrincipal, setArrayPrincipal }


  async function getData() {

    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
    const data = await res.json()
    setArrayPrincipal(data.results)
  }

  useEffect(() => {

    getData();

  },[]);



  return (
    <div className="App">


    <MyContext.Provider value={global}>
     <BrowserRouter>
      <Navbar/>

        <Routes>

          <Route path="/" element={<Home/>}></Route>
          <Route path="/pokemon" element={<SelectPokemon/>}></Route>
          <Route path="/pokemon/:name" element={<DetallePokemon/>}></Route>

        </Routes>

        <Footer/>
      </BrowserRouter>

      </MyContext.Provider>

    </div>
  );
}

export default App;
