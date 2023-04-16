export interface INavbarItem {
	link: string | null;
	name: string;
	setIsOpen?: (value: boolean) => void;
}
