import { TextInput } from '@/components/common/textInput/TextInput';
import { useState } from 'react';
import { PasswordInput } from '@/components/common/passwordInput/PasswordInput';

export function LoginPage(): JSX.Element {
	const [value, setValue] = useState<string>('');
	return (
		<div>
			<TextInput
				value={value}
				onChange={setValue}
				label={'Email'}
				placeholder={'Enter your email'}
			/>
			<PasswordInput value={value} onChange={setValue} />
		</div>
	);
}
