import styles from './navbarItem.module.scss';
import { INavbarItem } from '@/components/common/navbar/navbar.interfaces';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

export function NavbarItem({ link, name }: INavbarItem): JSX.Element {
	const { t } = useTranslation('common');

	return (
		<Link href={link} className={styles.navbarItem} aria-current="page">
			{t(name)}
		</Link>
	);
}
