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
    ref.href = "./players.html?"+ "id="+teamsInfo[i].id 
    



    var h1 = document.createElement("h1");
    h1.innerText = teamsInfo[i].fullName;
    div.appendChild(h1);
    
    ref.appendChild(div)
    teams.appendChild(ref);
  }
}
appendData();
