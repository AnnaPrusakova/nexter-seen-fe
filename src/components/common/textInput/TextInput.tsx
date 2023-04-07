import styles from './textInput.module.scss';
import { ITextInput } from '@/components/common/textInput/textInput.interfaces';

export function TextInput({
	value,
	onChange,
	label,
	placeholder
}: ITextInput): JSX.Element {
	return (
		<div className={styles.inputWrapper}>
			<label className={styles.inputLabel}>{label}</label>
			<input
				value={value}
				onChange={event => onChange(event.target.value)}
				placeholder={placeholder}
				className={styles.input}
			/>
		</div>
	);
}
