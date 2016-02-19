var User = require("./../js/user.js").User;

$(function() {
  $("#repos").click(function() {
    var username = $("#username").val();
    $.get('https://api.github.com/users/' + username + "/repos?", function(data) {
      if (data.cod !== 200) {
        $("#show-repos").text(data.message);
      } else {
        var repoName = (data.full_name);
        var repoURL = (data.html_url);
        $("#show-repos").show();
        $("#user").text(username);
        for(var i = 0; i < data.length; i++) {
          $("ul#repos").append("<li>Repository Name: " + data[i].repoName +
                               "<li>URL: " + data[i].repoURL + "</li></li>")
        }
      }
    });
  });
});
