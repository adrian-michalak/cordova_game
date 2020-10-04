
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

moveUpButton = document.getElementById("rightButton");
moveUpButton.addEventListener('click',moveUp);

moveDownButton = document.getElementById("rotateButton");
moveDownButton.addEventListener('click',moveDown);

startButton = document.getElementById("startAnimation");
startButton.addEventListener('click',startAnimation);

stopButton = document.getElementById("stopAnimation");
stopButton.addEventListener('click',stopAnimation);

//Obrazki
img = new Image();
img.src = "../img/bird.png";

imgObstacles = new Image();
imgObstacles.src = "../img/bird2.jpg";

eagle = {
    x:100,
    y:220,
    w:100,
    h:100,
}
obstacle = {
    x:100,
    y:220,
    w:100,
    h:100,
}

angle = 0;
var ramkaStart = 0;
var obsatclesStart = 0; 
function drawScene(){
    offScreen = document.createElement("canvas");
    offScreen.width = canvas.width;
    offScreen.height = canvas.height;
    offctx = offScreen.getContext("2d");

    rot_x = eagle.x + eagle.w/2;
    rot_y = eagle.y + eagle.h/2;

    offctx.save();
    console.log(rot_x+ " "+rot_y) 
    offctx.translate(rot_x, rot_y);
    offctx.scale(-1,1); //odbicie w osi x
    offctx.translate(-rot_x, -rot_y);
    offctx.drawImage(img, 
        ramkaStart,0,200,274,
        eagle.x, eagle.y+100, eagle.w,eagle.h);
    offctx.drawImage(imgObstacles, 
            ramkaStart,0,200,274,
            obstacle.x, obstacle.y-100, obstacle.w,obstacle.h);

    offctx.restore();
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.drawImage(offScreen,0,0,canvas.width,canvas.height);
    window.requestAnimationFrame(drawScene);
}
function drawSceneForObstacle(){
    offScreen = document.createElement("canvas");
    offScreen.width = canvas.width;
    offScreen.height = canvas.height;
    offctx = offScreen.getContext("2d");

    offctx.restore();
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.drawImage(offScreen,0,0,canvas.width,canvas.height);
    window.requestAnimationFrame(drawSceneForObstacle);

}
function startAnimation(){
    interval = window.setInterval(
        function(){
            eagle.x = (eagle.x +1)%canvas.width;
            ramkaStart = (ramkaStart+200)%800
        }, 50
    );
}
function stopAnimation(){
    window.clearInterval(interval);
    window.clearInterval(interval2);
}
function moveUp(){
    console.log('move up');
    eagle.y+=10;
    drawScene();
}
function moveDown(){
    console.log('move down');
    eagle.y-=10;
    drawScene();
}
window.onload = function(){
    this.drawScene();
    console.log("Scene drawn");
    console.log(img);
};