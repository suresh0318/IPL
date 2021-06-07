var playersInfo = JSON.parse(localStorage.getItem("players-data"));

var teamId = window.location.search.split("")[1];
var playerId = window.location.search.split("=")[1];



console.log(teamId)
console.log(playerId)