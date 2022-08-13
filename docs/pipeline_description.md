# PIPELINE DESCRIPTION

The project has a simple pipeline process:

## Build

The build step is triggered automatically each time a new commit pushed to GitHub.

1. Initializing the NodeJS environment
2. Preparing environment variables of CircleCI and My Store Project
3. Installing Elastic Beanstalk CLI
4. Install AWS CLI
5. Configuring AWS Access Key ID
6. Installing dependencies & Building My Store - Backend
7. Installing dependencies & Building My Store - Frontend

## Deployment

The deployment step is required to be triggered manually to avoid unexpected deployment to production.

1. Initializing the container environment
2. Preparing environment variables of CircleCI and My Store Project
3. Installing Node.js environment
4. Installing Elastic Beanstalk CLI 
5. Installing AWS CLI
6. Configuring AWS Access Key ID
7. Deploying My Store - Backend & Updating EB environment variables with EB CLI
8. Deploying My Store - Frontend
