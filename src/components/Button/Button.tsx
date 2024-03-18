import React, {FC, ReactNode} from 'react';
import s from './styles';

type ButtonProps = {
	children: ReactNode;
}

const Button: FC<ButtonProps> = ({children, ...rest}) => {
	return <s.Button {...rest}>
		{children}
	</s.Button>
}

export default Button;
