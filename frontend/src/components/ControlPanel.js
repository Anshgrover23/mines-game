import React, { useState } from 'react';
import { startGame, cashOut } from './api'; // Import API helper functions

function ControlPanel({ gameData, setGameData }) {
  const [betAmount, setBetAmount] = useState('');
  const [mineCount, setMineCount] = useState('');

  const handleStartGame = async () => {
    try {
      const data = await startGame(parseFloat(betAmount), parseInt(mineCount));
      setGameData(data);
    } catch (error) {
      // Handle error
    }
  };

  const handleCashOut = async () => {
    try {
      const data = await cashOut();
      setGameData(null);
      alert(`You cashed out with a profit of $${data.profit}`);
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div className="control-panel">
      {!gameData ? (
        <>
          <input
            type="number"
            placeholder="Bet Amount"
            value={betAmount}
            onChange={(e) => setBetAmount(e.target.value)}
          />
          <input
            type="number"
            placeholder="Mine Count"
            value={mineCount}
            onChange={(e) => setMineCount(e.target.value)}
          />
          <button onClick={handleStartGame}>Start Game</button>
        </>
      ) : (
        <>
          <button onClick={handleCashOut}>Cash Out</button>
          <p>Total Profit: ${gameData.totalProfit.toFixed(2)}</p>
        </>
      )}
    </div>
  );
}

export default ControlPanel;
