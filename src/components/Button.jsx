function Button({children, handleOnClick}){
	return <button type='button' className={`${children === 'New Game' ? 'new' : 'square'}`} onClick = {handleOnClick}>{children}</button>;
}

export default Button;
