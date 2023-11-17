let size = 75;
let isOpenArr = new Array();
let degreesArr = new Array();

function preload(){
  font = loadFont('comicsans.ttf');
}

// Alt bag lågen skal laves efter
// x, y, farve, tal
function laageSetup(x, y, color, number){
  let rotationDegrees = degreesArr[number-1];
  let rotationStarted = false;
  if (mouseX > x-75/2 && mouseX < x+75/2 && mouseY > y-75/2 && mouseY < y-75/2 && mouseIsPressed == true){
    rotationStarted = true;
    console.log("clicked")
  }
  fill("black")
  rect(x-75/2-windowWidth/2,y-75/2-windowHeight/2,size);
  translate(-size,-size,0)
  fill(color);
  if(rotationDegrees < -160){
    rotateY(rotationDegrees);
    isOpenArr[number-1] = true;
  }
  else if (rotationStarted == true){
    rotationDegrees --;
    rotateY(rotationDegrees);
  }
  rect(0, 0, size);
  fill("black")
  translate(0,0,1)
  text("1",x,y+50)
  fill("white")
  degreesArr[number-1] = rotationDegrees;
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  textSize(70);
  angleMode(DEGREES);
  textFont(font)

  for(let i = 1; i < 25; i++){
    isOpenArr.push(false)
    degreesArr.push(0)
  }
}

function draw() {
  background(220);
  fill("red")
  rect(-50,-50,75)
  laageSetup(20,10,"blue",1)
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}