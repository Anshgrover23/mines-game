class Game {
    constructor(betAmount, mineCount) {
        this.gridSize = 5;
        this.totalCells = this.gridSize * this.gridSize;
        this.betAmount = betAmount;
        this.mineCount = mineCount;
        this.grid = Array(this.totalCells).fill(null);
        this.bombs = new Set();
        this.revealedGems = 0;
        this.multiplier = 1;
        this.totalProfit = 0;
        this.initializeGame();
    }

    initializeGame() {
        this.bombs = new Set();
        while (this.bombs.size < this.mineCount) {
            this.bombs.add(Math.floor(Math.random() * this.totalCells));
        }
    }

    revealCell(index) {
        if (this.bombs.has(index)) {
            return { bomb: true, gameOver: true, totalProfit: 0 };
        } else {
            this.revealedGems++;
            this.updateProfitInfo();
            return { bomb: false, gameOver: false, totalProfit: this.totalProfit };
        }
    }

    updateProfitInfo() {
        this.multiplier = 1 + (this.revealedGems * (this.mineCount / (this.totalCells - this.mineCount)));
        this.totalProfit = this.betAmount * this.multiplier;
    }

    cashOut() {
        return this.totalProfit;
    }
}

module.exports = Game;
