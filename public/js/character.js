// character = require("../../models/character");

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
});
