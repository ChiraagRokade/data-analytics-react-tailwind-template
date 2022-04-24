import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<div className='flex justify-between font-roboto items-center h-20 px-4 container mx-auto text-white z-10'>
			<h1 className='w-full text-3xl font-bold text-teal-400'>React </h1>
			<ul className='hidden md:flex'>
				<li className='p-4'>Home</li>
				<li className='p-4'>Company</li>
				<li className='p-4'>Resources</li>
				<li className='p-4'>About</li>
				<li className='p-4'>Contact</li>
			</ul>
			<div onClick={handleNav} className='block md:hidden'>
				{!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
			</div>
			<div
				className={
					!nav
						? 'fixed left-0 top-0 w-[60%] h-full font-roboto border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 lg:hidden'
						: 'fixed left-[-100%]'
				}
			>
				<h1 className='w-full text-3xl font-bold text-teal-400 m-4'>React </h1>

				<ul className='uppercase p-4'>
					<li className='p-4 border-b border-gray-600'>Home</li>
					<li className='p-4 border-b border-gray-600'>Company</li>
					<li className='p-4 border-b border-gray-600'>Resources</li>
					<li className='p-4 border-b border-gray-600'>About</li>
					<li className='p-4'>Contact</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
