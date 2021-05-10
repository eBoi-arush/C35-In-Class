var ball;
var position;

var database;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    database = firebase.database();

    database.ref("ball/position").on("value",function(data){
       console.log(data.val());
       position = data.val();

       ball.x = position.x;
       ball.y = position.y;
    })
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    // ball.x = ball.x + x;
    // ball.y = ball.y + y;

    database.ref("ball/position").update({
        x: position.x + x,
        y: position.y + y
    })
}