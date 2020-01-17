/* jshint esversion: 6 */
import React, { useState, useEffect }  from 'react';
import ReactDOM from "react-dom";
import axios from "axios";
import './App.css';

import PlayerCard from './components/PlayerCard.js';
import PlayerList from './components/PlayerList.js';
import Navbar from "./components/NavBar.js";

const  App = () =>  {
//
//   const [playerData, setPlayerData] = useState([]);
//
// useEffect(() => {
//   axios
//     .get(
//       "http://localhost:5000/api/players"
//     )
//     .then(res =>setPlayerData(res.data))
//           .catch(err => console.log(err));
//       }, []);
// console.log(playerData);
  return (
    <div className="App">
    <Navbar />
    <PlayerList />


    </div>
  );
}

export default App;
