let start = false;
let txtSize = 100;
let julemandenX;
let julemandenY; 
let isDead = false;
let julemandenSize;
let julemandenVar 
let posX = 0
let posY = 0
let speed = 7
let size = 100
let what = 0
let time = 0
let score = 0

function preload() {
  julemanden = loadImage("julemanden.webp")
  candy = loadImage("candy.png")
  julemandenLeft = loadImage("julemandenLeft.png")
  coal = loadImage("coal.png")
  

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
  julemandenVar = julemanden
}

function draw() {

  if(keyIsDown(65) && julemandenX >0 + julemandenSize/2){
    julemandenX -= 20
    julemandenRotation = 0;
    julemandenVar = julemandenLeft
  }

  if(keyIsDown(68) && julemandenX <windowWidth - julemandenSize/2){
    julemandenX += 20
    julemandenRotation = 1
    julemandenVar = julemanden
  }

  background("white");
  if(mouseIsPressed && start == false && parent.document.getElementById(window.name).classList == "page show"){
    start = true
  }
    if(posY >= windowHeight-20 && what <= 8){
    isDead = true
  }
  if(julemandenX + julemandenSize/2>= posX && julemandenX - julemandenSize/2<= posX + size/2 && posY >= julemandenY +julemandenSize/6  && posY <= julemandenY + julemandenSize/2.5 && what >= 8){
    isDead = true
  }
  else if(julemandenX + julemandenSize/2>= posX && julemandenX - julemandenSize/2<= posX + size/2 && posY >= julemandenY +julemandenSize/6  && posY <= julemandenY + julemandenSize/2.5 && what <= 8){
    score ++
    posY = 0
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
    image(julemandenVar,julemandenX-julemandenSize/2,julemandenY,julemandenSize,julemandenSize)
    forhendring()
    text("score: " + score, windowWidth/2, windowHeight/7)
  }

  if(isDead && mouseIsPressed){
    restart()
  }
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

function forhendring(){
  //here we chek if the Y posision of the obstacle is 0 and if it is, it shall make it
  if(posY == 0){
  posX = random(windowWidth/2-julemandenSize*2,windowWidth/2+julemandenSize*2);
  Math.floor(posX);
  what = random(0,10)
  }

  time ++
  if(time >= 25){
    speed += 0.1;
    time = 0
  }
  posY += speed;
  

  //here the obstacles are createt
  if(what <= 8){
  image(candy,posX-15,posY-70,size,size)
  
  }
  else{
    image(coal,posX-15,posY-70,size,size)
  }


  //here we chek if the obstacle has gone out of the screen and if it has then we change the Y posision back to 0 so an other can be createt
  if(posY >= windowHeight){
    posY = 0
  }

}
function restart(){
 start = false;
 isDead = false;
 posX = 0
 posY = 0
 speed = 7
 size = 100
 what = 0
 time = 0
 score = 0
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