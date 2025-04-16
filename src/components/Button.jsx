function Button({children, handleOnClick, win, i}){
	return <button type='button' 
			className={`${children === 'New Game' ? 'new' : win && (i===win[0] || i===win[1] || i===win[2]) ? 'winner square' : 'square'}`} 
			onClick = {handleOnClick}
			disabled={win !== undefined}
		>{children}</button>;
}

export default Button;
