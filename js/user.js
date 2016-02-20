// Constructor
var User = function(username) {
  this.username = username;
};

// Methods
User.prototype.userData = function() {
  return 'https://api.github.com/' + this.username;
}

User.prototype.userReposData = function() {
  return 'https://api.github.com/' + this.username + '/repos';
};

// Exports Class to *-interface.js
module.exports = User;
