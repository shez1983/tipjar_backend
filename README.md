# Onboarding Backend API

This Backend uses Loopback, and API framework for node.js written by strongloop

## Installation Guide (Running Locally with database)
- Clone this Repository
- Run npm install
- Install the strongloop CLI ``` npm install -g stringloop ```


If you want to test with a local database, rather than one on Heroku, there are some additional steps
- Install PostgreSQL, (Or another database package if you prefer, you will need to make changes to the loopback installation)
- Create a database, give it the name "onboard_postgres"
- Navigate to the server folder in the project folder
- You should find the following two files "datasources.json" and "_datasources.json", rename them latter to the former and vice versa
	- The framework looks for the datasources.json file to configure the database
	- You can switch back to the other config file to connect to the heroku database
- Navigate to the project folder in the command line
- Run this command ``` slc arc ```
- This will open the loopback GUI, click on each model and click the "migrate model" button

Now you should have a local database setup and working
- Go back to the command line and run the command ``` slc run ```
- in the browser, navigate to localhost:3000/explorer for interactive documentation of the API



