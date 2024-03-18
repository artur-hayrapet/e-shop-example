import React, {ComponentProps, FC, useCallback} from 'react';
import s from './styles';
import {useAppDispatch} from '../../../../store';
import {addToCard, decrementCartItem, removeCartItem} from '../../../../store/productSlice';

interface VideoItemProps extends ComponentProps<any> {
	product: Product;
	count: number;
}

const CartItem: FC<VideoItemProps> = ({product, count}) => {
	const {id, title, description, imageUrl} = product;
	const dispatch = useAppDispatch();

	const onAdd = useCallback(() => {
		dispatch(addToCard(product))
	}, []);

	const onDecrement = useCallback(() => {
		dispatch(decrementCartItem(product))
	}, []);


	return (
		<s.Wrapper>
			<s.Card>
				<s.Img src={imageUrl} alt={title} />
				<s.Row>
					<s.Call className="title">{title}</s.Call>
					<s.Call className="description">{description}</s.Call>
				</s.Row>
			</s.Card>
			<s.Actions>
				<s.ActionButton to={`/product/${id}`}>View This Item</s.ActionButton>
				<s.AddButton onClick={onDecrement}>-</s.AddButton>
				<s.Count>{count}</s.Count>
				<s.AddButton onClick={onAdd}>+</s.AddButton>
			</s.Actions>

		</s.Wrapper>
	)
}

export default CartItem;
