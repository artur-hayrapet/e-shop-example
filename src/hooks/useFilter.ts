import {useCallback, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {getProductsData} from '../store/productSlice';

const useFilter = () => {
	const {products} = useSelector(getProductsData);
	const [filtered, setFiltered] = useState<Product[]>();

	const onApply = useCallback((filters: { [key: string]: boolean | string | Function } | null) => {
		setFiltered(!filters ? products : products.filter(pr => {
			let isMuch = true;
			Object.keys(filters).forEach(key => {
				if (typeof filters[key] === 'string' && (pr[key].toLowerCase()).indexOf(<string>filters[key]) < 0) {
					isMuch = false;
				} else if (typeof filters[key] === 'function' && !filters[key](pr[key])) {
					isMuch = false;
				}
			});
			return isMuch;
		}));
	}, [products]);

	const reset = useCallback(() => {
		setFiltered(products);
	}, [products]);

	return [filtered || products, onApply, reset]
}

export default useFilter;
