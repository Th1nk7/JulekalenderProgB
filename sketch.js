let grader = 0;
let rotationStarted = false;

function preload(){
  font = loadFont('comicsans.ttf')
}

function setup() {
  createCanvas(400, 400, WEBGL);
  textSize(70);
  angleMode(DEGREES);
  textFont(font)
}

function draw() {
  background(220);
  fill("red")
  rect(-50,-50,100)
  fill("white")
  translate(-50,-50,0)
  if(grader < -160){
    rotateY(grader)
  }
  else if(rotationStarted == true){
    rotateY(grader)
    grader --;
  }
  if(mouseX > 150 && mouseX < 250 && mouseY > 150 && mouseY < 250 && mouseIsPressed == true){
    rotationStarted = true;
  }
  if(mouseX > 150 && mouseX < 250 && mouseY > 150 && mouseY < 250 && mouseIsPressed == true && grader < -160){
  window.open("https://www.youtube.com/shorts/SXHMnicI6Pg")
  
  }
  rect(0, 0, 100);
  fill("black")
  translate(0,0,1)
  text("1",27,90)
  console.log(rotationStarted + "    " + grader)
}