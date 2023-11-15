let grader = 0;
let rotationStarted = false;
let isOpenArr = new Array();

function preload(){
  font = loadFont('comicsans.ttf');
}

// Alt bag lågen skal laves efter
// x, y, farve, tal
function laageSetup(x, y, color, number){
  let rotationDegrees = 0;
  let rotationStarted = false;
  fill(color);
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  textSize(70);
  angleMode(DEGREES);
  textFont(font)

  for(let i = 1; i < 25; i++){
    let pushVar = i+false;
    isOpenArr.push(pushVar);
  }
}

function draw() {
  background(220);
  fill("red")
  rect(-50,-50,75)
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
  rect(0, 0, 75);
  fill("black")
  translate(0,0,1)
  text("1",20,69)
  console.log(rotationStarted + "    " + grader)
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}