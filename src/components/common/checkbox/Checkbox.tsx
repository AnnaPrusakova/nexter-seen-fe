import styles from './checkbox.module.scss';
import { ICheckbox } from '@/components/common/checkbox/checkbox.interfaces';

export function Checkbox({ value, text }: ICheckbox): JSX.Element {
	return (
		<div className={styles.wrapper}>
			<input type="checkbox" value="" className={styles.input} />
			<label className={styles.label}>{text}</label>
		</div>
	);
}
