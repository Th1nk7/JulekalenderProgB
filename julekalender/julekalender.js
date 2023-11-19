let size = 100;
let isOpenArr = new Array();
let isOpenPermArr = new Array();
let degreesArr = new Array();
let rotationStartedArr = new Array();
let img1, img2, img3, img4;
let julekalenderStop = false;
let laageXArr = new Array();
let laageYArr = new Array();
let laageSpawnCount = 1;
let safetyCount = 0;

// Preloader det der skal preloades
function preload(){
  font = loadFont('comicsans.ttf');
  img1 = loadImage("jul1.png"); img2 = loadImage("jul2.png"); img3 = loadImage("jul3.png"); img4 = loadImage("jul4.png")
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
  translate(0,0,2)
  text(number,textPos,65)
  fill("white")

  // pop() gør den rigtige translate og rotateY er sat igen. Ellers vil de næste låger blive ødelagt
  pop()

}


function isOpenChecker(number,link){

  if(isOpenArr[number-1]==true){

    // JEG HAR BRUGT SÅ MANGE TIMER PÅ DETTE, GIDER IKKE UNFUCK DET HER SPAGETTHI
    // Bare kopier den her når der kommer nye låger
    // Det sætter mainPage.html's elementers classes til det rigtige.
    // Alt dette er skrevet fra bunden da der ikke var dokumentation på hvordan man gør det (det er sjovt nok cross-site scripting)
    if(number==1){
      parent.document.getElementById(window.name).setAttribute("class","page")
      parent.document.getElementById(window.name).parentElement.children[1].setAttribute("class","page show")
      julekalenderStop = true;
    }
      
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
  
  while(laageSpawnCount<25&&safetyCount<10000){
    console.log("run", laageSpawnCount)
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
          console.log("BOTH FAILED: XArr ",laageXArr[count]," YArr ",laageYArr[count])
          spawnable = false;
          console.log("X ",laageXArr)
          console.log("Y ",laageYArr)
          safetyCount++;
        }

        count++
  
        
    }
    console.log("X RANDOM ",xRandom," Y RANDOM ",yRandom)
    console.log(spawnable)
    if(spawnable == true){
      laageXArr.push(xRandom)
      laageYArr.push(yRandom)
      console.log("New Spawned")
      laageSpawnCount++;
    }

    
    
  }
}

function draw() {
  if(julekalenderStop == false){
  background(220);

  // Her laver man nye låger
  laageSetup(laageXArr[0],laageYArr[0],img1,1,32,"white")
  laageSetup(laageXArr[1],laageYArr[1],img2,2,17,"white")
  laageSetup(laageXArr[2],laageYArr[2],img3,3,17,"white")
  laageSetup(laageXArr[3],laageYArr[3],img4,4,15,"white")
  laageSetup(laageXArr[4],laageYArr[4],img4,5,25,"white")
  laageSetup(laageXArr[5],laageYArr[5],img4,6,25,"white")
  laageSetup(laageXArr[6],laageYArr[6],img4,7,25,"white")
  laageSetup(laageXArr[7],laageYArr[7],img4,8,25,"white")
  laageSetup(laageXArr[8],laageYArr[8],img4,9,25,"white")
  laageSetup(laageXArr[9],laageYArr[9],img4,10,10,"white")
  laageSetup(laageXArr[10],laageYArr[10],img4,11,10,"white")
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

  // Når der kommer flere låger kan man bare lave en ny af dem her med det rigtige tal.
  isOpenChecker(1)
  isOpenChecker(2)
  isOpenChecker(3)
  isOpenChecker(4)
  }

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}