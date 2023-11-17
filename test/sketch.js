
function preload(){
  font = loadFont('comicsans.ttf')
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  textSize(100);
  angleMode(DEGREES);
  textFont(font)

}

function draw() {
  background(220)
  kalenderDoor(-30,-0,1)
  kalenderDoor(-200,-0,1)
  
}

function kalenderDoor(x,y,number){
  fill('blue')
  rect(windowWidth-1500,windowHeight-1000,100)
  let grader = 0;
  let rotationStarted = false;
  fill("red")
  rect(x,y,100)
  fill("white")
  translate(x,y,0)
  if(grader < -160){
    rotateY(grader)
  }
  else if(rotationStarted == true){
    rotateY(grader)
    grader --;
  }
  if(mouseX > x - 50 && mouseX < x + 50 && mouseY > y - 50 && mouseY < y + 50 && mouseIsPressed == true){
    rotationStarted =  true;
  }

  rect(0, 0, 100);
  fill("black")
  text(number,25,90,2)
  console.log(rotationStarted + "    " + grader)
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}