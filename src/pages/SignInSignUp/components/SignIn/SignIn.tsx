import React, {ComponentProps, FC, useCallback} from 'react';
import s from '../../styles';
import * as Yup from 'yup';
import {
	Form,
	Formik,
} from 'formik';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import {useDispatch} from 'react-redux';
import {login} from '../../../../store/userSlice';

const SignInSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email').required('Required'),
	password: Yup.string().min(6, 'min 6 characters').required('Required')
});

const SignIn: FC = () => {

	const dispatch = useDispatch();

	const submitForm = useCallback((values, actions) => {
		dispatch(login(values))
		actions.setSubmitting(false);
	}, []);

	const initialValues = {
		email: '',
		password: '',
	};

	return (
		<s.FormWrapper>
			<h1>Sign up page</h1>
			<Formik
				initialValues={initialValues}
				validationSchema={SignInSchema}
				onSubmit={submitForm}
			>
				{({ errors, touched }) => (
					<Form>
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
								label="Password"
								error={errors.password}
								touched={touched.password}
								InputProps={{
									name: 'password',
									type: 'password',
									placeholder: 'Enter Image Url',
								}}
							/>
						</s.FormRow>
						<s.FormRow>
							<Button type="submit">Login</Button>
						</s.FormRow>
					</Form>
				)}
			</Formik>
		</s.FormWrapper>
	)
}

export default SignIn;
