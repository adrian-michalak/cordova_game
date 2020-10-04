var canvas = document.getElementById("myCanvas");
var score = document.getElementById("score");
var ctx = canvas.getContext("2d");

moveUpButton = document.getElementById("rightButton");
moveUpButton.addEventListener('click',moveUp);

moveDownButton = document.getElementById("leftButton");
moveDownButton.addEventListener('click',moveDown);


var bg1 = new BackgroundObject(
    "../img/scrolling_background_sky.png",
    0,0, 40,
    canvas.width, canvas.height);

var bg2 = new BackgroundObject(
        "../img/scrolling_background_middle.png",
        0,0, 60,
        canvas.width, canvas.height);   

var bg3 = new BackgroundObject(
        "../img/scrolling_background_foreground.png",
        0,0, 20,
        canvas.width, canvas.height);

var eagle = new SpriteObject( "../img/eagle.png",
            100,0,4,55,80,80);
var eagle_1 = new SpriteObjectObstacle( "../img/eagle.png",
            550,210,4,45,60,60);
var eagle_2 = new SpriteObjectObstacle( "../img/eagle.png",
            750,20,4,45,60,60);
var eagle_3 = new SpriteObjectObstacle( "../img/eagle.png",
            1260,90,4,45,60,60);
var eagle_4 = new SpriteObjectObstacle( "../img/eagle.png",
            500,10,4,45,60,60);
var eagle_5 = new SpriteObjectObstacle( "../img/eagle.png",
            1260,20,4,45,60,60);
var eagle_6 = new SpriteObjectObstacle( "../img/eagle.png",
            1660,190,4,45,60,60);
var eagle_7 = new SpriteObjectObstacle( "../img/eagle.png",
            1460,250,4,45,60,60);
var pear = new SpriteObjectObstacle( "../img/eagle.png",
            800,170,4,50,60,60);
var tree = new SpriteObjectObstacle( "../img/clipart-tree.png",
            600,150,1,40,100,200);
var tree_3 = new SpriteObjectObstacle( "../img/clipart-tree.png",
            1400,150,1,40,100,200);          
var tree_1 = new SpriteObjectObstacle( "../img/clipart-tree.png",
            1000,150,1,40,100,200);
var tree_2 = new SpriteObjectObstacle("../img/transparent-nopales-clipart.png", 
            1200,150,1,40,100,200);            

var game_background = [bg1,bg2,tree, tree_1,tree_2,tree_3, bg3,eagle];

var game_objects = [ eagle_1,eagle_2,eagle_3,eagle_4,eagle_6,eagle_7,pear,eagle_5];

var isCollision = false;

score = 0;
total_score = 0

function animation(){

    offscreen = document.createElement("canvas");
    offscreen.width = canvas.width;
    offscreen.height = canvas.height;
    offctx = offscreen.getContext("2d");
   
        for (i=0; i< game_background.length; i++){
            game_background[i].draw(offctx);
        }
        for (j=0; j< game_objects.length; j++){
            game_objects[j].draw(offctx);
           
           if ( eagle.x < game_objects[j].x + game_objects[j].w  &&
               (eagle.x +eagle.w )> game_objects[j].x && 
                eagle.y < game_objects[j].y + game_objects[j].h  && 
                eagle.y+eagle.h > game_objects[j].y){
                console.log("col");
                isCollision = true;
            }
            
            }
       
    let imData = offctx.getImageData(0,0,canvas.width,canvas.height);
    ctx.fillText(score, 10, 50);
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.putImageData(imData,0,0);
    requestAnimationFrame(animation);
 
    score+=1;

    ctx.fillStyle = "red";
    ctx.font = "bold 20px Georgia";
    ctx.fillText("SCORE: " + score, 10 ,canvas.height-20) ;
    /*if (score == 2500){
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, 600, 600);
        ctx.fillStyle = "white";
        ctx.font = "bold 40px Arial";
        ctx.fillText("You win", 150, 150)
    }*/
    if (isCollision){
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, 600, 600);
        ctx.fillStyle = "white";
        //ctx.fillText("Score: "+ total_score, 180, 250);
        ctx.font = "bold 40px Arial";
        ctx.fillText("Game Over", 150, 150)
    }
   
}

function moveUp(){
    console.log('move up');
    eagle.y+=5;
}
function moveDown(){
    console.log('move down');
    eagle.y-=5;
}

window.onload = function(){
    animation();
    for (i=0; i< this.game_background.length; i++){
        game_background[i].update(); 
    }
    for (i=0; i< game_objects.length; i++){
            game_objects[i].update(); 
              
    }
}



//==========================================================================================
/*function rectIntersect(x1, y1, w1, h1, x2, y2, w2, h2) {
    // Check x and y for overlap
    if (x2 > w1 + x1 || x1 > w2 + x2 || y2 > h1 + y1 || y1 > h2 + y2){
        return false;
    }
    return true;
}*/
/*
function crash (){
    for (i=0 ; i<game_objects.length; i++){
        if ( 
             ((eagle.y + eagle.h) < game_objects[i].y)  ||
              (eagle.y > (game_objects[i].y + game_objects[i].h)) || 
             ((eagle.x + eagle.w) < game_objects[i].x)  || 
              (eagle.x > (game_objects[i].x + game_objects[i].w)) ){             
                    isCollision = false;
              }
    } return isCollision;
}
function detectCollisions(){
    let obj1;
    let obj2;

    // Reset collision state of all objects
    for (var i = 0; i < this.game_objects.length; i++) {
        this.game_objects[i].isColliding = false;
    }

    // Start checking for collisions
  
        obj1 = eagle;
       // console.log("eg; "+obj1.x + " "+obj1.y);
        for (var j=0 ; j < game_objects.length; j++)
        {
            obj2 = game_objects[j];
            //console.log("o: "+game_objects[j]);
            // Compare object1 with object2
            if (rectIntersect(obj1.x, obj1.y, obj1.width, obj1.height, obj2.x, obj2.y, obj2.width, obj2.height)){
                obj1.isColliding = true;
                obj2.isColliding = true;
            }
        }
       

    
}

*/