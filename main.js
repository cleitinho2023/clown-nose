          var nose_x=150
          var nose_y=150
  function preload(){
    clownnose= loadImage("http://i.postimg.cc/7ZBcjDqp/clownnose.png")

}
function setup(){
canvas=createCanvas(300 ,300);
canvas.center();
 video= createCapture(VIDEO);
 video.size(300,300)
 video.hide()
 poseNet=ml5.poseNet(video,modelLoaded);
 poseNet.on('pose',gotPoses)
}
function modelLoaded(){
    console.log("o posenet foi inicializado")
}
function draw(){
    image(video,0,0,300,300)
    fill(255,0,0) 
    stroke(255,0,0)
    circle(nose_x,nose_y,20)
    image(clownnose,nose_x,nose_y,10,10)
}
function gotPoses (results){
    if(results.length>0){
        console.log(results)
        console.log("a posição x do nariz é"+results[0].pose.nose.x)
        console.log(" a confiaça do olho esquerdo é"+results[0].pose.leftEye.confidence)
        console.log("a posição do tornozelo direito é "+results[0].pose.rightAnkle.y)
        nose_x=results[0].pose.nose.x
        nose_y=results[0].pose.nose.y
    }

}