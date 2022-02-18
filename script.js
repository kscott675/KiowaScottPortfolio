function hide() {
  for (var i = 0; i < arguments.length; i++) {
    var strig = "";
    strig += arguments[i];
    document.getElementById(strig).style.display = "none";
  }
}
function show() {
  for (var i = 0; i < arguments.length; i++) {
    var strig = "";
    strig += arguments[i];
    document.getElementById(strig).style.display = "block";
  }
}
//front screen
hide(
  "intro",
  "outcome1",
  "outcome2",
  "oneButton",
  "twoButton",
  "uLose",
  "uWon",
  "restartButton"
);

var oneButton = document.getElementById("oneButton");
var twoButton = document.getElementById("twoButton");
var playButton = document.getElementById("playButton");
var intro = document.getElementById("intro");

playButton.onclick = function startGame() {
  brave();
  hide("threat", "playButton", "pressPlayMessage");
  show("intro", "oneButton", "twoButton");
  document.body.style.background = "#000000";
};

oneButton.onclick = function gobble() {
  hide("intro", "oneButton", "twoButton");
  show("outcome1", "uLose", "restartButton");
  $("body").css("background", "#330d07");
};

twoButton.onclick = function hooray() {
  document.getElementById("intro", "oneButton", "twoButton").style.display =
    "none";
  $("body").css("background", "#284520");
  hide("oneButton", "twoButton");
  show("outcome2", "uWon", "restartButton");
};

var restartButton = document.getElementById("restartButton");

restartButton.onclick = function startOver() {
  hide(
    "intro",
    "outcome1",
    "outcome2",
    "oneButton",
    "twoButton",
    "uLose",
    "uWon",
    "restartButton"
  );
  show("name", "playButton", "pressPlayMessage", "threat");
  document.body.style.backgroundImage =
    "url('https://img1.picmix.com/output/stamp/normal/8/7/1/2/1852178_583ce.gif')";
  document.body.style.background = "#000000";
};

const myTimeout = setTimeout(unPlayed, 5000);

function unPlayed() {
  alert("Cold feet?");
}

function brave() {
  clearTimeout(myTimeout);
}