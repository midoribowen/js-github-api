var User = require("./../js/user.js").User;

$(function() {
  $("#repos").click(function() {
    var username = $("#username").val();
    $("#username").val("");
    $.get('https://api.github.com/users/' + username + "/repos", function(data) {
      var user = new User(data);
      if (data.cod !== 200) {
        $("#show-repos").text(data.message);
      } else {
        $("#show-repos").show();
        $("#user").text(username);
        for(var i = 0; i < data.length; i++) {
          $("div#repos").append("<ul><li>Repository Name: " + data[i].full_name +
                               "<li>URL: " + data[i].html_url + "</li></li></ul>")
        }
      }
    });
  });
});
