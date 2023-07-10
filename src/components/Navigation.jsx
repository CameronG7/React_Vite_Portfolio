import React from 'react';
import { useMediaQuery } from 'react-responsive';

export const Navigation = ({ handleToggleTheme, handlePageChange }) => {
	const isDesktop = useMediaQuery({ minWidth: 1024 });

	const handlePage = () => {
		const page = event.target.textContent;
		console.log('clicked handlePage', page);
		handlePageChange(page);
	};

	const handleTog = () => {
		console.log('clicked handletog');
		handleToggleTheme();
	};

	return (
		<div className="decide">
			{isDesktop ? (
				<div className=" prose flex-auto navbar-start ">
					<a>
						<h3
							onClick={handlePage}
							className="m-0 inline p-2 hover:cursor-pointer hover:text-secondary-focus "
						>
							About
						</h3>
					</a>
					<a>
						<h3
							onClick={handlePage}
							className="m-0 inline p-2 hover:cursor-pointer hover:text-secondary-focus"
						>
							Portfolio
						</h3>
					</a>
					<a>
						<h3
							onClick={handlePage}
							className="m-0 inline p-2 hover:cursor-pointer hover:text-secondary-focus"
						>
							Contact
						</h3>
					</a>
					<a>
						<h3
							onClick={handlePage}
							className="m-0 inline p-2 hover:cursor-pointer hover:text-secondary-focus"
						>
							Resume
						</h3>
					</a>
					<input
						type="checkbox"
						className="toggle ms-3 mt-1 block w-12"
						onChange={handleTog}
					/>
				</div>
			) : (// if not desktop, render the dropdown menu
				<div className="dropdown">
					<label
						tabIndex={0}
						className="btn btn-ghost btn-circle"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h7"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-39"
					>
						<li>
							<a
								onClick={handlePage}
								className="hover:text-secondary-focus"
							>
								About Me
							</a>
						</li>
						<li>
							<a
								onClick={handlePage}
								className="hover:text-secondary-focus"
							>
								Portfolio
							</a>
						</li>
						<li>
							<a
								onClick={handlePage}
								className="hover:text-secondary-focus"
							>
								Contact
							</a>
						</li>
						<li>
							<a
								onClick={handlePage}
								className="hover:text-secondary-focus"
							>
								Resume
							</a>
						</li>
						<li>
							<input
								type="checkbox"
								className="toggle ms-3"
								onChange={handleTog}
							/>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};
