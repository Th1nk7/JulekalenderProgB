let video;
let model
let face
let firstFace = true;


function setup(){
  createCanvas(640,480)
  ellipse(width/2,height/2,100)
  video = createCapture(VIDEO)
  video.hide()
  loadFaceModel()
}

async function loadFaceModel() {
  model = await blazeface.load()
}

function draw(){
  if(video.loadmetadata && model !== undefined){
    getFace()
  }

  if(face !== undefined){
    image(video,0,0,width,height)

    if(firstFace){
      console.log(face)
      firstFace = false
    }
    let rightEye = face.landmarks[0]
    let leftEye = face.landmarks[1]
    let nose = face.landmarks[2]
    let rightEar = face.landmarks[4]
    let leftEar = face.landmarks[5]

    rightEye = scalePoint(rightEye)
    leftEye = scalePoint(leftEye)
    nose = scalePoint(nose)
  }

  // Tegn her!
  fill(255);
  noStroke();
  circle(leftEye.x,  leftEye.y,  40);     // eyeball
  circle(rightEye.x, rightEye.y, 40);
  fill(0);
  circle(leftEye.x,  leftEye.y,  15);     // pupil
  circle(rightEye.x, rightEye.y, 15);
  fill(220);
  circle(leftEye.x+2,  leftEye.y-2,  5);  // reflection
  circle(rightEye.x+2, rightEye.y-2, 5);
}

function scalePoint(pt){
  let x = map(pt[0],0,video.width,0,width)
  let y = map(pt[1],0,video.height,0,height)
  return createVector(x,y)
}

async function getFace() {
  const predictions = await model.estimateFaces(
    document.querySelector('video'),
    false
  )
  if(predictions.length === 0){
    face = undefined
  }

  else{
    face = predictions[0]
  }
}