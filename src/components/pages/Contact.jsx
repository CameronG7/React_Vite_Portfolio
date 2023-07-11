import React, { useEffect, useState } from 'react';

export const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [errorName, setErrorName] = useState('');
	const [errorEmail, setErrorEmail] = useState('')
	const [errorMessage, setErrorMessage] = useState('')

	const validateEmail = () => {
		console.log('validateEmail');
		// Regular expression for email validation
		const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
		if (!emailRegex.test(email)) {
			setErrorEmail('INVALID EMAIL ADDRESS.');
		} else {
			setErrorEmail('');
			return emailRegex.test(email);
		}
	};

	const handleBlur = (fieldName, value) => {
    if (value === '') {
      switch (fieldName) {
        case 'name':
          setErrorName('FIELD IS REQUIRED.');
          break;
        case 'message':
          setErrorMessage('FIELD IS REQUIRED.');
          break;
        default:
          break;
      }
    } else {
      switch (fieldName) {
        
        case 'name':
          setErrorName('');
          break;
        case 'message':
          setErrorMessage('');
          break;
        default:
          break;
      }
    }
  };

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				entry.target.classList.toggle('cardShow', entry.isIntersecting);
			});
		});

		const card = document.querySelector('.cardHidden');
		observer.observe(card);
	}, []);

	return (
		<div className="prose mx-3 md:mx-auto my-2 ">
			<h1 className=" justify-center text-base-content">Contact me </h1>

			<div className="card cardHidden delay-500 mb-3.5 mx-auto md:w-96 bg-base-100 shadow-xl border border-base-content  ">
				<div className="card-body p-0 md:p-7">
					<label className="label p-0 mt-7">
						<h2 className="card-title mt-0">Name</h2>
						<span className="label-text-alt text-error">{errorName}</span>
					</label>
					<input
						required
						type="text"
						placeholder="Name"
						className="bg-base-100 border rounded focus:outline-green-300  p-0.5"
						onChange={(e) => setName(e.target.value)}
						onBlur={() => handleBlur('name', name)}
						value={name}
					/>

					<label className="label p-0 mt-10">
						<h2 className="card-title mt-0">Email</h2>
						<span className="label-text-alt text-error">{errorEmail}</span>
					</label>
					<input
						type="email"
						placeholder="Email"
						className="bg-base-100 border rounded caret-secondary p-0.5"
						onChange={(e) => setEmail(e.target.value)}
						onBlur={validateEmail}
						required
						value={email}
					/>

					<label className="label p-0 mt-10">
						<h2 className="card-title mt-0">Message</h2>
						<span className="label-text-alt text-error" >{errorMessage}</span>
					</label>
					{/* <div className="border  rounded-lg"> */}
						{/*wrap textarea in a div so that it can have a similar border */}
						<textarea
							className="border rounded-lg focus:outline-secondary p-0.5 bg-base-100 w-full max-w-xs "
							placeholder='Message'
							required
							onChange={(e) => setMessage(e.target.value)}
							onBlur={() => handleBlur('message', message)}
							value={message}
						></textarea>
					{/* </div> */}
				
				</div>
			</div>
			<p className="mx-1 mb-4">
				Sending me your information is under construction, in the mean time feel
				free to contact me via{' '}
				<a href="mailto:cameron.gardner777@gmail.com">email</a> or my{' '}
				<a href="https://www.linkedin.com/in/cameron-gardner-29a235279/">
					linkedIn
				</a>
			</p>
		</div>
	);
};
