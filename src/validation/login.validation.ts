import * as Yup from 'yup';

export const LoginValidation = Yup.object().shape({
	email: Yup.string().email('Wrong email type').required('Required'),
	password: Yup.string()
		.required('Required')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
			'Should be at least 8 characters'
		)
});
