import React, {FC, ReactNode} from 'react';
import s from './styles';

type ContainerProps = {
	children: ReactNode;
	fluid?: boolean;
}

const Container: FC<ContainerProps> = ({children, fluid = false, ...rest}) => {
	return <s.Container $fluid={fluid} {...rest}>
		{children}
	</s.Container>
}

export default Container;
