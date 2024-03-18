import React, {FC, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import s from '../../styles';
import * as Yup from 'yup';
import {
	Form,
	Formik,
} from 'formik';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import {addNewUser} from '../../../../store/userSlice';

const SignupSchema = Yup.object().shape({
	firstName: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	lastName: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	imageUrl: Yup.string()
		.url('Enter a valid url')
		.required('Required'),
	email: Yup.string().email('Invalid email').required('Required'),
	password: Yup.string().required('Required').min(6, 'Min 6 characters'),
});

const SignUp: FC = () => {

	const dispatch = useDispatch();

	const submitForm = useCallback((values, actions) => {
		dispatch(addNewUser(JSON.stringify(values, null, 2)));
		actions.setSubmitting(false);
	}, []);

	const initialValues = {
		firstName: '',
		lastName: '',
		imageUrl: '',
		email: '',
	};

	return (
		<s.FormWrapper>
			<h1>Sign up page</h1>
			<Formik
				initialValues={initialValues}
				validationSchema={SignupSchema}
				onSubmit={submitForm}
			>
				{({ errors, touched }) => (
					<Form>
						<s.FormRow>
							<Input
								label="First Name"
								error={errors.firstName}
								touched={touched.firstName}
								InputProps={{
									name: 'firstName',
									placeholder: 'Enter your name',
								}}
							/>
						</s.FormRow>
						<s.FormRow>
							<Input
								label="Last Name"
								error={errors.lastName}
								touched={touched.lastName}
								InputProps={{
									name: 'lastName',
									placeholder: 'Enter your lastname',
								}}
							/>
						</s.FormRow>
						<s.FormRow>
							<Input
								label="Email"
								error={errors.email}
								touched={touched.email}
								InputProps={{
									name: 'email',
									placeholder: 'Enter your email',
								}}
							/>
						</s.FormRow>
						<s.FormRow>
							<Input
								label="Image Url"
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
								label="Password"
								error={errors.password}
								touched={touched.password}
								InputProps={{
									name: 'password',
									type: 'password',
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

export default SignUp;
