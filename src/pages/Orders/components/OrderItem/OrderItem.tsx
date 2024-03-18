import React, {ComponentProps, FC, useCallback} from 'react';
import s from './styles';
import {useAppDispatch} from '../../../../store';
import {addToCard, getOneById} from '../../../../store/productSlice';

interface VideoItemProps extends ComponentProps<any> {
	product: Product;
}

const OrderItem: FC<VideoItemProps> = ({product, onRemove}) => {
	const {id, title, description, imageUrl, price} = product;
	const dispatch = useAppDispatch();

	const onAddToCart = useCallback(() => {
		dispatch(addToCard(product))
	}, []);

	return (
		<s.Card>
			<s.Img src={imageUrl} alt={title} />
			<s.Row>
				<s.Call className="title">{title}</s.Call>
				<s.Call className="description">{description}</s.Call>
				<s.Call className="price">{price}$</s.Call>
				<s.Actions>
					<s.ActionButton to={`/product/${id}`}>View This Item</s.ActionButton>
					<s.AddButton onClick={onAddToCart}>Buy it again</s.AddButton>
				</s.Actions>
			</s.Row>
		</s.Card>
	)
}

export default OrderItem;
