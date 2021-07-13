var teamsInfo = JSON.parse(localStorage.getItem("team-data"));
var playersInfo = JSON.parse(localStorage.getItem("players-data"));

function appendData() {
  let teams = document.getElementById("teams");
  for (var i = 0; i < teamsInfo.length; i++) {
    var div = document.createElement("div");
    div.className = "team";
    var img = document.createElement("img");
    img.src = teamsInfo[i].teamIcon;
    div.appendChild(img);

    var ref = document.createElement("a");
    ref.href = "./players.html?" + "id=" + teamsInfo[i].id;

    var h1 = document.createElement("h1");
    h1.innerText = teamsInfo[i].fullName;
    div.appendChild(h1);

    ref.appendChild(div);
    teams.appendChild(ref);
  }
}
appendData();

playerSearch = document.getElementsByClassName("player-search")[0];
playerSearch.addEventListener("click", search);
function search() {
  searchBar = document.getElementById("search-val");
  var inputVal = searchBar.value.toLowerCase();
  for (i = 0; i < playersInfo.length; i++) {
    if (
      inputVal == playersInfo[i].key.toLowerCase() ||
      inputVal == playersInfo[i].fullName.toLowerCase()
    ) {
      location.href = `./players.html?id=${playersInfo[i].id}`;
    }
  }
}


var btn = document.getElementById("add-player") 
btn.addEventListener("click",add);
function add(){
  location.href = "./addPlayer.html"
}