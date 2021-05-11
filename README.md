# Task Manager

This proyect you can make a tasks CRUD 

You need to have installed node, docker and docker-compose for run this project.

Now for can run this project follow next steps
* Clone this repository
* Go to folder server, copy the file `.env.example` and rename like `.env` and complete the variables
```
DB_HOST=localhost
DB_USERNAME=test
DB_PASSWORD=test
DB_DATABASE=test
```
* Now go to root folder and you can run the database with docker
```bash
docker-compose -f docker-compose.yml up
```
* Install dependecies `npm install`
* Run mode production `npm start`
* Got to browser and write http://localhost:5000 this show you the web app
* Run script to set data into database go to server folder and run `npm run seed`