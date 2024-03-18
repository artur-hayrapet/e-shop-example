import React, {FC} from 'react';
import s from './styles';
import {NavLink} from 'react-router-dom';

interface SideBarNavigationProps {
}

const SideBarNavigation: FC<SideBarNavigationProps> = () => {

	return <s.Nav>
		<s.LinkWrapper>
			<NavLink to="/">Home</NavLink>
		</s.LinkWrapper>
		<s.LinkWrapper>
			<NavLink to="/video">All Videos</NavLink>
		</s.LinkWrapper>

	</s.Nav>
}

export default SideBarNavigation;
