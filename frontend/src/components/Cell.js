import React, { useState } from 'react';

function Cell({ index, revealCell }) {
  const [revealed, setRevealed] = useState(false);
  const [content, setContent] = useState('');

  const handleClick = async () => {
    const response = await revealCell(index);
    if (response.bomb) {
      setContent('💣');
    } else {
      setContent('💎');
    }
    setRevealed(true);
  };

  return (
    <div className={`cell ${revealed ? 'revealed' : ''}`} onClick={handleClick}>
      {revealed ? content : ''}
    </div>
  );
}

export default Cell;
