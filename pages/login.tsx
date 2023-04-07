import { LoginPage } from '@/components/pages/login/LoginPage';
import { Layout } from '@/components/common/layout/Layout';

export default function Login() {
	return (
		<Layout title={'Login'}>
			<LoginPage />
		</Layout>
	);
}
