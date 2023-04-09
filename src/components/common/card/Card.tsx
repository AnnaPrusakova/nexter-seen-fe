import styles from './card.module.scss';
import { ICard } from '@/components/common/card/card.interfaces';
import cn from 'classnames';

export function Card({ children, className }: ICard): JSX.Element {
	return <div className={cn(styles.card, className)}>{children}</div>;
}
