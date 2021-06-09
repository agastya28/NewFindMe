
video = "";
objects = [];
specified = "";

function preload() {}

function setup() {

    objectDetector = ml5.objectDetector('cocossd', modelLoaded)

    canvas = createCanvas(480, 380);
    canvas.center();

   video = createCapture(VIDEO)
    video.hide()
}

function draw() {
    image(video, 0, 0, 480, 380);
    if (status != "") {
        objectDetector.detect(video, gotResults);

        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status: Objects Detected";
            document.getElementById("objectsdetect").innerHTML = "Number of Objects: " + objects.length;

            percentage = floor(objects[i].confidence*100)
            fill("#3f065e")
            text(objects[i].label + " " + percentage + "%", objects[i].x, objects[i].y)
            noFill()
            stroke("#3f065e")
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        
            if (objects[i].label == specified) {
                document.getElementById("status").innerHTML = "Found " + specified;  }
        }

        
      
    }
}


function modelLoaded() {
    console.log("Model Loaded");
    status = true;
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results)

        objects = results;


    }

}

function detec() {
   
    document.getElementById("status").innerHTML == "Status: Detecting Objects"
    specified = document.getElementById("pumpkin").value;
    console.log(specified);
}