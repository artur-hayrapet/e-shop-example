import React, {ComponentProps, FC, useCallback} from 'react';
import s from './styles';
import * as Yup from 'yup';
import {
	Form,
	Formik,
} from 'formik';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import {useDispatch} from 'react-redux';
import {login} from '../../../../store/userSlice';

const FilterSchema = Yup.object().shape({
	title: Yup.string(),
	priceMin: Yup.number(),
	priceMax: Yup.number(),
});

const Filter: FC = (props) => {
	const {onApply, reset} = props;

	const submitForm = (values, actions) => {
		const {title, priceMin, priceMax} = values;
		const newObject: any = {
			title: values.title || null,
		}
		if (priceMin || priceMax) {
			newObject.price = (val) => {
				if (priceMin && priceMax) {
					return (+priceMax > +val) && (+val > +priceMin);
				}
				if (priceMax) {
					return val < priceMax;
				}
				if (priceMin) {
					return val > priceMin;
				}
			}
		}
		onApply(newObject);
		actions.setSubmitting(false);
	};

	const initialValues = {
		title: '',
		priceMin: 0,
		priceMax: 100000,
	};

	return (
		<s.FormWrapper>
			<Formik
				initialValues={initialValues}
				validationSchema={FilterSchema}
				onSubmit={submitForm}
			>
				{({ errors, touched }) => (
					<Form>
						<s.FormRow>
							<Input
								label="Search in title"
								error={errors.title}
								touched={touched.title}
								InputProps={{
									name: 'title',
									placeholder: 'Search in title',
								}}
							/>
						</s.FormRow>
						<s.FormRow>
							<Input
								label="Price Min"
								error={errors.priceMin}
								touched={touched.priceMin}
								InputProps={{
									name: 'priceMin',
									type: 'number'
								}}
							/>
							<Input
								label="Price Max"
								error={errors.priceMax}
								touched={touched.priceMax}
								InputProps={{
									name: 'priceMax',
									type: 'number'
								}}
							/>
						</s.FormRow>
						<s.FormRow>
							<Button type="submit">Apply filter</Button>
						</s.FormRow>
					</Form>
				)}
			</Formik>
			<Button onClick={reset}>Reset Filter</Button>
		</s.FormWrapper>
	)
}

export default Filter;
