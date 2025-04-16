import { useState } from 'react';
import Button from './Button';

const initialBoard = [null, null, null, null, null, null, null, null, null];

function deriveGameBoard(gms) {
  const board = [...initialBoard];
  for (const gm of gms) { board[gm.sqInd] = gm.sqMark; }
  return board;
}

function deriveWinner(gB) {
  const wins = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ];
  let winner;

  for (const win of wins) {
    if (gB[win[0]] && gB[win[0]] === gB[win[1]] && gB[win[0]] === gB[win[2]] ) { winner = win; }
  }
  return winner;
}

function GameBoard() {
  const [moves, setMoves] = useState([]);

  function handleMove(ind) {  
    setMoves( prev => [{ sqInd: ind, sqMark: prev[0]?.sqMark === 'X' ? 'O' : 'X'}, ...prev] );
  }

  const currBoard = deriveGameBoard(moves);
  const winComb = deriveWinner(currBoard);

function handleNewGame(){
  setMoves([]);
}

  return (
    <main>
      <ul>
        {currBoard.map( (mark, i) => <li key={i}><Button handleOnClick={() => handleMove(i)} i={i} win={winComb}>{mark}</Button></li> )} 
      </ul>
      <Button handleOnClick={handleNewGame}>New Game</Button>  
    </main>   
  );
  
}

export default GameBoard;
