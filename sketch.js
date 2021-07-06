const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world,captain;
var cap;
//var villian1
var villy_img;
var edges;
var villian;
var villygrp;
var bullet;
function preload(){
villy_img=loadImage("pics/chit.png");
captain=loadImage("pics/cap.png");
}
function setup() {
 var canvas= createCanvas(displayWidth,displayHeight-200);
 engine=Engine.create();
 world=engine.world;

cap=createSprite(displayWidth/2+500,displayHeight/2-50,150,250);
cap.addImage(captain);
cap.scale=0.5;
 //hero1=new hero(displayWidth/2+500,displayHeight/2-50,150,250);
 //villian1=new villian(displayWidth/2-650,displayHeight/2-50,150,250);
//villian1=createSprite(displayWidth/2-650,displayHeight/2-50,150,250);
//villian1.addImage(villy_img);
//villian1.scale=0.5;
villygrp=new Group();
}

function draw() {
background(255);  

//villian1.velocityX=1.5;

if(keyIsDown(DOWN_ARROW)){
cap.y=cap.y+10;
}

if(keyIsDown(UP_ARROW)){
  cap.y=cap.y-10;
  }

//if(keyDown leftArrow)
//{hero.pos=hero.pos+10}


//Engine.update(engine);
//hero1.display();
//villian1.display();

edges=createEdgeSprites();

if(villygrp.x>displayWidth){
  villygrp.destroy;
}


villy();
if(keyDown("space")){
  createBullet();
}

if(bullet.isTouching(villygrp)){
  vil.destroy
}
  drawSprites();
}

function villy(){
if(frameCount%180===0){

  villian=createSprite(50,200,200,100);
  villian.y=Math.round(random(300,600));
  villian.velocityX=3;  
  villian.addImage(villy_img);
  villian.scale=0.45;
  villian.lifetime=displayWidth+50/3
  villygrp.add(villian);


}
}

function createBullet(){

  bullet=createSprite(displayWidth/2+500,cap.y,40,40);
bullet.shapeColor="lightBlue";
//bullet.x=villian.x;
//bullet.y=villian.y;
bullet.velocityX=-3.5;

}




