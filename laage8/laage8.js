let brikX = []
let brikY = []
let posY
let size
function setup() {
  createCanvas(windowWidth-1, windowHeight-1);
  posY = windowHeight/3
  size = windowWidth/7
  for (let i = windowWidth/6+1;posY < windowHeight; i += windowWidth/6) {
    
    if(i > windowWidth){    
      posY += windowHeight/3
      i = windowWidth/6+1
    }
    if(posY<windowHeight){
    brikX.push(i)
    brikY.push(posY)
    ellipse(i, posY, size);
    }
  }
}


function draw() {
console.log(brikX,brikY)

}
