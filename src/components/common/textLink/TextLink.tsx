import styles from './textLink.module.scss';
import { ITextLink } from '@/components/common/textLink/textLink.interfaces';
import cn from 'classnames';

export function TextLink({ link, text, className }: ITextLink): JSX.Element {
	return (
		<div className={styles.wrapper}>
			<a href={link} className={cn(styles.link, className)}>
				{text}
			</a>
		</div>
	);
}
