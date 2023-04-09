import React, { useEffect } from 'react'
import useWinner from './useWinner';
import Square from './Square';

const Board = ({ xIsNext, squares, onPlay, currentMove }) => {
    const winner = useWinner(squares);

    function handleClick(i) {
        if (winner || squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        onPlay(nextSquares);
    }

    let status;
    if (winner) {
        status = 'Winner : ' + winner[3];
    } else {
        status = currentMove < 9 ? 'Next : ' + (xIsNext ? 'X' : 'O') : "Play again!";
    }

    useEffect(() => {
        if (winner) {
            document.getElementById(winner[0]).classList.add("bc");
            document.getElementById(winner[1]).classList.add("bc");
            document.getElementById(winner[2]).classList.add("bc");
        }

        return () => {
            if (winner) {
                document.getElementById(winner[0]).classList.remove("bc");
                document.getElementById(winner[1]).classList.remove("bc");
                document.getElementById(winner[2]).classList.remove("bc");
            }
        }
    }, winner)

    return (
        <>
            <div className="status"><b>{status}</b></div>
            <div className="board-row">
                <Square id={0} value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square id={1} value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square id={2} value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square id={3} value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square id={4} value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square id={5} value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square id={6} value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square id={7} value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square id={8} value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>
    )
}

export default Board