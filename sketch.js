function setup() {
  createCanvas(400, 400);
   background("white");
}

function draw() {
  stroke("red")
  fill("black")
  
  if(mouseIsPressed) {
  rect(mouseX, mouseY, 20, 20) 
  }
}
