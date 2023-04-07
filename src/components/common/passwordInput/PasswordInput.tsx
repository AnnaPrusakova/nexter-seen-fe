import styles from './passwordInput.module.scss';
import { IPasswordInput } from '@/components/common/passwordInput/passwordInput.interfaces';

export function PasswordInput({
	value,
	onChange
}: IPasswordInput): JSX.Element {
	return (
		<div className={styles.inputWrapper}>
			<label className={styles.inputLabel}>Password</label>
			<input
				value={value}
				onChange={event => onChange(event.target.value)}
				placeholder={'Enter your password'}
				className={styles.input}
				type={'password'}
			/>
		</div>
	);
}
