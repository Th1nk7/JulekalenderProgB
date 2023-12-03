let start = false;
let txtSize = 100;
let julemandenX;
let julemandenY;
// Julemanden er peget til højre når der står 1
let julemandenRotation = 1;
let isDead = false;
let julemandenSize;


function preload() {
  julemanden = loadImage("julemanden.webp")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  julemandenX = windowWidth/2;
  // JulemandenSize skal være 250 for 1440p og 200 for 1080p
  // JulemandenY skal være -280 når det er 1080p og -300 når det er 1440p
  if(windowWidth > 1700){
    julemandenSize = 250;
    julemandenY = windowHeight - 300;
  }
  else{
    julemandenSize = 200;
    julemandenY = windowHeight - 280;
  }
}

function draw() {

  if(keyIsDown(65)){
    julemandenX -= 10
    julemandenRotation = 0;
  }

  if(keyIsDown(68)){
    julemandenX += 10
    julemandenRotation = 1
  }

  background("white");
  if(mouseIsPressed && start == false && parent.document.getElementById(window.name).classList == "page show"){
    start = true
  }

  if(start && isDead == true){
    fill("black")
    textSize(txtSize)
    textAlign(CENTER)
    text("Du døde...",windowWidth/2,windowHeight/2-100)
    text("Klik for at prøve igen",windowWidth/2,windowHeight/2)
  }

  if(start == false){
    fill("black")
    textSize(txtSize)
    textAlign(CENTER)
    text("Klik for at starte!",windowWidth/2,windowHeight/2)
  }
  
  if(start && isDead == false){
    image(julemanden,julemandenX-julemandenSize/2,julemandenY,julemandenSize,julemandenSize)
  }
  console.log(windowWidth,windowHeight)
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  isDead = true;
  if(start == false || isDead == true){
    julemandenX = windowWidth/2;
    julemandenY = windowHeight-200
    if(windowWidth > 1700){
      julemandenSize = 250;
    }
    else{
      julemandenSize = 200;
    }
  }
}

/* 
Ideer:

GIF der viser hvordan man spiller spillet under "klik for starte"
Der falder sten ned som man ikke må gribe.
Der falder slik ned man skal gribe.
Score.
Måske skal objekter rotere
Julemand bevæge sig

*/