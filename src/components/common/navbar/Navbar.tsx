import styles from './navbar.module.scss';
import MiniLogo from '../../../../public/mini_logo.svg';
import Image from 'next/image';
import { NavbarItem } from '@/components/common/navbar/navbarItem/NavbarItem';
import { MobileMenuIcon } from '@/components/common/navbar/navbarMobile/MobileMenuIcon';
import { MobileMenu } from '@/components/common/navbar/navbarMobile/MobileMenu';
import { LanguageSelector } from '@/components/common/navbar/languageSelector/LanguageSelector';
import { navbarItemsForNoLoginUser } from '@/data/navbar';
import { LoginModal } from '@/components/pages/login/Login.modal';
import { useState } from 'react';
import { SignUpModal } from '@/components/pages/signup/SignUp.modal';

export function Navbar(): JSX.Element {
	const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
	const [isSignUpOpen, setIsSignUpOpen] = useState<boolean>(false);

	return (
		<>
			<nav className={styles.navbarWrapper}>
				<div className={styles.wrapper}>
					<div className={styles.menuIconWrapper}>
						<div className={styles.menuMobileButton}>
							<MobileMenuIcon />
						</div>
						<div className={styles.logoWrapper}>
							<div className={styles.logo}>
								<Image className={styles.logoImg} src={MiniLogo} alt={'logo'} />
							</div>
						</div>
						<div className={styles.navbarItemsWrapper}>
							<div className={styles.navbarItems}>
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
						</div>
						<LanguageSelector />
					</div>
					<MobileMenu />
				</div>
			</nav>
			{isLoginOpen ? (
				<LoginModal
					isOpen={isLoginOpen}
					onClose={() => setIsLoginOpen(false)}
				/>
			) : (
				<SignUpModal
					isOpen={isSignUpOpen}
					onClose={() => setIsSignUpOpen(false)}
				/>
			)}
		</>
	);
}
