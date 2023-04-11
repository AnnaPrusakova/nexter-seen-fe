import { NavbarItem } from '@/components/common/navbar/navbarItem/NavbarItem';
import styles from './navbarMobile.module.scss';

export function MobileMenu(): JSX.Element {
	return (
		<div className="sm:hidden" id="mobile-menu">
			<div className={styles.mobileMenu}>
				<NavbarItem link={'search'} name={'Search'} />
			</div>
		</div>
	);
}
