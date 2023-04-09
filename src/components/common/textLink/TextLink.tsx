import styles from './textLink.module.scss';
import { ITextLink } from '@/components/common/textLink/textLink.interfaces';
import cn from 'classnames';

export function TextLink({
	link,
	text,
	isBold = false
}: ITextLink): JSX.Element {
	return (
		<div className={styles.wrapper}>
			<a href={link} className={cn(styles.link, { [styles.isBold]: isBold })}>
				{text}
			</a>
		</div>
	);
}
