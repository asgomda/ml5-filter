let faceapi;
let video;
let detections;
let img;
let img1;
let img2;
let img3;

// by default all options are set to true
const detection_options = {
    withLandmarks: true,
    withDescriptors: false,
}


function setup() {
    createCanvas(360, 270);
    img = loadImage('eye.png');
    img1 = loadImage('nose.png');
    img2 = loadImage('mouth.png')

    // load up your video
    video = createCapture(VIDEO);
    video.size(width, height);
    // video.hide(); // Hide the video element, and just show the canvas
    faceapi = ml5.faceApi(video, detection_options, modelReady)
    textAlign(RIGHT);
    video.hide()
}

function modelReady() {
    console.log('ready!')
    console.log(faceapi)
    faceapi.detect(gotResults)

}

function gotResults(err, result) {
    if (err) {
        console.log(err)
        return
    }
    // console.log(result)
    detections = result;

    // background(220);
    background(255);
    image(video, 0,0, width, height)

    if (detections) {
        if (detections.length > 0) {
            // console.log(detections)
            
            drawLandmarks(detections)
        }

    }
    faceapi.detect(gotResults)
}



function drawLandmarks(detections){
    noFill();
    stroke(161, 95, 251)
    strokeWeight(2)

    for(let i = 0; i < detections.length; i++){
        const mouth = detections[i].parts.mouth; 
        const nose = detections[i].parts.nose;
        const leftEye = detections[i].parts.leftEye;
        const rightEye = detections[i].parts.rightEye;
        const rightEyeBrow = detections[i].parts.rightEyeBrow;
        const leftEyeBrow = detections[i].parts.leftEyeBrow;

        //drawPart(mouth, true);


        //drawPart(nose, false);
        //drawPart(leftEye, true);
        
        //drawPart(rightEye, true);

       
        
          let x = rightEye[0]._x
          let y = rightEye[0]._y
          image(img, x+5, y-5, 20, 30)

          
          x = leftEye[0]._x
          y = leftEye[0]._y
          image(img, x-5, y-5, 20, 30)

          x = nose[0]._x
          y = nose[0]._y
          image(img1, x-20, y+10, 45, 30)

          x = mouth[0]._x
          y = mouth[0]._y
          image(img2, x+7, y-10, 55, 30)


          
         //vertex(x, y)
      
        
        

    }

}

