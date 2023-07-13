import React from 'react';
import { Project } from './projects/Project';

export const Portfolio = () => {
	return (
		<div className="h-96 carousel carousel-vertical rounded-box min-h-screen">
			{/* reel */}
			<Project
				imageUrl="./reel.png"
				hasDeployedApp
				githubRepoUrl="https://www.github.com/CameronG7/ReelReviews"
				deployedAppUrl="https://sheltered-reef-22263.herokuapp.com/"
				projectName="Reel Reviews"
			/>
			{/* jate */}
			<Project
				imageUrl="./JATE.png"
				hasDeployedApp
				githubRepoUrl="https://www.github.com/CameronG7/JATE_PWA"
				deployedAppUrl="https://salty-temple-36941-0e4bb5ef543d.herokuapp.com/"
				projectName="JATE PWA"
			/>
			<Project
				imageUrl="./emp_db.png"
				hasDeployedApp={false}
				githubRepoUrl="https://www.github.com/CameronG7/employeeData_mySQL"
				deployedAppUrl="https://www.github.com/CameronG7"
				projectName="MYSQL Employee Tracker"
			/>
			<Project
				imageUrl="./weather.png"
				hasDeployedApp
				githubRepoUrl="https://www.github.com/CameronG7/5_day_weather"
				deployedAppUrl="https://camerong7.github.io/5_day_weather/"
				projectName="3rd Party API Weather Dashboard"
			/>
			<Project
				imageUrl="./social api.png"
				hasDeployedApp={false}
				githubRepoUrl="https://github.com/CameronG7/social_media_api"
				deployedAppUrl="https://www.github.com/CameronG7"
				projectName="MongoDB Social Network API"
			/>
			<Project
				imageUrl="./backend.jpg"
				hasDeployedApp={false}
				githubRepoUrl="https://www.github.com/CameronG7/ORM_eCommerce_Backend"
				deployedAppUrl="https://www.github.com/CameronG7"
				projectName="Sequelize E-Commerce Backend"
			/>
		</div>
	);
};
