import React, {FC, useEffect} from 'react';
import s from './styles';
import {NavLink, useNavigate} from 'react-router-dom';
import CartIcon from '../CartIcon';
import Container from '../Container';
import {useSelector} from 'react-redux';
import {getProductsData} from '../../store/productSlice';
import {getUserData, setMeFromLS} from '../../store/userSlice';
import {useAppDispatch} from '../../store';

interface SideBarNavigationProps {
}

const Header: FC<SideBarNavigationProps> = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const {cartItemsCount}: { cartItemsCount: number } = useSelector(getProductsData);
	const {me} = useSelector(getUserData);

	useEffect(() => {
		const LSUser = JSON.parse(localStorage.getItem('me'));
		if (LSUser) {
			dispatch(setMeFromLS(LSUser))
		} else {
			navigate('/login');
		}
	}, [])


	return (
		<s.Header>
			<Container fluid>
				<s.Nav>
					<s.LogoWrapper to="/">Logo</s.LogoWrapper>
					{me ? (
						<>
							<s.NavItems>
								<s.NavItem>
									<NavLink to="/">Home</NavLink>
								</s.NavItem>
								<s.NavItem>
									<NavLink to="/product">All Products</NavLink>
								</s.NavItem>
								<s.NavItem>
									<NavLink to="/orders">Orders history</NavLink>
								</s.NavItem>
							</s.NavItems>
							<NavLink to="/cart">
								<CartIcon itemsCount={cartItemsCount}/>
							</NavLink>
						</>
					) : (
						<>
							<s.NavItems>
								<s.NavItem>
									<NavLink to="/login">Login</NavLink>
								</s.NavItem>
							</s.NavItems>
							<CartIcon itemsCount={cartItemsCount}/>
						</>
					)}
				</s.Nav>
			</Container>
		</s.Header>
	)
}

export default Header;
