import Button from './Button';

const initialBoard = [null, null, null, null, null, null, null, null, null];

function GameBoard() {

  return (
      	<ul>
		{ initialBoard.map( (mark, i) => <li key={i}><Button>{mark}</Button></li> ) }
	</ul>   
  );
  
}

export default GameBoard;
