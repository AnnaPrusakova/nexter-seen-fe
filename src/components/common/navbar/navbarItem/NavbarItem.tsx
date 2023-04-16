import styles from './navbarItem.module.scss';
import { INavbarItem } from '@/components/common/navbar/navbar.interfaces';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

export function NavbarItem({
	link,
	name,
	setIsOpen
}: INavbarItem): JSX.Element {
	const { t } = useTranslation('common');

	return (
		<>
			{link !== null ? (
				<Link href={link} className={styles.navbarItemLink} aria-current="page">
					{t(name)}
				</Link>
			) : (
				<div
					className={styles.navbarItemBtn}
					onClick={() => setIsOpen && setIsOpen(true)}
				>
					{t(name)}
				</div>
			)}
		</>
	);
}
