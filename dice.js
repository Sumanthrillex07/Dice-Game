function shuffle() {
  let r1 = Math.floor(Math.random() * 6) + 1;
  let r2 = Math.floor(Math.random() * 6) + 1;
  let rd1 = "pictures/dice" + r1 + ".png";
  let rd2 = "pictures/dice" + r2 + ".png";
  var img1 = document.querySelectorAll("img")[0];
  var img2 = document.querySelectorAll("img")[1];
  img1.setAttribute("src", rd1);
  img2.setAttribute("src", rd2);

  let w = document.getElementById("win");
  if (r1 > r2) w.innerHTML = "Player 1 Wins";
  else if (r1 < r2) w.innerHTML = "Player 2 Wins";
  else w.innerHTML = "Draw";
}
function anim() {
  setTimeout(shuffle, 500);
  const img1 = document.getElementById("img1");
  const img2 = document.getElementById("img2");
  img1.setAttribute("src", "pictures/dice.gif");
  img2.setAttribute("src", "pictures/dice.gif");
}
