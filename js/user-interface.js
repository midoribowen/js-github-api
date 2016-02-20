var User = require("./../js/user.js").User;

$(function() {
  $("#username-form").submit(function(event) {
    event.preventDefault();
    var user = new User(username);
    var username = $("#username").val();
    $("#username").val("");
    $.get(user.userData(), function(data) {
      if (data !== 404) {
        $("#show-user").text("Oopsy, daisy! Looks like this user doesn't exist!");
      } else {
        $("#show-user").show();
        $("#user").text(data.login);
        $("#followers").text(data.followers);
        $("#public-repos").text(data.public_repos);
      }
    });
    $.get(user.userReposData, function(data) {
      if (data !== 404) {
        ("#show-repos").text("Oopsy, daisy! This user may not have any public repositories!");
      } else {
        $("show-repos").show();
        for(var i = 0; i < data.length; i++) {
          $("div#show-repos ul").append("<li>Repository Name: " + "<a href='" + data[i].html_url + "'>" + data[i].name + "</a>" +
                                        "<ul><li>Created At: " + moment(data[i].created_at).format('LLLL') + "</li>" +
                                        "<li>" + data[i].description + "</li></ul></li>");
        }
      }
    });
  });
});
