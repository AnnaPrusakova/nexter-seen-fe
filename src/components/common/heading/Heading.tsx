import styles from './heading.module.scss';
import { IHeading, SIZE } from '@/components/common/heading/heading.interfaces';

export function Heading({ size, text }: IHeading): JSX.Element {
	return (
		<div className={size === SIZE.H1 ? styles.headingH1 : styles.headingH2}>
			{text}
		</div>
	);
}
