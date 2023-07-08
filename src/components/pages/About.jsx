import React from 'react';

export const About = () => {
	return (
		<div className="prose container md:max-w-full   md:mx-auto flex-1 ">
			<div className="flex flex-col md:max-w-full items-center">
				<h1 className="text-center mb-2">About Me</h1>
				<img
					className="mx-auto my-3 w-24 md:w-48 h-24 md:h-48 rounded-full"
					src="src/assets/avatar.jpg"
					alt="profile"
				/>
				<p className="mx-auto px-5 text-center text-sm md:text-xl max-w-sm md:max-w-xl">
					Hello! I'm a budding full-stack developer based in the beautiful
					Pacific Northwest (PNW)! I'm passionate about creating web
					applications and exploring the world of software development.
					Currently, I am enrolled as a student in the UC Berkeley Full-Stack
					Developer Bootcamp, where I am honing my skills and expanding my
					knowledge in various technologies and frameworks.During my journey as
					a full-stack developer, I have been immersed in a wide range of
					technologies, including HTML, CSS, JavaScript, React, Node.js,
					Express, and databases like MongoDB. Through hands-on projects and
					collaborative learning experiences, I am gaining valuable insights
					into both front-end and back-end development.My goal is to leverage my
					acquired knowledge and skills to build robust and user-friendly web
					applications. I thrive in problem-solving, enjoy learning new
					technologies, and appreciate the power of teamwork in driving
					innovation.
				</p>
			</div>
		</div>
	);
};
