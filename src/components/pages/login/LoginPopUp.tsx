import {
	TextInput,
	PasswordInput,
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
import { ILoginPopUp } from '@/components/pages/login/loginPopUp.interfaces';
import cn from 'classnames';

export function LoginPopUp({ isOpen, onClose }: ILoginPopUp): JSX.Element {
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
		<div className={cn(styles.wrapper, { [styles.isOpen]: isOpen })}>
			<div className={styles.content}>
				<div className={styles.card}>
					<button
						onClick={onClose}
						className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
					>
						<svg
							aria-hidden="true"
							className="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clipRule="evenodd"
							></path>
						</svg>
						<span className="sr-only">Close modal</span>
					</button>
					<div className={styles.fileds}>
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
										<TextLink
											link={pages[2].route}
											text={t('forgotPassword')}
										/>
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
					</div>
				</div>
			</div>
		</div>
	);
}
