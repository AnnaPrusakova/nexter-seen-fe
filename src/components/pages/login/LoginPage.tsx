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
import useTranslation from 'next-translate/useTranslation';

export function LoginPage(): JSX.Element {
	const { t } = useTranslation('common');
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
							<div className={styles.welcomeTitle}>{t('welcome')}</div>
							<Heading size={SIZE.H2} text={t('signIn')} />
							<div className={styles.inputWrapper}>
								<TextInput
									field={'email'}
									value={values.email}
									onChange={setFieldValue}
									label={t('email')}
									placeholder={t('enterYourEmail')}
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
									text={t('rememberMe')}
									field={'isRemember'}
									value={values.isRemember}
									onChange={setFieldValue}
								/>
								<TextLink link={pages[2].route} text={t('forgotPassword')} />
							</div>
							<Button text={t('login')} onClick={submitForm} />
							<div className={styles.registerLinkWrapper}>
								{t('dontHaveAccount')}
								<TextLink
									link={pages[1].route}
									text={t('signUp')}
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
