import React from 'react';

export const Project = ({
	imageUrl,
	hasDeployedApp,
	githubRepoUrl,
	deployedAppUrl,
	projectName,
}) => {
	return (
		<div className="carousel-item h-4/5">
      <div className="card mb-3.5 mx-auto bg-base-100  flex flex-col justify-between">
        <div className="flex-grow">
          <img
            className="object-cover h-full rounded"
            src={imageUrl}
            alt="Project"
          />
        </div>
        <div className="card-body">
          <h2 className="card-title justify-center">{projectName}</h2>
          <div className="card-actions justify-center">
            <a
              href={githubRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-active btn-secondary hover:text-primary"
            >
              GitHub Repo
            </a>
            {hasDeployedApp && (
              <a
                href={deployedAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
              >
                Deployed App
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
	);
};
