import React from 'react'

const Square = ({ value, onSquareClick, id }) => {
    return (
        <button id={id} className="square" onClick={onSquareClick}>
            {value}
        </button>
    )
}

export default Square