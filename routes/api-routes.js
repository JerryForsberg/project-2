const db = require("../models");
const passport = require("../config/passport");

// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
const { Op } = require("sequelize");
// Dependencies
// =============================================================

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for taking user back to members page
  app.get("/welcome", (req, res) => {
    res.redirect("/members");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
  // Routes
  // =============================================================
  // Get all character
  app.get("/api/all", (req, res) => {
    db.Character.findAll({}).then(results => {
      res.json(results);
    });
  });

  // Get a specific character
  app.get("/api/:character", (req, res) => {
    db.Character.findAll({
      where: {
        name: req.params.character
      }
    }).then(results => {
      res.json(results);
    });
  });

  // Get all character of a specific race
  app.get("/api/race/:race", (req, res) => {
    db.Character.findAll({
      where: {
        race: req.params.race
      }
    }).then(results => {
      res.json(results);
    });
  });

  // Get all characters from a specific class
  app.get("/api/character/:class", (req, res) => {
    db.Character.findAll({
      where: {
        class: req.params.class
      }
    }).then(results => {
      res.json(results);
    });
  });

  // Get character by level
  app.get("/api/character/level", (req, res) => {
    db.Character.findAll({
      where: {
        level: {
          [Op.gte]: 150
        }
      },
      order: [["strength", "DESC"]]
    }).then(results => {
      res.json(results);
    });
  });

  // Get all characters by hp
  app.get("/api/character/hp", (req, res) => {
    db.Character.findAll({
      where: {
        hp: {
          [Op.lte]: 150
        }
      },
      order: [["hp", "ASC"]]
    }).then(results => {
      res.json(results);
    });
  });
  // Get all characters by weapon
  app.get("/api/character/weapon", (req, res) => {
    db.Character.findAll({
      where: {
        hp: {
          [Op.lte]: 150
        }
      },
      order: [["hp", "ASC"]]
    }).then(results => {
      res.json(results);
    });
  });
  // Add a character
  app.post("/api/new", (req, res) => {
    console.log("Character Data:");
    console.log(req.body);
    db.Character.create(req.body).then(results => {
      res.json(results);
    });
  });

  // Delete a character (save for an add on)
  app.delete("/api/character/:id", (req, res) => {
    console.log("Character ID:");
    console.log(req.params.id);
    db.Character.destroy({
      where: {
        id: req.params.id
      }
    }).then(() => {
      res.end();
    });
  });
};
