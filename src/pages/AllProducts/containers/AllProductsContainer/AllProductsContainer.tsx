import React, {FC, useCallback, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import s from './styles';
import {useAppDispatch} from '../../../../store';
import ProductItem from '../../components/ProductItem';
import {getAllProducts, getProductsData, removeItem} from '../../../../store/productSlice';
import Container from '../../../../components/Container';
import useFilter from '../../../../hooks/useFilter';
import Button from '../../../../components/Button';
import Filter from '../../components/Filter';

const AllProductsContainer: FC = () => {
	const [state, setState] = useState<any>();
	const dispatch = useAppDispatch();

	const handleRemove = useCallback((id: number) => {
		dispatch(removeItem(id));
	}, []);

	useEffect(() => {
		dispatch(getAllProducts());
	}, []);

	const [filteredData, onChangeFilter, reset] = useFilter();

	return (
		<Container>
			<s.PageTitle>All Products from DB.json</s.PageTitle>
			<Filter onApply={onChangeFilter} reset={reset} />

			<s.Wrapper>
				{filteredData && !!filteredData.length ? (
					<s.List>
						{filteredData.map(prodItem => (
							<ProductItem product={prodItem} key={prodItem.id} onRemove={handleRemove}/>
						))}
					</s.List>
				): (
					<h2>No Products Found</h2>
				)}
			</s.Wrapper>
		</Container>
	)
}

export default AllProductsContainer;
