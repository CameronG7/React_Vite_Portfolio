import React from 'react';
import avatar from '../assets/avatar.jpg';
import { Navigation } from './index.jsx';

export const Header = ({ handleToggleTheme, handlePageChange }) => {
	return (
		<div className="navbar bg-base-100 md:max-w-full static justify-center">
			<div className="flex-1 justify-start md:justify-start">
				<Navigation 
				handlePageChange={handlePageChange}
				handleToggleTheme={handleToggleTheme} />
			</div>
			<div className="flex-auto justify-center items-center">
				<a
					// href="https://github.com/CameronG7"
					className="btn btn-ghost text-xl md:text-2xl lg:text-4xl"
				>
					Cameron Gardner
				</a>
			</div>
			<div className=" flex-1 justify-end items-center">
				<div className="avatar pr-1.5">
					<div className="rounded w-14 h-14 md:w-20 md:h-20 m-1">
						<img
							className=" object-cover rounded-full"
							src={avatar}
							alt="Avatar"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

// export default Header;
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
		className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
	>
		<li>
			<a>Homepage</a>
		</li>
		<li>
			<a>Portfolio</a>
		</li>
		<li>
			<a>About</a>
		</li>
		<li>{/* <input type="checkbox" className="toggle" checked /> */}</li>
	</ul>
</div>; // dropdown to delete
