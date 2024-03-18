import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const getAllProducts = createAsyncThunk(
	'products/getAll',
	async (_, {rejectWithValue}) => {
		try {
			const response = await fetch('http://localhost:8080/products')
			return response.json();
		} catch (e) {
			return rejectWithValue(e.message)
		}
	}
);
export const getOrders = createAsyncThunk(
	'order/getAll',
	async (userId, {rejectWithValue}) => {
		try {
			const response = await fetch(`http://localhost:8080/orders?userId=${userId}`)
			return response.json();
		} catch (e) {
			return rejectWithValue(e.message)
		}
	}
);
export const addOrder = createAsyncThunk(
	'order/add',
	async (params) => {
		const response = await fetch(' http://localhost:8080/orders', {method: 'POST', body: params})
		return response.json();
	}
);
export const getOneById = createAsyncThunk(
	'products/getOne',
	async (id, {rejectWithValue}) => {
		try {
			const response = await fetch(`http://localhost:8080/products/${id}`)
			return response.json();
		} catch (e) {
			return rejectWithValue(e.message)
		}
	}
);
export const addNewItem = createAsyncThunk(
	'products/add',
	async (params) => {
		const response = await fetch(' http://localhost:8080/products', {method: 'POST', body: params})
		return response.json();
	}
);
export const removeItem = createAsyncThunk(
	'products/remove',
	async (id) => {
		const response = await fetch(`http://localhost:8080/products/${id}`, {method: 'DELETE'})
		return response.json();
	}
);

const initialState: {
	products?: Product[];
	orders?: Order[];
	cartItems?: CartItem[];
	cartItemsCount: number;
	error?: string,
	selectedProduct?: Product | null
} = {
	products: [],
	cartItems: [],
	orders: [],
	cartItemsCount: 0,
	selectedProduct: null,
}

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		reset: (state, action) => {
			return initialState;
		},
		getItemById: (state, action) => {
			state.selectedProduct = state.products.find(p => +p.id === +action.payload);
		},
		addToCard: (state, action) => {
			const product = action.payload;
			state.cartItemsCount = state.cartItemsCount + 1;
			const sameProd = state.cartItems.find(c => c.product.id === product.id);
			if (sameProd) {
				sameProd.count = sameProd.count + 1;
			} else {
				state.cartItems.push({
					product,
					count: 1
				});
			}
		},
		decrementCartItem: (state, action) => {
			const product = action.payload;
			state.cartItemsCount = state.cartItemsCount + 1;
			const productToRemove = state.cartItems.find(c => c.product.id === product.id);
			productToRemove.count = productToRemove.count - 1;
			state.cartItems = state.cartItems.filter(pp => pp.count > 0);
		},
		checkOut: (state, action) => {
			state.cartItems = [];
			state.cartItemsCount = 0;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAllProducts.fulfilled, (state, action) => {
				return {
					...state,
					products: [...action.payload]
				}
			})
			.addCase(getOrders.fulfilled, (state, action) => {
				return {
					...state,
					orders: [...action.payload]
				}
			})
			.addCase(getOneById.fulfilled, (state, action) => {
				return {
					...state,
					selectedProduct: action.payload,
				}
			})
			.addCase(getAllProducts.rejected, (state: typeof initialState, action) => {
				state.error = action.payload as string;
			})
			.addCase(addNewItem.fulfilled, (state: typeof initialState, action) => {
				state.products!.push(action.payload as Product);
			})
			.addCase(removeItem.fulfilled, (state: typeof initialState, action) => {
				const deletedItem = action.payload as Product;
				return state.products!.filter(u => u.id !== deletedItem.id);
			})
	}
});

export const {getItemById, addToCard, decrementCartItem, checkOut} = productSlice.actions;

export const getProductsData = (state) => state.product;

export default productSlice.reducer;
