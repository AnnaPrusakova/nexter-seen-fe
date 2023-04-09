import styles from './passwordInput.module.scss';
import { IPasswordInput } from '@/components/common/passwordInput/passwordInput.interfaces';
import { useState } from 'react';
import { AiOutlineEyeInvisible } from '@react-icons/all-files/ai/AiOutlineEyeInvisible';
import { AiFillEyeInvisible } from '@react-icons/all-files/ai/AiFillEyeInvisible';
import cn from 'classnames';

export function PasswordInput({
	value,
	field,
	onChange,
	error
}: IPasswordInput): JSX.Element {
	const [show, setShow] = useState<boolean>(false);
	return (
		<div
			className={cn(styles.inputWrapper, { [styles.error]: Boolean(error) })}
		>
			<label className={styles.inputLabel}>Password</label>
			<input
				value={value}
				onChange={event => onChange(field, event.target.value)}
				placeholder={'Enter your password'}
				className={cn(styles.input, { [styles.error]: Boolean(error) })}
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
			{Boolean(error) && <span className={styles.inputError}>{error}</span>}
		</div>
	);
}
