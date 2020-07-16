// $(() => {
//   $(".createChar").on("click", function(event) {
//     const id = $(this).data("id");
//     const newChar = $(this).data("newChar");

//     const newCharSelected = {
//       selected: newChar
//     };

//     $.ajax("/api/create/" + id, {
//       type: "POST",
//       data: newCharSelected
//     }).then(() => {});
//   });
// });

// $(() => {
//   $(".selectChar").on("click", function() {
//     const id = $(this).data("id");
//   });
// });
