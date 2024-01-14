song="";

song="";
leftWristX = 0;
leftWristY = 0;
righttWristX = 0;
rightWristY = 0;
function preload()
    {
song = loadSound("music.mp3")
    }

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = centerCapture(VIDEO);
    video.hide();

    poseNet= ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function draw(){
    image(video , 0 ,0 , 600 , 500);
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function gotPoses(results)
{
    if(results.lenght > 0)
    {
        console.log(results);

        scoreLeftWrist = results[0].pose.keypoints[9].score;
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
    console.log("leftWristX = " + leftWristX + " leftWristY = "+ leftWristY);
   
    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
console.log("rightWristX = " + rightWristX + " rightWristY = "+ rightWristY);

}
}

function draw(){
    image(video, 0 , 0 , 600 , 500);
    fill("#FF0000")
    stroke("#FF0000")

   if(scoreLeftWrist > 0.2)
    {
        circle(leftWristX,leftWrist,20);
InNumberleftWristY=Number(leftWristY);
remove_decimals= floor(InNumberleftWristY);
volume = remove_decimals/500;
volume.getElementById("volume").innerHTML ="Volume = +"+ volume;
song.setVolume(volume);
}
}


