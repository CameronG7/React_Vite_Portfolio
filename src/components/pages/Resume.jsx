import React from 'react';

const handleDownload = () => {
	console.log('clicked handleDownload');
};

const handleView = () => {	
	console.log('clicked handleView');
};


export const Resume = () => {
	return (
		<div className="prose mx-auto my-2 ">
			<h1 className=" justify-center">Resume </h1>
			<p>blah blah resume blah blah</p>
		</div>
	);
};
