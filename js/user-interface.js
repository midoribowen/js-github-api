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
      $(".show-user").append("<img src='" + data.avatar_url + "' alt='user's avatar' height='200' width='200'>");
      if (data.name) {
        $(".show-user").append("<h2 id='full-name'>" +
                               "<a href='" + data.html_url + "'>" +  data.name +
                               "</a></h2>");
      }
      $(".show-user").append("<h3 id='user'>Username: " + data.login + "</h3><hr>" +
                             "<h4 id='followers'>" + data.followers + "<h6> Followers</h6></h4>" +
                             "<h4 id='number-repos'>" + data.public_repos + "<h6> Public Repositories</h6></h4>");
    })
    .fail(function() {
      $(".show-user").append("<p align='center'>Oopsy, daisy! We couldn't find any users matching '" + username + "'</p>" +
                             "<p align='center'>Try an " +
                             "<a href='https://github.com/search/advanced'>advanced search" + "</a>!</p>");
    });

    $.get(user.userReposData(), function(data) {
      $(".public-repos").show();
      for(var i = 0; i < data.length; i ++) {
        $(".public-repos").append("<h3 id='repo-name'>" +
                                  "<a href='" + data[i].html_url + "'>" + data[i].name + "</a>" +
                                  "</h3>" +
                                  "<h5 id='last-updated'>Last Updated: " +
                                  moment(data[i].updated_at).calendar() +
                                  "</h5>" +
                                  "<h5 id='created-at'>Created: " + moment(data[i].created_at).format('LLLL') +
                                  "</h5>");
        if(data[i].description === "") {
          $(".public-repos").append("<hr>")
        } else {
          $(".public-repos").append("<h4>Description:</h4>" + "<p align='left'>" + data[i].description + "</p>" + "<hr>");
        }
      }
    });
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
