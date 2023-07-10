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


