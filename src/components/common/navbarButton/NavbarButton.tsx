import useTranslation from 'next-translate/useTranslation';
import styles from './navbarButton.module.scss';
import Link from 'next/link';

export function NavbarButton({ isPage, link, name, setIsOpen }): JSX.Element {
	const { t } = useTranslation('common');

	return (
		<>
			{isPage ? (
				<Link href={link} className={styles.navbarItemLink} aria-current="page">
					{t(name)}
				</Link>
			) : (
				<div className={styles.navbarItemBtn} onClick={() => setIsOpen(true)}>
					{t(name)}
				</div>
			)}
		</>
	);
}
