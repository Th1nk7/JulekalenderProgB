let firstPage = function( p1 ) {
let size = 100;
let isOpenArr = new Array();
let isOpenPermArr = new Array();
let degreesArr = new Array();
let rotationStartedArr = new Array();
let img1, img2, img3, img4;
let currentPage = '#firstcanvas'

function preload(){
  font = loadFont('comicsans.ttf');
  img1 = loadImage("jul1.png"); img2 = loadImage("jul2.png"); img3 = loadImage("jul3.png"); img4 = loadImage("jul4.png")
}

function switchPage(whichPage){
  select(currentPage).removeClass('show')
  select(whichPage).addClass('show')
  currentPage = whichPage
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
    switchPage(link)
  }
}
let grader = 0;
let rotationStarted = false;
function setup() {
  let myCanvas1 = createCanvas(windowWidth, windowHeight, WEBGL);
  myCanvas1.parent("firstcanvas");
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
<<<<<<< HEAD
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
=======
  background(220);
  laageSetup(-700,-80,img1,1,32,"white")
  laageSetup(400,250,img2,2,27,"white")
  laageSetup(258,-312,img3,3,27,"white")
  laageSetup(612,-111,img4,4,25,"white")
  isOpenChecker(1,"#secondcanvas")
  //isOpenChecker(2,"#page3")
  //isOpenChecker(3,"#page4")
  //isOpenChecker(4,"#page5")
>>>>>>> dd9f9fd9b335261da259cd1cfa5fad5adb88f4ae
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
<<<<<<< HEAD
  
}
=======
}
}
>>>>>>> dd9f9fd9b335261da259cd1cfa5fad5adb88f4ae
