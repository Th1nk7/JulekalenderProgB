let r;
let g;
let b;
let a;
let xRandom = 0;
let yRandom = 0;
let speed;
let slider;
let pointY = 0;
let pointX = 0;

function setup() {
  let myCanvas2 = createCanvas(windowWidth, windowHeight);
  myCanvas2.class("page");
  myCanvas2.id("canvas2")
  
  slider = createSlider(0, 255, 100);
  slider.position(50, 30);
  slider.style('width', '160px');
  pointX = windowWidth/2;
  pointY = windowHeight/2;
}

function draw() {
  
  speed = map(slider.value(),0,255,1,20);
  xRandom = Math.floor(random(0,3));
  yRandom = Math.floor(random(0,3));
  
  if(xRandom == 0){
    pointX = pointX - speed;
  }
  if(yRandom == 0){
    pointY = pointY - speed;
  }
  if(xRandom == 2){
    pointX = pointX + speed;
  }
  if(yRandom == 2){
    pointY = pointY + speed;
  }
  
  if(xRandom == 2 && yRandom == 2){
    r = random(0,255);
  }
  if(xRandom == 0 && yRandom == 2){
    g = random(0,255);
  }
  if(xRandom == 2 && yRandom == 0){
    b = random(0,255);
  }
  if(xRandom == 0 && yRandom == 0){
    a = random(0,255);
  }
  if(xRandom == 1 && yRandom == 1){
    r = 255;
    b = 255;
    g = 255;
    a = 255;
  }
  if(xRandom == 1 && yRandom == 2){
    g = 255;
  }
  if(xRandom == 2 && yRandom == 1){
    b = 255;
  }
  if(xRandom == 1 && yRandom == 0){
    g = 255;
  }
  if(xRandom == 0 && yRandom == 1){
    a = 255;
  }
  fill(r,g,b,a);
  let useValueY = constrain(pointY,0,windowHeight);
  let useValueX = constrain(pointX,0,windowWidth);
  pointX = useValueX;
  pointY = useValueY;
  ellipse(useValueX,useValueY,frameCount%40);
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
  }