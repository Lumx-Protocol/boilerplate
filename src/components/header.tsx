'use client';

import { WalletContextProvider } from '@lumx-protocol/embedded-wallet';
import { Button } from './ui/button';
import Image from 'next/image';
import { Profile } from './profile';

export const Header = () => {
	return (
		<WalletContextProvider
			clientId='cb63683f-c98b-4ac4-8dfc-4692daaab6a0'
			isModal
			environment='sandbox'
		>
			<header className='flex gap-4 pt-12 items-center px-[calc(100%-85vw)]'>
				<Image src='./lumx-logo.svg' height={39} width={39} alt='lumx logo' />
				<Button className='w-fit mr-auto' variant={'secondary'}>
					Welcome
				</Button>
				<Profile />
			</header>
		</WalletContextProvider>
	);
};
