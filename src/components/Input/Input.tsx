import React, {FC, ReactNode} from 'react';
import s from './styles';

type InputProps = {
	label?: string;
	InputProps: any;
	error: any;
	touched: any;
}

const Input: FC<InputProps> = ({label, InputProps, error, touched, ...rest}) => {
	return <s.Wr {...rest}>
		{!!label && <s.Label>{label}</s.Label>}
		<s.Input {...InputProps} />
		<s.ErrorWrapper>
			{error && touched ? (
				<s.Error>{error}</s.Error>
			) : null}
		</s.ErrorWrapper>
	</s.Wr>
}

export default Input;
