import { useState } from 'react';
import Button from './Button';

const initialBoard = [null, null, null, null, null, null, null, null, null];

function deriveGameBoard(gms) {
  const board = initialBoard;
  for (const gm of gms) { board[gm.sqInd] = gm.sqMark; }
  return board;
}

function GameBoard() {
  const [moves, setMoves] = useState([]);

  function handleMove(ind) {  
    setMoves( prev => [{ sqInd: ind, sqMark: prev[0]?.sqMark === 'X' ? 'O' : 'X'}, ...prev] );
  }

  const currBoard = deriveGameBoard(moves);

  return (
      	<ul>
		{currBoard.map( (mark, i) => <li key={i}><Button handleOnClick={() => handleMove(i)}>{mark}</Button></li> )}
	</ul>   
  );
  
}

export default GameBoard;
