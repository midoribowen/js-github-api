var User = require("./../js/user.js");

$(function() {
  $("#username-form").submit(function(event) {
    event.preventDefault();
    $(".show-user").empty();
    $(".public-repos").empty();
    var username = $("#username").val();
    var user = new User(username);
    $("#username").val("");

    $.get(user.userData(), function(data) {
      $(".show-user").show();
      $(".show-user").append("<h2 id='user'>Username: " + data.login + "</h2>" +
                             "<h3 id='followers'>Followers: " + data.followers + "</h3>" +
                             "<h3 id='number-repos'># of Repositories: " + data.public_repos + "</h3>");
    });
    // $.get(user.userReposData(), function(data) {
    //   if (data !== 404) {
    //     ("#show-repos").text("Oopsy, daisy! This user may not have any public repositories!");
    //   } else {
    //     $("show-repos").show();
    //     for(var i = 0; i < data.length; i++) {
    //       $("div#show-repos ul").append("<li>Repository Name: " + "<a href='" + data[i].html_url + "'>" + data[i].name + "</a>" +
    //                                     "<ul><li>Created At: " + moment(data[i].created_at).format('LLLL') + "</li>" +
    //                                     "<li>" + data[i].description + "</li></ul></li>");
    //     }
    //   }
    // });
  });
});
