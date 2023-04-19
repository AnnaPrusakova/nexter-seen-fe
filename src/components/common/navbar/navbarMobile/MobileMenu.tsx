import { NavbarItem } from '@/components/common/navbar/navbarItem/NavbarItem';
import styles from './navbarMobile.module.scss';
import { navbarItemsForNoLoginUser } from '@/data/navbar';

export function MobileMenu({
	isMenuOpen,
	setIsLoginOpen,
	setIsSignUpOpen
}): JSX.Element {
	return (
		<div className="md:hidden">
			{isMenuOpen && (
				<div className={styles.mobileMenu}>
					{navbarItemsForNoLoginUser.map((elem, key) => (
						<NavbarItem
							key={key}
							link={elem.route}
							name={elem.name}
							setIsOpen={
								elem.name === 'login' ? setIsLoginOpen : setIsSignUpOpen
							}
						/>
					))}
				</div>
			)}
		</div>
	);
}
