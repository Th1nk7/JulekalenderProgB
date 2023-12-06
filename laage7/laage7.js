let faceAPI
let detections = [];
let video;

function setup() {
  createCanvas(windowWidth,windowHeight);
  video = createCapture(VIDEO)

  video.size(height,height)
  const faceOptions = { withLandmarks: true, withExpressions: false, withDescriptors: false }
  faceAPI = ml5.faceApi(video,faceOptions,faceReady)
}

function faceReady(){
  faceAPI.detect(gotFaces)
}

function gotFaces(error, result){
  if(error){
    console.log(error)
    return
  }
  detections = result;
  faceAPI.detect(gotFaces)
}

function draw() {
  background(0);

  if(detections.length > 0) {
    let points = detections[0].landmarks.positions;
    for(let i=0; i < points.length; i++){
      stroke(161,95,251)
      strokeWeight(4)
      point(points[i]._x,points[i]._y)
    }
  }
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
}