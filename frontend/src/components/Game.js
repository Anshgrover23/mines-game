import React from 'react';
import Cell from './Cell';
import { revealCell } from './api'; // Import API helper function

function Game({ gameData, setGameData }) {
  const handleCellClick = async (index) => {
    try {
      const response = await revealCell(index);
      setGameData((prevData) => ({ ...prevData, ...response }));
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div className="game-grid">
      {Array.from({ length: gameData.totalCells }).map((_, index) => (
        <Cell key={index} index={index} revealCell={handleCellClick} />
      ))}
    </div>
  );
}

export default Game;
