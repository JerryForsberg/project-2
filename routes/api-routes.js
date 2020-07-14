// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
const { Op } = require('sequelize');
// Dependencies
// =============================================================
const character = require("../models/character.js");

// Routes
// =============================================================
module.exports = function (app) {
  // Get all character
  app.get("/api/all", function (req, res) {
    Character.findAll({}).then(function (results) {
      res.json(results);
    });
  });

  // Get a specific character
  app.get("/api/:character", function (req, res) {
    Character.findAll({
      where: {
        name: req.params.character
      }
    }).then(function (results) {
      res.json(results);
    });
  });

  // Get all character of a specific race
  app.get("/api/race/:race", function (req, res) {
    character.findAll({
      where: {
        race: req.params.race
      }
    }).then(function (results) {
      res.json(results);
    });
  });

  // Get all characters from a specific class
  app.get("/api/character/:class", function (req, res) {
    Character.findAll({
      where: {
        class: req.params.class
      }
    }).then(function (results) {
      res.json(results);
    });
  });

  // Get character by level 
  app.get("/api/character/level", function (req, res) {
    Character.findAll({
      where: {
        level: {
          [Op.gte]: 150
        }
      },
      order: [["strength", "DESC"]]
    }).then(function (results) {
      res.json(results);
    });
  });

  // Get all characters by hp
  app.get("/api/character/hp", function (req, res) {
    character.findAll({
      where: {
        hp: {
          [Op.lte]: 150
        }
      },
      order: [["hp", "ASC"]]
    }).then(function (results) {
      res.json(results);
    });
  });
  // Get all characters by weapon
  app.get("/api/character/weapon", function (req, res) {
    character.findAll({
      where: {
        hp: {
          [Op.lte]: 150
        }
      },
      order: [["hp", "ASC"]]
    }).then(function (results) {
      res.json(results);
    });
  });
  // Add a character
  app.post("/api/new", function (req, res) {
    console.log("Character Data:");
    console.log(req.body);
    Character.create({
      name: req.body.name,
      race: req.body.race,
      class: req.body.class,
      level: req.body.level,
      hp: req.body.hp
    }).then(function (results) {
      res.json(results);
    });
  });

  // Delete a character
  app.delete("/api/character/:id", function (req, res) {
    console.log("Character ID:");
    console.log(req.params.id);
    Character.destroy({
      where: {
        id: req.params.id
      }
    }).then(function () {
      res.end();
    });
  });
};
