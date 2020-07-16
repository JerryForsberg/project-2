$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });

  $.get("/api/all", function(data) {
    if (data.length !==0) {
      for (let i=0; i < data.length; i++) {
        Character = data; 
      }
    }
  })
});
