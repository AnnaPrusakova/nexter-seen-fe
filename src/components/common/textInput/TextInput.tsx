import styles from './textInput.module.scss';
import { ITextInput } from '@/components/common/textInput/textInput.interfaces';
import cn from 'classnames';

export function TextInput({
	value,
	field,
	onChange,
	label,
	placeholder,
	error
}: ITextInput): JSX.Element {
	return (
		<div
			className={cn(styles.inputWrapper, { [styles.error]: Boolean(error) })}
		>
			<label className={styles.inputLabel}>{label}</label>
			<input
				value={value}
				onChange={event => onChange(field, event.target.value)}
				placeholder={placeholder}
				className={cn(styles.input, { [styles.error]: Boolean(error) })}
			/>
			{Boolean(error) && <span className={styles.inputError}>{error}</span>}
		</div>
	);
}
