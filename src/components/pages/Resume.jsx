import React from 'react';
import { useMediaQuery } from 'react-responsive';

const handleDownload = () => {
	console.log('clicked handleDownload');
};

const handleView = () => {
	console.log('clicked handleView');
};

export const Resume = () => {
	const isDesktop = useMediaQuery({ minWidth: 1024 });

	return (
		<div decide>
			{isDesktop ? (
				<div desktop>
					<div className="prose mx-auto my-2 ">
						<h1 className=" justify-center">Resume </h1>
						<p>blah blah resume blah blah</p>
					</div>
					<iframe
						className="w-full md:w-1/2 min-h-screen  md:mx-auto mb-2"
						src="https://docs.google.com/document/d/e/2PACX-1vT16VJMyQET9S-PNRopSgsniAWHWNm-5sZ-ic8e7-Brff8jx9HVuAnbI6xiyWZnjA/pub?embedded=true"
					></iframe>
				</div>
			) : (
				<div mobile>
					
				</div>
			)}
		</div>
	);
};
