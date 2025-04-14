function Button({children}){
	return <button type='button' className={`${children === 'New Game' ? 'new' : ''}`} >{children}</button>;
}

export default Button;
