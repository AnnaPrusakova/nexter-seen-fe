import {
	TextInput,
	PasswordInput,
	Card,
	Heading,
	Checkbox,
	Button,
	TextLink
} from '@/components/common';
import { SIZE } from '@/components/common/heading/heading.interfaces';
import styles from './login.module.scss';
import { Formik, FormikProps } from 'formik';
import { LoginRequest } from '@/interfaces/request/LoginRequest';
import { pages } from '@/data/pages';
import { LoginValidation } from '@/validation/login.validation';

export function LoginPage(): JSX.Element {
	const initValues: LoginRequest = {
		email: '',
		password: '',
		isRemember: false
	};

	const handleLogin = () => {
		//test
	};
	return (
		<div className={styles.wrapper}>
			<Card className={styles.cardSize}>
				<Formik
					initialValues={initValues}
					onSubmit={handleLogin}
					validateOnBlur={false}
					validateOnChange={false}
					validationSchema={LoginValidation}
					component={({
						values,
						setFieldValue,
						submitForm,
						errors
					}: FormikProps<LoginRequest>): JSX.Element => (
						<div className={styles.loginWrapper}>
							<div className={styles.welcomeTitle}>Welcome!</div>
							<Heading size={SIZE.H2} text={'Sign in'} />
							<div className={styles.inputWrapper}>
								<TextInput
									field={'email'}
									value={values.email}
									onChange={setFieldValue}
									label={'Email'}
									placeholder={'Enter your email'}
									error={errors.email}
								/>
								<PasswordInput
									field={'password'}
									value={values.password}
									onChange={setFieldValue}
									error={errors.password}
								/>
							</div>
							<div className={styles.forgotWrapper}>
								<Checkbox
									text={'Remember me'}
									field={'isRemember'}
									value={values.isRemember}
									onChange={setFieldValue}
								/>
								<TextLink
									link={pages[2].route}
									text={'Forgot your password?'}
								/>
							</div>
							<Button text={'Login'} onClick={submitForm} />
							<div className={styles.registerLinkWrapper}>
								{"Don't you have an account?"}
								<TextLink
									link={pages[1].route}
									text={pages[1].name}
									className={styles.registerLink}
								/>
							</div>
						</div>
					)}
				/>
			</Card>
		</div>
	);
}
