// Get elements
let radius = document.getElementById("getradius");
let result = document.getElementById("result");
// Define canvas
let myCanvas = document.getElementById("myCanvas");
let ctx = myCanvas.getContext("2d");
// Main Function
function getVolume() {
  event.preventDefault();
  // Check validation - 1st step
  if (radius.value < 250 && radius.value > 0) {
    let r = radius.value;
    // Find the volume of the radius
    let volume = (4 * Math.PI * Math.pow(r, 3)) / 3;
    // Paint the circle with the radius
    ctx.beginPath();
    ctx.arc(250, 250, r, 0, Math.PI * 2);
    ctx.stroke();
    // Shows result as text
    result.style.display = "block";
    result.innerHTML =
      "The Volume for radius " + r + " " + "is: " + volume.toFixed(4);
  }
  // If negative number - 2nd part of validation [1st step]
  else if (radius.value < 0) {
    clearCanvas();
    alert(
      "Value is negative and not valid, Please insert a number between 1-249!"
    );
    myCanvas.className = "border border-danger rounded-lg";
    radius.style.backgroundColor = "red";
    myCanvas.style.backgroundColor = "black";
    radius.focus();
    event.preventDefault();
    radius.value = "";
    return;
  }
  // If higher than 250 (Out of the lines) - 2nd part of validation [2nd step]
  else if (radius.value >= 250) {
    clearCanvas();
    alert(
      "Value is too high and not valid , Please insert a number between 1-249!"
    );
    myCanvas.className = "border border-danger rounded-lg";
    radius.style.backgroundColor = "red";
    myCanvas.style.backgroundColor = "black";
    radius.focus();
    event.preventDefault();
    radius.value = "";
    return;
  }
  // If nothing inserts in and its empty - 2nd part of validation [3rd step]
  else {
    clearCanvas();
    alert("Please insert a value!");
    myCanvas.className = "border border-warning rounded-lg";
    radius.style.backgroundColor = "red";
    myCanvas.style.backgroundColor = "black";
    radius.focus();
    event.preventDefault();
    radius.value = "";
    return;
  }
  // Always do = (when you pass)  [יכל להיכתב גם למעלה מבחינת נוחות וסדר נכתב כאן]
  myCanvas.className = "border border-success rounded-lg";
  radius.style.backgroundColor = "white";
  myCanvas.style.backgroundColor = "grey";
  // Clear input
  radius.value = "";
}
// Clear Canvas
function clearCanvas() {
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  result.style.display = "none";
  myCanvas.className = "border border-dark";
  radius.style.backgroundColor = "white";
  myCanvas.style.backgroundColor = "grey";
}
// Bonus > add onload function + setTimeout for onLoad circle loop
function PaintCircle() {
  for (let i = 0; i < 250; i++) {
    setTimeout(function () {
      drawCircle(i);
    }, i * 5);
  }
}
// Draw circle
function drawCircle(i) {
  ctx.beginPath();
  ctx.arc(250, 250, i, 0, Math.PI * 2);
  ctx.stroke();
}
