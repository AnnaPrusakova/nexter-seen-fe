import styles from './navbarItem.module.scss';
import { INavbarItem } from '@/components/common/navbar/navbar.interfaces';
import Link from 'next/link';

export function NavbarItem({ link, name }: INavbarItem): JSX.Element {
	return (
		<Link href={link} className={styles.navbarItem} aria-current="page">
			{name}
		</Link>
	);
}
