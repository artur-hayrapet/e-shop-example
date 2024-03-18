import React, {FC, useCallback, useEffect, useState} from 'react';
import Container from '../../components/Container';
import s from './styles';
import {useAppDispatch} from '../../store';
import {getOrders, getProductsData, removeItem} from '../../store/productSlice';
import {useSelector} from 'react-redux';
import {getUserData} from '../../store/userSlice';
import OrderItem from './components/OrderItem';

const Orders: FC = () => {
	const [state, setState] = useState<any>();
	const dispatch = useAppDispatch();
	const {orders} = useSelector(getProductsData);
	const {me} = useSelector(getUserData);

	useEffect(() => {
		dispatch(getOrders(me?.id));
	}, []);
	return (
		<Container>
			<s.PageTitle>Orders History</s.PageTitle>

			<s.Wrapper>
				{orders && !!orders.length ? (
					<s.List>
						{orders.map(({product}, index) => (
							<OrderItem product={product} key={product.id + index} />
						))}
					</s.List>
				): (
					<h2>No orders yet</h2>
				)}
			</s.Wrapper>
		</Container>
	)
}

export default Orders
