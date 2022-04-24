import React from 'react';

const Newsletter = () => {
	return (
		<div className='w-full py-16 text-white'>
			<div className='container mx-auto grid lg:grid-cols-3 font-roboto'>
				<div className='lg:col-span-2 my-4'>
					<h2 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
						Want tips & tricks to optimize your flow?
					</h2>
					<p>Sign up to our newsletter and stay up to date.</p>
				</div>
				<div className='my-4'>
					<div className='flex flex-col sm:flex-row items-center justify-between w-full'>
						<input
							className='p-3 flex w-full rounded-md text-black'
							type='email'
							placeholder='Enter Email'
						/>
						<button className='bg-teal-400 text-black rounded-md font-medium w-48 ml-4 my-6 px-6 py-3'>
							Submit
						</button>
					</div>
					<p>
						We care bout the protection of your data. Read our
						<span className='text-teal-400'> Privacy Policy.</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
