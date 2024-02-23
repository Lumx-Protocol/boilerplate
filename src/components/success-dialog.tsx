'use client';

import { Dialog, DialogClose, DialogContent } from '@/components/ui/dialog';
import { Button } from './ui/button';
import { DialogFooter } from './ui/dialog';
import Image from 'next/image';
import { Item } from '@/types';
import { useState } from 'react';

export const SuccessDialog = ({ item, hash }: { item: Item; hash: string }) => {
	const [closeModal, setCloseModal] = useState(true);

	return (
		<>
			<Dialog open={closeModal} onOpenChange={setCloseModal}>
				<DialogContent className='sm:max-w-[520px] w-screen h-screen sm:h-auto'>
					<div className='flex sm:flex-row flex-col gap-4 sm:items-center pt-6 sm:pt-0'>
						{item.imageUrl ? (
							<Image
								src={item.imageUrl}
								alt={'image'}
								className='sm:flex-1 rounded-md'
								width={600}
								height={600}
							/>
						) : (
							<div className='h-[600px] flex-shrink-0 w-[600px] rounded-md bg-neutral-300' />
						)}
						<article className='sm:flex-1'>
							<h4 className='text-sm leading-[14px] text-neutral-500 font-medium pb-1.5'>
								Congratulations
							</h4>
							<h1 className='font-semibold text-xl tracking-[-0.75%] pb-1.5'>
								{item.name || 'Item Name'}
							</h1>
							<p className='break-words text-neutral-500 text-sm'>
								{item.description || 'item description'}
							</p>
							<p className='text-sm text-neutral-500 pt-4'>
								You can{' '}
								<a
									target='black'
									href={`https://mumbai.polygonscan.com/tx/${hash}`}
									className='underline text-black'
								>
									verify on chain
								</a>
							</p>
						</article>
					</div>
					<DialogFooter className='flex-1 gap-2'>
						<Button className='w-full'>Ir para o perfil</Button>
						<DialogClose asChild>
							<Button className='!ml-0' variant='outline' type='button'>
								Fechar
							</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	);
};
