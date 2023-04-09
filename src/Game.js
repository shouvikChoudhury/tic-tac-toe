import React, { useState } from 'react';
import Board from './Board';

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }
    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} currentMove={currentMove} />
            </div>
            <div className="game-info">
                <ol>{history.map((squares, move) => {
                    return (
                        <li key={move}>
                            <button onClick={() => jumpTo(move)}>{move > 0 ? 'Go to move #' + move : 'Go to game start'}</button>
                        </li>
                    );
                })}</ol>
            </div>
        </div>
    )
}

export default Game