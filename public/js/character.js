$(document).ready(() => {
  //   create character store to db
  $(() => {
    $(".createChar").on("click", event => {
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
      };

      $.ajax("/api/new/", {
        type: "POST",
        data: newChar
      }).then(() => {
        window.location.href = "/charSel";
      });
    });
  });
});
