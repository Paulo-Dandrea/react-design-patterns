export const partiallyApply = (Component, partialProps) => props => {

    return <Component {...partialProps} {...props} />;
}

export const Button = ({ size, color, text, ...props }) => {
	return (
		<button style={{
			padding: size === 'large' ? '32px' : '8px',
			fontSize: size === 'large' ? '32px' : '16px',
			backgroundColor: color,
		}} {...props}>{text}</button>
	);
}

export const PartiallyApplyDangerButton = partiallyApply(Button, { color: 'red' });
export const PartiallyApplySuccessButton = partiallyApply(Button, { color: 'green', size: 'large' });




