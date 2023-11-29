let size = 100;
let isOpenArr = new Array();
let isOpenPermArr = new Array();
let degreesArr = new Array();
let rotationStartedArr = new Array();
let julekalenderStop = false;
let laageXArr = new Array();
let laageYArr = new Array();
let laageSpawnCount = 1;
let safetyCount = 0;

// Preloader det der skal preloades
function preload(){
  font = loadFont('comicsans.ttf');
  img1 = loadImage("png/jul1.png"); img2 = loadImage("png/jul2.png"); img3 = loadImage("png/jul3.png"); img4 = loadImage("png/jul4.jpeg")
  img5 = loadImage("png/jul5.png"); img6 = loadImage("png/jul6.jpg"); img7 = loadImage("png/jul7.jpg"); img8 = loadImage("png/jul8.jpg")
  img9 = loadImage("png/jul9.jpg"); img10 = loadImage("png/jul10.png"); //img11 = loadImage("png/jul11.png"); img12 = loadImage("png/jul12.png")
  //img13 = loadImage("png/jul13.png"); img14 = loadImage("png/jul14.png"); img15 = loadImage("png/jul15.png"); img16 = loadImage("png/jul16.png")
  //img17 = loadImage("png/jul17.png"); img18 = loadImage("png/jul18.png"); img19 = loadImage("png/jul19.png"); img20 = loadImage("png/jul20.png")
  //img21 = loadImage("png/jul21.png"); img22 = loadImage("png/jul22.png"); img23 = loadImage("png/jul23.png"); img24 = loadImage("png/jul24.png")
}


// Alt bag lågen skal laves efter
// billedeX, billedeY, billede, tal, talXPosition, textColor
function laageSetup(x, y, laageImage, number, textPos, textColor){

  // push() kan man bruge til at gemme translate og rotateY state
  push()
  // Der er blevet brugt array for ikke at lave 24 forskellige variabler
  let rotationStarted = rotationStartedArr[number-1];

  // Checker om man har klikket på lågen
  if (mouseX > x-size/2+windowWidth/2 && mouseX < x+size/2+windowWidth/2 && mouseY > y-size/2+windowHeight/2 && mouseY < y+size/2+windowHeight/2 && mouseIsPressed == true){
    rotationStartedArr[number-1] = true;
  }

  // Laver sort hul bag lågen
  fill("black")
  rect(x-size/2,y-size/2,size);

  // Dette rykker billedet til den rette plads
  translate(x-size/2,y-size/2,0)

  /* 
  Alt dette (til og med "else if") fortæller om lågen skal åbne mere. 
  Hvis den er færdig med at åbne sætter den isOpenArr[number-1] til true så den længere nede ved den skal aktivere
  */
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

  // Dette laver billede og tekst på rigtige koordinater... fuck jeg hader translate
  image(laageImage,0,0,size,size)
  translate(0,0,-1)
  fill("white")
  rect(0,0,size-1)
  fill(textColor)
  translate(0,0,3)
  text(number,textPos,75)
  fill("white")

  // pop() gør den rigtige translate og rotateY er sat igen. Ellers vil de næste låger blive ødelagt
  pop()

}


function isOpenChecker(number,link){

  if(isOpenArr[number-1]==true){

    // Bare kopier den her når der kommer nye låger
    // Det sætter mainPage.html's elementers classes til det rigtige.
    // Alt dette er skrevet fra bunden da der ikke var dokumentation på hvordan man gør det (det er sjovt nok cross-site scripting)
    parent.document.getElementById(window.name).setAttribute("class","page")
    parent.document.getElementById(window.name).parentElement.children[number].setAttribute("class","page show")
    julekalenderStop = true;
  }

}



function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  textSize(70);
  angleMode(DEGREES);
  textFont(font)
  noStroke()


  
  // Det er her man kan få sin array fyldt 24 gange (der er sjovt nok 24 dage til juleaften)
  for(let i = 1; i < 25; i++){
    isOpenArr.push(false)
    isOpenPermArr.push(false)
    degreesArr.push(0)
    rotationStartedArr.push(false)
  }
  
  // Dette er alt sammen til at placere det når siden bliver kørt. safetyCount er til for at man ikke mister sin computer når man har en lille fane
  // Jeg nægter at skrive comments til det under, det kan godt forstås, det tager bare lidt tid
  while(laageSpawnCount<25&&safetyCount<10000){
    let xRandom = Math.floor(random(size-windowWidth/2,windowWidth/2-size))
    let yRandom = Math.floor(random(size-windowHeight/2,windowHeight/2-size))
    let placeableXArr = new Array();
    let placeableYArr = new Array();
    let count = 0;
    let spawnable = true;
    while(count<=laageXArr.length&&laageXArr.length>0){
        if(laageXArr[count]-xRandom < size+10 && laageXArr[count]-xRandom > -size-10){
          placeableXArr.push(false)
        }
        else{
          placeableXArr.push(true)
        }
        if(laageYArr[count]-yRandom < size+10 && laageYArr[count]-yRandom > -size-10){
          placeableYArr.push(false)
        }
        else{
          placeableYArr.push(true)
        }
        if(placeableXArr[count] == false && placeableYArr[count] == false){
          spawnable = false;
          safetyCount++;
        }

        count++
    }

    if(spawnable == true){
      laageXArr.push(xRandom)
      laageYArr.push(yRandom)
      laageSpawnCount++;
    }

    
    
  }
}

