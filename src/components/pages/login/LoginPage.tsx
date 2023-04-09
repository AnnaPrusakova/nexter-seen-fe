import { TextInput } from '@/components/common/textInput/TextInput';
import { useState } from 'react';
import { PasswordInput } from '@/components/common/passwordInput/PasswordInput';
import { Card } from '@/components/common/card/Card';
import { Heading } from '@/components/common/heading/Heading';
import { SIZE } from '@/components/common/heading/heading.interfaces';
import styles from './login.module.scss';
import { Checkbox } from '@/components/common/checkbox/Checkbox';
import { TextLink } from '@/components/common/textLink/TextLink';
import { Button } from '@/components/common/button/Button';

export function LoginPage(): JSX.Element {
	const [value, setValue] = useState<string>('');

	const handleLogin = () => {
		//test
	};
	return (
		<div>
			<Card className={styles.cardSize}>
				<div className={styles.loginWrapper}>
					<div className={styles.welcomeTitle}>Welcome!</div>
					<Heading size={SIZE.H2} text={'Sign in'} />
					<div className={styles.inputWrapper}>
						<TextInput
							value={value}
							onChange={setValue}
							label={'Email'}
							placeholder={'Enter your email'}
						/>
						<PasswordInput value={value} onChange={setValue} />
					</div>
					<div className={styles.forgotWrapper}>
						<Checkbox text={'Remember me'} />
						<TextLink
							link={'/forgot-password'}
							text={'Forgot your password?'}
						/>
					</div>
					<Button text={'Login'} onClick={handleLogin} />
					<div className={styles.registerLink}>
						Do you have any account?
						<TextLink link={'/register'} text={'Register'} isBold={true} />
					</div>
				</div>
			</Card>
		</div>
	);
}
