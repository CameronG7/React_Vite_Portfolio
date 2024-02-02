import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [errorName, setErrorName] = useState('');
	const [errorEmail, setErrorEmail] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const form = useRef();

	const handleSendEmail = (e) => {
		e.preventDefault();
	};

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

	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (validateEmail()) {
			console.log('valid email');
			if (name && message) {
				emailjs
					.sendForm(
						'service_3el01yj',
						'contact_form',
						form.current,
						'5-W8xiLmpns6DGxah'
					)
					.then(
						(result) => {
							console.log(result.text);
						},
						(error) => {
							console.log(error.text);
						}
					);
				setEmail('');
				setName('');
				setMessage('');
			}
		} else {
			console.log('invalid email');
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
		<div className="prose mx-3 md:mx-auto my-2 flex-1">
			<h1 className=" justify-center text-base-content">Contact me </h1>

			<div className="card cardHidden delay-500 mb-3.5 mx-auto md:w-96 bg-base-100 shadow-xl border border-base-content  ">
				<form
					className="card-body p-0 md:p-7"
					ref={form}
					onSubmit={handleFormSubmit}
				>
					<label className="label p-0 mt-7">
						<h2 className="card-title mt-0">Name</h2>
						<span className="label-text-alt text-error">{errorName}</span>
					</label>
					<input
						required
						name="user_name"
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
						name="user_email"
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
						<span className="label-text-alt text-error">{errorMessage}</span>
					</label>

					<textarea
						name="message"
						className="border rounded-lg focus:outline-secondary p-0.5 bg-base-100 w-full max-w-xs "
						placeholder="Message"
						required
						onChange={(e) => setMessage(e.target.value)}
						onBlur={() => handleBlur('message', message)}
						value={message}
					></textarea>
					<input
						type="submit"
						value="Send"
						className="btn btn-primary mt-5"
						onClick={handleFormSubmit}
					/>
				</form>
			</div>
			
		</div>
	);
};