function draw() {
  if(julekalenderStop == false){
  background(220);

  // Her laver man nye låger
  laageSetup(laageXArr[0],laageYArr[0],img1,1,32,"white")
  laageSetup(laageXArr[1],laageYArr[1],img2,2,27,"white")
  laageSetup(laageXArr[2],laageYArr[2],img3,3,27,"white")
  laageSetup(laageXArr[3],laageYArr[3],img4,4,25,"white")
  laageSetup(laageXArr[4],laageYArr[4],img5,5,25,"white")
  laageSetup(laageXArr[5],laageYArr[5],img6,6,25,"white")
  laageSetup(laageXArr[6],laageYArr[6],img7,7,25,"white")
  laageSetup(laageXArr[7],laageYArr[7],img8,8,25,"white")
  laageSetup(laageXArr[8],laageYArr[8],img9,9,25,"white")
  laageSetup(laageXArr[9],laageYArr[9],img10,10,10,"white")
  /*laageSetup(laageXArr[10],laageYArr[10],img4,11,10,"white")
  laageSetup(laageXArr[11],laageYArr[11],img4,12,10,"white")
  laageSetup(laageXArr[12],laageYArr[12],img4,13,10,"white")
  laageSetup(laageXArr[13],laageYArr[13],img4,14,10,"white")
  laageSetup(laageXArr[14],laageYArr[14],img4,15,10,"white")
  laageSetup(laageXArr[15],laageYArr[15],img4,16,10,"white")
  laageSetup(laageXArr[16],laageYArr[16],img4,17,10,"white")
  laageSetup(laageXArr[17],laageYArr[17],img4,18,10,"white")
  laageSetup(laageXArr[18],laageYArr[18],img4,19,10,"white")
  laageSetup(laageXArr[19],laageYArr[19],img4,20,10,"white")
  laageSetup(laageXArr[20],laageYArr[20],img4,21,10,"white")
  laageSetup(laageXArr[21],laageYArr[21],img4,22,10,"white")
  laageSetup(laageXArr[22],laageYArr[22],img4,23,10,"white")
  laageSetup(laageXArr[23],laageYArr[23],img4,24,10,"white")
  */

  // Når der kommer flere låger kan man bare lave en ny af dem her med det rigtige tal.
  isOpenChecker(1)
  isOpenChecker(2)
  isOpenChecker(3)
  isOpenChecker(4)
  isOpenChecker(5)
  isOpenChecker(6)
  isOpenChecker(7)
  isOpenChecker(8)
  isOpenChecker(9)
  isOpenChecker(10)
  }

}

function windowResized(){

  // Dette er alt sammen til at placere det når siden bliver kørt. safetyCount er til for at man ikke mister sin computer når man har en lille fane
  // Jeg nægter at skrive comments til det under, det kan godt forstås, det tager bare lidt tid
  laageSpawnCount = 0;
  safetyCount = 0;
  laageXArr = new Array();
  laageYArr = new Array();
  while(laageSpawnCount<25&&safetyCount<10000){
    let xRandom = Math.floor(random(size-windowWidth/2,windowWidth/2-size))
    let yRandom = Math.floor(random(size-windowHeight/2,windowHeight/2-size))
    let placeableXArr = new Array();
    let placeableYArr = new Array();
    let count = 0;
    let spawnable = true;
    while(count<=laageXArr.length&&laageXArr.length>0){
        if(laageXArr[count]-xRandom < size+10 && laageXArr[count]-xRandom > -size-10){
          placeableXArr.push(false)
        }
        else{
          placeableXArr.push(true)
        }
        if(laageYArr[count]-yRandom < size+10 && laageYArr[count]-yRandom > -size-10){
          placeableYArr.push(false)
        }
        else{
          placeableYArr.push(true)
        }
        if(placeableXArr[count] == false && placeableYArr[count] == false){
          spawnable = false;
          safetyCount++;
        }
        count++
    }

    if(spawnable == true){
      laageXArr.push(xRandom)
      laageYArr.push(yRandom)
      laageSpawnCount++;
    }
  }
  
  resizeCanvas(windowWidth, windowHeight);

}