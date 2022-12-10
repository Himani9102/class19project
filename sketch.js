var towerImg, tower;
var gateImg, gate, gatesGroup;
var flowersImg, flowers, flowersGroup;
var fairy, fairyImg;
var invisibleRockGroup, invisibleRock;
var gameState= "play"
function preload(){
    towerImg= loadImage("tower.png");
    gatesImg=loadImage("gate.png");
    flowersImg=loadImage("flowers.png");
    fairyImg=loadImage("fairy.png");
}

function setup() {
 createCanvas(windowWidth, windowHeight);
 tower=createSprite(300,300);
 tower.addImage("tower",towerImg);
 tower.velocity=1;
 gatesGroup=new Group ();
 flowersGroup=new Group ();
 invisibleRockGroup=new Group ();
 fairy=createSprite(150,150,50,50);
 fairy.addImage("fairy",fairyImg);
 fairy.scale=0.2;
}

function draw() {
    background("tower.png");
    if(gameState="play") {
        if(tower.y>500){
            tower.y = 300
        }
    if(keyDown("left_arrow")){
        fairy.x=fairy.x-2.6
    }
    if(keyDown("right_arrow")){
        fairy.x=fairy.x+2.6
    }
    if(keyDown("1")){
        fairy.velocityY=-2.5
    }
    fairy.velocityY=fairy.velocityY+0.4
    if(invisibleRockGroup.isTouching(fairy)){
        fairy.destroy();
        gameState="end"
    }
    if(gameState==="end") {
        text("Bye Fairy",100,50);
    }
    spawngates();
    drawSprites();
    }
     if(flowersGroup.isTouching(fairy)){
        fairy.velocityY=0;
    }
    invisibleRockGroup.collide(fairy);
}
function spawngates(){
    if(frameCount%280===0){
        var gate=createSprite(200,-50);
        gate.addImage("gates",gatesImg);
        gate.x=Math.round(random(50,580));
        gate.velocityY=1
        gate.lifetime=763
        gatesGroup.add(gate);
        gate.scale=0.25
        var flowers=createSprite(200,10);
        flowers.addImage("flowers",flowersImg);
        flowers.x=gate.x;
        flowers.velocityY=1;
        flowers.lifetime=763;
        flowersGroup.add(flowers);
        flowers.scale=0.25
        fairy.depth=gate.depth;
        fairy.depth+=1.7
        invisibleRock=createSprite(200,10);
        invisibleRock.x=gate.x;
        invisibleRock.velocityY=1
        invisibleRockGroup.add(invisibleRock);
        invisibleRock.visible=false;
        invisibleRock.lifetime=763;
    }
}