import React from 'react';

const Analytics = () => {
	return (
		<div className='w-full bg-white px-16 py-4'>
			<div className='container mx-auto font-roboto grid md:grid-cols-2'>
				<lottie-player
					src='https://assets1.lottiefiles.com/private_files/lf30_ewwnp445.json'
					background='transparent'
					speed='1'
					loop
					autoplay
				></lottie-player>

				<div className='flex flex-col justify-center'>
					<p className='text-teal-400 font-bold text-2xl'>
						DATA ANALYTICS DASHBOARD
					</p>
					<h2 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 '>
						Manage Data Analytics Centrally
					</h2>
					<p className='text-lg'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
						consequatur quos dolorem possimus illum in ipsam enim consectetur
						ipsum aut aperiam excepturi commodi natus nostrum ut doloribus
						laudantium vero sint iste modi, cumque officia eos soluta. Vero,
						eius at, deserunt nulla ratione esse, quis quod ipsum distinctio
						recusandae quam dicta.
					</p>
					<button className='bg-black text-teal-400 rounded-md w-52 my-6 mx-auto py-3 font-medium md:mx-0'>
						Get Started
					</button>
				</div>
			</div>
		</div>
	);
};

export default Analytics;
