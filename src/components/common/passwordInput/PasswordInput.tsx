import styles from './passwordInput.module.scss';
import { IPasswordInput } from '@/components/common/passwordInput/passwordInput.interfaces';
import { useState } from 'react';
import { AiOutlineEyeInvisible } from '@react-icons/all-files/ai/AiOutlineEyeInvisible';
import { AiFillEyeInvisible } from '@react-icons/all-files/ai/AiFillEyeInvisible';

export function PasswordInput({
	value,
	onChange
}: IPasswordInput): JSX.Element {
	const [show, setShow] = useState<boolean>(false);
	return (
		<div className={styles.inputWrapper}>
			<label className={styles.inputLabel}>Password</label>
			<input
				value={value}
				onChange={event => onChange(event.target.value)}
				placeholder={'Enter your password'}
				className={styles.input}
				type={show ? 'text' : 'password'}
			/>
			{show ? (
				<AiOutlineEyeInvisible
					className={styles.passwordIcon}
					onClick={() => setShow(false)}
				/>
			) : (
				<AiFillEyeInvisible
					className={styles.passwordIcon}
					onClick={() => setShow(true)}
				/>
			)}
		</div>
	);
}
