import { INavbarItem } from '@/components/common/navbar/navbar.interfaces';
import { NavbarButton } from '@/components/common/navbarButton/NavbarButton';

export function NavbarItem({
	link,
	name,
	setIsOpen
}: INavbarItem): JSX.Element {
	return (
		<NavbarButton
			link={link}
			isPage={link !== null}
			setIsOpen={setIsOpen}
			name={name}
		/>
	);
}
