var teamsInfo = JSON.parse(localStorage.getItem("team-data"));
var playersInfo = JSON.parse(localStorage.getItem("players-data"));

var playersdata = document.getElementById("players-data");
var teamId = window.location.search.split("=")[1]-1 ;

function appendData() {
  var div = document.createElement("div");
  div.className = "team";
  var img = document.createElement("img");
  img.src = playersInfo[teamId].teamIcon;
  div.appendChild(img);

  var h1 = document.createElement("h1");
  h1.innerText = playersInfo[teamId].fullName;
  div.appendChild(h1);
  var br = document.createElement("br");
  div.appendChild(br);
  var pcount = document.createElement("h2");
  pcount.innerText = "players : " + playersInfo[teamId].players.length;
  div.appendChild(pcount);
  var tbatsman = document.createElement("h2");
  tbatsman.innerText = "Top batsman : " + playersInfo[teamId].players[0].name;
  div.appendChild(tbatsman);
  var tbowler = document.createElement("h2");
  tbowler.innerText = "Top bowler : " + playersInfo[teamId].players[9].name;
  div.appendChild(tbowler);
  var champions = document.createElement("h2");
  champions.innerText =
    "championships won : " + playersInfo[teamId].championshipsWon;
  div.appendChild(champions);
  playersdata.appendChild(div);
}


// var requiredData = teamsInfo[teamId - 1];
function appendData1() {
  
  let players = playersInfo[teamId].players;
  for (i = 0; i < players.length; i++) {
    var div1 = document.createElement("div");
    div1.className = "players";
    var name = document.createElement("h1");
    name.innerText = players[i].name;
    div1.appendChild(name);
    playersdata.appendChild(div1);

    var ref = document.createElement("a");
    ref.href =  "./playersdetails.html?" + "tid=" + teamId +"&"+ "pid=" + players[i].id ;
    ref.appendChild(div1);
    playersdata.appendChild(ref);
  }
}
appendData();
appendData1();
