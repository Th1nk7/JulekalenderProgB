//preloads the font we use
function preload(){
  font = loadFont('comicsans.ttf');
  frontski = loadImage('pictures/frontski.png')
  leftski = loadImage('pictures/skiing_lestside.png')
  rightski = loadImage('pictures/skiing_rightside.png')
  sten = loadImage('pictures/snowey_stone.png') 
  bg = loadImage('pictures/ski_slope-0001.png')
}
let playerX
let posX = 0
let posY = 0
let time = 0
let speed = 10
let size = 0
let gameOver = false
let level = 1
let start = false
let s
let stenHit

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  
  //here is the button for restarting createt
  button = createButton('Restart');
  button.size(200,100)
  button.style('font-size', '50px')
  button.position(windowWidth/2-100,windowHeight/2+50);
  button.mousePressed(reset);
  button.hide()
  //here we redefine the playerX to the p5 windowWidth/2
  playerX = windowWidth/2

}

function draw() {
  background(220);
  //makes the side pictires
  fill(50)
  rect(windowWidth/2+325,0,windowWidth,windowHeight)
  rect(0,0,windowWidth/2-325,windowHeight)
  //makes the "press button to start" screen
  if(!start){
  fill('white')
  rect(0,0,windowWidth,windowHeight)
  textSize(150)
  fill('black')
  text('Press mouse to start',windowWidth/2,windowHeight/2)
  textAlign(CENTER)
}
  fill('red')
  //makes so you have to press the mouse to begin
  if(mouseIsPressed && !start && parent.document.getElementById(window.name).classList == "page show"){
    start = true
  }
  if(start){
  //here we use an if statment to chek if the player is hitting an obstacle
  if(playerX + 25>= posX && playerX - 25 <= posX + size && posY >= windowHeight-200-50 && posY <= windowHeight-170){
    gameOver = true
  }
  else if(gameOver == false){
    image(bg,windowWidth/2-600,0,1200,windowHeight)
    forhendring()
    button.hide()
    textSize(100)
    fill('black')
    text('Level: ' + Math.floor(level/15),windowWidth/2,windowHeight/10)
  }
if(gameOver == true){
  fill('black')
  image(bg,windowWidth/2-600,0,1200,windowHeight)
  text('Level: ' + Math.floor(level/15),windowWidth/2,windowHeight/10)
  fill('red')
  textAlign(CENTER)
  fill('red')
  text('game over',windowWidth/2,windowHeight/2)
  button.show()
}

  
  
  
  //here we create the movement system wtich is done with an if where we chek if ether A or D is down and if they are the player will move to that corosponding side
  if(!keyIsDown(68) && !keyIsDown(65)){
    image(frontski,playerX-80,windowHeight-280,170,170)
  }
  if(keyIsDown(68)){
    playerX += 10
    image(rightski,playerX-80,windowHeight-280,170,170)
  }
  else if(keyIsDown(65)){
    playerX -= 10
    image(leftski,playerX-80,windowHeight-280,170,170)
  }
  //here the player is "constrained" to the play area
  playerX = constrain(playerX,windowWidth/2-300,windowWidth/2+300)

  

  }

}

//here the finction for the obstacles is createt
function forhendring(){
  //here we chek if the Y posision of the obstacle is 0 and if it is, it shall make it
  if(posY == 0){
  posX = random(windowWidth/2-300,windowWidth/2+300);
  Math.floor(posX);
  size = random(50,100); 
  }
  //here we create the scaling levels
  time ++
  if(time >= 25){
    speed += 0.1;
    time = 0
    level ++
  }
  posY += speed;
  //here the obstacles are createt
  if(size >= 75){
    stenHit = size+30
  }
  else{
    stenHit = size+70
  }
  image(sten,posX-15,posY-70,stenHit,stenHit)

  //here we chek if the obstacle has gone out of the screen and if it has then we change the Y posision back to 0 so an other can be createt
  if(posY >= windowHeight){
    posY = 0
  }

}
//here the function for restartign is createt
function reset(){
playerX = windowWidth/2
posX = 0
posY = 0
time = 0
speed = 10
size = 0
gameOver = false
level = 1
}



function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}