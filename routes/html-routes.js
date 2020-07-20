// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

const db = require("../models");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("signup");
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("login");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    db.Character.findAll({
      where: { selected: true }
    }).then(results => {
      const data = results.map(r => r.dataValues);
      console.log(data);
      res.render("index", { Characters: data });
    });
  });

  app.get("/charSel/:id", isAuthenticated, (req, res) => {
    db.Character.update(
      { selected: true },
      {
        where: { id: req.params.id }
      }
    ).then(() => {
      res.render("charSel");
    });
  });

  // creating a character
  app.get("/create", isAuthenticated, (req, res) => {
    res.render("create");
  });

  // selecting from existing characters
  app.get("/choose", isAuthenticated, (req, res) => {
    db.Character.findAll({}).then(results => {
      const data = results.map(r => r.dataValues);
      res.render("choose", { Characters: data });
    });
  });

  // Route for taking user confirm selected character
  app.get("/charSel", isAuthenticated, (req, res) => {
    res.render("charSel");
  });
};
