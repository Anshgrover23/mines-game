const express = require('express');
const router = express.Router();
const Game = require('./game');

let currentGame = null;

router.post('/start', (req, res) => {
    const { betAmount, mineCount } = req.body;
    currentGame = new Game(betAmount, mineCount);
    res.status(200).json({ message: 'Game started', totalCells: currentGame.totalCells });
});

router.post('/reveal', (req, res) => {
    if (!currentGame) {
        return res.status(400).json({ message: 'Game not started' });
    }
    const { index } = req.body;
    const result = currentGame.revealCell(index);
    res.status(200).json(result);
});

router.post('/cashout', (req, res) => {
    if (!currentGame) {
        return res.status(400).json({ message: 'Game not started' });
    }
    const profit = currentGame.cashOut();
    currentGame = null;
    res.status(200).json({ message: 'Cashed out', profit });
});

module.exports = router;
