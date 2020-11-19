

function preload(){
    thunder1=loadAnimation("proc41images/images/thunderbolt/1.png",
    "proc41images/images/thunderbolt/2.png",
    "proc41images/images/thunderbolt/3.png",
    "proc41images/images/thunderbolt/4.png");

    batMan=loadAnimation("proc41images/images/WalkingFrame/walking_1.png",
    "proc41images/images/WalkingFrame/walking_2.png",
    "proc41images/images/WalkingFrame/walking_3.png",
    "proc41images/images/WalkingFrame/walking_4.png",
    "proc41images/images/WalkingFrame/walking_5.png",
    "proc41images/images/WalkingFrame/walking_6.png",
    "proc41images/images/WalkingFrame/walking_7.png",
    "proc41images/images/WalkingFrame/walking_8.png")
}
var maxDrops=100;
function setup(){
   createCanvas(500,500)
    batman=createSprite(300,400);
    batman.addAnimation("walking",batMan);
    thunder=createSprite(300,100);
    thunder.addAnimation("light",thunder1);
}

function draw(){
    background("grey");


for(var i=0; i<maxDrops;  i++){
drops.push(new display(random(0,400),random(0,400)))
}

drawSprites();
}   

