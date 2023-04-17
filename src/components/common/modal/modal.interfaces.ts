import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ModalInterface {
	isOpen: boolean;
	onClose: () => void;
}

export interface IModal
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
		ModalInterface {}
