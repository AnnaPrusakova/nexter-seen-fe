import { Modal } from '@/components/common/modal/Modal';
import { ISignUpModal } from '@/components/pages/signup/signUpModal';
import { SingUpRequest } from '@/interfaces/request/SingUpRequest';
import { FormikProps, Formik } from 'formik';
import styles from './signUp.module.scss';

import { SignupValidation } from '@/validation/signup.validation';
import useTranslation from 'next-translate/useTranslation';
import { Button, Heading, PasswordInput, TextInput } from '@/components/common';
import { SIZE } from '@/components/common/heading/heading.interfaces';

export function SignUpModal({ isOpen, onClose }: ISignUpModal): JSX.Element {
	const { t } = useTranslation('common');
	const initValues: SingUpRequest = {
		email: '',
		username: '',
		password: '',
		confirmPassword: ''
	};
	const handleSignUp = () => {
		//test
	};
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<Formik
				initialValues={initValues}
				onSubmit={handleSignUp}
				validateOnBlur={false}
				validateOnChange={false}
				validationSchema={SignupValidation}
				component={({
					values,
					setFieldValue,
					submitForm,
					errors
				}: FormikProps<SingUpRequest>): JSX.Element => (
					<div className={styles.signUpWrapper}>
						<div className={styles.welcomeTitle}>{t('welcome')}</div>
						<Heading size={SIZE.H2} text={t('signUp')} />
						<div className={styles.inputWrapper}>
							<TextInput
								field={'email'}
								value={values.email}
								onChange={setFieldValue}
								label={t('email')}
								placeholder={t('enterYourEmail')}
								error={errors.email}
							/>
							<TextInput
								field={'username'}
								value={values.username}
								onChange={setFieldValue}
								label={t('username')}
								placeholder={t('enterYourUsername')}
								error={errors.username}
							/>
							<PasswordInput
								field={'password'}
								value={values.password}
								onChange={setFieldValue}
								error={errors.password}
							/>
							<PasswordInput
								field={'confirmPassword'}
								value={values.confirmPassword}
								onChange={setFieldValue}
								error={errors.confirmPassword}
							/>
						</div>
						<Button text={t('register')} onClick={submitForm} />
					</div>
				)}
			/>
		</Modal>
	);
}
