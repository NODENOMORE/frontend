# Project 2
## Application Requirements
* Must use a Node and Express server
* Must be backed by a MySQL database and build an ORM (do not use Sequelize), required functions are:
	* select
		* example: SELECT * FROM Users LIMIT 100; SELECT * FROM Products LIMIT 100;
	* selectByCriteria (or similar name)
		* example: SELECT * FROM Users WHERE id = ?; SELECT * FROM Users WHERE email = ?;
	* insert
		* example: INSERT INTO Users SET ?; INSERT INTO Orders SET ?;
	* update
	* delete
	* query [BONUS]
		* queryString, queryValues
		* example (SELECT * FROM Users JOIN Orders on Order.id = Users.user_id WHERE Order.id = ?, [1])
* Must utilize both GET and POST routes for retrieving and adding new data
* [BONUS] implement user management (aka logins)
* Must be deployed using Heroku (with data) 
* [OPTIONAL] If using client-side-rendering, client side must be deployed with github pages.
* Must be unit tested with Travis CI and have at least 1 unit test per team member
* Must utilize at least one new third-party API
* Must have a polished UI
* Must use a CSS framework
* Must follow MVC paradigm
* [BONUS] Use OOP patterns
* Must meet good quality coding standards (indentation, scoping, naming)
* [OPTIONAL] use Handlebars
* Create 2nd repo for frontend (use github pages for deployment)
* Repos must use automated deployments (github triggers) 
## Presentation Requirements
Use this [project presentation template](https://docs.google.com/presentation/d/1_u8TKy5zW5UlrVQVnyDEZ0unGI2tjQPDEpA0FNuBKAw/edit?usp=sharing) to address the following: 
* Elevator pitch: a one minute description of your application
* Concept: What is your user story? What was your motivation for development?
* Process: What were the technologies used? How were tasks and roles broken down and assigned? What challenges did you encounter? What were your successes?
* Demo: Show your stuff!
* Directions for Future Development
* Links to to the deployed application and the GitHub repository
## Grading Metrics 
| Metric        | Weight | 
| ---           | ---    |
| Concept       | 10%    |
| Design        | 20%    |
| Functionality | 30%    |
| Collaboration | 30%    |
| Presentation  | 10%    |
## Submission on BCS
You are required to submit the following:
* The URL of the deployed application
* The URL of the GitHub repository