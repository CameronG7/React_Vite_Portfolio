import React from 'react';

export const Contact = () => {
	return (
		<div className='prose mx-auto my-2 '>
			<h1 className=' justify-center'>Contact me </h1>
			<p>
				Sending me your information is under construction, in the mean time feel
				free to contact me
			</p>
			<div className="card  mx-auto w-96 bg-base-100 shadow-xl border border-base-content  ">
				<div className="card-body ">
					<h2 className="card-title">Name</h2>
					<input type="text" className='bg-primary-content'/>
					<h2 className="card-title">Email</h2>
					<input type="email" className='bg-primary-content focus:ring'/>
					<h2 className="card-title">Message</h2>
					<textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full max-w-xs bg-primary-content" ></textarea>
					
				</div>
			</div>
		</div>
	);
};
