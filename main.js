music1 = "";
music2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload(){
    music1 = loadSound("music.mp3");
    music2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].leftWrist.pose.x;
        leftWristY = results[0].leftWrist.pose.y;
        rightWristX = results[0].rightWrist.pose.x;
        rightWristY = results[0].rightWrist.pose.y;
    }
}

function draw(){
    image(video,0,0,600,500);
}