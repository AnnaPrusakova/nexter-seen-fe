import Head from 'next/head';
import { ILayout } from '@/components/common/layout/layout.interfaces';

export function Layout({ title, children }: ILayout): JSX.Element {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<main>{children}</main>
		</>
	);
}
