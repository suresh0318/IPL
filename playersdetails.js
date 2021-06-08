var playersInfo = JSON.parse(localStorage.getItem("players-data"));
var player = document.getElementById("player");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const teamid = urlParams.get("tid");
const pid = urlParams.get("pid");

function append() {
  var div = document.createElement("div");
  div.className = "playerInfo";
  var img = document.createElement("img");
  img.src = playersInfo[teamid].players[pid].photos;
  div.appendChild(img);
  var name = document.createElement("h1");
  name.innerText = playersInfo[teamid].players[pid].name;
  div.appendChild(name);

  var h3 = document.createElement("h3");
  h3.innerText = playersInfo[teamid].players[pid].description;
  div.appendChild(h3);

  var team = document.createElement("h2");
  team.innerText ="team : " + playersInfo[teamid].players[pid].team;
  div.appendChild(team);
  var role = document.createElement("h2");
  role.innerText = "role : "  + playersInfo[teamid].players[pid].role;
  div.appendChild(role);
  var playing = document.createElement("h2");
  playing.innerText = "playing status : " + playersInfo[teamid].players[pid].playingStaus;
  div.appendChild(playing);
  var price = document.createElement("h1");
  price.innerText = "price : "+playersInfo[teamid].players[pid].price;
  div.appendChild(price);
  player.appendChild(div);
}
append();
