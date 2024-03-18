import React, {FC, useCallback, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {addOrder, checkOut, getProductsData, removeItem} from '../../store/productSlice';
import s from './styles';
import Container from '../../components/Container';
import CartItem from './components/CartItem';
import {useSelector} from 'react-redux';
import Button from '../../components/Button';
import {useAppDispatch} from '../../store';
import {getUserData} from '../../store/userSlice';

const Cart: FC = () => {
	const {id} = useParams();
	const dispatch = useAppDispatch();
	const {products, cartItems}: { products: Product[]; cartItems: CartItem[] } = useSelector(getProductsData);
	const {me} = useSelector(getUserData);

	const onCheckOut = useCallback((id: number) => {
		const promiseArr = [];
		products.forEach(product => promiseArr.push( dispatch(
			addOrder(JSON.stringify({
				product,
				userId: me.id
			}))
		)))
			Promise.all(promiseArr).then(_ => {
				dispatch(checkOut());
			})
	}, []);

	return (
		<Container>
			<s.H2>Cart page</s.H2>
			{cartItems && !!cartItems.length ? (
				<s.List>
					{cartItems.map(item => (
						<CartItem {...item}/>
					))}
				</s.List>
			) : (
				<h1>Cart is Empty</h1>
			)}

			<div style={{margin: '24px 0'}}>
				<Button onClick={onCheckOut}>Check Out</Button>
			</div>
		</Container>
	)
}

export default Cart;
