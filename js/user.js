// Constructor
var User = function (username) {
  this.username = username.trim();
};

// Methods
User.prototype.userData = function() {
  return 'https://api.github.com/users/' + this.username;
}

User.prototype.userReposData = function() {
  return 'https://api.github.com/users/' + this.username + '/repos';
};

// Exports Class to *-interface.js
module.exports = User;
