let size = 100;
let isOpenArr = new Array();
let isOpenPermArr = new Array();
let degreesArr = new Array();
let rotationStartedArr = new Array();
let img1, img2, img3, img4;

function preload(){
  font = loadFont('comicsans.ttf');
  img1 = loadImage("jul1.png"); img2 = loadImage("jul2.png"); img3 = loadImage("jul3.png"); img4 = loadImage("jul4.png")
}

// Alt bag lågen skal laves efter
// x, y, billede, tal, talXPosition, textColor
function laageSetup(x, y, laageImage, number, textPos, textColor){
  push()
  let rotationStarted = rotationStartedArr[number-1];
  if (mouseX > x-size/2+windowWidth/2 && mouseX < x+size/2+windowWidth/2 && mouseY > y-size/2+windowHeight/2 && mouseY < y+size/2+windowHeight/2 && mouseIsPressed == true){
    rotationStartedArr[number-1] = true;
    console.log("clicked")
  }
  fill("black")
  rect(x-size/2,y-size/2,size);
  translate(x-size/2,y-size/2,0)
  fill("red");
  rotateY(0)
  if(degreesArr[number-1] < -160){
    rotateY(degreesArr[number-1]);
    if(isOpenPermArr[number-1] == false){
      isOpenArr[number-1] = true;
      isOpenPermArr[number-1] = true
    }
    else{
      isOpenArr[number-1] = false;
    }
  }
  else if (rotationStarted == true){
    degreesArr[number-1] --;
    rotateY(degreesArr[number-1]);
  }
  image(laageImage,0,0,size,size)
  translate(0,0,-1)
  fill("white")
  rect(0,0,size-1)
  fill(textColor)
  translate(0,0,2)
  text(number,textPos,80)
  fill("white")
  pop()
}

function isOpenChecker(number,link){
  if(isOpenArr[number-1]==true){
    window.open(link)
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  textSize(70);
  angleMode(DEGREES);
  textFont(font)
  noStroke()

  for(let i = 1; i < 25; i++){
    isOpenArr.push(false)
    isOpenPermArr.push(false)
    degreesArr.push(0)
    rotationStartedArr.push(false)
  }
}

function draw() {
  background(220);
  laageSetup(-700,-80,img1,1,32,"white")
  laageSetup(400,250,img2,2,27,"white")
  laageSetup(258,-312,img3,3,27,"white")
  laageSetup(612,-111,img4,4,25,"white")
  isOpenChecker(1,"")
  isOpenChecker(2,"")
  isOpenChecker(3,"")
  isOpenChecker(4,"")
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}