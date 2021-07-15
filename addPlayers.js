$(document).ready(function () {
  var teamsInfo = JSON.parse(localStorage.getItem("players-data"));

  $("#submit-btn").click(function (e) {
    e.preventDefault();

    var playerName = $("#player-name").val();
    var playerPrice = $("#player-price").val();
    var playerRole = $("#player-role").val();
    var playerStatus = $("#player-status").val();
    var playerPhoto = $("#player-photo").val();
    var teamKey = $("#team-key").val();

    var keyNumber = "";
    for (i = 0; i < teamsInfo.length; i++) {
      if (teamsInfo[i].key === teamKey) {
        keyNumber = parseInt(i);
      }
    }
    var requiredInfo = teamsInfo[keyNumber];

    var playerObj = {
      id: requiredInfo.players.length ,
      name: playerName,
      team: teamKey,
      role: playerRole,
      playingStatus: playerStatus,
      price: playerPrice,
      photos: playerPhoto,
    };

    teamsInfo[keyNumber].players.push(playerObj);
    localStorage.setItem("players-data", JSON.stringify(teamsInfo));
    alert("New player added successfully");
    location.assign("./index.html");
    console.log(teamsInfo[keyNumber].players);
  });
});