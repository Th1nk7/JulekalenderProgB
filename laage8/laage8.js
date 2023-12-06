// En lille gåde til dig Simon... hvad gør denne kode?

let brikX = []
let brikY = []
let posY
let size
let cDist = []
let pics = []
let which = 0
let whicharr = []
let whatpic = []
let pic1
let pic2
let pic3
let pic4
let pic5
let whatwhichpicturewhere = []
let circleVariabel = []
let numberPicked = 0;
let timer = 0
let lastOpened
let scorescore = 0
let lastI = 0;


function preload(){
  pic1 = loadImage('pictures/221206-F-FD430-0009.avif')
  pic2 = loadImage('pictures/cropped-Untitled-design-37.png')
  pic3 = loadImage('pictures/img761mid.png')
  pic4 = loadImage('pictures/render_christmas___genshin_impact_by_zttar_deakz4f-fullview.png')
  pic5 = loadImage('pictures/wreath_1___41309.webp')
}
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
  for(let i = 0;i < 5; i ++){
    pics.push(2)
    whatpic.push(pic1,pic2,pic3,pic4,pic5)
  }
  for(let i = 0;i < 10; i ++){
    whicharr.push(1)
  }
  
}


function draw() {
console.log(scorescore,lastOpened)
  if(whicharr[0] == 1 || whicharr[1] == 1 || whicharr[2] == 1 || whicharr[3] == 1 || whicharr[4] == 1 || whicharr[5] == 1 || whicharr[6] == 1 || whicharr[7] == 1 || whicharr[8] == 1 || whicharr[9]){
    which = round(random(0,9))
    what = round(random(0,4))

    if(whicharr[which] == 1 && pics[what] >= 1){
    
    //image(whatpic[what],brikX[which]-50,brikY[which]-50,100,100)
    whatwhichpicturewhere[which]=what
    console.log(whatwhichpicturewhere)
    whicharr[which] = 0
    pics[what] --

    }
    
  }
if(numberPicked>=2){
    timer++
    if(timer==121){
    background("white")
    for(i=0;i<10;i++){
      ellipse(brikX[i],brikY[i],size)
    }
    numberPicked = 0;
    timer = 0
     }
}

if(scorescore == 5){
  textAlign(CENTER)
  textSize(120)
  text('wow you are so good man',windowWidth/2,windowHeight/2)
}
}
function mouseClicked(){
  if(timer==0){
    for(i = 0; i <= 9; i ++){
    cDist[i]= dist(mouseX,mouseY,brikX[i],brikY[i])
  }
  for(i = 0;i <10;i++) // LET IT BE!!!! LET IT BE!!!!
  if(cDist[i]<size/2){
    image(whatpic[whatwhichpicturewhere[i]],brikX[i]-size/3,brikY[i]-size/3,size/1.5,size/1.5)
    numberPicked++
    if(numberPicked==1){
      lastOpened = whatwhichpicturewhere[i]
      lastI = i
    }
    if(numberPicked==2 && lastOpened == whatwhichpicturewhere[i]){
      scorescore++
      brikX[i] = 999999;
      brikY[i] = 999999;
      brikX[lastI] = 999999;
      brikY[lastI] = 999999;
    }
   }
}
}