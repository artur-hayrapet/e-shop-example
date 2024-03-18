import {Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import React from 'react';
import AllProducts from '../pages/AllProducts';
import ProductDetailed from '../pages/ProductDetailed';
import SignInSignUp from '../pages/SignInSignUp';
import Cart from '../pages/Cart';
import Orders from '../pages/Orders';
import AddNewProduct from '../pages/AddNewProduct';

export default () => {
	return <>
		<Routes>
			<Route path="/" element={<Home/>}/>
			<Route path="/product" element={<AllProducts/>}/>
			<Route path="/cart" element={<Cart/>}/>
			<Route path="/product/:id" element={<ProductDetailed/>}/>
			<Route path="/orders" element={<Orders/>}/>
			<Route path="/add-product" element={<AddNewProduct/>}/>
			<Route path="login" element={<SignInSignUp page="signIn"/>}/>
			<Route path="register" element={<SignInSignUp page="signUp"/>}/>
		</Routes>
	</>
}
