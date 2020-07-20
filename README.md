# Project 2
  This project was to develop a full stack application that follows the guidelines listed below:
* Uses a Node and Express server
* Uses Handlebars.js as the template engine
* Is backed by a MySQL database with a Sequelize ORM
* Utilizes both GET and POST routes for retrieving and adding new data
* Is deployed using Heroku (with data)
* Utilizes passport to log user into the site and save their data
* Has a very attractive user interface
* Has a folder structure that meets the MVC paradigm
* Meets good quality coding standards (indentation, scoping, naming)
* Protect API keys in Node with environment variables

# Critical Hit
  Our application 'Critical Hit' is designed to provide the user with various characters that can be used for a role playing game, such as DnD or Pathfinder. After the user logs in they are given the option to select an existing character or to create a character. For the design of our application we chose a more '90s theme. 
  
## Handlebars

  The screenshot below is from our index.handlebars file that templates the character card that the users sees on their welcome page. It used the data from the database and displays the characters information to the user. 

![handlebars](https://github.com/JerryForsberg/project-2/blob/readme/public/stylesheets/assets/imgs/readmeimgs/handlebars.png)
  
## api route
  
  The screenshot below is one of our api routes. This route is used to render all of the character data from the database when the user is selecting from characters to chooose from. The 'map' function creates an array for the data so we can get values for our handlebars file.  
  
![api route](https://github.com/JerryForsberg/project-2/blob/readme/public/stylesheets/assets/imgs/readmeimgs/apiRoute.png)



## gifs 

  The gifs below display our working application. As you can see we are able to loggin, select an existing character or create a character, and then the character is displayed on the users welcome page. This is the Heroku link to our deployed application, https://critical-hit-fantasy-character.herokuapp.com/ .
  
![gif](https://github.com/JerryForsberg/project-2/blob/readme/public/stylesheets/assets/imgs/readmeimgs/Animated%20GIF-source.gif)

![gif1](https://github.com/JerryForsberg/project-2/blob/readme/public/stylesheets/assets/imgs/readmeimgs/Animated%20GIF-source%20(1).gif)

![gif2](https://github.com/JerryForsberg/project-2/blob/readme/public/stylesheets/assets/imgs/readmeimgs/Animated%20GIF-source%20(2).gif)

![gif3](https://github.com/JerryForsberg/project-2/blob/readme/public/stylesheets/assets/imgs/readmeimgs/Animated%20GIF-source%20(3).gif)
