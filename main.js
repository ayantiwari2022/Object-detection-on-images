img = "";
Status = "";
function preload(){
    img=loadImage("table.jpeg");
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}

function modelLoaded(){
    console.log("ModelLoaded");
    Status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if (error){
        console.log(error);
    }
    console.log(results);
}

function draw(){
    image(img,0,0,640,420);
    fill("#ff1100");
    text("table",60,75);
    noFill();
    stroke("#ff1100");
    rect(50,60,570,350);
}