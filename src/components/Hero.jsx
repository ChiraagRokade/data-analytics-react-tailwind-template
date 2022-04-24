import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
	return (
		<div className='text-white'>
			<div className='max-x-[800px] -mt-24 font-roboto w-full h-screen mx-auto text-center flex flex-col justify-center'>
				<p className='text-teal-400 font-bold p-2'>
					GROWING WITH DATA ANALYTICS
				</p>
				<h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
					Grow with data.
				</h1>
				<div className='flex justify-center items-center'>
					<p className='md:text-5xl sm:text-4xl text-xl font-bold'>
						Fast, flexible financing for
					</p>
					<Typed
						className='md:text-5xl text-gray-500 sm:text-4xl text-xl font-bold md:pl-4 pl-2'
						strings={['BTB', 'BTC', 'SASS']}
						typeSpeed={120}
						backSpeed={120}
						loop
					/>
				</div>
				<p className='md:text-2xl text-xl font-bold text-gray-500 py-4'>
					Monitor your data analytics to increase revenue for BTB, BTC, & SASS
					platforms.
				</p>
				<button className='bg-teal-500 w-52 rounded-md font-medium my-6 mx-auto py-3'>
					Get Started
				</button>
			</div>
		</div>
	);
};

export default Hero;
