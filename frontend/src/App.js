import React, { useState } from 'react';
import axios from 'axios';
import Game from './components/Game';
import ControlPanel from './components/ControlPanel';
import './App.css';

function App() {
  const [gameData, setGameData] = useState(null);

  const startGame = async (betAmount, mineCount) => {
    try {
      const response = await axios.post('http://localhost:5000/api/start', { betAmount, mineCount });
      setGameData({ ...response.data, betAmount, mineCount });
    } catch (error) {
      console.error('Error starting game:', error);
    }
  };

  const revealCell = async (index) => {
    try {
      const response = await axios.post('http://localhost:5000/api/reveal', { index });
      setGameData({ ...gameData, ...response.data });
    } catch (error) {
      console.error('Error revealing cell:', error);
    }
  };

  const cashOut = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/cashout');
      alert(`You cashed out with a profit of $${response.data.profit}`);
      setGameData(null);
    } catch (error) {
      console.error('Error cashing out:', error);
    }
  };

  return (
    <div className="App">
      <ControlPanel startGame={startGame} cashOut={cashOut} gameData={gameData} />
      {gameData && <Game gameData={gameData} revealCell={revealCell} />}
    </div>
  );
}

export default App;
