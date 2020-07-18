// const character = require("../../models/character");

$(document).ready(() => {
  //   create character store to db
  $(function () {
    $(".createChar").on("click", function (event) {
      event.preventDefault();

      const newChar = {
        name: $(".name").val(),

        race: $(".race").val(),

        class: $(".class").val(),

        level: $(".level").val(),

        hp: $(".hp").val(),

        strength: $(".strength").val(),

        dexterity: $(".dexterity").val(),

        weapon: $(".weapon").val(),

        selected: true
      }


      console.log(newChar);

      $.ajax("/api/new/", {
        type: "POST",
        data: newChar
      }).then(
        function () {
          window.location.href = "/charSel";
        }
      );
    });
  });

  // selectChar is the user clicking to select the character

  // $.get("/api/all", data => {
  //   // gets data needs to put on the page
  //   console.log(data);
  // });
});
