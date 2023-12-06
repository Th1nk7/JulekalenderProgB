let speed = 6
let moviestart = false
let playerY 
let col
let col2
let quantity = 1000;
let xPosition = [];
let yPosition = [];
let flakeSize = [];
let direction = [];
let minFlakeSize = 5;
let maxFlakeSize = 10;
let movieTime = false;


// Preloader alt
function preload(){
  font = loadFont('comicsans.ttf');
  bg = loadImage('pictures/biograf.png')
  snow1 = loadImage('pictures/snow1.png')
  snow2 = loadImage('pictures/snow2.png')
  snow3 = loadImage('pictures/snow3.png')
  
}

function setup() {
  //creates canvas and places it on the middle of the screan
  let canvas = createCanvas(windowHeight, windowHeight-1);
  canvas.position(windowWidth/2-windowHeight/2,0);
  //sets colors and the font for the two buttons
  col = color(200,180,0);
  col2 = color(160,200,150);
  textFont(font);
  frameRate(30);
  noStroke();

  //sets the player start position
  playerX = width/2-200
  //creates the "chose movie" buttons
  button = createButton('bee movie');
  button.size(300,100)
  button.style('font-size', '50px')
  button.style('background-color',col)
  button.position(windowWidth/2-400,windowHeight/2+50);
  button.mousePressed(playBeeMovie);
  button.hide()
  
  button2 = createButton('shrek');
  button2.size(300,100)  
  button2.style('font-size', '50px')
  button2.style('background-color',col2)
  button2.position(windowWidth/2+100,windowHeight/2+50);
  button2.mousePressed(playShrek);
  button2.hide()
 


  //this part of the code gives the different arrays there values
  for(let i = 0; i < quantity; i++) {
    flakeSize[i] = round(random(minFlakeSize, maxFlakeSize));
    xPosition[i] = random(0, width);
    yPosition[i] = random(0, height);
    direction[i] = round(random(0, 1));
  }
}

function draw() {
  if(!movieTime && parent.document.getElementById(window.name).classList == "page show"){
    movieTime = true
  }
  if(movieTime){
  //creates the background
  image(bg,0,0,windowHeight,windowHeight)
  
  //stops the snow if the movie is started
  if(moviestart == false){
  drawSnow()
  }

  //player elipse
  ellipse(playerX,windowHeight-150,20)
  //movement for the player
  if(keyIsDown(68)){
    playerX += speed
  }
  if(keyIsDown(65)){
    playerX -= speed
  }
  
  //makes the buttons apear if the player is atr the door
  if(playerX >width/2-10 && playerX < width/2+115 && !moviestart){
    button.show()
    button2.show()
  }
  else{
      button.hide()
      button2.hide()
    }
  }
}

//here the functions are created for the movies to start
function playBeeMovie(){
  moviestart = true
  button.hide()
  button2.hide()
  document.getElementById("beeMovie").setAttribute("class","show")
  resizeCanvas(0,0)
}

function playShrek(){
  moviestart = true
  button.hide()
  button2.hide()
  document.getElementById("shrekMovie").setAttribute("class","show")
  resizeCanvas(0,0)
}

function windowResized(){
  window.location.reload()
}

//here the function for the snow is created
function drawSnow() {
	for(let i = 0; i < xPosition.length; i++) {
    
    image(snow1,xPosition[i], yPosition[i], flakeSize[i], flakeSize[i]);

    // Changes snowflake x position according to direction value. If it is the right value it give a new value to the x position mapped according to the x position.
    if(direction[i] == 0) {
      xPosition[i] += map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
    } else {
      xPosition[i] -= map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
    }
    yPosition[i] += flakeSize[i] + direction[i]; 
    
    //this just cheks if the flake is of the screen and if it is it will be snedt back to the top   
    if(xPosition[i] > width- flakeSize[i] || xPosition[i] < -width -flakeSize[i] || yPosition[i] > height + flakeSize[i]) {
      xPosition[i] = random(0, width);
      yPosition[i] = -flakeSize[i];
    } 
  }
}
