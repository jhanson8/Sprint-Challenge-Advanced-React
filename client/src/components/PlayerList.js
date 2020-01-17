/* jshint esversion: 6 */
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const PlayerList = props => {
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  const [players, setPlayers] = useState([]);
    useEffect(() => {
      const getPlayers = () => {
        axios
          .get('http://localhost:5000/api/players')
          .then(response => {

            setPlayers(response.data);
          })
          .catch(error => {
            console.error('Server Error', error);
          });
      };

      getPlayers();
    }, []);

    return (
      <div className="movie-list">
        {players.map(player => (
          <PlayerDetails key={player.name} player={player} />
        ))}
      </div>
    );
  }

  function PlayerDetails({player}) {

    return (

      <div className="player-card">
    <h1> {player.name} </h1>
    <p> Searches: {player.searches} </p>
    <p>{player.country}</p>
      </div>

    );
};

export default PlayerList;
