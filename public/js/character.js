

// create character store to db
$(function () {
    $(".createChar").on("click", function(event) {
         event.preventDefult();

        const newChar = {
           name: $(this).data("name"),
           race: $(this).data("race"),
           class: $(this).data("class"),
           level: $(this).data("level"),
           hp: $(this).data("hp"),
           strength: $(this).data("strength"),
           dexterity: $(this).data("dexterity"),
           weapon: $(this).data("weapon"),
           selected: $(this).data(true)
        };

        $.ajax("/api/create/", {
            type: "POST",
            data: newChar
        }).then(
            function() {
                window.location.href = "/charSel";

            }
        );
    });
});

// selects all users characters 
$(function() {
    $(".selectChar").on("click", function(event) {
        const id = $(this).data("id");


    });
});