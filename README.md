# Project 2
  This project was to develop a full stack application using Node and Express web server. The application is backed by a MYSQL database with a Sequelize ORM. We use routes for retreiving and adding new data.

# Critical Hit
  Our application 'Critical Hit' is designed to provide the user with various characters that can be used for a role playing game, such as DnD or Pathfinder. After the user logs in they are given the option to select an existing character or to create a character. For the design of our application we chose a more '90s theme. 
  
## Handlebars

  The screenshot below is from our index.handlebars file that templates the character card that the users sees on their welcome page. It used the data from the database and displays the characters information to the user. 

![handlebars](https://github.com/JerryForsberg/project-2/blob/readme/public/stylesheets/assets/imgs/readmeimgs/handlebars.png)
  
## api route
  
  The screenshot below is one of our api routes. This route is used to render all of the character data from the database when the user is selecting from characters to chooose from. The 'map' function creates an array for the data so we can get values for our handlebars file.  
  
![api route](https://github.com/JerryForsberg/project-2/blob/readme/public/stylesheets/assets/imgs/readmeimgs/apiRoute.png)



## gif 

  The gif below displays our working application. As you can see we are able to loggin, select an existing character or create a character, and then the character is displayed on the users welcome page. This is the Heroku link to our deployed application, .
  
  ![gif]()
