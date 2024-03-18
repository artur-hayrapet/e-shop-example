import React, {FC, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import s from './styles';
import * as Yup from 'yup';
import {
	Form,
	Formik,
} from 'formik';
import {addNewItem} from '../../store/productSlice';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {useNavigate} from 'react-router-dom';

const ProductSchema = Yup.object().shape({
	title: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	description: Yup.string()
		.min(2, 'Too Short!')
		.max(200, 'Too Long!')
		.required('Required'),
	imageUrl: Yup.string()
		.url('Enter a valid url')
		.required('Required'),
	price: Yup.number().required('Required'),
	count: Yup.number().required('Required'),
});

const AddNewProduct: FC = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const submitForm = useCallback((values, actions) => {
		dispatch(addNewItem(JSON.stringify(values)));
		navigate('/product')
		actions.reset();
	}, []);

	const initialValues = {
		title: '',
		description: '',
		imageUrl: '',
		price: 0,
		count: 0,
	};

	return (
		<s.FormWrapper>
			<h1>Sign up page</h1>
			<Formik
				initialValues={initialValues}
				validationSchema={ProductSchema}
				onSubmit={submitForm}
			>
				{({ errors, touched }) => (
					<Form>
						<s.FormRow>
							<Input
								label="Product Title"
								error={errors.title}
								touched={touched.title}
								InputProps={{
									name: 'title',
									placeholder: 'Enter Title',
								}}
							/>
						</s.FormRow>
						<s.FormRow>
							<Input
								label="Description"
								error={errors.description}
								touched={touched.description}
								InputProps={{
									name: 'description',
									placeholder: 'Enter your lastname',
								}}
							/>
						</s.FormRow>
						<s.FormRow>
							<Input
								label="Product Image Url"
								error={errors.imageUrl}
								touched={touched.imageUrl}
								InputProps={{
									name: 'imageUrl',
									placeholder: 'Enter Image Url',
								}}
							/>
						</s.FormRow>
						<s.FormRow>
							<Input
								label="Price"
								error={errors.price}
								touched={touched.price}
								InputProps={{
									name: 'price',
									type: 'number',
									placeholder: 'Enter Password',
								}}
							/>
						</s.FormRow><s.FormRow>
							<Input
								label="Product Count"
								error={errors.count}
								touched={touched.count}
								InputProps={{
									name: 'count',
									type: 'number',
									placeholder: 'Enter Password',
								}}
							/>
						</s.FormRow>
						<s.FormRow>
							<Button type="submit">Submit</Button>
						</s.FormRow>
					</Form>
				)}
			</Formik>
		</s.FormWrapper>
	)
}

export default AddNewProduct;
