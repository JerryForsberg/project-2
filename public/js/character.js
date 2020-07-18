// const character = require("../../models/character");

$(document).ready(() => {
// create character store to db
// $(function () {
//     $(".createChar").on("click", function(event) {
//          event.preventDefault();

//         const newChar = {
//            name: $(this).data("name"),
//            race: $(this).data("race"),
//            class: $(this).data("class"),
//            level: $(this).data("level"),
//            hp: $(this).data("hp"),
//            strength: $(this).data("strength"),
//            dexterity: $(this).data("dexterity"),
//            weapon: $(this).data("weapon"),
//            selected: $(this).data(true)
//         };

//         $.ajax("/api/create/", {
//             type: "POST",
//             data: newChar
//         }).then(
//             function() {
//                 window.location.href = "/charSel";
//             }
//         );
//     });
// });

// selectChar is the user clicking to select the character


        $.get("/api/all", function(data) {
            // gets data needs to put on the page 
          console.log(data);  
            

        });

});