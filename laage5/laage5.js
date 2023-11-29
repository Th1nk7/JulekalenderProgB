let start = false;
let txtSize = 100;

function preload() {

}

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background("white");
  if(mouseIsPressed && start == false && parent.document.getElementById(window.name).classList == "page show"){
    start = true
  }

  if(start == false){
    fill("black")
    textSize(txtSize)
    textAlign(CENTER)
    text("Klik for at starte!",windowWidth/2,windowHeight/2)
  }
  
  if(start){

  }
}
