import React, {useEffect} from 'react';

export const Contact = () => {

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) =>
			{entry.target.classList.toggle('cardShow', entry.isIntersecting);}
			
	)});
		
		const card = document.querySelector('.cardHidden');
		observer.observe(card);

		
		
		
	}, []);

	return (
		<div className="prose mx-3 md:mx-auto my-2 ">
			<h1 className=" justify-center text-base-content">Contact me </h1>
			<p className="mx-1">
				Sending me your information is under construction, in the mean time feel
				free to contact me via <a href="mailto:cameron.gardner777@gmail.com">email</a> or my <a href="https://www.linkedin.com/in/cameron-gardner-29a235279/">linkedIn</a> 
			</p>
			<div className="card cardHidden delay-500 mb-3.5 mx-auto md:w-96 bg-base-100 shadow-xl border border-base-content  ">
				<div className="card-body ">
					<h2 className="card-title">Name</h2>
					<input
						type="text"
						className="bg-base-100 border rounded text"
					/>
					<h2 className="card-title">Email</h2>
					<input
						type="email"
						className="bg-base-100 border rounded  "
					/>
					<h2 className="card-title">Message</h2>
					<div className="border rounded-lg">
					
						{/*wrap textarea in a div so that it can have a similar border */}
						<textarea className="textarea caret-secondary textarea-lg w-full max-w-xs "></textarea>
					</div>
				</div>
			</div>
		</div>
	);
};
