import React, {FC, useEffect} from 'react';
import {Link, useParams, useRoutes} from 'react-router-dom';
import {useAppDispatch} from '../../store';
import {useSelector} from 'react-redux';
import {getItemById, getOneById, getProductsData} from '../../store/productSlice';
import s from './styles';
import Container from '../../components/Container';

const ProductDetailed: FC = () => {
	const {id} = useParams();
	const dispatch = useAppDispatch();
	const {selectedProduct} : {selectedProduct: Product} = useSelector(getProductsData);

	useEffect(() => {
		dispatch(getOneById(id))
	}, [])

	return (
		<Container>
			<s.H2>Item Detailed</s.H2>
			{!!selectedProduct && <img width={640} height={320} src={selectedProduct.imageUrl} alt={selectedProduct.title}/>}
			<s.Row>
				<s.Call className="title">{selectedProduct?.title}</s.Call>
				<s.Call className="description">{selectedProduct?.description}</s.Call>
			</s.Row>
			<h2>
				<Link to="/product">Back to Hub</Link>
			</h2>
		</Container>
	)
}

export default ProductDetailed
