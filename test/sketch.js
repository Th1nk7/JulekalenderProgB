
function preload(){
  font = loadFont('comicsans.ttf')
}
let grader = 0;
let rotationStarted = false;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  textSize(100);
  angleMode(DEGREES);
  textFont(font)

}

function draw() {
  background(220)
  kalenderDoor(-130,-220,1)
  console.log(mouseX)
}

function kalenderDoor(x,y,number){
  //fill('blue')
  //rect(x,y,100)
  push()

  fill("red")
  rect(x-100/2,y-100/2,100)
  fill("white")
  translate(x-100/2,y-100/2,0)

  if (mouseX > x-100/2+windowWidth/2 && mouseX < x+100/2+windowWidth/2 && mouseY > y-100/2+windowHeight/2 && mouseY < y+100/2+windowHeight/2 && mouseIsPressed == true){
    rotationStarted =  true;
    console.log("cldasda")
  }
  if(grader < -160){
    rotateY(grader)
  }
  else if(rotationStarted == true){
    rotateY(grader)
    grader --;
  }
  rect(0, 0, 100);
  fill("black")
  translate(0,0,1)
  text(number,25,90,2)
  console.log(rotationStarted + "    " + grader)
  pop()
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  
}