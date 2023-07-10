import React from 'react';
import { useMediaQuery } from 'react-responsive';

const viewUrl =
	'https://docs.google.com/document/d/e/2PACX-1vT16VJMyQET9S-PNRopSgsniAWHWNm-5sZ-ic8e7-Brff8jx9HVuAnbI6xiyWZnjA/pub';

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
			<div className="prose mx-auto my-4 ">
				<h1 className=" justify-center">Resume </h1>
			</div>
			{isDesktop ? (
				<div desktop>
					<iframe
						className="w-full md:w-1/2 min-h-screen  md:mx-auto mb-2"
						src="https://docs.google.com/document/d/e/2PACX-1vT16VJMyQET9S-PNRopSgsniAWHWNm-5sZ-ic8e7-Brff8jx9HVuAnbI6xiyWZnjA/pub?embedded=true"
					></iframe>
						<a
						href="/Resume_Cameron_Gardner.pdf"
						download="Cameron-Gardner-Resume"
						target="_blank"
						rel="noreferrer"
					>
						<button className="btn btn-outline btn-accent mx-1 mb-2">
							Download{' '}
						</button>
					</a>
				</div>
			) : (
				<div
					mobile
					className="resumeMobile  "
				>
					<a href={viewUrl}>
						<button className="btn btn-outline btn-secondary mx-1">
							View{' '}
						</button>{' '}
					</a>
					<a
						href="/Resume_Cameron_Gardner.pdf"
						download="Cameron-Gardner-Resume"
						target="_blank"
						rel="noreferrer"
					>
						<button className="btn btn-outline btn-accent mx-1">
							Download{' '}
						</button>
					</a>
				</div>
			)}
		</div>
	);
};
