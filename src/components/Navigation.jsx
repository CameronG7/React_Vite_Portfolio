import React from 'react';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export const Navigation = ({ handleToggleTheme }) => {
	const isDesktop = useMediaQuery({ minWidth: 1024 });

	const handleTog = () => {
		console.log('clicked handletog');
		handleToggleTheme();
	};
	const [page, setPage] = useState(0);
	return (
		<div className="decide">
			{isDesktop ? (
				<div className=" prose flex-auto navbar-start ">
					<a><h3 className='m-0 inline p-2 hover:cursor-pointer hover '>About</h3></a>
					<a><h3 className='m-0 inline p-2 hover:cursor-pointer'>Portfolio</h3></a>
					<a><h3 className='m-0 inline p-2 hover:cursor-pointer'>Contact</h3></a>
					<a><h3 className='m-0 inline p-2 hover:cursor-pointer'>Resume</h3></a>
					<input
								type="checkbox"
								className="toggle ms-3 mt-1 block w-12"
								onChange={handleTog}
							/>
				</div>
			) : (
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
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52"
					>
						<li>
							<a>About Me</a>
						</li>
						<li>
							<a>Portfolio</a>
						</li>
						<li>
							<a>Contact</a>
						</li>
						<li>
							<a>Resume</a>
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
